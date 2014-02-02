(ns cljs-experiments.core
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs-experiments.vector :as v]
            [cljs-experiments.vehicle :as vehicle]
            [cljs-experiments.drawing :as d]))

(enable-console-print!)

(def canvas (dom/getElement "canvas"))
(def ctx (.getContext canvas "2d"))
(def width (.-width canvas))
(def height (.-height canvas))

(defn draw-mouse-pos [[x y]]
  (d/circle ctx [x y 20] [125 125 125]))

(defn draw-vehicle [vehicle]
  (let [[x y] (:location vehicle)]
    (d/circle ctx [x y 10] [0 255 0])))

(defn update [state dt]
  (let [prev @state
        vehicle (:vehicle prev)
        mouse (:mouse prev)]
    (swap! state assoc :vehicle
      (vehicle/update (vehicle/seek vehicle mouse dt) dt))))

(def vehicle (vehicle/Vehicle. [(/ width 2) (/ height 2)] [0 -2] [0 0]))

(defn init-state []
  {:mouse [0 0]
   :vehicle vehicle})

(def last-time (atom (.now js/Date)))
(def state (atom (init-state)))

(defn update-mouse-position [state pos]
  (swap! state assoc :mouse [(.-offsetX pos) (.-offsetY pos)]))

(defn render [state]
  (.clearRect ctx 0 0 width height)

  (draw-mouse-pos (:mouse state))
  (draw-vehicle (:vehicle state)))

(defn main []
  (let [now (.now js/Date)
        dt (- now @last-time)]
    (update state dt)
    (render @state)
    (reset! last-time now)
    (.requestAnimationFrame js/window main)))

(events/listen canvas "mousemove" #(update-mouse-position state %))

(main)
