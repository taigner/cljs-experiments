(ns cljs-experiments.core)

(def last-time (atom (.now js/Date)))

(def animation-frame
  (or (.-requestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-oRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)))

(defn animate [update! render state]
  (letfn [(next-loop []
                     (let [now (.now js/Date)
                           dt (/ (- now @last-time) 10)]
                       (update! state dt)
                       (render @state)
                       (reset! last-time now)
                       (animation-frame next-loop)))]
    (next-loop)))
