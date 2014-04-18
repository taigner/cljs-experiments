(ns cljs-experiments.separate-and-seek
  (:require [goog.events :as events]
            [cljs-experiments.core :as core]
            [cljs-experiments.vector :as v]
            [cljs-experiments.vehicle :as vehicle]
            [cljs-experiments.drawing :as d]))

(enable-console-print!)

(def canvas (d/canvas-from "canvas"))
(def ctx (d/context-from canvas))

(def how-many-vehicles 30)

(defn init-state []
  (let [width (.-innerWidth js/window)
        height (.-innerHeight js/window)]
    {:mouse [(/ width 2) (/ height 2)]
     :vehicles (repeatedly how-many-vehicles #(vehicle/new-random-vehicle width height))}))

(def state (atom (init-state)))

(defn update! [state dt]
  (let [prev @state
        mouse (:mouse prev)
        vehicles (:vehicles prev)]
    (swap! state
           assoc :vehicles
           (map #(vehicle/update
                  (vehicle/separate-and-seek % vehicles mouse)
                  dt)
                vehicles))))

(defn update-mouse-position! [state pos]
  (swap! state assoc :mouse [(.-offsetX pos) (.-offsetY pos)]))

(defn render [state width height]
  (d/clear ctx width height)

  (d/draw-mouse-pos ctx (:mouse state))
  (doseq [vehicle (:vehicles state)]
    (d/draw-vehicle ctx (:location vehicle) :r 6)))

(defn ^:export main []
  (core/init)
  (events/listen canvas "mousemove" #(update-mouse-position! state %))
  (core/animate update! render state (d/width canvas) (d/height canvas)))
