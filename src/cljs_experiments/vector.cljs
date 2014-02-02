(ns cljs-experiments.vector)

(defn add [v1 v2]
  (map + v1 v2))

(defn sub [v1 v2]
  (map - v1 v2))

(defn mult [v factor]
  (map #(* factor %) v))

(defn dot [v1 v2]
  (reduce + (map * v1 v2)))

(defn norm [v]
  (Math/sqrt (dot v v)))

(defn normalize [v]
  (mult v (/ 1 (norm v))))

(defn mag-squared [[x y]]
  (+ (* x x) (* y y)))

(defn limit [v factor]
  (if (> (mag-squared v) (* factor factor))
    (mult (normalize v) factor)
    v))
