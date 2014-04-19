(ns cljs-experiments.drawing
  (:require [goog.dom :as dom]))

(defn canvas-from [id]
  (dom/getElement id))

(defn context-from [canvas]
  (.getContext canvas "2d"))

(defn width [canvas]
  (.-width canvas))

(defn height [canvas]
  (.-height canvas))

(defn clear [ctx width height]
  (.clearRect ctx 0 0 width height))

(defn circle [ctx [x y d] [r g b]]
  (.beginPath ctx)
  (.arc ctx x y d 0 (* 2 Math/PI) false)
  (.closePath ctx)
  (set! (.-fillStyle ctx) (str "rgb(" r "," g "," b ")"))
  (.fill ctx)
  (set! (.-strokeStyle ctx) "black")
  (set! (.-lineWidth ctx) "1")
  (.stroke ctx))

(defn draw-mouse-pos [ctx [x y] r color]
  (circle ctx [x y r] color))

(defn draw-vehicle [ctx [x y] r color]
  (circle ctx [x y r] color))
