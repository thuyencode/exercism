;; Clojure hurts my brain so much!
;; Thanks to: https://youtu.be/Fj5m16is5hI

(ns leap)

(defn divisible-by? [x y]
  (zero? (rem x y)))

(defn leap-year? [year] ;; <- argslist goes here
  ;; your code goes here
  (and (divisible-by? year 4)
    (or (not (divisible-by? year 100))
      (divisible-by? year 400))))
