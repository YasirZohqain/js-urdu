// false value

// false, 0, -0, false, NaN, Null, undefined


//turly values

//'false', ' ', '0', [], {}, function(){}, 


// Nullish coalescing operator (??) null : undefined


let val1;

// val1 = 5 ?? 10

//val1 = null ?? undefined
val1 = undefined ?? null

console.log(val1)