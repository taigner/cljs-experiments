// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_experiments.drawing');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom');
cljs_experiments.drawing.canvas_from = (function canvas_from(id){return goog.dom.getElement(id);
});
cljs_experiments.drawing.context_from = (function context_from(canvas){return canvas.getContext("2d");
});
cljs_experiments.drawing.width = (function width(canvas){return canvas.width;
});
cljs_experiments.drawing.height = (function height(canvas){return canvas.height;
});
cljs_experiments.drawing.clear = (function clear(ctx,width,height){return ctx.clearRect(0,0,width,height);
});
cljs_experiments.drawing.circle = (function circle(ctx,p__4852,p__4853){var vec__4856 = p__4852;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4856,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4856,1,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4856,2,null);var vec__4857 = p__4853;var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4857,0,null);var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4857,1,null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4857,2,null);ctx.beginPath();
ctx.arc(x,y,d,0,(2 * Math.PI),false);
ctx.closePath();
ctx.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
return ctx.stroke();
});
cljs_experiments.drawing.draw_mouse_pos = (function draw_mouse_pos(ctx,p__4858,r,color){var vec__4860 = p__4858;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4860,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4860,1,null);return cljs_experiments.drawing.circle(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),color);
});
cljs_experiments.drawing.draw_vehicle = (function draw_vehicle(ctx,p__4861,r,color){var vec__4863 = p__4861;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4863,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4863,1,null);return cljs_experiments.drawing.circle(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),color);
});
