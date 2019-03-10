define(["amber/boot", "amber/web/Web", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("MiniRogue-Engine");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-minirogue"};

$core.addClass("Board", $globals.Object, ["width", "height", "data"], "MiniRogue-Engine");
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
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09(width isNil or: [ height isNil ]) ifTrue: [ self error: 'Create instances of ', self class name, ' with #width:height: or #extent:' ].\x0a\x09data := Array new",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifTrue:", "or:", "isNil", "error:", ",", "name", "class", "new"]
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


$core.addClass("MapCarver", $globals.Object, ["board", "region"], "MiniRogue-Engine");
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
var top,position,dir;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5;
top=$recv(aStack)._last();
position=$recv(top)._key();
$1=$recv(top)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$3=$recv(top)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._atRandom();
dir=$recv($1)._remove_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$recv($recv(top)._value())._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStack)._removeLast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv($recv($recv($self["@board"])._at_ifAbsent_($recv(position).__plus(dir),(function(){
return "none";

}))).__eq("wall"))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._canCarveAt_towards_(position,dir);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
if($core.assert($4)){
var newPosition,newDirs;
newPosition=$self._carve_towards_at_((2),dir,position);
$5=$self._directions();
$recv($5)._remove_($recv(dir).__star((-1)));
newDirs=$recv($5)._yourself();
$recv(aStack)._add_($recv(newPosition).__minus_gt(newDirs));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carveFromStack:",{aStack:aStack,top:top,position:position,dir:dir},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStack"],
source: "carveFromStack: aStack\x0a\x09| top position dir |\x0a\x09\x09\x09\x0a\x09top := aStack last.\x0a\x09position := top key.\x0a\x09dir := top value remove: top value atRandom.\x0a\x0a\x09top value ifEmpty: [ aStack removeLast ].\x0a\x09(((board at: position + dir ifAbsent: [ #none ]) = #wall)\x0a\x09\x09and: [ self canCarveAt: position towards: dir ])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09| newPosition newDirs |\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09newPosition := self carve: 2 towards: dir at: position.\x0a\x09\x09\x09\x09newDirs := self directions remove: (dir * -1); yourself.\x0a\x09\x09\x09\x09aStack add: newPosition -> newDirs ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "key", "remove:", "value", "atRandom", "ifEmpty:", "removeLast", "ifTrue:", "and:", "=", "at:ifAbsent:", "+", "canCarveAt:towards:", "carve:towards:at:", "directions", "*", "yourself", "add:", "->"]
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
$recv($self["@board"])._fillWith_("wall");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09board ifNil: [ self error: 'Create instances of ', self class name, ' with #on:' ].\x0a\x09region := 1.\x0a\x09board fillWith: #wall",
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


