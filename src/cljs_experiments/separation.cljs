(ns cljs-experiments.separation
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
    (d/circle ctx [x y 6] [255 255 0])))

(defn update! [state dt]
  (let [prev @state
        mouse (:mouse prev)
        vehicles (:vehicles prev)]
    (swap! state
           assoc :vehicles
           (map #(vehicle/borders (vehicle/update (vehicle/separate % vehicles) dt) width height) vehicles))))

(defn random [min max]
  (+ (* (Math/random) (- max min)) min))

(defn new-vehicle []
  (vehicle/Vehicle. [(random 0 width) (random 0 height)] [0 0] [0 0]))

(defn init-state []
  {:mouse [(/ width 2) (/ height 2)]
   :vehicles (repeatedly 30 new-vehicle)})

(def last-time (atom (.now js/Date)))
(def state (atom (init-state)))

(defn update-mouse-position [state pos]
  (swap! state assoc :mouse [(.-offsetX pos) (.-offsetY pos)]))

(defn render [state]
  (.clearRect ctx 0 0 width height)

  (draw-mouse-pos (:mouse state))
  ;(println (:vehicles state))
  (doseq [vehicle (:vehicles state)]
    (draw-vehicle vehicle)))

(defn main []
  (let [now (.now js/Date)
        dt (/ (- now @last-time) 10)]
    (update! state dt)
    (render @state)
    (reset! last-time now)
    (.requestAnimationFrame js/window main)))

(events/listen canvas "mousemove" #(update-mouse-position state %))

(main)
