// your code here, please don't ues Extract<T, U> in your code
type MyExtract<T, U> = T extends U ? T : never

The extends keyword is used to check whether each member of T is assignable to U. If so, that member is included in the resulting type. Otherwise, it is excluded (never).

