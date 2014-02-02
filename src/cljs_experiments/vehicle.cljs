(ns cljs-experiments.vehicle
    (:require [cljs-experiments.vector :as v]))

(defrecord Vehicle
  [location
   velocity
   acceleration])

(def max-speed 4)
(def max-force 0.1)

(defn apply-force [vehicle force]
  (assoc vehicle :acceleration (v/add (:acceleration vehicle) force)))

(defn update [vehicle dt]
  (let [velocity (assoc vehicle :velocity (v/limit (v/add (:velocity vehicle) (:acceleration vehicle)) max-speed))
        location (assoc velocity :location (v/add (:location velocity) (:velocity velocity)))]
    (assoc location :acceleration (v/mult (:acceleration location) 0))))

(defn seek [vehicle target dt]
  (let [desired (v/sub target (:location vehicle))
        steer (v/sub (v/mult (v/normalize desired) max-speed) (:velocity vehicle))]
    (apply-force vehicle (v/limit (v/mult steer dt) max-force))))
