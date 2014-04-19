// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_experiments.core');
goog.require('cljs.core');
cljs_experiments.core.last_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now());
cljs_experiments.core.animation_frame = (function (){var or__3481__auto__ = window.requestAnimationFrame;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = window.webkitRequestAnimationFrame;if(cljs.core.truth_(or__3481__auto____$1))
{return or__3481__auto____$1;
} else
{var or__3481__auto____$2 = window.mozRequestAnimationFrame;if(cljs.core.truth_(or__3481__auto____$2))
{return or__3481__auto____$2;
} else
{var or__3481__auto____$3 = window.oRequestAnimationFrame;if(cljs.core.truth_(or__3481__auto____$3))
{return or__3481__auto____$3;
} else
{return window.msRequestAnimationFrame;
}
}
}
}
})();
cljs_experiments.core.init = (function init(){var canvas = jQuery("#canvas");canvas.attr("width",window.innerWidth);
return canvas.attr("height",window.innerHeight);
});
cljs_experiments.core.update_mouse_position_BANG_ = (function update_mouse_position_BANG_(state,event){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.constant$keyword$16,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.pageX,event.pageY], null));
});
cljs_experiments.core.add_control = (function add_control(key,control_options,options_atom){var control = jQuery("<div/>");var label = jQuery("<span/>");var slider = jQuery("<input/>");label.html([cljs.core.str(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(control_options))].join(''));
slider.attr("type","range").attr("min",cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(control_options)).attr("max",cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(control_options)).attr("step",cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(control_options)).attr("class","slider").attr("value",(key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options_atom)) : key.call(null,cljs.core.deref(options_atom)))).on("input",((function (control,label,slider){
return (function (){var me = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(options_atom,cljs.core.assoc,key,me.value);
});})(control,label,slider))
);
return control.append(label).append(slider).appendTo("#controls");
});
cljs_experiments.core.animate = (function animate(update_fn_BANG_,render_fn){var next_loop = (function next_loop(){var now = Date.now();var dt = ((now - cljs.core.deref(cljs_experiments.core.last_time)) / 10);(update_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_fn_BANG_.cljs$core$IFn$_invoke$arity$1(dt) : update_fn_BANG_.call(null,dt));
(render_fn.cljs$core$IFn$_invoke$arity$0 ? render_fn.cljs$core$IFn$_invoke$arity$0() : render_fn.call(null));
cljs.core.reset_BANG_(cljs_experiments.core.last_time,now);
return (cljs_experiments.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? cljs_experiments.core.animation_frame.cljs$core$IFn$_invoke$arity$1(next_loop) : cljs_experiments.core.animation_frame.call(null,next_loop));
});
return next_loop();
});
