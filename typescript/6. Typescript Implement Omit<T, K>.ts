type MyOmit<T, K extends keyof any> = {
  [k in Exclude<keyof T, K>]: T[k]
}


type MyOmit<T, K extends keyof any> = {
  [k in keyof T as (k extends K ? never: k)]: T[k]
}
