# plet

Up until this part of the documentation we wrote `plu-ts` code that didn't need to re-use the values we got, but in a real case scenario that is quite common.

One might think that storing the result of a `plu-ts` function call can solve the issue, but it actually doesn't.

Let's take a look at the following code:

```ts
const pdoubleFactorial = plam( int, int )
    ( n => {
        // DON'T COPY THIS CODE; THIS IS REALLY BAD
        const factorialResult = pfactorial.$( n )

        return factorialResult.add( factorialResult );
    });
```
At first glance, the code above is not doing anything bad, right? **WRONG!**

From the `plu-ts` point of view the function above is defined as:

```ts
const pdoubleFactorial = plam( int, int )
    ( n => 
        pfactorial.$( n ).add( pfactorial.$( n ) ) 
    );
```

which is calling `pfactorial.$( n )` twice!

The intention of the above code is to store the result of `pfactorial.$( n )` in a variable and then re-use that result, but that is not what is going on here.

Fortunately `plu-ts` exposes the `plet` function that does exactly that; we can rewrite the above code as:

```ts
const pdoubleFactorial = plam( int, int )
    ( n => 
        plet( pfactorial.$( n ) ).in( factorialResult =>
            factorialResult.add( factorialResult )
        )
    );
```

This way `plu-ts` can first execute the `pfactorial.$( n )` function call and store the result in the `factorialResult` which was the intended behaviour in the first place.

> `plet` allows to reuse the result of a computation at costs near to 0 in terms of both script size and execution cost, and for this reason is an extremly powerful tool.

## "`plet`ting" utility terms methods

When working with [utility terms](../language/values/utility_terms.md) it's important not to forget that the methods are just [partially applied functions](../language/values/functions/partial_application.md) so if you plan to use some of the methods more than once is a good idea to `plet` them.

As an example, when working with the `TermList<PElemsT>` utility term, intuition might lead you to just reuse the `length` property more than once in various places; but actually, each time you do something like `list.length` (where `list` is a `TermList`); you are just writing `plength.$( list )` (as in the first case introduced here) which is an `O(n)` operation!

What you really want to do in these cases is something like:

```ts
plet( list.length ).in( myLength => {
    ...
})
```
This is also true for terms that do require some arguments.

Say you need to access different elements of the **same list** multiple times:
```ts
const addFirstTwos = lam( list( int ), int )
    ( list => 
        padd
        .$( list.at( pInt(0) ) ) 
        .$( list.at( pInt(1) ) ) 
    );
```

What you are **actually** writing there is:

```ts
const addFirstTwos = lam( list( int ), int )
    ( list => 
        padd
        .$( pindexList( int ).$( list ).$( pInt(0) ) ) 
        .$( pindexList( int ).$( list ).$( pInt(1) ) ) 
    );
```
If you notice, you are re-writing `pindexList( int ).$( list )` which is a very similar case of calling the `pfactorial` function we saw before twice.

Instead is definitely more efficient something like:

```ts
const addFirstTwos = lam( list( int ), int )
    ( list => plet( list.atTerm ).in( elemAt =>
        padd
        .$( elemAt.$( pInt(0) ) )
        .$( elemAt.$( pInt(1) ) ) 
    ));
```

### When is convenient NOT to `plet`?

You definitely don't want to `plet` everything that is already in a variable; that includes:

- arguments of a function
- terms already `plet`ted before
- terms that are already _hoisted_ (see the [next section](./phoist.md))
- terms extracted from a struct using [`pmatch`/`extract`](../language/control_flow/pmatch.md); `extract` already wraps the terms in variables