(defproject cljs-experiments "0.1.0-SNAPSHOT"
  :description "ClojureScript experiments"
  :url "http://github.com/taigner"

  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2202"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:optimizations :none
                         :output-to "resources/generated/dev/cljs_experiments.js"
                         :output-dir "resources/generated/dev"
                         :source-map true}}
             {:id "advanced"
              :source-paths ["src"]
              :compiler {:optimizations :advanced
                         :output-to "resources/generated/cljs_experiments_advanced.js"
                         :output-dir "resources/generated"
                         :externs ["resources/lib/jquery-externs.js"]
                         :pretty-print false}}
             ]})
