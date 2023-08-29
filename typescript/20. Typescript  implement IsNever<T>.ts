Please implement a utility type IsNever<T> which returns true if T is never and false otherwise.

type A = IsNever<never> // true
type B = IsNever<string> // false
type C = IsNever<undefined> // false


--- Output ----

type IsNever<T> = [T] extends [never] ? true : false
