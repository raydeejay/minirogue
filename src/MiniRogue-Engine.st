Smalltalk createPackage: 'MiniRogue-Engine'!
Object subclass: #Board
	instanceVariableNames: 'width height data player'
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

player
	^ player ifNil:[ player := 2@2 ]
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
	data := Array new.
	player := 2@2
! !

!Board methodsFor: 'operating'!

movePlayer
	| oldP oldId p id |
	
	oldP := player.
	oldId := '#cell-', player x, '-', player y.
	player := ((width - 2) atRandom + 1) @ ((height - 2) atRandom + 1).
	id := '#cell-', player x, '-', player y.
	
	oldId asSilk resetContents SPAN: ((self at: oldP) = #wall ifTrue: [ '█' ] ifFalse: [ '░' ]).
	id asSilk resetContents SPAN: '@'
!

movePlayer: aPoint
	| oldP oldId p id |
	
	oldP := player.
	oldId := '#cell-', player x, '-', player y.
	player := player + aPoint.
	id := '#cell-', player x, '-', player y.
	
	oldId asSilk resetContents SPAN: ((self at: oldP) = #wall ifTrue: [ '█' ] ifFalse: [ '░' ]).
	id asSilk resetContents SPAN: '@'
!

update
	"stub"
	self movePlayer
! !

!Board methodsFor: 'printing'!

print
	| stream |
	
	stream := StringStream on: ''.
	
	(1 to: self height) do: [ :y |
		(1 to: self width) do: [ :x |
			stream
				nextPut: (((self at: x@y) = #wall)
					ifTrue: [ '█' ]
					ifFalse: [ ' ' ]) ].
		stream crlf ].
	console
		"clear;"
		log: stream contents
!

printDebug
	| stream |
	
	stream := StringStream on: ''.
	
	(1 to: self height) do: [ :y |
		(1 to: self width) do: [ :x |
			stream
				nextPut: (((self at: x@y) = #wall)
					ifTrue: [ '█']
					ifFalse: [ String fromCharCode: ('0' charCodeAt: 1) + (self at: x@y) "' '" ]) ].
		stream crlf ].
	console
		"clear;"
		log: stream contents
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

Widget subclass: #BoardWidget
	instanceVariableNames: 'board output'
	package: 'MiniRogue-Engine'!

!BoardWidget methodsFor: 'accessing'!

board: aBoard
	board := aBoard
! !

!BoardWidget methodsFor: 'initialization'!

initialize
	super initialize.
	board ifNil: [ self error: 'Create instances of ', self class name, ' with #on:' ].
	output := '#dungeon' asJQuery.
	self setupKeys
!

setupKeys
	Key code: 37 onPress: [ board movePlayer: Directions left ] onRelease: [ ].
	Key code: 38 onPress: [ board movePlayer: Directions up ] onRelease: [ ].
	Key code: 39 onPress: [ board movePlayer: Directions right ] onRelease: [ ].
	Key code: 40 onPress: [ board movePlayer: Directions down ] onRelease: [ ]
! !

!BoardWidget methodsFor: 'rendering'!

palette
	^ { '#442434'.
		'#30346d'.
		'#4e4a4e'.
		'#854c30'.
		'#346524'.
		'#d04648'.
		'#757161'.
		'#597dce'.
		'#d27d2c'.
		'#8595a1'.
		'#6daa2c'.
		'#d2aa99'.
		'#6dc2ca'.
		'#dad45e' }
!

redraw
	output contents: [ :h | h with: (self renderUsing: h) ]
!

renderOn: html
	output := html pre
		with: (self renderUsing: html);
		class: 'map';
		yourself
!

renderUsing: html
	^ (1 to: board height)
		collect: [ :y |
 			((1 to: board width) collect: [ :x | self renderX: x Y: y using: html ])
				add: String crlf;
				yourself ]
!

renderX: x Y: y using: html
	| p cell region |
	
	p := x@y.
	region := board at: p.
	cell := html
		span: (board player = p
			ifTrue: [ '@' ]
			ifFalse: [ (region = #wall
				ifTrue: [ '█' ]
				ifFalse: [ '░' ]) ] ).
	region ~= #wall
		ifTrue: [ cell style: 'color: ', (self palette at: region \\ self palette size + 1) ]
		ifFalse: [ cell class: 'wall' ].
	cell id: 'cell-', x, '-', y.
	^ cell
! !

!BoardWidget class methodsFor: 'instance creation'!

on: aBoard
	^ self basicNew
		board: aBoard;
		initialize;
		yourself
! !

Object subclass: #Directions
	instanceVariableNames: ''
	package: 'MiniRogue-Engine'!

!Directions class methodsFor: 'as yet unclassified'!

down
	^ 0@1
!

left
	^ -1@0
!

right
	^ 1@0
!

up
	^ 0 @ -1
! !

Object subclass: #Key
	instanceVariableNames: 'code'
	package: 'MiniRogue-Engine'!

!Key methodsFor: 'accessing'!

code
	^ code
!

code: anObject
	code := anObject
! !

!Key methodsFor: 'binding'!

onPress: aBlock
	Keyboard bind: self code to: aBlock
!

onRelease: aBlock
	Keyboard bindRelease: self code to: aBlock
! !

!Key methodsFor: 'testing'!

isDown
	^ Keyboard pressed: self code
!

isUp
	^ Keyboard notPressed: self code
! !

!Key class methodsFor: 'instance creation'!

code: aNumber onPress: aBlock onRelease: anotherBlock
	"Returns a fully configured Key instance"
	
	^ Keyboard code: aNumber onPress: aBlock onRelease: anotherBlock
! !

Object subclass: #Keyboard
	instanceVariableNames: 'keys blocks releaseBlocks'
	package: 'MiniRogue-Engine'!

!Keyboard methodsFor: 'accessing'!

blocks
	^ blocks
!

blocks: anObject
	blocks := anObject
!

keys
	^ keys
!

keys: anObject
	keys := anObject
!

releaseBlocks
	^ releaseBlocks
!

releaseBlocks: anObject
	releaseBlocks := anObject
! !

!Keyboard methodsFor: 'binding'!

bind: aKey to: aBlock
	blocks at: aKey put: aBlock
!

bindRelease: aKey to: aBlock
	releaseBlocks at: aKey put: aBlock
!

unbind: aKey
	blocks removeKey: aKey ifAbsent: []
! !

!Keyboard methodsFor: 'event handling'!

onPress: anEvent
	| code |
	
	code := anEvent keyCode.
	self press: code.
	blocks at: code ifPresent: [ :block | block value: anEvent. anEvent preventDefault ] ifAbsent: []
!

onRelease: anEvent
	| code |
	
	code := anEvent keyCode.
	self release: code.
	releaseBlocks at: code ifPresent: [ :block | block value: anEvent ] ifAbsent: [].
	anEvent preventDefault
! !

!Keyboard methodsFor: 'initialization'!

initialize
	super initialize.
	keys := #{}.
	blocks := #{}.
	releaseBlocks := #{}.
	window addEventListener: 'keydown' func: [ :event | self onPress: event ] capture: false.
	window addEventListener: 'keyup' func: [ :event | self onRelease: event ] capture: false
! !

!Keyboard methodsFor: 'testing'!

notPressed: aKeyCode
	^ (self pressed: aKeyCode) not
!

press: aKeyCode
	keys at: aKeyCode put: true
!

pressed: aKeyCode
	^ keys at: aKeyCode ifAbsent: [ keys at: aKeyCode put: false ]
!

release: aKeyCode
	keys at: aKeyCode put: false
! !

Keyboard class instanceVariableNames: 'instance'!

!Keyboard class methodsFor: 'accessing'!

instance
	^ instance ifNil: [ instance := self new ]
! !

!Keyboard class methodsFor: 'binding'!

bind: aKey to: aBlock
	self instance blocks at: aKey put: aBlock
!

bindRelease: aKey to: aBlock
	self instance releaseBlocks at: aKey put: aBlock
!

unbind: aKey
	self instance blocks removeKey: aKey ifAbsent: []
! !

!Keyboard class methodsFor: 'instance creation'!

code: aNumber onPress: aBlock onRelease: anotherBlock
	"Returns a fully configured Key instance"
	
	^ Key new
		code: aNumber;
		onPress: aBlock;
		onRelease: anotherBlock;
		yourself
! !

Object subclass: #MapCarver
	instanceVariableNames: 'board region lastDirection chanceToTurn'
	package: 'MiniRogue-Engine'!

!MapCarver methodsFor: 'accessing'!

board: anObject
	board := anObject
!

chanceToTurn: aNumber
	chanceToTurn := aNumber
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
	| top position candidate dir |
			
	top := aStack last.
	position := top key.

	candidate := (100 atRandom <= chanceToTurn)
		ifTrue: [ top value atRandom ]
		ifFalse: [ top value
			detect: [ :each | each = lastDirection ]
			ifNone: [ top value atRandom ] ].
	dir := top value remove: candidate.
	lastDirection := dir.

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
	lastDirection := nil.
	chanceToTurn := 0.
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

Object subclass: #MapGenerator
	instanceVariableNames: 'board'
	package: 'MiniRogue-Engine'!

!MapGenerator methodsFor: 'accessing'!

board: anObject
	board := anObject
!

directions
	^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}
! !

!MapGenerator methodsFor: 'generating'!

generate
	self shouldBeImplemented
! !

MapGenerator subclass: #DungeonGenerator
	instanceVariableNames: 'carver regions connectors output roomAttempts chanceToFill chanceToTurn chanceToExtraConnections'
	package: 'MiniRogue-Engine'!

!DungeonGenerator methodsFor: 'accessing'!

chanceToExtraConnections: aNumber
	chanceToExtraConnections := aNumber
!

chanceToFill: aNumber
	chanceToFill := aNumber
!

chanceToTurn: aNumber
	chanceToTurn := aNumber
!

palette
	^ { '#442434'.
		'#30346d'.
		'#4e4a4e'.
		'#854c30'.
		'#346524'.
		'#d04648'.
		'#757161'.
		'#597dce'.
		'#d27d2c'.
		'#8595a1'.
		'#6daa2c'.
		'#d2aa99'.
		'#6dc2ca'.
		'#dad45e' }
!

roomAttempts: aNumber
	roomAttempts := aNumber
! !

!DungeonGenerator methodsFor: 'caching'!

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

!DungeonGenerator methodsFor: 'filling'!

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

!DungeonGenerator methodsFor: 'generating'!

generate
	board fillWith: #wall.
	carver := (MapCarver on: board)
		chanceToTurn: chanceToTurn;
		yourself.
	self generateRooms generatePassages cacheRegions cacheConnectors mergeRegions fillDeadEnds.
	^ board
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
!

generateStraightPassages
	"pick a few pairs of regions at random, and attempt
	to make a direct route between them.
	choose a direction that brings us closer to the target, then carve in that direction.
	every step checks if it's level, with a chance of continuing forward even if it is, as long as it's not overshooting.
	if it's level, turn.
	
	alternative algo:
	
	select two connectors
	figure out a 
	" 
	| a b |
	
	a := connectors atRandom.
	b := connectors atRandom.
	a ~= b
		ifTrue: [
			connectors
				valuesDo: [ :points |
					carver carveAt: points atRandom.
					[ 100 atRandom < chanceToExtraConnections ]
						whileTrue: [ carver carveAt: points atRandom ] ] ]
! !

!DungeonGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	board ifNil: [ board := (Board width: 45 height: 45)].
	roomAttempts := 30.
	chanceToTurn := 10
! !

!DungeonGenerator methodsFor: 'merging'!

mergeRegions
	connectors
		valuesDo: [ :points |
			carver carveAt: points atRandom.
			[ 100 atRandom < chanceToExtraConnections ]
				whileTrue: [
					"note that this may very well merge at the same point again"
					carver carveAt: points atRandom ] ]
! !

!DungeonGenerator class methodsFor: 'instance creation'!

board: anObject
	board := anObject
! !

Widget subclass: #MapGeneratorWidget
	instanceVariableNames: 'output'
	package: 'MiniRogue-Engine'!

!MapGeneratorWidget methodsFor: 'rendering'!

renderOn: html
	output := html pre
		with: (self renderUsing: html);
		class: 'map';
		yourself
!

renderX: x Y: y using: html
	| cell |
	
	cell := html span: 3
	cell style: 'color: ', 1000000.
	cell id: 'cell-', x, '-', y.
	^ cell
! !

