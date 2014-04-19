// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_experiments.separate_and_seek');
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
cljs_experiments.separate_and_seek.canvas = cljs_experiments.drawing.canvas_from("canvas");
cljs_experiments.separate_and_seek.ctx = cljs_experiments.drawing.context_from(cljs_experiments.separate_and_seek.canvas);
cljs_experiments.separate_and_seek.options = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$24,3,cljs.core.constant$keyword$25,0.1,cljs.core.constant$keyword$27,6,cljs.core.constant$keyword$26,24], null);
cljs_experiments.separate_and_seek.how_many_vehicles = 30;
cljs_experiments.separate_and_seek.init_state = (function init_state(){var w = window.innerWidth;var h = window.innerHeight;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$16,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w / 2),(h / 2)], null),cljs.core.constant$keyword$29,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs_experiments.separate_and_seek.how_many_vehicles,((function (w,h){
return (function (){return cljs_experiments.vehicle.new_random_vehicle(w,h);
});})(w,h))
)], null);
});
cljs_experiments.separate_and_seek.update_BANG_ = (function update_BANG_(state,dt,options){var prev = cljs.core.deref(state);var mouse = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(prev);var vehicles = cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(prev);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.constant$keyword$29,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (prev,mouse,vehicles){
return (function (p1__4908_SHARP_){return cljs_experiments.vehicle.update(cljs_experiments.vehicle.separate_and_seek(p1__4908_SHARP_,vehicles,mouse,options),dt,options);
});})(prev,mouse,vehicles))
,vehicles));
});
cljs_experiments.separate_and_seek.render = (function render(state,p__4909,options){var vec__4915 = p__4909;var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4915,0,null);var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4915,1,null);cljs_experiments.drawing.clear(cljs_experiments.separate_and_seek.ctx,w,h);
cljs_experiments.drawing.draw_mouse_pos(cljs_experiments.separate_and_seek.ctx,cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(state),10,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [125,125,125], null));
var seq__4916 = cljs.core.seq(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(state));var chunk__4917 = null;var count__4918 = 0;var i__4919 = 0;while(true){
if((i__4919 < count__4918))
{var vehicle = chunk__4917.cljs$core$IIndexed$_nth$arity$2(null,i__4919);cljs_experiments.drawing.draw_vehicle(cljs_experiments.separate_and_seek.ctx,cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle),cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,255,0], null));
{
var G__4920 = seq__4916;
var G__4921 = chunk__4917;
var G__4922 = count__4918;
var G__4923 = (i__4919 + 1);
seq__4916 = G__4920;
chunk__4917 = G__4921;
count__4918 = G__4922;
i__4919 = G__4923;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__4916);if(temp__4092__auto__)
{var seq__4916__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__4916__$1))
{var c__4229__auto__ = cljs.core.chunk_first(seq__4916__$1);{
var G__4924 = cljs.core.chunk_rest(seq__4916__$1);
var G__4925 = c__4229__auto__;
var G__4926 = cljs.core.count(c__4229__auto__);
var G__4927 = 0;
seq__4916 = G__4924;
chunk__4917 = G__4925;
count__4918 = G__4926;
i__4919 = G__4927;
continue;
}
} else
{var vehicle = cljs.core.first(seq__4916__$1);cljs_experiments.drawing.draw_vehicle(cljs_experiments.separate_and_seek.ctx,cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle),cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,255,0], null));
{
var G__4928 = cljs.core.next(seq__4916__$1);
var G__4929 = null;
var G__4930 = 0;
var G__4931 = 0;
seq__4916 = G__4928;
chunk__4917 = G__4929;
count__4918 = G__4930;
i__4919 = G__4931;
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
cljs_experiments.separate_and_seek.main = (function main(){cljs_experiments.core.init();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_experiments.separate_and_seek.init_state());var options_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_experiments.separate_and_seek.options);var w = cljs_experiments.drawing.width(cljs_experiments.separate_and_seek.canvas);var h = cljs_experiments.drawing.height(cljs_experiments.separate_and_seek.canvas);cljs_experiments.core.add_control(cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Max Speed",cljs.core.constant$keyword$18,0,cljs.core.constant$keyword$19,10,cljs.core.constant$keyword$20,1], null),options_atom);
cljs_experiments.core.add_control(cljs.core.constant$keyword$25,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Max Force",cljs.core.constant$keyword$18,0.0,cljs.core.constant$keyword$19,2.0,cljs.core.constant$keyword$20,0.05], null),options_atom);
cljs_experiments.core.add_control(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Separation",cljs.core.constant$keyword$18,1,cljs.core.constant$keyword$19,50,cljs.core.constant$keyword$20,1], null),options_atom);
cljs_experiments.core.add_control(cljs.core.constant$keyword$27,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Radius",cljs.core.constant$keyword$18,1,cljs.core.constant$keyword$19,50,cljs.core.constant$keyword$20,1], null),options_atom);
jQuery("body").on("mousemove",((function (state,options_atom,w,h){
return (function (p1__4932_SHARP_){return cljs_experiments.core.update_mouse_position_BANG_(state,p1__4932_SHARP_);
});})(state,options_atom,w,h))
);
return cljs_experiments.core.animate(((function (state,options_atom,w,h){
return (function (p1__4933_SHARP_){return cljs_experiments.separate_and_seek.update_BANG_(state,p1__4933_SHARP_,cljs.core.deref(options_atom));
});})(state,options_atom,w,h))
,((function (state,options_atom,w,h){
return (function (){return cljs_experiments.separate_and_seek.render(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),cljs.core.deref(options_atom));
});})(state,options_atom,w,h))
);
});
goog.exportSymbol('cljs_experiments.separate_and_seek.main', cljs_experiments.separate_and_seek.main);
