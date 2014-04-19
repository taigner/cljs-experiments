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

(defn update-mouse-position! [state event]
  (swap! state assoc :mouse [(.-pageX event) (.-pageY event)]))

(defn add-control [key control-options options-atom]
  (let [control (js/jQuery "<div/>")
        label (js/jQuery "<span/>")
        slider (js/jQuery "<input/>")]
    (.html label (str (:name control-options)))
    (-> slider
      (.attr "type" "range")
      (.attr "min" (:min control-options))
      (.attr "max" (:max control-options))
      (.attr "step" (:step control-options))
      (.attr "class" "slider")
      (.attr "value" (key @options-atom))
      (.on "input" #(this-as me (swap! options-atom assoc key (.-value me)))))
    (-> control
      (.append label)
      (.append slider)
      (.appendTo "#controls"))))

(defn animate [update-fn! render-fn]
  (letfn [(next-loop []
                     (let [now (.now js/Date)
                           dt (/ (- now @last-time) 10)]
                       (update-fn! dt)
                       (render-fn)
                       (reset! last-time now)
                       (animation-frame next-loop)))]
    (next-loop)))
