(ns cljs-experiments.vehicle
    (:require [cljs-experiments.vector :as v]))

(defrecord Vehicle
  [location
   velocity
   acceleration])

(def r 12)
(def desired-separation (* r 2))
(def max-speed 3)
(def max-force 0.1)

(declare sum-neighbors steering-vectors find-nearby-neighbors)

(defn apply-force [vehicle force]
  (assoc vehicle :acceleration (v/add (:acceleration vehicle) force)))

(defn update [vehicle dt]
  (let [velocity (assoc vehicle :velocity (v/limit (v/add (:velocity vehicle) (:acceleration vehicle)) max-speed))
        location (assoc velocity :location (v/add (:location velocity) (v/mult (:velocity velocity) dt)))]
    (assoc location :acceleration (v/mult (:acceleration location) 0))))

(defn seek [vehicle target dt]
  (let [desired (v/sub target (:location vehicle))
        steer (v/sub (v/mult (v/normalize desired) max-speed) (:velocity vehicle))]
    (apply-force vehicle (v/limit steer max-force))))

(defn separate [vehicle vehicles]
  (let [location (:location vehicle)
        neighbors (find-nearby-neighbors location vehicles desired-separation)
        how-many-neighbors (count neighbors)]
    (if (> how-many-neighbors 0)
      (let [diff-sum (steering-vectors location neighbors)
            sum (sum-neighbors diff-sum)
            desired (v/mult (v/normalize (v/div sum how-many-neighbors)) max-speed)
            steer (v/limit (v/sub desired (:velocity vehicle)) max-force)]
        (apply-force vehicle steer))
      vehicle)))

(defn- sum-neighbors [neighbors]
  (reduce (fn [res e] (v/add res e)) [0 0] neighbors))

(defn- steering-vectors [location neighbors]
  (map (fn [other]
    (let [other-location (:location other)
          d (v/distance location other-location)
          diff (v/sub location other-location)]
      (v/div (v/normalize diff) d))) neighbors))

(defn- find-nearby-neighbors [location vehicles desired-separation]
  (filter (fn [other]
    (let [d (v/distance location (:location other))]
      (and (> d 0) (< d desired-separation)))) vehicles))

(defn- left-x [vehicle width height]
  (let [[x y] (:location vehicle)]
    (if (< x (- r))
      (assoc vehicle :location [(+ width r) y])
      vehicle)))

(defn- left-y [vehicle width height]
  (let [[x y] (:location vehicle)]
    (if (< y (- r))
      (assoc vehicle :location [x (+ height r)])
      vehicle)))

(defn- right-x [vehicle width height]
  (let [[x y] (:location vehicle)]
    (if (> x (+ width r))
      (assoc vehicle :location [(- r) y])
      vehicle)))

(defn- right-y [vehicle width height]
  (let [[x y] (:location vehicle)]
    (if (> y (+ height r))
      (assoc vehicle :location [x (- r)])
      vehicle)))

(defn borders [vehicle width height]
  (-> vehicle
      (left-x width height)
      (left-y width height)
      (right-x width height)
      (right-y width height)))


