// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_experiments.seek');
goog.require('cljs.core');
goog.require('cljs_experiments.drawing');
goog.require('cljs_experiments.drawing');
goog.require('cljs_experiments.vehicle');
goog.require('cljs_experiments.vehicle');
goog.require('cljs_experiments.vector');
goog.require('cljs_experiments.vector');
goog.require('cljs_experiments.core');
goog.require('cljs_experiments.core');
cljs.core.enable_console_print_BANG_();
cljs_experiments.seek.canvas = cljs_experiments.drawing.canvas_from("canvas");
cljs_experiments.seek.ctx = cljs_experiments.drawing.context_from(cljs_experiments.seek.canvas);
cljs_experiments.seek.options = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$24,3,cljs.core.constant$keyword$25,0.1,cljs.core.constant$keyword$27,6], null);
cljs_experiments.seek.init_state = (function init_state(){var w = window.innerWidth;var h = window.innerHeight;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$16,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w / 2),(h / 2)], null),cljs.core.constant$keyword$28,cljs_experiments.vehicle.new_vehicle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w / 2),(h / 2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-2], null))], null);
});
cljs_experiments.seek.update_BANG_ = (function update_BANG_(state,dt,options){var prev = cljs.core.deref(state);var vehicle = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(prev);var mouse = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(prev);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.constant$keyword$28,cljs_experiments.vehicle.update(cljs_experiments.vehicle.seek(vehicle,mouse,options),dt,options));
});
cljs_experiments.seek.render = (function render(state,p__4903,options){var vec__4905 = p__4903;var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4905,0,null);var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4905,1,null);cljs_experiments.drawing.clear(cljs_experiments.seek.ctx,w,h);
cljs_experiments.drawing.draw_mouse_pos(cljs_experiments.seek.ctx,cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(state),10,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [125,125,125], null));
return cljs_experiments.drawing.draw_vehicle(cljs_experiments.seek.ctx,cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,255,0], null));
});
cljs_experiments.seek.main = (function main(){cljs_experiments.core.init();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_experiments.seek.init_state());var options_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_experiments.seek.options);var w = cljs_experiments.drawing.width(cljs_experiments.seek.canvas);var h = cljs_experiments.drawing.height(cljs_experiments.seek.canvas);cljs_experiments.core.add_control(cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Max Speed",cljs.core.constant$keyword$18,0,cljs.core.constant$keyword$19,10,cljs.core.constant$keyword$20,1], null),options_atom);
cljs_experiments.core.add_control(cljs.core.constant$keyword$25,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Max Force",cljs.core.constant$keyword$18,0.0,cljs.core.constant$keyword$19,2.0,cljs.core.constant$keyword$20,0.05], null),options_atom);
cljs_experiments.core.add_control(cljs.core.constant$keyword$27,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,"Radius",cljs.core.constant$keyword$18,1,cljs.core.constant$keyword$19,50,cljs.core.constant$keyword$20,1], null),options_atom);
jQuery("body").on("mousemove",((function (state,options_atom,w,h){
return (function (p1__4906_SHARP_){return cljs_experiments.core.update_mouse_position_BANG_(state,p1__4906_SHARP_);
});})(state,options_atom,w,h))
);
return cljs_experiments.core.animate(((function (state,options_atom,w,h){
return (function (p1__4907_SHARP_){return cljs_experiments.seek.update_BANG_(state,p1__4907_SHARP_,cljs.core.deref(options_atom));
});})(state,options_atom,w,h))
,((function (state,options_atom,w,h){
return (function (){return cljs_experiments.seek.render(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),cljs.core.deref(options_atom));
});})(state,options_atom,w,h))
);
});
goog.exportSymbol('cljs_experiments.seek.main', cljs_experiments.seek.main);
