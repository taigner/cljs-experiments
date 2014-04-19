(ns cljs-experiments.seek
  (:require [cljs-experiments.core :as core]
            [cljs-experiments.vector :as v]
            [cljs-experiments.vehicle :as vehicle]
            [cljs-experiments.drawing :as d]))

(enable-console-print!)

(def canvas (d/canvas-from "canvas"))
(def ctx (d/context-from canvas))
(def options {:max-speed 3 :max-force 0.1 :r 6})

(defn init-state []
  (let [w (.-innerWidth js/window)
        h (.-innerHeight js/window)]
    {:mouse [(/ w 2) (/ h 2)]
     :vehicle (vehicle/new-vehicle [(/ w 2) (/ h 2)] [0 -2])}))

(defn update! [state dt options]
  (let [prev @state
        vehicle (:vehicle prev)
        mouse (:mouse prev)]
    (swap! state assoc :vehicle
      (vehicle/update (vehicle/seek vehicle mouse options) dt options))))

(defn render [state [w h] options]
  (d/clear ctx w h)

  (d/draw-mouse-pos ctx (:mouse state) 10 [125 125 125])
  (d/draw-vehicle ctx (:location (:vehicle state)) (:r options) [0 255 0]))

(defn ^:export main []
  (core/init)
  (let [state (atom (init-state))
        options-atom (atom options)
        w (d/width canvas)
        h (d/height canvas)]
    (core/add-control :max-speed {:name "Max Speed" :min 0 :max 10 :step 1} options-atom)
    (core/add-control :max-force {:name "Max Force" :min 0.0 :max 2.0 :step 0.05} options-atom)
    (core/add-control :r {:name "Radius" :min 1 :max 50 :step 1} options-atom)
    (.on (js/jQuery "body") "mousemove" #(core/update-mouse-position! state %))
    (core/animate #(update! state % @options-atom)
                  #(render @state [w h] @options-atom))))
