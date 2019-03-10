define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "./MiniRogue-Engine", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("MiniRogue");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["./MiniRogue-Engine", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$pkg.transport = {"type":"amd","amdNamespace":"amber-minirogue"};

$core.addClass("MiniRogue", $globals.Object, [], "MiniRogue");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MiniRogue.comment="I am the Amber application.\x0a\x0aI also happen to subclass Game.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
fn: function (){
var self=this,$self=this;
var map;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$4,$6,$9,$8,$7,$12,$11,$10,$15,$14,$13,$18,$17,$16;
$1="#generateBtn"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
var w,h;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3="#width"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["val"]=1;
//>>excludeEnd("ctx");
w=$recv($2)._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asNumber"]=1;
//>>excludeEnd("ctx");
$5="#height"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$4=$recv($5)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["val"]=2;
//>>excludeEnd("ctx");
h=$recv($4)._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asNumber"]=2;
//>>excludeEnd("ctx");
$6=map;
$recv($6)._board_($recv($globals.Board)._extent_($recv(w).__at(h)));
$9="#attempts"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=4;
//>>excludeEnd("ctx");
$8=$recv($9)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["val"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asNumber"]=3;
//>>excludeEnd("ctx");
$recv($6)._roomAttempts_($7);
$12="#chance"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=5;
//>>excludeEnd("ctx");
$11=$recv($12)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["val"]=4;
//>>excludeEnd("ctx");
$10=$recv($11)._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asNumber"]=4;
//>>excludeEnd("ctx");
$recv($6)._chanceToFill_($10);
$15="#turn"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=6;
//>>excludeEnd("ctx");
$14=$recv($15)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["val"]=5;
//>>excludeEnd("ctx");
$13=$recv($14)._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asNumber"]=5;
//>>excludeEnd("ctx");
$recv($6)._chanceToTurn_($13);
$18="#connections"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=7;
//>>excludeEnd("ctx");
$17=$recv($18)._val();
$16=$recv($17)._asNumber();
$recv($6)._chanceToExtraConnections_($16);
$recv($6)._generate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["generate"]=1;
//>>excludeEnd("ctx");
return $recv($6)._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({w:w,h:h},$ctx1,1)});
//>>excludeEnd("ctx");
}));
map=$recv($recv($recv($globals.MapGenerator)._new())._generate())._appendToJQuery_("#dungeon"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{map:map},$globals.MiniRogue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09| map |\x0a\x09\x0a\x09'#generateBtn' asJQuery\x0a\x09\x09click: [\x0a\x09\x09\x09| w h |\x0a\x09\x09\x09\x0a\x09\x09\x09w := '#width' asJQuery val asNumber.\x0a\x09\x09\x09h := '#height' asJQuery val asNumber.\x0a\x09\x09\x09map\x0a\x09\x09\x09\x09board: (Board extent: w@h);\x0a\x09\x09\x09\x09roomAttempts: '#attempts' asJQuery val asNumber;\x0a\x09\x09\x09\x09chanceToFill: '#chance' asJQuery val asNumber;\x0a\x09\x09\x09\x09chanceToTurn: '#turn' asJQuery val asNumber;\x0a\x09\x09\x09\x09chanceToExtraConnections: '#connections' asJQuery val asNumber;\x0a\x09\x09\x09\x09generate;\x0a\x09\x09\x09\x09update ].\x0a\x09map := MapGenerator new generate appendToJQuery: '#dungeon' asJQuery",
referencedClasses: ["Board", "MapGenerator"],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "asNumber", "val", "board:", "extent:", "@", "roomAttempts:", "chanceToFill:", "chanceToTurn:", "chanceToExtraConnections:", "generate", "update", "appendToJQuery:", "new"]
}),
$globals.MiniRogue);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.MiniRogue.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($self._class())._instance_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MiniRogue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self class instance: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "instance:", "class"]
}),
$globals.MiniRogue);


