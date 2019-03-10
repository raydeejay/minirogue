Smalltalk createPackage: 'MiniRogue-Engine'!
Object subclass: #Board
	instanceVariableNames: 'width height data'
	package: 'MiniRogue-Engine'!

!Board methodsFor: 'accessing'!

adjacentRegionsAt: aPoint
	^ (self directions
		select: [ :each | (self at: aPoint + each) ~= #wall and: [ (self at: aPoint + each) ~= #none ] ]
		thenCollect: [ :each | self at: aPoint + each ])
!

at: aPoint
	^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])
		ifTrue: [ data at: aPoint y * width + aPoint x ]
		ifFalse: [ #none ]
!

at: aPoint ifAbsent: aBlock
	^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])
		ifTrue: [ data at: aPoint y * width + aPoint x ifAbsent: aBlock ]
		ifFalse: [ #none ]
!

at: aPoint put: aValue
	^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])
		ifTrue: [ data at: aPoint y * width + aPoint x put: aValue ]
		ifFalse: [ #none ]
!

atIndex: aNumber
	^ data at: aNumber
!

data: anObject
	data := anObject
!

directions
	^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}
!

height
	^ height
!

height: anObject
	height := anObject
!

inside
	^ (2@2 corner: (width @ height) - (1@1))
!

width
	^ width
!

width: anObject
	width := anObject
! !

!Board methodsFor: 'filling'!

fillPassage: aPoint
	| openings |

	(self isDeadEnd: aPoint) ifTrue: [
		"console log: 'Filling passage at ', aPoint asString."
		self at: aPoint put: #wall.
		openings := self openingsAt: aPoint.
		openings size = 1 ifTrue: [ self fillPassage: aPoint + openings last ] ]
!

fillWith: anObject
	(1 to: height)
		do: [ :y |
			(1 to: width)
				do: [ :x |
					self at: x@y put: anObject ] ]
! !

!Board methodsFor: 'initialization'!

initialize
	super initialize.
	(width isNil or: [ height isNil ]) ifTrue: [ self error: 'Create instances of ', self class name, ' with #width:height: or #extent:' ].
	data := Array new
! !

!Board methodsFor: 'searching'!

