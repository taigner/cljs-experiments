(defproject cljs-experiments "0.1.0-SNAPSHOT"
  :description "ClojureScript experiments"
  :url "http://github.com/taigner"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cljs-experiments"
              :source-paths ["src"]
              :compiler {
                :output-to "cljs_experiments.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