$globals.MiniRogue.a$cls.iVarNames = ["instance2", "instance"];
$core.addMethod(
$core.method({
selector: "instance",
protocol: "starting",
fn: function (){
var self=this,$self=this;
return $self["@instance"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MiniRogue.a$cls);

$core.addMethod(
$core.method({
selector: "instance:",
protocol: "starting",
fn: function (anInstance){
var self=this,$self=this;
var $1;
$self["@instance"]=anInstance;
$1=$self["@instance"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInstance"],
source: "instance: anInstance\x0a\x09^ instance := anInstance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MiniRogue.a$cls);

$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.MiniRogue.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.MiniRogue.a$cls);

$core.addMethod(
$core.method({
selector: "contain:",
protocol: "*MiniRogue",
fn: function (aSprite){
var self=this,$self=this;
var collision;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$6,$5,$8,$10,$9,$7,$11,$14,$15,$13,$17,$16,$12,$20,$19,$18,$23,$24,$22,$26,$25,$21;
$2=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$6=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$recv(aSprite)._x_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:"]=1;
//>>excludeEnd("ctx");
collision="left";
collision;
}
$8=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$10=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__lt($9);
if($core.assert($7)){
$11=$recv($self._origin())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$recv(aSprite)._y_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y:"]=1;
//>>excludeEnd("ctx");
collision="top";
collision;
}
$14=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=4;
//>>excludeEnd("ctx");
$15=$recv(aSprite)._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$13=$recv($14).__plus($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$17=$self._extent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["extent"]=1;
//>>excludeEnd("ctx");
$16=$recv($17)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=5;
//>>excludeEnd("ctx");
$12=$recv($13).__gt($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($12)){
$20=$self._extent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["extent"]=2;
//>>excludeEnd("ctx");
$19=$recv($20)._x();
$18=$recv($19).__minus($recv(aSprite)._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv(aSprite)._x_($18);
collision="right";
collision;
}
$23=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=4;
//>>excludeEnd("ctx");
$24=$recv(aSprite)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$22=$recv($23).__plus($24);
$26=$self._extent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["extent"]=3;
//>>excludeEnd("ctx");
$25=$recv($26)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=5;
//>>excludeEnd("ctx");
$21=$recv($22).__gt($25);
if($core.assert($21)){
$recv(aSprite)._y_($recv($recv($self._extent())._y()).__minus($recv(aSprite)._height()));
collision="bottom";
collision;
}
return collision;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contain:",{aSprite:aSprite,collision:collision},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "contain: aSprite\x0a\x09| collision |\x0a\x09\x0a\x09aSprite x < self origin x ifTrue: [ aSprite x: self origin x. collision := #left ].\x0a\x09aSprite y < self origin y ifTrue: [ aSprite y: self origin y. collision := #top ].\x0a\x09aSprite x + aSprite width > self extent x\x0a\x09\x09ifTrue: [ aSprite x: self extent x - aSprite width. collision := #right ].\x0a\x09aSprite y + aSprite height > self extent y\x0a\x09\x09ifTrue: [ aSprite y: self extent y - aSprite height. collision := #bottom ].\x0a\x09^ collision",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "x", "origin", "x:", "y", "y:", ">", "+", "width", "extent", "-", "height"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "doesntOverlap:",
protocol: "*MiniRogue",
fn: function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$6,$5,$2,$9,$8,$11,$10,$7,$14,$13,$16,$15,$12,$17,$1;
$4=$recv(aRectangle)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$6=$self._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["corner"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__gt($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv(aRectangle)._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["corner"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$11=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["origin"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._x();
$7=$recv($8).__lt($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=1;
//>>excludeEnd("ctx");
return $recv($7)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$14=$recv(aRectangle)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["origin"]=3;
//>>excludeEnd("ctx");
$13=$recv($14)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$16=$self._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["corner"]=3;
//>>excludeEnd("ctx");
$15=$recv($16)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$12=$recv($13).__gt($15);
return $recv($12)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$17=$recv($recv(aRectangle)._corner())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["y"]=3;
//>>excludeEnd("ctx");
return $recv($17).__lt($recv($self._origin())._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["or:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesntOverlap:",{aRectangle:aRectangle},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "doesntOverlap: aRectangle\x0a\x09^ aRectangle origin x > self corner x or: [\x0a\x09\x09aRectangle corner x < self origin x or: [\x0a\x09\x09\x09aRectangle origin y > self corner y or: [\x0a\x09\x09\x09\x09aRectangle corner y < self origin y ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", ">", "x", "origin", "corner", "<", "y"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "doesntOverlapBorders:",
protocol: "*MiniRogue",
fn: function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$7,$6,$2,$11,$10,$9,$13,$12,$8,$17,$16,$15,$19,$18,$14,$21,$20,$1;
$5=$recv(aRectangle)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$7=$self._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["corner"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__gt($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$11=$recv(aRectangle)._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["corner"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$13=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["origin"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._x();
$8=$recv($9).__lt($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=1;
//>>excludeEnd("ctx");
return $recv($8)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$17=$recv(aRectangle)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["origin"]=3;
//>>excludeEnd("ctx");
$16=$recv($17)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$15=$recv($16).__minus((1));
$19=$self._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["corner"]=3;
//>>excludeEnd("ctx");
$18=$recv($19)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__gt($18);
return $recv($14)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$21=$recv($recv(aRectangle)._corner())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$20=$recv($21).__plus((1));
return $recv($20).__lt($recv($self._origin())._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["or:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesntOverlapBorders:",{aRectangle:aRectangle},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "doesntOverlapBorders: aRectangle\x0a\x09^ (aRectangle origin x - 1) > self corner x or: [\x0a\x09\x09(aRectangle corner x + 1) < self origin x or: [\x0a\x09\x09\x09(aRectangle origin y - 1) > self corner y or: [\x0a\x09\x09\x09\x09(aRectangle corner y + 1 ) < self origin y ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", ">", "-", "x", "origin", "corner", "<", "+", "y"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "overlaps:",
protocol: "*MiniRogue",
fn: function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._doesntOverlap_(aRectangle))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overlaps:",{aRectangle:aRectangle},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "overlaps: aRectangle\x0a\x09^ (self doesntOverlap: aRectangle) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "doesntOverlap:"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "overlapsBorders:",
protocol: "*MiniRogue",
fn: function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._doesntOverlapBorders_(aRectangle))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overlapsBorders:",{aRectangle:aRectangle},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "overlapsBorders: aRectangle\x0a\x09^ (self doesntOverlapBorders: aRectangle) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "doesntOverlapBorders:"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "pointsDo:",
protocol: "*MiniRogue",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv($self["@origin"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._to_($recv($self["@corner"])._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($self["@origin"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._to_($recv($self["@corner"])._y());
return $recv($3)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_($recv(x).__at(y));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({y:y},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pointsDo:",{aBlock:aBlock},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "pointsDo: aBlock\x0a\x09(origin x to: corner x)\x0a\x09\x09do: [ :x | (origin y to: corner y)\x0a\x09\x09\x09\x09do: [ :y | aBlock value: x@y ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:", "x", "y", "value:", "@"]
}),
$globals.Rectangle);

});