openingsAt: aPoint
	^ self directions
		select: [ :each |
			(self at: aPoint + each) ~= #wall
				and: [ (self at: aPoint + each) ~= #none ] ]
! !

!Board methodsFor: 'testing'!

isDeadEnd: aPoint
	^ (self inside containsPoint: aPoint)
		and: [ (self directions	select: [ :each |
			(self at: aPoint + each) = #wall
				or: [ (self at: aPoint + each) = #none ] ]) size = 3 ].
! !

!Board class methodsFor: 'instance creation'!

extent: aPoint
	^ self basicNew
		width: aPoint x;
		height: aPoint y;
		initialize;
		yourself
!

width: aWidth height: aHeight
	^ self basicNew
		width: aWidth;
		height: aHeight;
		initialize;
		yourself
! !

Object subclass: #MapCarver
	instanceVariableNames: 'board region'
	package: 'MiniRogue-Engine'!

!MapCarver methodsFor: 'accessing'!

board: anObject
	board := anObject
!

directions
	"A fresh Array of possible directions"
	
	^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}
!

incrementRegion
	region := region + 1
!

region
	^ region
! !

!MapCarver methodsFor: 'carving'!

carve: aNumber towards: aDirection at: aPoint
	| newPosition |
	
	newPosition := aPoint.
	
	aNumber timesRepeat: [
		newPosition := newPosition + aDirection.
		board at: newPosition put: region "#floor" ].
	
	^ newPosition
!

carveAt: aPoint
	board at: aPoint put: region
!

carveFromStack: aStack
	| top position dir |
			
	top := aStack last.
	position := top key.
	dir := top value remove: top value atRandom.

	top value ifEmpty: [ aStack removeLast ].
	(((board at: position + dir ifAbsent: [ #none ]) = #wall)
		and: [ self canCarveAt: position towards: dir ])
			ifTrue: [
				| newPosition newDirs |
				
				newPosition := self carve: 2 towards: dir at: position.
				newDirs := self directions remove: (dir * -1); yourself.
				aStack add: newPosition -> newDirs ]
!

carveRoom: aRoom
	(aRoom origin y to: aRoom corner y)
		do: [ :y |
			(aRoom origin x to: aRoom corner x)
				do: [ :x |
					board at: x@y put: region "#floor" ] ].
	self incrementRegion
! !

!MapCarver methodsFor: 'initialization'!

initialize
	super initialize.
	board ifNil: [ self error: 'Create instances of ', self class name, ' with #on:' ].
	region := 1.
	board fillWith: #wall
! !

!MapCarver methodsFor: 'testing'!

canCarveAt: aPoint
	^ ((board at: aPoint) = #wall)
		and: [ ((board at: aPoint + (0 @ 1)) = #wall)
			and: [ ((board at: aPoint + (0 @ -1)) = #wall)
				and: [ ((board at: aPoint + (1 @ 0)) = #wall)
					and: [ ((board at: aPoint + (-1 @ 0)) = #wall) ] ] ] ]
!

canCarveAt: aPoint towards: aDirection
	^ ((board at: aPoint + aDirection ifAbsent: [ #none ]) = #wall)
		and: [ (board at: aPoint + (aDirection * 2) ifAbsent: [ #none ]) = #wall ]
! !

!MapCarver class methodsFor: 'instance creation'!

on: aBoard
	^ self basicNew
		board: aBoard;
		initialize;
		yourself
! !

Widget subclass: #MapGenerator
	instanceVariableNames: 'board carver regions connectors output roomAttempts chanceToFill'
	package: 'MiniRogue-Engine'!

!MapGenerator methodsFor: 'accessing'!

board: anObject
	board := anObject
!

chanceToFill: aNumber
	chanceToFill := aNumber
!

directions
	^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}
!

roomAttempts: aNumber
	roomAttempts := aNumber
! !

!MapGenerator methodsFor: 'caching'!

cacheConnectors
	connectors := Dictionary new.

	(1 to: board height) do: [ :y |
		(1 to: board width) do: [ :x |
			| p |
			
			p := x@y.
			(board at: p) = #wall ifTrue: [
				| regs |
				
				regs := board adjacentRegionsAt: p.
				regs asSet size = 2 ifTrue: [
					| rs k |
					
					rs := regs sorted: [ :a :b | a < b ].
					k := (rs at: 1) -> (rs at: 2).
					(connectors at: k ifAbsentPut: [ Array new ])
						add: p ] ] ] ]
!

cacheRegions
	regions := (1 to: carver region - 1) collect: [ Array new ].
	(1 to: board height) do: [ :y |
		(1 to: board width) do: [ :x |
			| p region |
					
			p := x@y.
			region := (board at: p).
			region ~= #wall ifTrue: [ (regions at: region) add: p ] ] ]
! !

!MapGenerator methodsFor: 'filling'!

fillDeadEnds
	| deadEnds p |
	
	deadEnds := Array new.
	
	(2 to: board height - 1 by: 2) do: [ :y |
		(2 to: board width - 1 by: 2) do: [ :x |
			p := x@y.
			((board isDeadEnd: p) and: [100 atRandom <= chanceToFill ]) ifTrue: [ deadEnds add: p ] ] ].
	deadEnds do: [ :each |
		"self print."
		board fillPassage: each ]
! !

!MapGenerator methodsFor: 'generating'!

generate
	board fillWith: #wall.
	carver := MapCarver on: board.
	self generateRooms generatePassages cacheRegions mergeRegions fillDeadEnds
!

generatePassageAt: aPoint
	| stack |
	
	stack := Array with: aPoint -> self directions.
	carver carveAt: aPoint.

	[ stack notEmpty ] whileTrue: [ carver carveFromStack: stack ].
	carver incrementRegion
!

generatePassages
	(2 to: board height by: 2)
		do: [ : y |
			(2 to: board width by: 2)
				do: [ :x |
					| p |
					
					p := x@y.
					(carver canCarveAt: p) ifTrue: [ self generatePassageAt: p ] ] ]
!

generateRoom
	| w h |
	
	w := (board width / 2) floor.
	h := (board height / 2) floor.

	^ (w atRandom * 2) @ (h atRandom * 2)
		extent: (3 atRandom * 2 + 2) @ (3 atRandom * 2 + 2)
!

generateRooms
	| rooms |
	
	rooms := Array new.

	roomAttempts timesRepeat: [
		| room |
		
		room := self generateRoom.
		rooms
			detect: [ :each | each overlapsBorders: room ]
			ifNone: [
				(board inside containsRect: room)
					ifTrue: [
						carver carveRoom: room.
						rooms add: room ] ] ]
! !

!MapGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	board ifNil: [ board := (Board width: 45 height: 45)].
	roomAttempts := 30.
! !

!MapGenerator methodsFor: 'merging'!

mergeRegions
	self cacheConnectors.
	connectors
		valuesDo: [ :points |
			"10% chance to carve another opening?"
			carver carveAt: points atRandom ]
! !

!MapGenerator methodsFor: 'printing'!

print
	| stream |
	
	stream := StringStream on: ''.
	
	(1 to: board height) do: [ :y |
		(1 to: board width) do: [ :x |
			stream
				nextPut: (((board at: x@y) = #wall)
					ifTrue: [ '█']
					ifFalse: [ "String fromCharCode: ('0' charCodeAt: 1) + (board at: x@y)" ' ' ]) ].
		stream crlf ].
	console
		"clear;"
		log: stream contents
!

printDebug
	| stream |
	
	stream := StringStream on: ''.
	
	(1 to: board height) do: [ :y |
		(1 to: board width) do: [ :x |
			stream
				nextPut: (((board at: x@y) = #wall)
					ifTrue: [ '█']
					ifFalse: [ String fromCharCode: ('0' charCodeAt: 1) + (board at: x@y) "' '" ]) ].
		stream crlf ].
	console
		"clear;"
		log: stream contents
! !

!MapGenerator methodsFor: 'rendering'!

renderDebugOn: html
	html pre
		with: ((1 to: board height) collect: [ :y |
 				((1 to: board width) collect: [ :x |
			 		((board at: x@y) = #wall
						ifTrue: [ '█']
						ifFalse: [ String fromCharCode: ('0' charCodeAt: 1) + (board at: x@y) ]) ])
							add: String crlf;
							yourself ] )
!

renderOn: html
	"html button
		with: '++';
		onClick: []."
	output := html pre
		with: ((1 to: board height) collect: [ :y |
 				((1 to: board width) collect: [ :x |
			 		((board at: x@y) = #wall
						ifTrue: [ '█']
						ifFalse: [ '░' ]) ])
							add: String crlf;
							yourself ] );
		class: 'map';
		yourself
!

update
	output contents: [ :h | self renderOn: h ]
! !

!MapGenerator class methodsFor: 'instance creation'!

extent: aPoint
	^ self basicNew
		board: (Board extent: aPoint);
		initialize;
		yourself
! !

