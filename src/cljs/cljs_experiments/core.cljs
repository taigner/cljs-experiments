(ns cljs-experiments.core)

(def last-time (atom (.now js/Date)))

(def animation-frame
  (or (.-requestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-oRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)))

(defn init []
  (let [canvas (js/jQuery "#canvas")]
    (.attr canvas "width" (.-innerWidth js/window))
    (.attr canvas "height" (.-innerHeight js/window))))

(defn animate [update! render state width height]
  (letfn [(next-loop []
                     (let [now (.now js/Date)
                           dt (/ (- now @last-time) 10)]
                       (update! state dt width height)
                       (render @state width height)
                       (reset! last-time now)
                       (animation-frame next-loop)))]
    (next-loop)))
