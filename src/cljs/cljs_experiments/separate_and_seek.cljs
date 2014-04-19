(ns cljs-experiments.separate-and-seek
  (:require [goog.events :as events]
            [cljs-experiments.core :as core]
            [cljs-experiments.vector :as v]
            [cljs-experiments.vehicle :as vehicle]
            [cljs-experiments.drawing :as d]))

(enable-console-print!)

(def canvas (d/canvas-from "canvas"))
(def ctx (d/context-from canvas))
(def options {:max-speed 3 :max-force 0.1 :r 6 :desired-separation 24})
(def how-many-vehicles 30)

(defn init-state []
  (let [w (.-innerWidth js/window)
        h (.-innerHeight js/window)]
    {:mouse [(/ w 2) (/ h 2)]
     :vehicles (repeatedly how-many-vehicles #(vehicle/new-random-vehicle w h))}))

(defn update! [state dt options]
  (let [prev @state
        mouse (:mouse prev)
        vehicles (:vehicles prev)]
    (swap! state
           assoc :vehicles
           (map #(vehicle/update
                   (vehicle/separate-and-seek % vehicles mouse options)
                   dt options)
                vehicles))))

(defn render [state [w h] options]
  (d/clear ctx w h)

  (d/draw-mouse-pos ctx (:mouse state) 10 [125 125 125])
  (doseq [vehicle (:vehicles state)]
    (d/draw-vehicle ctx (:location vehicle) (:r options) [0 255 0])))

(defn ^:export main []
  (core/init)
  (let [state (atom (init-state))
        options-atom (atom options)
        w (d/width canvas)
        h (d/height canvas)]
    (core/add-control :max-speed {:name "Max Speed" :min 0 :max 10 :step 1} options-atom)
    (core/add-control :max-force {:name "Max Force" :min 0.0 :max 2.0 :step 0.05} options-atom)
    (core/add-control :desired-separation {:name "Separation" :min 1 :max 50 :step 1} options-atom)
    (core/add-control :r {:name "Radius" :min 1 :max 50 :step 1} options-atom)
    (.on (js/jQuery "body") "mousemove" #(core/update-mouse-position! state %))
    (core/animate #(update! state % @options-atom)
                  #(render @state [w h] @options-atom))))
