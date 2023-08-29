Given a string literal type, please implement StringToTuple<T> to genrate a tuple type by spreading each characters.

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []




--- Outpu ---
type StringToTuple<T extends string> = T extends `${infer F}${infer L}` ? [F, ...StringToTuple<L>] : []
