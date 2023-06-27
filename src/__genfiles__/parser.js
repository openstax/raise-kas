// This is a @generated file
import _ from "underscore";

/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,17],$V2=[1,13],$V3=[1,14],$V4=[1,15],$V5=[1,32],$V6=[1,22],$V7=[1,23],$V8=[1,24],$V9=[1,25],$Va=[1,26],$Vb=[1,33],$Vc=[1,27],$Vd=[1,28],$Ve=[1,29],$Vf=[1,30],$Vg=[1,20],$Vh=[1,36],$Vi=[1,37],$Vj=[5,6,8,10,33,35,41,43,45],$Vk=[1,39],$Vl=[1,40],$Vm=[5,6,8,10,12,14,16,19,21,22,28,29,30,31,32,33,34,35,37,39,41,42,43,44,45,46],$Vn=[10,16,19,21,22,28,29,30,31,32,34,37,39,42,43,44,46],$Vo=[5,6,8,10,12,14,16,18,19,21,22,28,29,30,31,32,33,34,35,37,39,41,42,43,44,45,46];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"equation":3,"expression":4,"SIGN":5,"EOF":6,"additive":7,"+":8,"multiplicative":9,"-":10,"triglog":11,"*":12,"negative":13,"/":14,"trig":15,"TRIG":16,"trigfunc":17,"^":18,"TRIGINV":19,"logbase":20,"ln":21,"log":22,"_":23,"subscriptable":24,"power":25,"primitive":26,"variable":27,"VAR":28,"CONST":29,"INT":30,"FLOAT":31,"{":32,"}":33,"(":34,")":35,"function":36,"FUNC":37,"invocation":38,"sqrt":39,"[":40,"]":41,"abs":42,"|":43,"LEFT|":44,"RIGHT|":45,"FRAC":46,"$accept":0,"$end":1},
terminals_: {2:"error",5:"SIGN",6:"EOF",8:"+",10:"-",12:"*",14:"/",16:"TRIG",18:"^",19:"TRIGINV",21:"ln",22:"log",23:"_",28:"VAR",29:"CONST",30:"INT",31:"FLOAT",32:"{",33:"}",34:"(",35:")",37:"FUNC",39:"sqrt",40:"[",41:"]",42:"abs",43:"|",44:"LEFT|",45:"RIGHT|",46:"FRAC"},
productions_: [0,[3,4],[3,2],[3,1],[4,1],[7,3],[7,3],[7,1],[9,2],[9,3],[9,3],[9,1],[13,2],[13,1],[15,1],[17,1],[17,3],[17,1],[20,1],[20,1],[20,3],[11,2],[11,2],[11,1],[25,3],[25,1],[27,1],[24,3],[24,1],[24,1],[24,1],[24,1],[24,3],[24,3],[36,1],[38,4],[38,4],[38,7],[38,4],[38,3],[38,3],[38,4],[26,1],[26,1],[26,7]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return new yy.Eq($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 2:
return $$[$0-1];
break;
case 3:
return new yy.Add([]);
break;
case 4: case 7: case 11: case 13: case 15: case 20: case 23: case 25: case 42: case 43:
this.$ = $$[$0];
break;
case 5:
this.$ = yy.Add.createOrAppend($$[$0-2], $$[$0]);
break;
case 6:
this.$ = yy.Add.createOrAppend($$[$0-2], yy.Mul.handleNegative($$[$0], "subtract"));
break;
case 8:
this.$ = yy.Mul.fold(yy.Mul.createOrAppend($$[$0-1], $$[$0]));
break;
case 9:
this.$ = yy.Mul.fold(yy.Mul.createOrAppend($$[$0-2], $$[$0]));
break;
case 10:
this.$ = yy.Mul.fold(yy.Mul.handleDivide($$[$0-2], $$[$0]));
break;
case 12:
this.$ = yy.Mul.handleNegative($$[$0]);
break;
case 14: case 17:
this.$ = [yytext];
break;
case 16:
this.$ = $$[$0-2].concat($$[$0]);
break;
case 18:
this.$ = yy.Log.natural();
break;
case 19:
this.$ = yy.Log.common();
break;
case 21:
this.$ = yy.Trig.create($$[$0-1], $$[$0]);
break;
case 22:
this.$ = yy.Log.create($$[$0-1], $$[$0]);
break;
case 24:
this.$ = new yy.Pow($$[$0-2], $$[$0]);
break;
case 26: case 34:
this.$ = yytext;
break;
case 27:
this.$ = new yy.Var($$[$0-2], $$[$0]);
break;
case 28:
this.$ = new yy.Var($$[$0]);
break;
case 29:
this.$ = new yy.Const(yytext.toLowerCase());
break;
case 30:
this.$ = yy.Int.create(Number(yytext));
break;
case 31:
this.$ = yy.Float.create(Number(yytext));
break;
case 32:
this.$ = $$[$0-1].completeParse();
break;
case 33:
this.$ = $$[$0-1].completeParse().addHint('parens');
break;
case 35: case 36:
this.$ = yy.Pow.sqrt($$[$0-1]);
break;
case 37:
this.$ = new yy.Pow.nthroot($$[$0-1], $$[$0-4]);
break;
case 38: case 39: case 40:
this.$ = new yy.Abs($$[$0-1]);
break;
case 41:
this.$ = new yy.Func($$[$0-3], $$[$0-1]);
break;
case 44:
this.$ = yy.Mul.handleDivide($$[$0-4], $$[$0-1]);
break;
}
},
table: [{3:1,4:2,6:[1,3],7:4,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{1:[3]},{5:[1,34],6:[1,35]},{1:[2,3]},o([5,6],[2,4],{8:$Vh,10:$Vi}),o($Vj,[2,7],{17:9,20:10,25:11,15:12,26:16,24:18,38:19,27:21,36:31,11:38,12:$Vk,14:$Vl,16:$V1,19:$V2,21:$V3,22:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,37:$Vb,39:$Vc,42:$Vd,44:$Vf,46:$Vg}),o($Vm,[2,11]),{10:$V0,11:8,13:41,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},o($Vm,[2,13]),{10:$V0,11:8,13:42,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{10:$V0,11:8,13:43,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},o($Vm,[2,23]),o($Vn,[2,15],{18:[1,44]}),o($Vn,[2,17]),o($Vn,[2,18]),o($Vn,[2,19],{23:[1,45]}),o($Vm,[2,25],{18:[1,46]}),o([10,16,18,19,21,22,28,29,30,31,32,34,37,39,42,43,44,46],[2,14]),o($Vo,[2,42]),o($Vo,[2,43]),{32:[1,47]},o($Vo,[2,28],{23:[1,48]}),o($Vo,[2,29]),o($Vo,[2,30]),o($Vo,[2,31]),{7:49,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{7:50,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{32:[1,52],34:[1,51],40:[1,53]},{34:[1,54]},{7:55,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{7:56,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{34:[1,57]},o([5,6,8,10,12,14,16,18,19,21,22,23,28,29,30,31,32,33,34,35,37,39,41,42,43,44,45,46],[2,26]),{34:[2,34]},{4:58,7:4,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{1:[2,2]},{9:59,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{9:60,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},o($Vm,[2,8]),{10:$V0,11:8,13:61,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{10:$V0,11:8,13:62,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},o($Vm,[2,12]),o($Vm,[2,21]),o($Vm,[2,22]),{10:$V0,11:8,13:63,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{24:64,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va},{10:$V0,11:8,13:65,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{7:66,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{24:67,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va},{8:$Vh,10:$Vi,33:[1,68]},{8:$Vh,10:$Vi,35:[1,69]},{7:70,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{7:71,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{7:72,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{7:73,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{8:$Vh,10:$Vi,43:[1,74]},{8:$Vh,10:$Vi,45:[1,75]},{7:76,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{6:[1,77]},o($Vj,[2,5],{17:9,20:10,25:11,15:12,26:16,24:18,38:19,27:21,36:31,11:38,12:$Vk,14:$Vl,16:$V1,19:$V2,21:$V3,22:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,37:$Vb,39:$Vc,42:$Vd,44:$Vf,46:$Vg}),o($Vj,[2,6],{17:9,20:10,25:11,15:12,26:16,24:18,38:19,27:21,36:31,11:38,12:$Vk,14:$Vl,16:$V1,19:$V2,21:$V3,22:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,37:$Vb,39:$Vc,42:$Vd,44:$Vf,46:$Vg}),o($Vm,[2,9]),o($Vm,[2,10]),o($Vn,[2,16]),o($Vn,[2,20]),o($Vm,[2,24]),{8:$Vh,10:$Vi,33:[1,78]},o($Vo,[2,27]),o($Vo,[2,32]),o($Vo,[2,33]),{8:$Vh,10:$Vi,35:[1,79]},{8:$Vh,10:$Vi,33:[1,80]},{8:$Vh,10:$Vi,41:[1,81]},{8:$Vh,10:$Vi,35:[1,82]},o($Vo,[2,39]),o($Vo,[2,40]),{8:$Vh,10:$Vi,35:[1,83]},{1:[2,1]},{32:[1,84]},o($Vo,[2,35]),o($Vo,[2,36]),{32:[1,85]},o($Vo,[2,38]),o($Vo,[2,41]),{7:86,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{7:87,9:5,10:$V0,11:8,13:6,15:12,16:$V1,17:9,19:$V2,20:10,21:$V3,22:$V4,24:18,25:11,26:16,27:21,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,34:$Va,36:31,37:$Vb,38:19,39:$Vc,42:$Vd,43:$Ve,44:$Vf,46:$Vg},{8:$Vh,10:$Vi,33:[1,88]},{8:$Vh,10:$Vi,33:[1,89]},o($Vo,[2,44]),o($Vo,[2,37])],
defaultActions: {3:[2,3],33:[2,34],35:[2,2],77:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    //_token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip \space */
break;
case 2:/* skip '\ ' */
break;
case 3:return "INT"
break;
case 4:return "FLOAT"
break;
case 5:return "^"
break;
case 6:return "*"
break;
case 7:return "*"
break;
case 8:return "*"
break;
case 9:return "*"
break;
case 10:return "/"
break;
case 11:return "/"
break;
case 12:return "-"
break;
case 13:return "-"
break;
case 14:return "+"
break;
case 15:return "^"
break;
case 16:return "("
break;
case 17:return ")"
break;
case 18:return "("
break;
case 19:return ")"
break;
case 20:return "["
break;
case 21:return "]"
break;
case 22:return "{"
break;
case 23:return "}"
break;
case 24:return "{"
break;
case 25:return "}"
break;
case 26:return "_"
break;
case 27:return "|"
break;
case 28:return "LEFT|"
break;
case 29:return "RIGHT|"
break;
case 30:return "!"
break;
case 31:return "SIGN"
break;
case 32:yy_.yytext = "<="; return "SIGN"
break;
case 33:yy_.yytext = ">="; return "SIGN"
break;
case 34:yy_.yytext = "<="; return "SIGN"
break;
case 35:yy_.yytext = ">="; return "SIGN"
break;
case 36:yy_.yytext = "<>"; return "SIGN"
break;
case 37:yy_.yytext = "<>"; return "SIGN"
break;
case 38:yy_.yytext = "<>"; return "SIGN"
break;
case 39:yy_.yytext = "<>"; return "SIGN"
break;
case 40:yy_.yytext = "<="; return "SIGN"
break;
case 41:yy_.yytext = ">="; return "SIGN"
break;
case 42:return "FRAC"
break;
case 43:return "FRAC"
break;
case 44:return "sqrt"
break;
case 45:return "abs"
break;
case 46:return "ln"
break;
case 47:return "log"
break;
case 48:return "TRIG"
break;
case 49:return "TRIG"
break;
case 50:return "TRIG"
break;
case 51:return "TRIG"
break;
case 52:yy_.yytext = "sin"; return "TRIG"
break;
case 53:yy_.yytext = "cos"; return "TRIG"
break;
case 54:yy_.yytext = "tan"; return "TRIG"
break;
case 55:yy_.yytext = "csc"; return "TRIG"
break;
case 56:yy_.yytext = "sec"; return "TRIG"
break;
case 57:yy_.yytext = "cot"; return "TRIG"
break;
case 58:yy_.yytext = "arcsin"; return "TRIG"
break;
case 59:yy_.yytext = "arccos"; return "TRIG"
break;
case 60:yy_.yytext = "arctan"; return "TRIG"
break;
case 61:yy_.yytext = "arccsc"; return "TRIG"
break;
case 62:yy_.yytext = "arcsec"; return "TRIG"
break;
case 63:yy_.yytext = "arccot"; return "TRIG"
break;
case 64:return "TRIGINV"
break;
case 65:return "TRIGINV"
break;
case 66:yy_.yytext = "sinh"; return "TRIG"
break;
case 67:yy_.yytext = "cosh"; return "TRIG"
break;
case 68:yy_.yytext = "tanh"; return "TRIG"
break;
case 69:yy_.yytext = "csch"; return "TRIG"
break;
case 70:yy_.yytext = "sech"; return "TRIG"
break;
case 71:yy_.yytext = "tanh"; return "TRIG"
break;
case 72:return "CONST"
break;
case 73:yy_.yytext = "pi"; return "CONST"
break;
case 74:yy_.yytext = "pi"; return "CONST"
break;
case 75:return "VAR"
break;
case 76:yy_.yytext = "theta"; return "VAR"
break;
case 77:yy_.yytext = "theta"; return "VAR"
break;
case 78:return "VAR"
break;
case 79:yy_.yytext = "phi"; return "VAR"
break;
case 80:yy_.yytext = "phi"; return "VAR"
break;
case 81:return yy.symbolLexer(yy_.yytext)
break;
case 82:return "EOF"
break;
case 83:return "INVALID"
break;
case 84:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:\s+)/,/^(?:\\space)/,/^(?:\\ )/,/^(?:[0-9]+\.?)/,/^(?:([0-9]+)?\.[0-9]+)/,/^(?:\*\*)/,/^(?:\*)/,/^(?:\\cdot|·)/,/^(?:\\times|×)/,/^(?:\\ast)/,/^(?:\/)/,/^(?:\\div|÷)/,/^(?:-)/,/^(?:−)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:\\left\()/,/^(?:\\right\))/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:\\left\{)/,/^(?:\\right\})/,/^(?:_)/,/^(?:\|)/,/^(?:\\left\|)/,/^(?:\\right\|)/,/^(?:\!)/,/^(?:<=|>=|<>|<|>|=)/,/^(?:\\le)/,/^(?:\\ge)/,/^(?:\\leq)/,/^(?:\\geq)/,/^(?:=\/=)/,/^(?:\\ne)/,/^(?:\\neq)/,/^(?:≠)/,/^(?:≤)/,/^(?:≥)/,/^(?:\\frac)/,/^(?:\\dfrac)/,/^(?:sqrt|\\sqrt)/,/^(?:abs|\\abs)/,/^(?:ln|\\ln)/,/^(?:log|\\log)/,/^(?:sin|cos|tan)/,/^(?:csc|sec|cot)/,/^(?:sinh|cosh|tanh)/,/^(?:csch|sech|coth)/,/^(?:\\sin)/,/^(?:\\cos)/,/^(?:\\tan)/,/^(?:\\csc)/,/^(?:\\sec)/,/^(?:\\cot)/,/^(?:\\arcsin)/,/^(?:\\arccos)/,/^(?:\\arctan)/,/^(?:\\arccsc)/,/^(?:\\arcsec)/,/^(?:\\arccot)/,/^(?:arcsin|arccos|arctan)/,/^(?:arccsc|arcsec|arccot)/,/^(?:\\sinh)/,/^(?:\\cosh)/,/^(?:\\tanh)/,/^(?:\\csch)/,/^(?:\\sech)/,/^(?:\\coth)/,/^(?:pi)/,/^(?:π)/,/^(?:\\pi)/,/^(?:theta)/,/^(?:θ)/,/^(?:\\theta)/,/^(?:phi)/,/^(?:φ)/,/^(?:\\phi)/,/^(?:[a-zA-Z])/,/^(?:$)/,/^(?:.)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();

export {parser};
