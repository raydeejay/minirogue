Smalltalk createPackage: 'MiniRogue'!
(Smalltalk packageAt: 'MiniRogue' ifAbsent: [ self error: 'Package not created: MiniRogue' ]) imports: {'./MiniRogue-Engine'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #MiniRogue
	instanceVariableNames: 'mapWidget generator board boardWidget'
	package: 'MiniRogue'!
!MiniRogue commentStamp!
I am the Amber application.

I also happen to subclass Game.!

!MiniRogue methodsFor: 'initialization'!

initialize
	super initialize.
	self class instance: self
! !

!MiniRogue methodsFor: 'starting'!

augmentPage
	'#generateBtn' asJQuery
		click: [
			| w h |
			
			w := '#width' asJQuery val asNumber.
			h := '#height' asJQuery val asNumber.
			board := generator
				board: (Board extent: w@h);
				roomAttempts: '#attempts' asJQuery val asNumber;
				chanceToFill: '#chance' asJQuery val asNumber;
				chanceToTurn: '#turn' asJQuery val asNumber;
				chanceToExtraConnections: '#connections' asJQuery val asNumber;
				generate.
			boardWidget
				board: board;
				redraw ].
	'#updateBtn' asJQuery
		click: [ board update ].
	generator := DungeonGenerator new.
	board := generator generate.
	boardWidget := (BoardWidget on: board)
		appendToJQuery: '#dungeon' asJQuery;
		yourself
! !

MiniRogue class instanceVariableNames: 'instance'!

!MiniRogue class methodsFor: 'starting'!

instance
	^ instance
!

instance: anInstance
	^ instance := anInstance
!

start
	self new augmentPage
! !

!Rectangle methodsFor: '*MiniRogue'!

contain: aSprite
	| collision |
	
	aSprite x < self origin x ifTrue: [ aSprite x: self origin x. collision := #left ].
	aSprite y < self origin y ifTrue: [ aSprite y: self origin y. collision := #top ].
	aSprite x + aSprite width > self extent x
		ifTrue: [ aSprite x: self extent x - aSprite width. collision := #right ].
	aSprite y + aSprite height > self extent y
		ifTrue: [ aSprite y: self extent y - aSprite height. collision := #bottom ].
	^ collision
!

doesntOverlap: aRectangle
	^ aRectangle origin x > self corner x or: [
		aRectangle corner x < self origin x or: [
			aRectangle origin y > self corner y or: [
				aRectangle corner y < self origin y ] ] ]
!

doesntOverlapBorders: aRectangle
	^ (aRectangle origin x - 1) > self corner x or: [
		(aRectangle corner x + 1) < self origin x or: [
			(aRectangle origin y - 1) > self corner y or: [
				(aRectangle corner y + 1 ) < self origin y ] ] ]
!

overlaps: aRectangle
	^ (self doesntOverlap: aRectangle) not
!

overlapsBorders: aRectangle
	^ (self doesntOverlapBorders: aRectangle) not
!

pointsDo: aBlock
	(origin x to: corner x)
		do: [ :x | (origin y to: corner y)
				do: [ :y | aBlock value: x@y ] ]
! !