$core.addClass("MapGenerator", $globals.Widget, ["board", "carver", "regions", "connectors", "output", "roomAttempts", "chanceToFill"], "MiniRogue-Engine");
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
}, function($ctx1) {$ctx1.fill(self,"cacheConnectors",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cacheConnectors\x0a\x09connectors := Dictionary new.\x0a\x0a\x09(1 to: board height) do: [ :y |\x0a\x09\x09(1 to: board width) do: [ :x |\x0a\x09\x09\x09| p |\x0a\x09\x09\x09\x0a\x09\x09\x09p := x@y.\x0a\x09\x09\x09(board at: p) = #wall ifTrue: [\x0a\x09\x09\x09\x09| regs |\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09regs := board adjacentRegionsAt: p.\x0a\x09\x09\x09\x09regs asSet size = 2 ifTrue: [\x0a\x09\x09\x09\x09\x09| rs k |\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09rs := regs sorted: [ :a :b | a < b ].\x0a\x09\x09\x09\x09\x09k := (rs at: 1) -> (rs at: 2).\x0a\x09\x09\x09\x09\x09(connectors at: k ifAbsentPut: [ Array new ])\x0a\x09\x09\x09\x09\x09\x09add: p ] ] ] ]",
referencedClasses: ["Dictionary", "Array"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "to:", "height", "width", "@", "ifTrue:", "=", "at:", "adjacentRegionsAt:", "size", "asSet", "sorted:", "<", "->", "add:", "at:ifAbsentPut:"]
}),
$globals.MapGenerator);

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
}, function($ctx1) {$ctx1.fill(self,"cacheRegions",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cacheRegions\x0a\x09regions := (1 to: carver region - 1) collect: [ Array new ].\x0a\x09(1 to: board height) do: [ :y |\x0a\x09\x09(1 to: board width) do: [ :x |\x0a\x09\x09\x09| p region |\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09p := x@y.\x0a\x09\x09\x09region := (board at: p).\x0a\x09\x09\x09region ~= #wall ifTrue: [ (regions at: region) add: p ] ] ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["collect:", "to:", "-", "region", "new", "do:", "height", "width", "@", "at:", "ifTrue:", "~=", "add:"]
}),
$globals.MapGenerator);

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
}, function($ctx1) {$ctx1.fill(self,"fillDeadEnds",{deadEnds:deadEnds,p:p},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fillDeadEnds\x0a\x09| deadEnds p |\x0a\x09\x0a\x09deadEnds := Array new.\x0a\x09\x0a\x09(2 to: board height - 1 by: 2) do: [ :y |\x0a\x09\x09(2 to: board width - 1 by: 2) do: [ :x |\x0a\x09\x09\x09p := x@y.\x0a\x09\x09\x09((board isDeadEnd: p) and: [100 atRandom <= chanceToFill ]) ifTrue: [ deadEnds add: p ] ] ].\x0a\x09deadEnds do: [ :each |\x0a\x09\x09\x22self print.\x22\x0a\x09\x09board fillPassage: each ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "to:by:", "-", "height", "width", "@", "ifTrue:", "and:", "isDeadEnd:", "<=", "atRandom", "add:", "fillPassage:"]
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
$recv($self["@board"])._fillWith_("wall");
$self["@carver"]=$recv($globals.MapCarver)._on_($self["@board"]);
$recv($recv($recv($recv($self._generateRooms())._generatePassages())._cacheRegions())._mergeRegions())._fillDeadEnds();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generate",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generate\x0a\x09board fillWith: #wall.\x0a\x09carver := MapCarver on: board.\x0a\x09self generateRooms generatePassages cacheRegions mergeRegions fillDeadEnds\x0a\x09",
referencedClasses: ["MapCarver"],
//>>excludeEnd("ide");
messageSends: ["fillWith:", "on:", "fillDeadEnds", "mergeRegions", "cacheRegions", "generatePassages", "generateRooms"]
}),
$globals.MapGenerator);

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
}, function($ctx1) {$ctx1.fill(self,"generatePassageAt:",{aPoint:aPoint,stack:stack},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "generatePassageAt: aPoint\x0a\x09| stack |\x0a\x09\x0a\x09stack := Array with: aPoint -> self directions.\x0a\x09carver carveAt: aPoint.\x0a\x0a\x09[ stack notEmpty ] whileTrue: [ carver carveFromStack: stack ].\x0a\x09carver incrementRegion",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:", "->", "directions", "carveAt:", "whileTrue:", "notEmpty", "carveFromStack:", "incrementRegion"]
}),
$globals.MapGenerator);

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
}, function($ctx1) {$ctx1.fill(self,"generatePassages",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generatePassages\x0a\x09(2 to: board height by: 2)\x0a\x09\x09do: [ : y |\x0a\x09\x09\x09(2 to: board width by: 2)\x0a\x09\x09\x09\x09do: [ :x |\x0a\x09\x09\x09\x09\x09| p |\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09p := x@y.\x0a\x09\x09\x09\x09\x09(carver canCarveAt: p) ifTrue: [ self generatePassageAt: p ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:by:", "height", "width", "@", "ifTrue:", "canCarveAt:", "generatePassageAt:"]
}),
$globals.MapGenerator);

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
}, function($ctx1) {$ctx1.fill(self,"generateRoom",{w:w,h:h},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateRoom\x0a\x09| w h |\x0a\x09\x0a\x09w := (board width / 2) floor.\x0a\x09h := (board height / 2) floor.\x0a\x0a\x09^ (w atRandom * 2) @ (h atRandom * 2)\x0a\x09\x09extent: (3 atRandom * 2 + 2) @ (3 atRandom * 2 + 2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["floor", "/", "width", "height", "extent:", "@", "*", "atRandom", "+"]
}),
$globals.MapGenerator);

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
}, function($ctx1) {$ctx1.fill(self,"generateRooms",{rooms:rooms},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateRooms\x0a\x09| rooms |\x0a\x09\x0a\x09rooms := Array new.\x0a\x0a\x09roomAttempts timesRepeat: [\x0a\x09\x09| room |\x0a\x09\x09\x0a\x09\x09room := self generateRoom.\x0a\x09\x09rooms\x0a\x09\x09\x09detect: [ :each | each overlapsBorders: room ]\x0a\x09\x09\x09ifNone: [\x0a\x09\x09\x09\x09(board inside containsRect: room)\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09carver carveRoom: room.\x0a\x09\x09\x09\x09\x09\x09rooms add: room ] ] ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "timesRepeat:", "generateRoom", "detect:ifNone:", "overlapsBorders:", "ifTrue:", "containsRect:", "inside", "carveRoom:", "add:"]
}),
$globals.MapGenerator);

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
($globals.MapGenerator.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
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
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09board ifNil: [ board := (Board width: 45 height: 45)].\x0a\x09roomAttempts := 30.",
referencedClasses: ["Board"],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifNil:", "width:height:"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "mergeRegions",
protocol: "merging",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._cacheConnectors();
$recv($self["@connectors"])._valuesDo_((function(points){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@carver"])._carveAt_($recv(points)._atRandom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({points:points},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mergeRegions",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mergeRegions\x0a\x09self cacheConnectors.\x0a\x09connectors\x0a\x09\x09valuesDo: [ :points |\x0a\x09\x09\x09\x2210% chance to carve another opening?\x22\x0a\x09\x09\x09carver carveAt: points atRandom ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cacheConnectors", "valuesDo:", "carveAt:", "atRandom"]
}),
$globals.MapGenerator);

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
$1=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((1)._to_($recv($self["@board"])._width()))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=stream;
$4=$recv($recv($self["@board"])._at_($recv(x).__at(y))).__eq("wall");
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
}, function($ctx1) {$ctx1.fill(self,"print",{stream:stream},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "print\x0a\x09| stream |\x0a\x09\x0a\x09stream := StringStream on: ''.\x0a\x09\x0a\x09(1 to: board height) do: [ :y |\x0a\x09\x09(1 to: board width) do: [ :x |\x0a\x09\x09\x09stream\x0a\x09\x09\x09\x09nextPut: (((board at: x@y) = #wall)\x0a\x09\x09\x09\x09\x09ifTrue: [ '█']\x0a\x09\x09\x09\x09\x09ifFalse: [ \x22String fromCharCode: ('0' charCodeAt: 1) + (board at: x@y)\x22 ' ' ]) ].\x0a\x09\x09stream crlf ].\x0a\x09console\x0a\x09\x09\x22clear;\x22\x0a\x09\x09log: stream contents",
referencedClasses: ["StringStream"],
//>>excludeEnd("ide");
messageSends: ["on:", "do:", "to:", "height", "width", "nextPut:", "ifTrue:ifFalse:", "=", "at:", "@", "crlf", "log:", "contents"]
}),
$globals.MapGenerator);

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
var $1,$2,$6,$7,$5,$4,$3;
stream=$recv($globals.StringStream)._on_("");
$1=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((1)._to_($recv($self["@board"])._width()))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=stream;
$6=$self["@board"];
$7=$recv(x).__at(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._at_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("wall");
if($core.assert($4)){
$3="█";
} else {
$3=$recv($globals.String)._fromCharCode_($recv("0"._charCodeAt_((1))).__plus($recv($self["@board"])._at_($recv(x).__at(y))));
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
}, function($ctx1) {$ctx1.fill(self,"printDebug",{stream:stream},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printDebug\x0a\x09| stream |\x0a\x09\x0a\x09stream := StringStream on: ''.\x0a\x09\x0a\x09(1 to: board height) do: [ :y |\x0a\x09\x09(1 to: board width) do: [ :x |\x0a\x09\x09\x09stream\x0a\x09\x09\x09\x09nextPut: (((board at: x@y) = #wall)\x0a\x09\x09\x09\x09\x09ifTrue: [ '█']\x0a\x09\x09\x09\x09\x09ifFalse: [ String fromCharCode: ('0' charCodeAt: 1) + (board at: x@y) \x22' '\x22 ]) ].\x0a\x09\x09stream crlf ].\x0a\x09console\x0a\x09\x09\x22clear;\x22\x0a\x09\x09log: stream contents",
referencedClasses: ["StringStream", "String"],
//>>excludeEnd("ide");
messageSends: ["on:", "do:", "to:", "height", "width", "nextPut:", "ifTrue:ifFalse:", "=", "at:", "@", "fromCharCode:", "+", "charCodeAt:", "crlf", "log:", "contents"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "renderDebugOn:",
protocol: "rendering",
fn: function (html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$7,$8,$6,$5,$4,$2;
$1=$recv(html)._pre();
$3=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._collect_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv((1)._to_($recv($self["@board"])._width()))._collect_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$self["@board"];
$8=$recv(x).__at(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._at_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("wall");
if($core.assert($5)){
return "█";
} else {
return $recv($globals.String)._fromCharCode_($recv("0"._charCodeAt_((1))).__plus($recv($self["@board"])._at_($recv(x).__at(y))));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv($4)._add_($recv($globals.String)._crlf());
return $recv($4)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderDebugOn:",{html:html},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderDebugOn: html\x0a\x09html pre\x0a\x09\x09with: ((1 to: board height) collect: [ :y |\x0a \x09\x09\x09\x09((1 to: board width) collect: [ :x |\x0a\x09\x09\x09 \x09\x09((board at: x@y) = #wall\x0a\x09\x09\x09\x09\x09\x09ifTrue: [ '█']\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ String fromCharCode: ('0' charCodeAt: 1) + (board at: x@y) ]) ])\x0a\x09\x09\x09\x09\x09\x09\x09add: String crlf;\x0a\x09\x09\x09\x09\x09\x09\x09yourself ] )",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["with:", "pre", "collect:", "to:", "height", "add:", "width", "ifTrue:ifFalse:", "=", "at:", "@", "fromCharCode:", "+", "charCodeAt:", "crlf", "yourself"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function (html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$4,$6,$2;
$1=$recv(html)._pre();
$3=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._collect_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv((1)._to_($recv($self["@board"])._width()))._collect_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv($recv($self["@board"])._at_($recv(x).__at(y))).__eq("wall");
if($core.assert($5)){
return "█";
} else {
return "░";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv($4)._add_($recv($globals.String)._crlf());
$6=$recv($4)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_($2);
$recv($1)._class_("map");
$self["@output"]=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09\x22html button\x0a\x09\x09with: '++';\x0a\x09\x09onClick: [].\x22\x0a\x09output := html pre\x0a\x09\x09with: ((1 to: board height) collect: [ :y |\x0a \x09\x09\x09\x09((1 to: board width) collect: [ :x |\x0a\x09\x09\x09 \x09\x09((board at: x@y) = #wall\x0a\x09\x09\x09\x09\x09\x09ifTrue: [ '█']\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ '░' ]) ])\x0a\x09\x09\x09\x09\x09\x09\x09add: String crlf;\x0a\x09\x09\x09\x09\x09\x09\x09yourself ] );\x0a\x09\x09class: 'map';\x0a\x09\x09yourself",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["with:", "pre", "collect:", "to:", "height", "add:", "width", "ifTrue:ifFalse:", "=", "at:", "@", "crlf", "yourself", "class:"]
}),
$globals.MapGenerator);

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
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "update",
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
return $self._renderOn_(h);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({h:h},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09output contents: [ :h | self renderOn: h ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderOn:"]
}),
$globals.MapGenerator);


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
$recv($1)._board_($recv($globals.Board)._extent_(aPoint));
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},$globals.MapGenerator.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^ self basicNew\x0a\x09\x09board: (Board extent: aPoint);\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: ["Board"],
//>>excludeEnd("ide");
messageSends: ["board:", "basicNew", "extent:", "initialize", "yourself"]
}),
$globals.MapGenerator.a$cls);

});
