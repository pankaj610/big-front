
// your code here, please dont use Parameters<T> in your code
type MyParameters<T extends Function> = T extends (...args: infer P) => any ? P : never

infer creates new type P which is returned
