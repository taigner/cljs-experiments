(ns cljs-experiments.vector)

(defn add [v1 v2]
  (map + v1 v2))

(defn sub [v1 v2]
  (map - v1 v2))

(defn mult [v factor]
  (map #(* factor %) v))

(defn div [[x y] n]
  [(/ x n) (/ y n)])

(defn dot [v1 v2]
  (reduce + (map * v1 v2)))

(defn norm [v]
  (Math/sqrt (dot v v)))

(defn mag-squared [[x y]]
  (+ (* x x) (* y y)))

(defn mag [v]
  (Math/sqrt (mag-squared v)))

(defn normalize [v]
  (let [m (mag v)]
    (if (zero? m)
      v
      (div v m))))

(defn limit [v factor]
  (if (> (mag-squared v) (* factor factor))
    (mult (normalize v) factor)
    v))

(defn distance [[x1 y1] [x2 y2]]
  (let [dx (- x1 x2)
        dy (- y1 y2)]
    (Math/sqrt (+ (* dx dx) (* dy dy)))))
