(ns cljs-experiments.seek
  (:require [goog.events :as events]
            [cljs-experiments.core :as core]
            [cljs-experiments.vector :as v]
            [cljs-experiments.vehicle :as vehicle]
            [cljs-experiments.drawing :as d]))

(enable-console-print!)

(def canvas (d/canvas-from "canvas"))
(def ctx (d/context-from canvas))
(def width (d/width canvas))
(def height (d/height canvas))

(defn init-state []
  {:mouse [(/ width 2) (/ height 2)]
   :vehicle (vehicle/new-vehicle [(/ width 2) (/ height 2)] [0 -2])})

(def state (atom (init-state)))

(defn update! [state dt]
  (let [prev @state
        vehicle (:vehicle prev)
        mouse (:mouse prev)]
    (swap! state assoc :vehicle
      (vehicle/update (vehicle/seek vehicle mouse) dt))))

(defn update-mouse-position! [state pos]
  (swap! state assoc :mouse [(.-offsetX pos) (.-offsetY pos)]))

(defn render [state]
  (d/clear ctx width height)

  (d/draw-mouse-pos ctx (:mouse state))
  (d/draw-vehicle ctx (:location (:vehicle state))))

(defn ^:export main []
  (events/listen canvas "mousemove" #(update-mouse-position! state %))
  (core/animate update! render state))
