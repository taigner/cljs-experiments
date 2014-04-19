// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_experiments.separation');
goog.require('cljs.core');
goog.require('cljs_experiments.vector');
goog.require('goog.events');
goog.require('cljs_experiments.core');
goog.require('cljs_experiments.vehicle');
goog.require('cljs_experiments.vehicle');
goog.require('cljs_experiments.drawing');
goog.require('cljs_experiments.drawing');
goog.require('cljs_experiments.vector');
goog.require('goog.events');
goog.require('cljs_experiments.core');
cljs.core.enable_console_print_BANG_();
cljs_experiments.separation.canvas = cljs_experiments.drawing.canvas_from("canvas");
cljs_experiments.separation.ctx = cljs_experiments.drawing.context_from(cljs_experiments.separation.canvas);
cljs_experiments.separation.options = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$24,3,cljs.core.constant$keyword$25,0.1,cljs.core.constant$keyword$27,6,cljs.core.constant$keyword$26,24], null);
cljs_experiments.separation.how_many_vehicles = 80;
cljs_experiments.separation.init_state = (function init_state(){var w = window.innerWidth;var h = window.innerHeight;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$16,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w / 2),(h / 2)], null),cljs.core.constant$keyword$29,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs_experiments.separation.how_many_vehicles,((function (w,h){
return (function (){return cljs_experiments.vehicle.new_random_vehicle(w,h);
});})(w,h))
)], null);
});
cljs_experiments.separation.update_BANG_ = (function update_BANG_(state,dt,dimensions,options){var prev = cljs.core.deref(state);var mouse = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(prev);var vehicles = cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(prev);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.constant$keyword$29,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (prev,mouse,vehicles){
return (function (p1__4934_SHARP_){return cljs_experiments.vehicle.borders(cljs_experiments.vehicle.update(cljs_experiments.vehicle.separate(p1__4934_SHARP_,vehicles,options),dt,options),dimensions,cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(options));
});})(prev,mouse,vehicles))
,vehicles));
});
cljs_experiments.separation.render = (function render(state,p__4935,options){var vec__4941 = p__4935;var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4941,0,null);var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4941,1,null);cljs_experiments.drawing.clear(cljs_experiments.separation.ctx,w,h);
cljs_experiments.drawing.draw_mouse_pos(cljs_experiments.separation.ctx,cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(state),10,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [125,125,125], null));
var seq__4942 = cljs.core.seq(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(state));var chunk__4943 = null;var count__4944 = 0;var i__4945 = 0;while(true){
if((i__4945 < count__4944))
{var vehicle = chunk__4943.cljs$core$IIndexed$_nth$arity$2(null,i__4945);cljs_experiments.drawing.draw_vehicle(cljs_experiments.separation.ctx,cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle),cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,255,0], null));
{
var G__4946 = seq__4942;
var G__4947 = chunk__4943;
var G__4948 = count__4944;
var G__4949 = (i__4945 + 1);
seq__4942 = G__4946;
chunk__4943 = G__4947;
count__4944 = G__4948;
i__4945 = G__4949;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__4942);if(temp__4092__auto__)
{var seq__4942__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__4942__$1))
{var c__4229__auto__ = cljs.core.chunk_first(seq__4942__$1);{
var G__4950 = cljs.core.chunk_rest(seq__4942__$1);
var G__4951 = c__4229__auto__;
var G__4952 = cljs.core.count(c__4229__auto__);
var G__4953 = 0;
seq__4942 = G__4950;
chunk__4943 = G__4951;
count__4944 = G__4952;
i__4945 = G__4953;
continue;
}
} else
{var vehicle = cljs.core.first(seq__4942__$1);cljs_experiments.drawing.draw_vehicle(cljs_experiments.separation.ctx,cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle),cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,255,0], null));
{
var G__4954 = cljs.core.next(seq__4942__$1);
var G__4955 = null;
var G__4956 = 0;
var G__4957 = 0;
seq__4942 = G__4954;
chunk__4943 = G__4955;
count__4944 = G__4956;
i__4945 = G__4957;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs_experiments.separation.main = (function main(){cljs_experiments.core.init();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_experiments.separation.init_state());var options_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_experiments.separation.options);var w = cljs_experiments.drawing.width(cljs_experiments.separation.canvas);var h = cljs_experiments.drawing.height(cljs_experiments.separation.canvas);cljs_experiments.core.add_control(cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Max Speed",cljs.core.constant$keyword$18,0,cljs.core.constant$keyword$19,10,cljs.core.constant$keyword$20,1], null),options_atom);
cljs_experiments.core.add_control(cljs.core.constant$keyword$25,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Max Force",cljs.core.constant$keyword$18,0.0,cljs.core.constant$keyword$19,2.0,cljs.core.constant$keyword$20,0.05], null),options_atom);
cljs_experiments.core.add_control(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Separation",cljs.core.constant$keyword$18,1,cljs.core.constant$keyword$19,50,cljs.core.constant$keyword$20,1], null),options_atom);
cljs_experiments.core.add_control(cljs.core.constant$keyword$27,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Radius",cljs.core.constant$keyword$18,1,cljs.core.constant$keyword$19,50,cljs.core.constant$keyword$20,1], null),options_atom);
jQuery("body").on("mousemove",((function (state,options_atom,w,h){
return (function (p1__4958_SHARP_){return cljs_experiments.core.update_mouse_position_BANG_(state,p1__4958_SHARP_);
});})(state,options_atom,w,h))
);
return cljs_experiments.core.animate(((function (state,options_atom,w,h){
return (function (p1__4959_SHARP_){return cljs_experiments.separation.update_BANG_(state,p1__4959_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),cljs.core.deref(options_atom));
});})(state,options_atom,w,h))
,((function (state,options_atom,w,h){
return (function (){return cljs_experiments.separation.render(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),cljs.core.deref(options_atom));
});})(state,options_atom,w,h))
);
});
goog.exportSymbol('cljs_experiments.separation.main', cljs_experiments.separation.main);
