(ns cljs-experiments.separation
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
   :vehicles (repeatedly 60 #(vehicle/new-random-vehicle width height))})

(def state (atom (init-state)))

(defn update! [state dt]
  (let [prev @state
        mouse (:mouse prev)
        vehicles (:vehicles prev)]
    (swap! state
           assoc :vehicles
           (map #(vehicle/borders
                  (vehicle/update (vehicle/separate % vehicles) dt)
                  width height)
                vehicles))))

(defn update-mouse-position! [state pos]
  (swap! state assoc :mouse [(.-offsetX pos) (.-offsetY pos)]))

(defn render [state]
  (d/clear ctx width height)

  (d/draw-mouse-pos ctx (:mouse state))
  (doseq [vehicle (:vehicles state)]
    (d/draw-vehicle ctx (:location vehicle) :r 6)))

(events/listen canvas "mousemove" #(update-mouse-position! state %))

(core/animate update! render state)
