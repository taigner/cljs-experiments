// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_experiments.vector');
goog.require('cljs.core');
cljs_experiments.vector.add = (function add(v1,v2){return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,v1,v2);
});
cljs_experiments.vector.sub = (function sub(v1,v2){return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,v1,v2);
});
cljs_experiments.vector.mult = (function mult(v,factor){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__4960_SHARP_){return (factor * p1__4960_SHARP_);
}),v);
});
cljs_experiments.vector.div = (function div(p__4961,n){var vec__4963 = p__4961;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4963,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4963,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / n),(y / n)], null);
});
cljs_experiments.vector.dot = (function dot(v1,v2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,v1,v2));
});
cljs_experiments.vector.norm = (function norm(v){return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(cljs_experiments.vector.dot(v,v)) : Math.sqrt.call(null,cljs_experiments.vector.dot(v,v)));
});
cljs_experiments.vector.mag_squared = (function mag_squared(p__4964){var vec__4966 = p__4964;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4966,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4966,1,null);return ((x * x) + (y * y));
});
cljs_experiments.vector.mag = (function mag(v){return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(cljs_experiments.vector.mag_squared(v)) : Math.sqrt.call(null,cljs_experiments.vector.mag_squared(v)));
});
cljs_experiments.vector.normalize = (function normalize(v){var m = cljs_experiments.vector.mag(v);if((m === 0))
{return v;
} else
{return cljs_experiments.vector.div(v,m);
}
});
cljs_experiments.vector.limit = (function limit(v,factor){if((cljs_experiments.vector.mag_squared(v) > (factor * factor)))
{return cljs_experiments.vector.mult(cljs_experiments.vector.normalize(v),factor);
} else
{return v;
}
});
cljs_experiments.vector.distance = (function distance(p__4967,p__4968){var vec__4971 = p__4967;var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4971,0,null);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4971,1,null);var vec__4972 = p__4968;var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4972,0,null);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4972,1,null);var dx = (x1 - x2);var dy = (y1 - y2);return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(((dx * dx) + (dy * dy))) : Math.sqrt.call(null,((dx * dx) + (dy * dy))));
});
