(ns cljs-experiments.drawing)

(defn circle [ctx [x y d] [r g b]]
  (.beginPath ctx)
  (.arc ctx x y d 0 (* 2 Math/PI) false)
  (.closePath ctx)
  (set! (.-fillStyle ctx) (str "rgb(" r "," g "," b ")"))
  (.fill ctx)
  (set! (.-strokeStyle ctx) "black")
  (set! (.-lineWidth ctx) "1")
  (.stroke ctx))
