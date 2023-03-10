"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[1784],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,r(r({ref:e},c),{},{components:n})):a.createElement(h,r({ref:e},c))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4976:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:0},r="plet",l={unversionedId:"onchain/Optimizations/plet",id:"onchain/Optimizations/plet",title:"plet",description:"Up until this part of the documentation we wrote plu-ts code that didn't need to re-use values, but in a real case scenario that is quite common.",source:"@site/docs/onchain/Optimizations/plet.mdx",sourceDirName:"onchain/Optimizations",slug:"/onchain/Optimizations/plet",permalink:"/docs/onchain/Optimizations/plet",draft:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts/tree/main/packages/create-docusaurus/templates/shared/docs/onchain/Optimizations/plet.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Optimizations",permalink:"/docs/category/optimizations"},next:{title:"phoist",permalink:"/docs/onchain/Optimizations/phoist"}},s={},p=[{value:"&quot;<code>plet</code>ting&quot; utility terms methods",id:"pletting-utility-terms-methods",level:2},{value:"When is convenient NOT to <code>plet</code>?",id:"when-is-convenient-not-to-plet",level:3}],c={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plet"},(0,i.kt)("inlineCode",{parentName:"h1"},"plet")),(0,i.kt)("p",null,"Up until this part of the documentation we wrote ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," code that didn't need to re-use values, but in a real case scenario that is quite common."),(0,i.kt)("p",null,"One might think that storing the result of a ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," function call can solve the issue, but it actually doesn't."),(0,i.kt)("p",null,"Let's take a look at the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const pdoubleFactorial = plam( int, int )\n    ( n => {\n        // DON'T COPY THIS CODE; THIS IS REALLY BAD\n        // highlight-bad-practice\n        const factorialResult = pfactorial.$( n )\n        // highlight-bad-practice\n\n        // highlight-bad-practice\n        return factorialResult.add( factorialResult );\n    });\n")),(0,i.kt)("p",null,"At first glance, the code above is not doing anything bad, right? ",(0,i.kt)("strong",{parentName:"p"},"WRONG!")),(0,i.kt)("p",null,"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," point of view the function above is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const pdoubleFactorial = plam( int, int )\n    ( n => \n        pfactorial.$( n ).add( pfactorial.$( n ) ) \n    );\n")),(0,i.kt)("p",null,"which is calling ",(0,i.kt)("inlineCode",{parentName:"p"},"pfactorial.$( n )")," twice!"),(0,i.kt)("p",null,"The intention of the above code is to store the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"pfactorial.$( n )")," in a variable and then re-use that result, but that is not what is going on here."),(0,i.kt)("p",null,"Fortunately ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," exposes the ",(0,i.kt)("inlineCode",{parentName:"p"},"plet")," function that does exactly that; we can rewrite the above code as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const pdoubleFactorial = plam( int, int )\n    ( n => \n        plet( pfactorial.$( n ) ).in( factorialResult =>\n            factorialResult.add( factorialResult )\n        )\n    );\n")),(0,i.kt)("p",null,"This way ",(0,i.kt)("inlineCode",{parentName:"p"},"plu-ts")," can first execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"pfactorial.$( n )")," function call and store the result in the ",(0,i.kt)("inlineCode",{parentName:"p"},"factorialResult")," which was the intended behaviour in the first place."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"plet")," allows to reuse the result of a computation at costs near to 0 in terms of both script size and execution cost, "),(0,i.kt)("p",{parentName:"admonition"},"and for this reason is an extremly powerful tool.")),(0,i.kt)("h2",{id:"pletting-utility-terms-methods"},'"',(0,i.kt)("inlineCode",{parentName:"h2"},"plet"),'ting" utility terms methods'),(0,i.kt)("p",null,"When working with ",(0,i.kt)("a",{parentName:"p",href:"../../category/stdlib"},"utility terms")," it's important not to forget that the methods\nare just ",(0,i.kt)("a",{parentName:"p",href:"../Values/Functions/partial_function_app"},"partially applied functions")," so if you plan to use some of the methods more than once is a good idea to ",(0,i.kt)("inlineCode",{parentName:"p"},"plet")," them."),(0,i.kt)("p",null,"As an example, when working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"TermList<PElemsT>")," utility term, intuition might lead you to just reuse the ",(0,i.kt)("inlineCode",{parentName:"p"},"length")," property more than once in various places; but actually, each time you do something like ",(0,i.kt)("inlineCode",{parentName:"p"},"list.length")," (where ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"TermList"),"); you are just writing ",(0,i.kt)("inlineCode",{parentName:"p"},"plength.$( list )")," (as in the first case introduced here) which is an ",(0,i.kt)("inlineCode",{parentName:"p"},"O(n)")," operation!"),(0,i.kt)("p",null,"What you really want to do in these cases is something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// highlight-next-line\nplet( list.length ).in( myLength => {\n    ...\n})\n")),(0,i.kt)("p",null,"This is also true for terms that do require some arguments."),(0,i.kt)("p",null,"Say you need to access different elements of the ",(0,i.kt)("strong",{parentName:"p"},"same list")," multiple times:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const addFirstTwos = lam( list( int ), int )\n    ( list => \n        padd\n        .$( list.at( 0 ) ) \n        .$( list.at( 1 ) ) \n    );\n")),(0,i.kt)("p",null,"What you are ",(0,i.kt)("strong",{parentName:"p"},"actually")," writing there is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const addFirstTwos = lam( list( int ), int )\n    ( list => \n        padd\n        .$( pindex( int ).$( list ).$( 0 ) ) \n        .$( pindex( int ).$( list ).$( 1 ) ) \n    );\n")),(0,i.kt)("p",null,"If you notice, you are re-writing ",(0,i.kt)("inlineCode",{parentName:"p"},"pindexList( int ).$( list )")," which is a very similar case of calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"pfactorial")," function we saw before twice."),(0,i.kt)("p",null,"Instead is definitely more efficient something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const addFirstTwos = lam( list( int ), int )\n    ( list => \n        // store the function to access the elements of the list\n        // in the `elemAt` variable\n        // highlight-next-line\n        plet( list.atTerm ).in( elemAt =>\n            padd\n            .$( elemAt.$( 0 ) )\n            .$( elemAt.$( 1 ) ) \n        )\n    );\n")),(0,i.kt)("h3",{id:"when-is-convenient-not-to-plet"},"When is convenient NOT to ",(0,i.kt)("inlineCode",{parentName:"h3"},"plet"),"?"),(0,i.kt)("p",null,"You definitely don't want to ",(0,i.kt)("inlineCode",{parentName:"p"},"plet")," everything that is already in a variable; that includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"arguments of a function"),(0,i.kt)("li",{parentName:"ul"},"terms already ",(0,i.kt)("inlineCode",{parentName:"li"},"plet"),"ted before"),(0,i.kt)("li",{parentName:"ul"},"terms that are already ",(0,i.kt)("em",{parentName:"li"},"hoisted")," (see the ",(0,i.kt)("a",{parentName:"li",href:"./phoist"},"next section"),")"),(0,i.kt)("li",{parentName:"ul"},"terms extracted from a struct using ",(0,i.kt)("a",{parentName:"li",href:"../Control%20Flow/pmatch"},(0,i.kt)("inlineCode",{parentName:"a"},"pmatch"),"/",(0,i.kt)("inlineCode",{parentName:"a"},"extract")),"; ",(0,i.kt)("inlineCode",{parentName:"li"},"extract")," already wraps the terms in variables")))}m.isMDXComponent=!0}}]);