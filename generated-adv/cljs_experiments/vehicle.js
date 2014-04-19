// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_experiments.vehicle');
goog.require('cljs.core');
goog.require('cljs_experiments.vector');
goog.require('cljs_experiments.vector');

/**
* @constructor
* @param {*} location
* @param {*} velocity
* @param {*} acceleration
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs_experiments.vehicle.Vehicle = (function (location,velocity,acceleration,__meta,__extmap){
this.location = location;
this.velocity = velocity;
this.acceleration = acceleration;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap(this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4067__auto____$1,k__4068__auto__,null);
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k4974,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k4974,cljs.core.constant$keyword$21))
{return self__.location;
} else
{if(cljs.core.keyword_identical_QMARK_(k4974,cljs.core.constant$keyword$22))
{return self__.velocity;
} else
{if(cljs.core.keyword_identical_QMARK_(k4974,cljs.core.constant$keyword$23))
{return self__.acceleration;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4974,else__4070__auto__);
} else
{return null;
}
}
}
}
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__4973){var self__ = this;
var this__4074__auto____$1 = this;var pred__4976 = cljs.core.keyword_identical_QMARK_;var expr__4977 = k__4075__auto__;if(cljs.core.truth_((pred__4976.cljs$core$IFn$_invoke$arity$2 ? pred__4976.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$21,expr__4977) : pred__4976.call(null,cljs.core.constant$keyword$21,expr__4977))))
{return (new cljs_experiments.vehicle.Vehicle(G__4973,self__.velocity,self__.acceleration,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4976.cljs$core$IFn$_invoke$arity$2 ? pred__4976.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22,expr__4977) : pred__4976.call(null,cljs.core.constant$keyword$22,expr__4977))))
{return (new cljs_experiments.vehicle.Vehicle(self__.location,G__4973,self__.acceleration,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__4976.cljs$core$IFn$_invoke$arity$2 ? pred__4976.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$23,expr__4977) : pred__4976.call(null,cljs.core.constant$keyword$23,expr__4977))))
{return (new cljs_experiments.vehicle.Vehicle(self__.location,self__.velocity,G__4973,self__.__meta,self__.__extmap,null));
} else
{return (new cljs_experiments.vehicle.Vehicle(self__.location,self__.velocity,self__.acceleration,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4075__auto__,G__4973),null));
}
}
}
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer(writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4082__auto__,pr_pair__4084__auto__,"#cljs-experiments.vehicle.Vehicle{",", ","}",opts__4083__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.location],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.velocity],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.acceleration],null))], null),self__.__extmap));
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4073__auto__))
{return cljs.core._assoc(this__4072__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4073__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4073__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.location],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.velocity],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.acceleration],null))], null),self__.__extmap));
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map(this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__4973){var self__ = this;
var this__4066__auto____$1 = this;return (new cljs_experiments.vehicle.Vehicle(self__.location,self__.velocity,self__.acceleration,G__4973,self__.__extmap,self__.__hash));
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new cljs_experiments.vehicle.Vehicle(self__.location,self__.velocity,self__.acceleration,self__.__meta,self__.__extmap,self__.__hash));
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
cljs_experiments.vehicle.Vehicle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$23,null], null), null),k__4077__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new cljs_experiments.vehicle.Vehicle(self__.location,self__.velocity,self__.acceleration,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4077__auto__)),null));
}
});
cljs_experiments.vehicle.Vehicle.cljs$lang$type = true;
cljs_experiments.vehicle.Vehicle.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs-experiments.vehicle/Vehicle");
});
cljs_experiments.vehicle.Vehicle.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write(writer__4102__auto__,"cljs-experiments.vehicle/Vehicle");
});
cljs_experiments.vehicle.__GT_Vehicle = (function __GT_Vehicle(location,velocity,acceleration){return (new cljs_experiments.vehicle.Vehicle(location,velocity,acceleration));
});
cljs_experiments.vehicle.map__GT_Vehicle = (function map__GT_Vehicle(G__4975){return (new cljs_experiments.vehicle.Vehicle(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__4975),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__4975),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__4975),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4975,cljs.core.constant$keyword$21,cljs.core.array_seq([cljs.core.constant$keyword$22,cljs.core.constant$keyword$23], 0))));
});
cljs_experiments.vehicle.random = (function random(min,max){return (((Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null)) * (max - min)) + min);
});
cljs_experiments.vehicle.new_vehicle = (function new_vehicle(location,velocity){return (new cljs_experiments.vehicle.Vehicle(location,velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)));
});
cljs_experiments.vehicle.new_random_vehicle = (function new_random_vehicle(width,height){return cljs_experiments.vehicle.new_vehicle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_experiments.vehicle.random(0,width),cljs_experiments.vehicle.random(0,height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null));
});
cljs_experiments.vehicle.apply_force = (function apply_force(vehicle,force){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(vehicle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23], null),cljs_experiments.vector.add,force);
});
cljs_experiments.vehicle.update = (function update(vehicle,dt,options){var velocity = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vehicle,cljs.core.constant$keyword$22,cljs_experiments.vector.limit(cljs_experiments.vector.add(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(vehicle),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(vehicle)),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(options)));var location = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(velocity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$21], null),cljs_experiments.vector.add,cljs_experiments.vector.mult(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(velocity),dt));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23], null),cljs_experiments.vector.mult,0);
});
cljs_experiments.vehicle.seek_force = (function seek_force(vehicle,target,options){var desired = cljs_experiments.vector.sub(target,cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle));var steer = cljs_experiments.vector.sub(cljs_experiments.vector.mult(cljs_experiments.vector.normalize(desired),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(options)),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(vehicle));return cljs_experiments.vector.limit(steer,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(options));
});
cljs_experiments.vehicle.seek = (function seek(vehicle,target,options){return cljs_experiments.vehicle.apply_force(vehicle,cljs_experiments.vehicle.seek_force(vehicle,target,options));
});
cljs_experiments.vehicle.separate_force = (function separate_force(vehicle,vehicles,options){var location = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle);var neighbors = (cljs_experiments.vehicle.find_nearby_neighbors.cljs$core$IFn$_invoke$arity$3 ? cljs_experiments.vehicle.find_nearby_neighbors.cljs$core$IFn$_invoke$arity$3(location,vehicles,cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(options)) : cljs_experiments.vehicle.find_nearby_neighbors.call(null,location,vehicles,cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(options)));var how_many_neighbors = cljs.core.count(neighbors);if((how_many_neighbors > 0))
{var diff_sum = (cljs_experiments.vehicle.steering_vectors.cljs$core$IFn$_invoke$arity$2 ? cljs_experiments.vehicle.steering_vectors.cljs$core$IFn$_invoke$arity$2(location,neighbors) : cljs_experiments.vehicle.steering_vectors.call(null,location,neighbors));var sum = (cljs_experiments.vehicle.sum_neighbors.cljs$core$IFn$_invoke$arity$1 ? cljs_experiments.vehicle.sum_neighbors.cljs$core$IFn$_invoke$arity$1(diff_sum) : cljs_experiments.vehicle.sum_neighbors.call(null,diff_sum));var desired = cljs_experiments.vector.mult(cljs_experiments.vector.normalize(cljs_experiments.vector.div(sum,how_many_neighbors)),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(options));var steer = cljs_experiments.vector.limit(cljs_experiments.vector.sub(desired,cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(vehicle)),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(options));return steer;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null);
}
});
cljs_experiments.vehicle.separate = (function separate(vehicle,vehicles,options){return cljs_experiments.vehicle.apply_force(vehicle,cljs_experiments.vehicle.separate_force(vehicle,vehicles,options));
});
cljs_experiments.vehicle.separate_and_seek = (function separate_and_seek(vehicle,vehicles,target,options){var separate_force = cljs_experiments.vector.mult(cljs_experiments.vehicle.separate_force(vehicle,vehicles,options),2);var seek_force = cljs_experiments.vector.mult(cljs_experiments.vehicle.seek_force(vehicle,target,options),1);var separated = cljs_experiments.vehicle.apply_force(vehicle,separate_force);return cljs_experiments.vehicle.apply_force(separated,seek_force);
});
cljs_experiments.vehicle.sum_neighbors = (function sum_neighbors(neighbors){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,e){return cljs_experiments.vector.add(res,e);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),neighbors);
});
cljs_experiments.vehicle.steering_vectors = (function steering_vectors(location,neighbors){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (other){var other_location = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(other);var d = cljs_experiments.vector.distance(location,other_location);var diff = cljs_experiments.vector.sub(location,other_location);return cljs_experiments.vector.div(cljs_experiments.vector.normalize(diff),d);
}),neighbors);
});
cljs_experiments.vehicle.find_nearby_neighbors = (function find_nearby_neighbors(location,vehicles,desired_separation){return cljs.core.filter((function (other){var d = cljs_experiments.vector.distance(location,cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(other));return ((d > 0)) && ((d < desired_separation));
}),vehicles);
});
cljs_experiments.vehicle.left_x = (function left_x(vehicle,p__4979,r){var vec__4982 = p__4979;var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4982,0,null);var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4982,1,null);var vec__4983 = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4983,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4983,1,null);if((x < (- r)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vehicle,cljs.core.constant$keyword$21,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w + r),y], null));
} else
{return vehicle;
}
});
cljs_experiments.vehicle.left_y = (function left_y(vehicle,p__4984,r){var vec__4987 = p__4984;var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4987,0,null);var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4987,1,null);var vec__4988 = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4988,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4988,1,null);if((y < (- r)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vehicle,cljs.core.constant$keyword$21,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(h + r)], null));
} else
{return vehicle;
}
});
cljs_experiments.vehicle.right_x = (function right_x(vehicle,p__4989,r){var vec__4992 = p__4989;var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4992,0,null);var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4992,1,null);var vec__4993 = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4993,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4993,1,null);if((x > (w + r)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vehicle,cljs.core.constant$keyword$21,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- r),y], null));
} else
{return vehicle;
}
});
cljs_experiments.vehicle.right_y = (function right_y(vehicle,p__4994,r){var vec__4997 = p__4994;var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4997,0,null);var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4997,1,null);var vec__4998 = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(vehicle);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4998,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4998,1,null);if((y > (h + r)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vehicle,cljs.core.constant$keyword$21,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(- r)], null));
} else
{return vehicle;
}
});
cljs_experiments.vehicle.borders = (function borders(vehicle,dimensions,r){return cljs_experiments.vehicle.right_y(cljs_experiments.vehicle.right_x(cljs_experiments.vehicle.left_y(cljs_experiments.vehicle.left_x(vehicle,dimensions,r),dimensions,r),dimensions,r),dimensions,r);
});
