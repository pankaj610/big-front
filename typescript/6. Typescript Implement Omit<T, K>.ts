type MyOmit<T, K extends keyof any> = {
  [k in Exclude<keyof T, K>]: T[k]
}

