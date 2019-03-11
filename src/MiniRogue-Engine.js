define(["amber/boot", "amber/web/Web", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("MiniRogue-Engine");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-minirogue"};

$core.addClass("Board", $globals.Object, ["width", "height", "data", "player"], "MiniRogue-Engine");
$core.addMethod(
$core.method({
selector: "adjacentRegionsAt:",
protocol: "accessing",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4;
return $recv($self._directions())._select_thenCollect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(aPoint).__plus(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$2=$self._at_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__tild_eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["~="]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(aPoint).__plus(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$4=$self._at_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
return $recv($4).__tild_eq("none");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._at_($recv(aPoint).__plus(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"adjacentRegionsAt:",{aPoint:aPoint},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "adjacentRegionsAt: aPoint\x0a\x09^ (self directions\x0a\x09\x09select: [ :each | (self at: aPoint + each) ~= #wall and: [ (self at: aPoint + each) ~= #none ] ]\x0a\x09\x09thenCollect: [ :each | self at: aPoint + each ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:thenCollect:", "directions", "and:", "~=", "at:", "+"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._between_and_((1),$self["@width"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4)._between_and_((1),$self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv($self["@data"])._at_($recv($recv($recv(aPoint)._y()).__star($self["@width"])).__plus($recv(aPoint)._x()));
} else {
return "none";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aPoint:aPoint},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "at: aPoint\x0a\x09^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])\x0a\x09\x09ifTrue: [ data at: aPoint y * width + aPoint x ]\x0a\x09\x09ifFalse: [ #none ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "between:and:", "x", "y", "at:", "+", "*"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
fn: function (aPoint,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._between_and_((1),$self["@width"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4)._between_and_((1),$self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv($self["@data"])._at_ifAbsent_($recv($recv($recv(aPoint)._y()).__star($self["@width"])).__plus($recv(aPoint)._x()),aBlock);
} else {
return "none";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aPoint:aPoint,aBlock:aBlock},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aBlock"],
source: "at: aPoint ifAbsent: aBlock\x0a\x09^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])\x0a\x09\x09ifTrue: [ data at: aPoint y * width + aPoint x ifAbsent: aBlock ]\x0a\x09\x09ifFalse: [ #none ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "between:and:", "x", "y", "at:ifAbsent:", "+", "*"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
fn: function (aPoint,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._between_and_((1),$self["@width"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4)._between_and_((1),$self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv($self["@data"])._at_put_($recv($recv($recv(aPoint)._y()).__star($self["@width"])).__plus($recv(aPoint)._x()),aValue);
} else {
return "none";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aPoint:aPoint,aValue:aValue},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aValue"],
source: "at: aPoint put: aValue\x0a\x09^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])\x0a\x09\x09ifTrue: [ data at: aPoint y * width + aPoint x put: aValue ]\x0a\x09\x09ifFalse: [ #none ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "between:and:", "x", "y", "at:put:", "+", "*"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "atIndex:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@data"])._at_(aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atIndex:",{aNumber:aNumber},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "atIndex: aNumber\x0a\x09^ data at: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "data:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@data"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "data: anObject\x0a\x09data := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "directions",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=(-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$3=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
return [$1,$2,$3,(0).__at((-1))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directions",{},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "directions\x0a\x09^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "fillPassage:",
protocol: "filling",
fn: function (aPoint){
var self=this,$self=this;
var openings;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self._isDeadEnd_(aPoint);
if($core.assert($1)){
$self._at_put_(aPoint,"wall");
openings=$self._openingsAt_(aPoint);
$2=$recv($recv(openings)._size()).__eq((1));
if($core.assert($2)){
$self._fillPassage_($recv(aPoint).__plus($recv(openings)._last()));
}
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillPassage:",{aPoint:aPoint,openings:openings},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "fillPassage: aPoint\x0a\x09| openings |\x0a\x0a\x09(self isDeadEnd: aPoint) ifTrue: [\x0a\x09\x09\x22console log: 'Filling passage at ', aPoint asString.\x22\x0a\x09\x09self at: aPoint put: #wall.\x0a\x09\x09openings := self openingsAt: aPoint.\x0a\x09\x09openings size = 1 ifTrue: [ self fillPassage: aPoint + openings last ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isDeadEnd:", "at:put:", "openingsAt:", "=", "size", "fillPassage:", "+", "last"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "fillWith:",
protocol: "filling",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(1)._to_($self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((1)._to_($self["@width"]))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._at_put_($recv(x).__at(y),anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillWith:",{anObject:anObject},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "fillWith: anObject\x0a\x09(1 to: height)\x0a\x09\x09do: [ :y |\x0a\x09\x09\x09(1 to: width)\x0a\x09\x09\x09\x09do: [ :x |\x0a\x09\x09\x09\x09\x09self at: x@y put: anObject ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:", "at:put:", "@"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "height",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@height"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "height:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@height"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "height: anObject\x0a\x09height := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Board.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$recv($self["@width"])._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@height"])._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$3=$recv("Create instances of ".__comma($recv($self._class())._name())).__comma(" with #width:height: or #extent:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._error_($3);
}
$self["@data"]=$recv($globals.Array)._new();
$self["@player"]=(2).__at((2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09(width isNil or: [ height isNil ]) ifTrue: [ self error: 'Create instances of ', self class name, ' with #width:height: or #extent:' ].\x0a\x09data := Array new.\x0a\x09player := 2@2",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifTrue:", "or:", "isNil", "error:", ",", "name", "class", "new", "@"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "inside",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=(2).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=$recv($self["@width"]).__at($self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__minus((1).__at((1)));
return $recv($1)._corner_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inside",{},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inside\x0a\x09^ (2@2 corner: (width @ height) - (1@1))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["corner:", "@", "-"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "isDeadEnd:",
protocol: "testing",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
return $recv($recv($self._inside())._containsPoint_(aPoint))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv($self._directions())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(aPoint).__plus(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$2=$self._at_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=2;
//>>excludeEnd("ctx");
return $recv($1)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($self._at_($recv(aPoint).__plus(each))).__eq("none");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
})))._size()).__eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDeadEnd:",{aPoint:aPoint},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "isDeadEnd: aPoint\x0a\x09^ (self inside containsPoint: aPoint)\x0a\x09\x09and: [ (self directions\x09select: [ :each |\x0a\x09\x09\x09(self at: aPoint + each) = #wall\x0a\x09\x09\x09\x09or: [ (self at: aPoint + each) = #none ] ]) size = 3 ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "containsPoint:", "inside", "=", "size", "select:", "directions", "or:", "at:", "+"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "movePlayer",
protocol: "operating",
fn: function (){
var self=this,$self=this;
var oldP,oldId,p,id;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$7,$6,$5,$8,$10,$9,$12,$11;
oldP=$self["@player"];
$3=$recv($self["@player"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2="#cell-".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($self["@player"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
oldId=$recv($1).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$7=$recv($self["@width"]).__minus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$self["@player"]=$recv($5).__at($recv($recv($recv($self["@height"]).__minus((2)))._atRandom()).__plus((1)));
$8=$recv("#cell-".__comma($recv($self["@player"])._x())).__comma("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
id=$recv($8).__comma($recv($self["@player"])._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$10=$recv(oldId)._asSilk();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSilk"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._resetContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resetContents"]=1;
//>>excludeEnd("ctx");
$12=$recv($self._at_(oldP)).__eq("wall");
if($core.assert($12)){
$11="█";
} else {
$11="░";
}
$recv($9)._SPAN_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(id)._asSilk())._resetContents())._SPAN_("@");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"movePlayer",{oldP:oldP,oldId:oldId,p:p,id:id},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "movePlayer\x0a\x09| oldP oldId p id |\x0a\x09\x0a\x09oldP := player.\x0a\x09oldId := '#cell-', player x, '-', player y.\x0a\x09player := ((width - 2) atRandom + 1) @ ((height - 2) atRandom + 1).\x0a\x09id := '#cell-', player x, '-', player y.\x0a\x09\x0a\x09oldId asSilk resetContents SPAN: ((self at: oldP) = #wall ifTrue: [ '█' ] ifFalse: [ '░' ]).\x0a\x09id asSilk resetContents SPAN: '@'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "x", "y", "@", "+", "atRandom", "-", "SPAN:", "resetContents", "asSilk", "ifTrue:ifFalse:", "=", "at:"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "movePlayer:",
protocol: "operating",
fn: function (aPoint){
var self=this,$self=this;
var oldP,oldId,p,id;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5,$7,$6,$9,$8;
oldP=$self["@player"];
$3=$recv($self["@player"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2="#cell-".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($self["@player"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
oldId=$recv($1).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self["@player"]=$recv($self["@player"]).__plus(aPoint);
$5=$recv("#cell-".__comma($recv($self["@player"])._x())).__comma("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
id=$recv($5).__comma($recv($self["@player"])._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$7=$recv(oldId)._asSilk();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSilk"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._resetContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resetContents"]=1;
//>>excludeEnd("ctx");
$9=$recv($self._at_(oldP)).__eq("wall");
if($core.assert($9)){
$8="█";
} else {
$8="░";
}
$recv($6)._SPAN_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["SPAN:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(id)._asSilk())._resetContents())._SPAN_("@");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"movePlayer:",{aPoint:aPoint,oldP:oldP,oldId:oldId,p:p,id:id},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "movePlayer: aPoint\x0a\x09| oldP oldId p id |\x0a\x09\x0a\x09oldP := player.\x0a\x09oldId := '#cell-', player x, '-', player y.\x0a\x09player := player + aPoint.\x0a\x09id := '#cell-', player x, '-', player y.\x0a\x09\x0a\x09oldId asSilk resetContents SPAN: ((self at: oldP) = #wall ifTrue: [ '█' ] ifFalse: [ '░' ]).\x0a\x09id asSilk resetContents SPAN: '@'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "x", "y", "+", "SPAN:", "resetContents", "asSilk", "ifTrue:ifFalse:", "=", "at:"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "openingsAt:",
protocol: "searching",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
return $recv($self._directions())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(aPoint).__plus(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$2=$self._at_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__tild_eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["~="]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self._at_($recv(aPoint).__plus(each))).__tild_eq("none");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openingsAt:",{aPoint:aPoint},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "openingsAt: aPoint\x0a\x09^ self directions\x0a\x09\x09select: [ :each |\x0a\x09\x09\x09(self at: aPoint + each) ~= #wall\x0a\x09\x09\x09\x09and: [ (self at: aPoint + each) ~= #none ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "directions", "and:", "~=", "at:", "+"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "player",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@player"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@player"]=(2).__at((2));
return $self["@player"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"player",{},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "player\x0a\x09^ player ifNil:[ player := 2@2 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "@"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "print",
protocol: "printing",
fn: function (){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
stream=$recv($globals.StringStream)._on_("");
$1=(1)._to_($self._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((1)._to_($self._width()))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=stream;
$4=$recv($self._at_($recv(x).__at(y))).__eq("wall");
if($core.assert($4)){
$3="█";
} else {
$3=" ";
}
return $recv($2)._nextPut_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(console)._log_($recv(stream)._contents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print",{stream:stream},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "print\x0a\x09| stream |\x0a\x09\x0a\x09stream := StringStream on: ''.\x0a\x09\x0a\x09(1 to: self height) do: [ :y |\x0a\x09\x09(1 to: self width) do: [ :x |\x0a\x09\x09\x09stream\x0a\x09\x09\x09\x09nextPut: (((self at: x@y) = #wall)\x0a\x09\x09\x09\x09\x09ifTrue: [ '█' ]\x0a\x09\x09\x09\x09\x09ifFalse: [ ' ' ]) ].\x0a\x09\x09stream crlf ].\x0a\x09console\x0a\x09\x09\x22clear;\x22\x0a\x09\x09log: stream contents",
referencedClasses: ["StringStream"],
//>>excludeEnd("ide");
messageSends: ["on:", "do:", "to:", "height", "width", "nextPut:", "ifTrue:ifFalse:", "=", "at:", "@", "crlf", "log:", "contents"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "printDebug",
protocol: "printing",
fn: function (){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$6,$5,$4,$3;
stream=$recv($globals.StringStream)._on_("");
$1=(1)._to_($self._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((1)._to_($self._width()))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=stream;
$6=$recv(x).__at(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$5=$self._at_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("wall");
if($core.assert($4)){
$3="█";
} else {
$3=$recv($globals.String)._fromCharCode_($recv("0"._charCodeAt_((1))).__plus($self._at_($recv(x).__at(y))));
}
return $recv($2)._nextPut_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(console)._log_($recv(stream)._contents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printDebug",{stream:stream},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printDebug\x0a\x09| stream |\x0a\x09\x0a\x09stream := StringStream on: ''.\x0a\x09\x0a\x09(1 to: self height) do: [ :y |\x0a\x09\x09(1 to: self width) do: [ :x |\x0a\x09\x09\x09stream\x0a\x09\x09\x09\x09nextPut: (((self at: x@y) = #wall)\x0a\x09\x09\x09\x09\x09ifTrue: [ '█']\x0a\x09\x09\x09\x09\x09ifFalse: [ String fromCharCode: ('0' charCodeAt: 1) + (self at: x@y) \x22' '\x22 ]) ].\x0a\x09\x09stream crlf ].\x0a\x09console\x0a\x09\x09\x22clear;\x22\x0a\x09\x09log: stream contents",
referencedClasses: ["StringStream", "String"],
//>>excludeEnd("ide");
messageSends: ["on:", "do:", "to:", "height", "width", "nextPut:", "ifTrue:ifFalse:", "=", "at:", "@", "fromCharCode:", "+", "charCodeAt:", "crlf", "log:", "contents"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "update",
protocol: "operating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._movePlayer();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22stub\x22\x0a\x09self movePlayer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["movePlayer"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "width",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@width"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "width:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@width"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "width: anObject\x0a\x09width := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);


$core.addMethod(
$core.method({
selector: "extent:",
protocol: "instance creation",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._width_($recv(aPoint)._x());
$recv($1)._height_($recv(aPoint)._y());
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},$globals.Board.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^ self basicNew\x0a\x09\x09width: aPoint x;\x0a\x09\x09height: aPoint y;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "basicNew", "x", "height:", "y", "initialize", "yourself"]
}),
$globals.Board.a$cls);

$core.addMethod(
$core.method({
selector: "width:height:",
protocol: "instance creation",
fn: function (aWidth,aHeight){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._width_(aWidth);
$recv($1)._height_(aHeight);
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width:height:",{aWidth:aWidth,aHeight:aHeight},$globals.Board.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight"],
source: "width: aWidth height: aHeight\x0a\x09^ self basicNew\x0a\x09\x09width: aWidth;\x0a\x09\x09height: aHeight;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "basicNew", "height:", "initialize", "yourself"]
}),
$globals.Board.a$cls);


$core.addClass("BoardWidget", $globals.Widget, ["board", "output"], "MiniRogue-Engine");
$core.addMethod(
$core.method({
selector: "board:",
protocol: "accessing",
fn: function (aBoard){
var self=this,$self=this;
$self["@board"]=aBoard;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoard"],
source: "board: aBoard\x0a\x09board := aBoard",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BoardWidget);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.BoardWidget.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$self["@board"];
if(($receiver = $1) == null || $receiver.a$nil){
$2=$recv("Create instances of ".__comma($recv($self._class())._name())).__comma(" with #on:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._error_($2);
} else {
$1;
}
$self["@output"]="#dungeon"._asJQuery();
$self._setupKeys();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BoardWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09board ifNil: [ self error: 'Create instances of ', self class name, ' with #on:' ].\x0a\x09output := '#dungeon' asJQuery.\x0a\x09self setupKeys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifNil:", "error:", ",", "name", "class", "asJQuery", "setupKeys"]
}),
$globals.BoardWidget);

$core.addMethod(
$core.method({
selector: "palette",
protocol: "rendering",
fn: function (){
var self=this,$self=this;
return ["#442434","#30346d","#4e4a4e","#854c30","#346524","#d04648","#757161","#597dce","#d27d2c","#8595a1","#6daa2c","#d2aa99","#6dc2ca","#dad45e"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "palette\x0a\x09^ { '#442434'.\x0a\x09\x09'#30346d'.\x0a\x09\x09'#4e4a4e'.\x0a\x09\x09'#854c30'.\x0a\x09\x09'#346524'.\x0a\x09\x09'#d04648'.\x0a\x09\x09'#757161'.\x0a\x09\x09'#597dce'.\x0a\x09\x09'#d27d2c'.\x0a\x09\x09'#8595a1'.\x0a\x09\x09'#6daa2c'.\x0a\x09\x09'#d2aa99'.\x0a\x09\x09'#6dc2ca'.\x0a\x09\x09'#dad45e' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BoardWidget);

$core.addMethod(
$core.method({
selector: "redraw",
protocol: "rendering",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@output"])._contents_((function(h){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(h)._with_($self._renderUsing_(h));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({h:h},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"redraw",{},$globals.BoardWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "redraw\x0a\x09output contents: [ :h | h with: (self renderUsing: h) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "with:", "renderUsing:"]
}),
$globals.BoardWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function (html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._pre();
$recv($1)._with_($self._renderUsing_(html));
$recv($1)._class_("map");
$self["@output"]=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.BoardWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09output := html pre\x0a\x09\x09with: (self renderUsing: html);\x0a\x09\x09class: 'map';\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "pre", "renderUsing:", "class:", "yourself"]
}),
$globals.BoardWidget);

$core.addMethod(
$core.method({
selector: "renderUsing:",
protocol: "rendering",
fn: function (html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._collect_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv((1)._to_($recv($self["@board"])._width()))._collect_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._renderX_Y_using_(x,y,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv($3)._add_($recv($globals.String)._crlf());
return $recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderUsing:",{html:html},$globals.BoardWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderUsing: html\x0a\x09^ (1 to: board height)\x0a\x09\x09collect: [ :y |\x0a \x09\x09\x09((1 to: board width) collect: [ :x | self renderX: x Y: y using: html ])\x0a\x09\x09\x09\x09add: String crlf;\x0a\x09\x09\x09\x09yourself ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["collect:", "to:", "height", "add:", "width", "renderX:Y:using:", "crlf", "yourself"]
}),
$globals.BoardWidget);

$core.addMethod(
$core.method({
selector: "renderX:Y:using:",
protocol: "rendering",
fn: function (x,y,html){
var self=this,$self=this;
var p,cell,region;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$5,$8,$7,$6,$9,$11,$10;
p=$recv(x).__at(y);
region=$recv($self["@board"])._at_(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($recv($self["@board"])._player()).__eq(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$1="@";
} else {
$3=$recv(region).__eq("wall");
if($core.assert($3)){
$1="█";
} else {
$1="░";
}
}
cell=$recv(html)._span_($1);
$4=$recv(region).__tild_eq("wall");
if($core.assert($4)){
$5=cell;
$8=$self._palette();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["palette"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._at_($recv($recv(region).__backslash_backslash($recv($self._palette())._size())).__plus((1)));
$6="color: ".__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($5)._style_($6);
} else {
$recv(cell)._class_("wall");
}
$9=cell;
$11=$recv("cell-".__comma(x)).__comma("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__comma(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($9)._id_($10);
return cell;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderX:Y:using:",{x:x,y:y,html:html,p:p,cell:cell,region:region},$globals.BoardWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y", "html"],
source: "renderX: x Y: y using: html\x0a\x09| p cell region |\x0a\x09\x0a\x09p := x@y.\x0a\x09region := board at: p.\x0a\x09cell := html\x0a\x09\x09span: (board player = p\x0a\x09\x09\x09ifTrue: [ '@' ]\x0a\x09\x09\x09ifFalse: [ (region = #wall\x0a\x09\x09\x09\x09ifTrue: [ '█' ]\x0a\x09\x09\x09\x09ifFalse: [ '░' ]) ] ).\x0a\x09region ~= #wall\x0a\x09\x09ifTrue: [ cell style: 'color: ', (self palette at: region \x5c\x5c self palette size + 1) ]\x0a\x09\x09ifFalse: [ cell class: 'wall' ].\x0a\x09cell id: 'cell-', x, '-', y.\x0a\x09^ cell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "at:", "span:", "ifTrue:ifFalse:", "=", "player", "~=", "style:", ",", "palette", "+", "\x5c\x5c", "size", "class:", "id:"]
}),
$globals.BoardWidget);

$core.addMethod(
$core.method({
selector: "setupKeys",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Key)._code_onPress_onRelease_((37),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@board"])._movePlayer_($recv($globals.Directions)._left());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["movePlayer:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=1;
//>>excludeEnd("ctx");
$recv($globals.Key)._code_onPress_onRelease_((38),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@board"])._movePlayer_($recv($globals.Directions)._up());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["movePlayer:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=2;
//>>excludeEnd("ctx");
$recv($globals.Key)._code_onPress_onRelease_((39),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@board"])._movePlayer_($recv($globals.Directions)._right());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["movePlayer:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=3;
//>>excludeEnd("ctx");
$recv($globals.Key)._code_onPress_onRelease_((40),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@board"])._movePlayer_($recv($globals.Directions)._down());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}),(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupKeys",{},$globals.BoardWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupKeys\x0a\x09Key code: 37 onPress: [ board movePlayer: Directions left ] onRelease: [ ].\x0a\x09Key code: 38 onPress: [ board movePlayer: Directions up ] onRelease: [ ].\x0a\x09Key code: 39 onPress: [ board movePlayer: Directions right ] onRelease: [ ].\x0a\x09Key code: 40 onPress: [ board movePlayer: Directions down ] onRelease: [ ]",
referencedClasses: ["Key", "Directions"],
//>>excludeEnd("ide");
messageSends: ["code:onPress:onRelease:", "movePlayer:", "left", "up", "right", "down"]
}),
$globals.BoardWidget);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aBoard){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._board_(aBoard);
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBoard:aBoard},$globals.BoardWidget.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoard"],
source: "on: aBoard\x0a\x09^ self basicNew\x0a\x09\x09board: aBoard;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["board:", "basicNew", "initialize", "yourself"]
}),
$globals.BoardWidget.a$cls);


$core.addClass("Directions", $globals.Object, [], "MiniRogue-Engine");

$core.addMethod(
$core.method({
selector: "down",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"down",{},$globals.Directions.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "down\x0a\x09^ 0@1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.Directions.a$cls);

$core.addMethod(
$core.method({
selector: "left",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"left",{},$globals.Directions.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "left\x0a\x09^ -1@0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.Directions.a$cls);

$core.addMethod(
$core.method({
selector: "right",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"right",{},$globals.Directions.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "right\x0a\x09^ 1@0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.Directions.a$cls);

$core.addMethod(
$core.method({
selector: "up",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (0).__at((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"up",{},$globals.Directions.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "up\x0a\x09^ 0 @ -1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.Directions.a$cls);


$core.addClass("Key", $globals.Object, ["code"], "MiniRogue-Engine");
$core.addMethod(
$core.method({
selector: "code",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@code"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "code\x0a\x09^ code",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "code:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@code"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "code: anObject\x0a\x09code := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "isDown",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._pressed_($self._code());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDown",{},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDown\x0a\x09^ Keyboard pressed: self code",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["pressed:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "isUp",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._notPressed_($self._code());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isUp",{},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUp\x0a\x09^ Keyboard notPressed: self code",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["notPressed:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "onPress:",
protocol: "binding",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._bind_to_($self._code(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPress:",{aBlock:aBlock},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onPress: aBlock\x0a\x09Keyboard bind: self code to: aBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["bind:to:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "onRelease:",
protocol: "binding",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._bindRelease_to_($self._code(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRelease:",{aBlock:aBlock},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onRelease: aBlock\x0a\x09Keyboard bindRelease: self code to: aBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["bindRelease:to:", "code"]
}),
$globals.Key);


$core.addMethod(
$core.method({
selector: "code:onPress:onRelease:",
protocol: "instance creation",
fn: function (aNumber,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._code_onPress_onRelease_(aNumber,aBlock,anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code:onPress:onRelease:",{aNumber:aNumber,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Key.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "aBlock", "anotherBlock"],
source: "code: aNumber onPress: aBlock onRelease: anotherBlock\x0a\x09\x22Returns a fully configured Key instance\x22\x0a\x09\x0a\x09^ Keyboard code: aNumber onPress: aBlock onRelease: anotherBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["code:onPress:onRelease:"]
}),
$globals.Key.a$cls);


$core.addClass("Keyboard", $globals.Object, ["keys", "blocks", "releaseBlocks"], "MiniRogue-Engine");
$core.addMethod(
$core.method({
selector: "bind:to:",
protocol: "binding",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@blocks"])._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bind:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bind: aKey to: aBlock\x0a\x09blocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "bindRelease:to:",
protocol: "binding",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@releaseBlocks"])._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindRelease:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bindRelease: aKey to: aBlock\x0a\x09releaseBlocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "blocks",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@blocks"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blocks\x0a\x09^ blocks",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "blocks:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@blocks"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "blocks: anObject\x0a\x09blocks := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

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
($globals.Keyboard.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@keys"]=$globals.HashedCollection._newFromPairs_([]);
$self["@blocks"]=$globals.HashedCollection._newFromPairs_([]);
$self["@releaseBlocks"]=$globals.HashedCollection._newFromPairs_([]);
$recv(window)._addEventListener_func_capture_("keydown",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._onPress_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}),false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addEventListener:func:capture:"]=1;
//>>excludeEnd("ctx");
$recv(window)._addEventListener_func_capture_("keyup",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._onRelease_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #{}.\x0a\x09blocks := #{}.\x0a\x09releaseBlocks := #{}.\x0a\x09window addEventListener: 'keydown' func: [ :event | self onPress: event ] capture: false.\x0a\x09window addEventListener: 'keyup' func: [ :event | self onRelease: event ] capture: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "addEventListener:func:capture:", "onPress:", "onRelease:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "keys",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@keys"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09^ keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "keys:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@keys"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "keys: anObject\x0a\x09keys := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "notPressed:",
protocol: "testing",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._pressed_(aKeyCode))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notPressed:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "notPressed: aKeyCode\x0a\x09^ (self pressed: aKeyCode) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "pressed:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "onPress:",
protocol: "event handling",
fn: function (anEvent){
var self=this,$self=this;
var code;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
code=$recv(anEvent)._keyCode();
$self._press_(code);
$recv($self["@blocks"])._at_ifPresent_ifAbsent_(code,(function(block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(block)._value_(anEvent);
return $recv(anEvent)._preventDefault();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPress:",{anEvent:anEvent,code:code},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onPress: anEvent\x0a\x09| code |\x0a\x09\x0a\x09code := anEvent keyCode.\x0a\x09self press: code.\x0a\x09blocks at: code ifPresent: [ :block | block value: anEvent. anEvent preventDefault ] ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyCode", "press:", "at:ifPresent:ifAbsent:", "value:", "preventDefault"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "onRelease:",
protocol: "event handling",
fn: function (anEvent){
var self=this,$self=this;
var code;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
code=$recv(anEvent)._keyCode();
$self._release_(code);
$recv($self["@releaseBlocks"])._at_ifPresent_ifAbsent_(code,(function(block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(block)._value_(anEvent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){

}));
$recv(anEvent)._preventDefault();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRelease:",{anEvent:anEvent,code:code},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onRelease: anEvent\x0a\x09| code |\x0a\x09\x0a\x09code := anEvent keyCode.\x0a\x09self release: code.\x0a\x09releaseBlocks at: code ifPresent: [ :block | block value: anEvent ] ifAbsent: [].\x0a\x09anEvent preventDefault",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyCode", "release:", "at:ifPresent:ifAbsent:", "value:", "preventDefault"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "press:",
protocol: "testing",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@keys"])._at_put_(aKeyCode,true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"press:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "press: aKeyCode\x0a\x09keys at: aKeyCode put: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "pressed:",
protocol: "testing",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@keys"])._at_ifAbsent_(aKeyCode,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@keys"])._at_put_(aKeyCode,false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pressed:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "pressed: aKeyCode\x0a\x09^ keys at: aKeyCode ifAbsent: [ keys at: aKeyCode put: false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "release:",
protocol: "testing",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@keys"])._at_put_(aKeyCode,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"release:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "release: aKeyCode\x0a\x09keys at: aKeyCode put: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "releaseBlocks",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@releaseBlocks"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "releaseBlocks\x0a\x09^ releaseBlocks",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "releaseBlocks:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@releaseBlocks"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "releaseBlocks: anObject\x0a\x09releaseBlocks := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "unbind:",
protocol: "binding",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@blocks"])._removeKey_ifAbsent_(aKey,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbind:",{aKey:aKey},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "unbind: aKey\x0a\x09blocks removeKey: aKey ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:"]
}),
$globals.Keyboard);


$globals.Keyboard.a$cls.iVarNames = ["instance"];
$core.addMethod(
$core.method({
selector: "bind:to:",
protocol: "binding",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._blocks())._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bind:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bind: aKey to: aBlock\x0a\x09self instance blocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "blocks", "instance"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "bindRelease:to:",
protocol: "binding",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._releaseBlocks())._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindRelease:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bindRelease: aKey to: aBlock\x0a\x09self instance releaseBlocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "releaseBlocks", "instance"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "code:onPress:onRelease:",
protocol: "instance creation",
fn: function (aNumber,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Key)._new();
$recv($1)._code_(aNumber);
$recv($1)._onPress_(aBlock);
$recv($1)._onRelease_(anotherBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code:onPress:onRelease:",{aNumber:aNumber,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "aBlock", "anotherBlock"],
source: "code: aNumber onPress: aBlock onRelease: anotherBlock\x0a\x09\x22Returns a fully configured Key instance\x22\x0a\x09\x0a\x09^ Key new\x0a\x09\x09code: aNumber;\x0a\x09\x09onPress: aBlock;\x0a\x09\x09onRelease: anotherBlock;\x0a\x09\x09yourself",
referencedClasses: ["Key"],
//>>excludeEnd("ide");
messageSends: ["code:", "new", "onPress:", "onRelease:", "yourself"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "instance",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@instance"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@instance"]=$self._new();
return $self["@instance"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "unbind:",
protocol: "binding",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._blocks())._removeKey_ifAbsent_(aKey,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbind:",{aKey:aKey},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "unbind: aKey\x0a\x09self instance blocks removeKey: aKey ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:", "blocks", "instance"]
}),
$globals.Keyboard.a$cls);


$core.addClass("MapCarver", $globals.Object, ["board", "region", "lastDirection", "chanceToTurn"], "MiniRogue-Engine");
$core.addMethod(
$core.method({
selector: "board:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@board"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "board: anObject\x0a\x09board := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "canCarveAt:",
protocol: "testing",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$6,$8,$7,$5,$4,$11,$13,$12,$10,$9,$16,$18,$17,$15,$14,$1;
$3=$recv($self["@board"])._at_(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$self["@board"];
$8=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$7=$recv(aPoint).__plus($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._at_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
return $recv($4)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$11=$self["@board"];
$13=(0).__at((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$12=$recv(aPoint).__plus($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._at_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=3;
//>>excludeEnd("ctx");
return $recv($9)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$16=$self["@board"];
$18=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$17=$recv(aPoint).__plus($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$15=$recv($16)._at_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$14=$recv($15).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=4;
//>>excludeEnd("ctx");
return $recv($14)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv($recv($self["@board"])._at_($recv(aPoint).__plus((-1).__at((0))))).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["and:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canCarveAt:",{aPoint:aPoint},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "canCarveAt: aPoint\x0a\x09^ ((board at: aPoint) = #wall)\x0a\x09\x09and: [ ((board at: aPoint + (0 @ 1)) = #wall)\x0a\x09\x09\x09and: [ ((board at: aPoint + (0 @ -1)) = #wall)\x0a\x09\x09\x09\x09and: [ ((board at: aPoint + (1 @ 0)) = #wall)\x0a\x09\x09\x09\x09\x09and: [ ((board at: aPoint + (-1 @ 0)) = #wall) ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "at:", "+", "@"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "canCarveAt:towards:",
protocol: "testing",
fn: function (aPoint,aDirection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
$3=$self["@board"];
$4=$recv(aPoint).__plus(aDirection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._at_ifAbsent_($4,(function(){
return "none";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self["@board"])._at_ifAbsent_($recv(aPoint).__plus($recv(aDirection).__star((2))),(function(){
return "none";

}))).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canCarveAt:towards:",{aPoint:aPoint,aDirection:aDirection},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aDirection"],
source: "canCarveAt: aPoint towards: aDirection\x0a\x09^ ((board at: aPoint + aDirection ifAbsent: [ #none ]) = #wall)\x0a\x09\x09and: [ (board at: aPoint + (aDirection * 2) ifAbsent: [ #none ]) = #wall ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "at:ifAbsent:", "+", "*"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "carve:towards:at:",
protocol: "carving",
fn: function (aNumber,aDirection,aPoint){
var self=this,$self=this;
var newPosition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newPosition=aPoint;
$recv(aNumber)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newPosition=$recv(newPosition).__plus(aDirection);
return $recv($self["@board"])._at_put_(newPosition,$self["@region"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newPosition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carve:towards:at:",{aNumber:aNumber,aDirection:aDirection,aPoint:aPoint,newPosition:newPosition},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "aDirection", "aPoint"],
source: "carve: aNumber towards: aDirection at: aPoint\x0a\x09| newPosition |\x0a\x09\x0a\x09newPosition := aPoint.\x0a\x09\x0a\x09aNumber timesRepeat: [\x0a\x09\x09newPosition := newPosition + aDirection.\x0a\x09\x09board at: newPosition put: region \x22#floor\x22 ].\x0a\x09\x0a\x09^ newPosition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "+", "at:put:"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "carveAt:",
protocol: "carving",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@board"])._at_put_(aPoint,$self["@region"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carveAt:",{aPoint:aPoint},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "carveAt: aPoint\x0a\x09board at: aPoint put: region",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "carveFromStack:",
protocol: "carving",
fn: function (aStack){
var self=this,$self=this;
var top,position,candidate,dir;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5,$6,$7,$8;
top=$recv(aStack)._last();
position=$recv(top)._key();
$2=(100)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__lt_eq($self["@chanceToTurn"]);
if($core.assert($1)){
$3=$recv(top)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
candidate=$recv($3)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
} else {
$4=$recv(top)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
candidate=$recv($4)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq($self["@lastDirection"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(top)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=3;
//>>excludeEnd("ctx");
return $recv($5)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
}
$6=$recv(top)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=4;
//>>excludeEnd("ctx");
dir=$recv($6)._remove_(candidate);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$self["@lastDirection"]=dir;
$recv($recv(top)._value())._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStack)._removeLast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$7=$recv($recv($recv($self["@board"])._at_ifAbsent_($recv(position).__plus(dir),(function(){
return "none";

}))).__eq("wall"))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._canCarveAt_towards_(position,dir);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
if($core.assert($7)){
var newPosition,newDirs;
newPosition=$self._carve_towards_at_((2),dir,position);
$8=$self._directions();
$recv($8)._remove_($recv(dir).__star((-1)));
newDirs=$recv($8)._yourself();
$recv(aStack)._add_($recv(newPosition).__minus_gt(newDirs));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carveFromStack:",{aStack:aStack,top:top,position:position,candidate:candidate,dir:dir},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStack"],
source: "carveFromStack: aStack\x0a\x09| top position candidate dir |\x0a\x09\x09\x09\x0a\x09top := aStack last.\x0a\x09position := top key.\x0a\x0a\x09candidate := (100 atRandom <= chanceToTurn)\x0a\x09\x09ifTrue: [ top value atRandom ]\x0a\x09\x09ifFalse: [ top value\x0a\x09\x09\x09detect: [ :each | each = lastDirection ]\x0a\x09\x09\x09ifNone: [ top value atRandom ] ].\x0a\x09dir := top value remove: candidate.\x0a\x09lastDirection := dir.\x0a\x0a\x09top value ifEmpty: [ aStack removeLast ].\x0a\x09(((board at: position + dir ifAbsent: [ #none ]) = #wall)\x0a\x09\x09and: [ self canCarveAt: position towards: dir ])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09| newPosition newDirs |\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09newPosition := self carve: 2 towards: dir at: position.\x0a\x09\x09\x09\x09newDirs := self directions remove: (dir * -1); yourself.\x0a\x09\x09\x09\x09aStack add: newPosition -> newDirs ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "key", "ifTrue:ifFalse:", "<=", "atRandom", "value", "detect:ifNone:", "=", "remove:", "ifEmpty:", "removeLast", "ifTrue:", "and:", "at:ifAbsent:", "+", "canCarveAt:towards:", "carve:towards:at:", "directions", "*", "yourself", "add:", "->"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "carveRoom:",
protocol: "carving",
fn: function (aRoom){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$1,$7,$6;
$3=$recv(aRoom)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$5=$recv(aRoom)._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["corner"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._y();
$1=$recv($2)._to_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv($recv(aRoom)._origin())._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._to_($recv($recv(aRoom)._corner())._x());
return $recv($6)._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self["@board"])._at_put_($recv(x).__at(y),$self["@region"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$self._incrementRegion();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carveRoom:",{aRoom:aRoom},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRoom"],
source: "carveRoom: aRoom\x0a\x09(aRoom origin y to: aRoom corner y)\x0a\x09\x09do: [ :y |\x0a\x09\x09\x09(aRoom origin x to: aRoom corner x)\x0a\x09\x09\x09\x09do: [ :x |\x0a\x09\x09\x09\x09\x09board at: x@y put: region \x22#floor\x22 ] ].\x0a\x09self incrementRegion",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:", "y", "origin", "corner", "x", "at:put:", "@", "incrementRegion"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "chanceToTurn:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@chanceToTurn"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "chanceToTurn: aNumber\x0a\x09chanceToTurn := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "directions",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=(-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$3=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
return [$1,$2,$3,(0).__at((-1))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directions",{},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "directions\x0a\x09\x22A fresh Array of possible directions\x22\x0a\x09\x0a\x09^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "incrementRegion",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@region"]=$recv($self["@region"]).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"incrementRegion",{},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "incrementRegion\x0a\x09region := region + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.MapCarver.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$self["@board"];
if(($receiver = $1) == null || $receiver.a$nil){
$2=$recv("Create instances of ".__comma($recv($self._class())._name())).__comma(" with #on:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._error_($2);
} else {
$1;
}
$self["@region"]=(1);
$self["@lastDirection"]=nil;
$self["@chanceToTurn"]=(0);
$recv($self["@board"])._fillWith_("wall");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09board ifNil: [ self error: 'Create instances of ', self class name, ' with #on:' ].\x0a\x09region := 1.\x0a\x09lastDirection := nil.\x0a\x09chanceToTurn := 0.\x0a\x09board fillWith: #wall",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifNil:", "error:", ",", "name", "class", "fillWith:"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "region",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@region"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "region\x0a\x09^ region",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MapCarver);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aBoard){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._board_(aBoard);
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBoard:aBoard},$globals.MapCarver.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoard"],
source: "on: aBoard\x0a\x09^ self basicNew\x0a\x09\x09board: aBoard;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["board:", "basicNew", "initialize", "yourself"]
}),
$globals.MapCarver.a$cls);


$core.addClass("MapGenerator", $globals.Object, ["board"], "MiniRogue-Engine");
$core.addMethod(
$core.method({
selector: "board:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@board"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "board: anObject\x0a\x09board := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "directions",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=(-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$3=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
return [$1,$2,$3,(0).__at((-1))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directions",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "directions\x0a\x09^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "generate",
protocol: "generating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldBeImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generate",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generate\x0a\x09self shouldBeImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldBeImplemented"]
}),
$globals.MapGenerator);



$core.addClass("DungeonGenerator", $globals.MapGenerator, ["carver", "regions", "connectors", "output", "roomAttempts", "chanceToFill", "chanceToTurn", "chanceToExtraConnections"], "MiniRogue-Engine");
$core.addMethod(
$core.method({
selector: "cacheConnectors",
protocol: "caching",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5;
$self["@connectors"]=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((1)._to_($recv($self["@board"])._width()))._do_((function(x){
var p;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
p=$recv(x).__at(y);
$3=$recv($self["@board"])._at_(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
var regs;
regs=$recv($self["@board"])._adjacentRegionsAt_(p);
$4=$recv($recv($recv(regs)._asSet())._size()).__eq((2));
if($core.assert($4)){
var rs,k;
rs=$recv(regs)._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(a).__lt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,5)});
//>>excludeEnd("ctx");
}));
$5=$recv(rs)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
k=$recv($5).__minus_gt($recv(rs)._at_((2)));
return $recv($recv($self["@connectors"])._at_ifAbsentPut_(k,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
})))._add_(p);
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x,p:p},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cacheConnectors",{},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cacheConnectors\x0a\x09connectors := Dictionary new.\x0a\x0a\x09(1 to: board height) do: [ :y |\x0a\x09\x09(1 to: board width) do: [ :x |\x0a\x09\x09\x09| p |\x0a\x09\x09\x09\x0a\x09\x09\x09p := x@y.\x0a\x09\x09\x09(board at: p) = #wall ifTrue: [\x0a\x09\x09\x09\x09| regs |\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09regs := board adjacentRegionsAt: p.\x0a\x09\x09\x09\x09regs asSet size = 2 ifTrue: [\x0a\x09\x09\x09\x09\x09| rs k |\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09rs := regs sorted: [ :a :b | a < b ].\x0a\x09\x09\x09\x09\x09k := (rs at: 1) -> (rs at: 2).\x0a\x09\x09\x09\x09\x09(connectors at: k ifAbsentPut: [ Array new ])\x0a\x09\x09\x09\x09\x09\x09add: p ] ] ] ]",
referencedClasses: ["Dictionary", "Array"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "to:", "height", "width", "@", "ifTrue:", "=", "at:", "adjacentRegionsAt:", "size", "asSet", "sorted:", "<", "->", "add:", "at:ifAbsentPut:"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "cacheRegions",
protocol: "caching",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(1)._to_($recv($recv($self["@carver"])._region()).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$self["@regions"]=$recv($1)._collect_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=2;
//>>excludeEnd("ctx");
$recv($2)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((1)._to_($recv($self["@board"])._width()))._do_((function(x){
var p,region;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
p=$recv(x).__at(y);
region=$recv($self["@board"])._at_(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$3=$recv(region).__tild_eq("wall");
if($core.assert($3)){
return $recv($recv($self["@regions"])._at_(region))._add_(p);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x,p:p,region:region},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cacheRegions",{},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cacheRegions\x0a\x09regions := (1 to: carver region - 1) collect: [ Array new ].\x0a\x09(1 to: board height) do: [ :y |\x0a\x09\x09(1 to: board width) do: [ :x |\x0a\x09\x09\x09| p region |\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09p := x@y.\x0a\x09\x09\x09region := (board at: p).\x0a\x09\x09\x09region ~= #wall ifTrue: [ (regions at: region) add: p ] ] ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["collect:", "to:", "-", "region", "new", "do:", "height", "width", "@", "at:", "ifTrue:", "~=", "add:"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "chanceToExtraConnections:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@chanceToExtraConnections"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "chanceToExtraConnections: aNumber\x0a\x09chanceToExtraConnections := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "chanceToFill:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@chanceToFill"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "chanceToFill: aNumber\x0a\x09chanceToFill := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "chanceToTurn:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@chanceToTurn"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "chanceToTurn: aNumber\x0a\x09chanceToTurn := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "fillDeadEnds",
protocol: "filling",
fn: function (){
var self=this,$self=this;
var deadEnds,p;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
deadEnds=$recv($globals.Array)._new();
$2=$recv($recv($self["@board"])._height()).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$1=(2)._to_by_($2,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:by:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((2)._to_by_($recv($recv($self["@board"])._width()).__minus((1)),(2)))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
p=$recv(x).__at(y);
$3=$recv($recv($self["@board"])._isDeadEnd_(p))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv((100)._atRandom()).__lt_eq($self["@chanceToFill"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
if($core.assert($3)){
return $recv(deadEnds)._add_(p);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["do:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(deadEnds)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@board"])._fillPassage_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,5)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillDeadEnds",{deadEnds:deadEnds,p:p},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fillDeadEnds\x0a\x09| deadEnds p |\x0a\x09\x0a\x09deadEnds := Array new.\x0a\x09\x0a\x09(2 to: board height - 1 by: 2) do: [ :y |\x0a\x09\x09(2 to: board width - 1 by: 2) do: [ :x |\x0a\x09\x09\x09p := x@y.\x0a\x09\x09\x09((board isDeadEnd: p) and: [100 atRandom <= chanceToFill ]) ifTrue: [ deadEnds add: p ] ] ].\x0a\x09deadEnds do: [ :each |\x0a\x09\x09\x22self print.\x22\x0a\x09\x09board fillPassage: each ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "to:by:", "-", "height", "width", "@", "ifTrue:", "and:", "isDeadEnd:", "<=", "atRandom", "add:", "fillPassage:"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "generate",
protocol: "generating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($self["@board"])._fillWith_("wall");
$1=$recv($globals.MapCarver)._on_($self["@board"]);
$recv($1)._chanceToTurn_($self["@chanceToTurn"]);
$self["@carver"]=$recv($1)._yourself();
$recv($recv($recv($recv($recv($self._generateRooms())._generatePassages())._cacheRegions())._cacheConnectors())._mergeRegions())._fillDeadEnds();
return $self["@board"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generate",{},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generate\x0a\x09board fillWith: #wall.\x0a\x09carver := (MapCarver on: board)\x0a\x09\x09chanceToTurn: chanceToTurn;\x0a\x09\x09yourself.\x0a\x09self generateRooms generatePassages cacheRegions cacheConnectors mergeRegions fillDeadEnds.\x0a\x09^ board\x0a\x09",
referencedClasses: ["MapCarver"],
//>>excludeEnd("ide");
messageSends: ["fillWith:", "chanceToTurn:", "on:", "yourself", "fillDeadEnds", "mergeRegions", "cacheConnectors", "cacheRegions", "generatePassages", "generateRooms"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "generatePassageAt:",
protocol: "generating",
fn: function (aPoint){
var self=this,$self=this;
var stack;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
stack=$recv($globals.Array)._with_($recv(aPoint).__minus_gt($self._directions()));
$recv($self["@carver"])._carveAt_(aPoint);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stack)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@carver"])._carveFromStack_(stack);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($self["@carver"])._incrementRegion();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generatePassageAt:",{aPoint:aPoint,stack:stack},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "generatePassageAt: aPoint\x0a\x09| stack |\x0a\x09\x0a\x09stack := Array with: aPoint -> self directions.\x0a\x09carver carveAt: aPoint.\x0a\x0a\x09[ stack notEmpty ] whileTrue: [ carver carveFromStack: stack ].\x0a\x09carver incrementRegion",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:", "->", "directions", "carveAt:", "whileTrue:", "notEmpty", "carveFromStack:", "incrementRegion"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "generatePassages",
protocol: "generating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=(2)._to_by_($recv($self["@board"])._height(),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:by:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((2)._to_by_($recv($self["@board"])._width(),(2)))._do_((function(x){
var p;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
p=$recv(x).__at(y);
$2=$recv($self["@carver"])._canCarveAt_(p);
if($core.assert($2)){
return $self._generatePassageAt_(p);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x,p:p},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generatePassages",{},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generatePassages\x0a\x09(2 to: board height by: 2)\x0a\x09\x09do: [ : y |\x0a\x09\x09\x09(2 to: board width by: 2)\x0a\x09\x09\x09\x09do: [ :x |\x0a\x09\x09\x09\x09\x09| p |\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09p := x@y.\x0a\x09\x09\x09\x09\x09(carver canCarveAt: p) ifTrue: [ self generatePassageAt: p ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:by:", "height", "width", "@", "ifTrue:", "canCarveAt:", "generatePassageAt:"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "generateRoom",
protocol: "generating",
fn: function (){
var self=this,$self=this;
var w,h;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$6,$5,$2,$10,$9,$8,$7;
$1=$recv($recv($self["@board"])._width()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
w=$recv($1)._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["floor"]=1;
//>>excludeEnd("ctx");
h=$recv($recv($recv($self["@board"])._height()).__slash((2)))._floor();
$4=$recv(w)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$6=$recv(h)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__at($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$10=(3)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__plus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__at($recv($recv((3)._atRandom()).__star((2))).__plus((2)));
return $recv($2)._extent_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateRoom",{w:w,h:h},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateRoom\x0a\x09| w h |\x0a\x09\x0a\x09w := (board width / 2) floor.\x0a\x09h := (board height / 2) floor.\x0a\x0a\x09^ (w atRandom * 2) @ (h atRandom * 2)\x0a\x09\x09extent: (3 atRandom * 2 + 2) @ (3 atRandom * 2 + 2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["floor", "/", "width", "height", "extent:", "@", "*", "atRandom", "+"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "generateRooms",
protocol: "generating",
fn: function (){
var self=this,$self=this;
var rooms;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
rooms=$recv($globals.Array)._new();
$recv($self["@roomAttempts"])._timesRepeat_((function(){
var room;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
room=$self._generateRoom();
return $recv(rooms)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._overlapsBorders_(room);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($recv($self["@board"])._inside())._containsRect_(room);
if($core.assert($1)){
$recv($self["@carver"])._carveRoom_(room);
return $recv(rooms)._add_(room);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({room:room},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateRooms",{rooms:rooms},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateRooms\x0a\x09| rooms |\x0a\x09\x0a\x09rooms := Array new.\x0a\x0a\x09roomAttempts timesRepeat: [\x0a\x09\x09| room |\x0a\x09\x09\x0a\x09\x09room := self generateRoom.\x0a\x09\x09rooms\x0a\x09\x09\x09detect: [ :each | each overlapsBorders: room ]\x0a\x09\x09\x09ifNone: [\x0a\x09\x09\x09\x09(board inside containsRect: room)\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09carver carveRoom: room.\x0a\x09\x09\x09\x09\x09\x09rooms add: room ] ] ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "timesRepeat:", "generateRoom", "detect:ifNone:", "overlapsBorders:", "ifTrue:", "containsRect:", "inside", "carveRoom:", "add:"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "generateStraightPassages",
protocol: "generating",
fn: function (){
var self=this,$self=this;
var a,b;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
a=$recv($self["@connectors"])._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
b=$recv($self["@connectors"])._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
$1=$recv(a).__tild_eq(b);
if($core.assert($1)){
$recv($self["@connectors"])._valuesDo_((function(points){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self["@carver"];
$3=$recv(points)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=3;
//>>excludeEnd("ctx");
$recv($2)._carveAt_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["carveAt:"]=1;
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=(100)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["atRandom"]=4;
//>>excludeEnd("ctx");
return $recv($4).__lt($self["@chanceToExtraConnections"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self["@carver"])._carveAt_($recv(points)._atRandom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({points:points},$ctx1,2)});
//>>excludeEnd("ctx");
}));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateStraightPassages",{a:a,b:b},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateStraightPassages\x0a\x09\x22pick a few pairs of regions at random, and attempt\x0a\x09to make a direct route between them.\x0a\x09choose a direction that brings us closer to the target, then carve in that direction.\x0a\x09every step checks if it's level, with a chance of continuing forward even if it is, as long as it's not overshooting.\x0a\x09if it's level, turn.\x0a\x09\x0a\x09alternative algo:\x0a\x09\x0a\x09select two connectors\x0a\x09figure out a \x0a\x09\x22 \x0a\x09| a b |\x0a\x09\x0a\x09a := connectors atRandom.\x0a\x09b := connectors atRandom.\x0a\x09a ~= b\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09connectors\x0a\x09\x09\x09\x09valuesDo: [ :points |\x0a\x09\x09\x09\x09\x09carver carveAt: points atRandom.\x0a\x09\x09\x09\x09\x09[ 100 atRandom < chanceToExtraConnections ]\x0a\x09\x09\x09\x09\x09\x09whileTrue: [ carver carveAt: points atRandom ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atRandom", "ifTrue:", "~=", "valuesDo:", "carveAt:", "whileTrue:", "<"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.DungeonGenerator.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$self["@board"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@board"]=$recv($globals.Board)._width_height_((45),(45));
$self["@board"];
} else {
$1;
}
$self["@roomAttempts"]=(30);
$self["@chanceToTurn"]=(10);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09board ifNil: [ board := (Board width: 45 height: 45)].\x0a\x09roomAttempts := 30.\x0a\x09chanceToTurn := 10",
referencedClasses: ["Board"],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifNil:", "width:height:"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "mergeRegions",
protocol: "merging",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv($self["@connectors"])._valuesDo_((function(points){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self["@carver"];
$2=$recv(points)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$recv($1)._carveAt_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["carveAt:"]=1;
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=(100)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
return $recv($3).__lt($self["@chanceToExtraConnections"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self["@carver"])._carveAt_($recv(points)._atRandom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({points:points},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mergeRegions",{},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mergeRegions\x0a\x09connectors\x0a\x09\x09valuesDo: [ :points |\x0a\x09\x09\x09carver carveAt: points atRandom.\x0a\x09\x09\x09[ 100 atRandom < chanceToExtraConnections ]\x0a\x09\x09\x09\x09whileTrue: [\x0a\x09\x09\x09\x09\x09\x22note that this may very well merge at the same point again\x22\x0a\x09\x09\x09\x09\x09carver carveAt: points atRandom ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valuesDo:", "carveAt:", "atRandom", "whileTrue:", "<"]
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "palette",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return ["#442434","#30346d","#4e4a4e","#854c30","#346524","#d04648","#757161","#597dce","#d27d2c","#8595a1","#6daa2c","#d2aa99","#6dc2ca","#dad45e"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "palette\x0a\x09^ { '#442434'.\x0a\x09\x09'#30346d'.\x0a\x09\x09'#4e4a4e'.\x0a\x09\x09'#854c30'.\x0a\x09\x09'#346524'.\x0a\x09\x09'#d04648'.\x0a\x09\x09'#757161'.\x0a\x09\x09'#597dce'.\x0a\x09\x09'#d27d2c'.\x0a\x09\x09'#8595a1'.\x0a\x09\x09'#6daa2c'.\x0a\x09\x09'#d2aa99'.\x0a\x09\x09'#6dc2ca'.\x0a\x09\x09'#dad45e' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DungeonGenerator);

$core.addMethod(
$core.method({
selector: "roomAttempts:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@roomAttempts"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "roomAttempts: aNumber\x0a\x09roomAttempts := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DungeonGenerator);


$core.addMethod(
$core.method({
selector: "extent:",
protocol: "instance creation",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._board_($recv($globals.Board)._extent_(aPoint));
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fill(self,"extent:",{aPoint:aPoint},$globals.DungeonGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "board: anObject\x0a\x09board := anObject",
referencedClasses: ["Board"],
//>>excludeEnd("ide");
messageSends: ["board:", "basicNew", "extent:", "initialize", "yourself"]
}),
$globals.DungeonGenerator.a$cls);


$core.addClass("MapGeneratorWidget", $globals.Widget, ["output"], "MiniRogue-Engine");
$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function (html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._pre();
$recv($1)._with_($self._renderUsing_(html));
$recv($1)._class_("map");
$self["@output"]=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.MapGeneratorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09output := html pre\x0a\x09\x09with: (self renderUsing: html);\x0a\x09\x09class: 'map';\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "pre", "renderUsing:", "class:", "yourself"]
}),
$globals.MapGeneratorWidget);

$core.addMethod(
$core.method({
selector: "renderX:Y:using:",
protocol: "rendering",
fn: function (x,y,html){
var self=this,$self=this;
var cell;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4;
$1=(3)._cell();
$2="color: ".__comma((1000000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
cell=$recv(html)._span_style_($1,$2);
$3=cell;
$5=$recv("cell-".__comma(x)).__comma("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($3)._id_($4);
return cell;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderX:Y:using:",{x:x,y:y,html:html,cell:cell},$globals.MapGeneratorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y", "html"],
source: "renderX: x Y: y using: html\x0a\x09| cell |\x0a\x09\x0a\x09cell := html span: 3\x0a\x09cell style: 'color: ', 1000000.\x0a\x09cell id: 'cell-', x, '-', y.\x0a\x09^ cell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["span:style:", "cell", ",", "id:"]
}),
$globals.MapGeneratorWidget);


});
