# Frend eCommerce Coding Test

Implemented in Svelte(kit). 

after installing dependencies with `npm install`, 
start dev server with `npm run dev -- --open` which will launch the site in the default browser.

alternatively run `npm run build` followed by `npm run preview` to preview a production build.

It is designed as desktop first, and due to time constraints a responsive view has not been built out. 

The amount of work that would be required to get this working nicely on mobile as well would be relatively quick, but still beyond the scope of what was maneagable in the time given.

## Sveltekit uses file based routing, so the structure in `src/routes` determines pages on the site.

Our primary route being `/`, `/categories`, `/products`, and `/cart` as well as their sub-routes for individual category and product pages.

## components are used to break down complex pages.

These can be found in `/src/components`.

A few quick notes if you're not familiar with svelte:

- in components exports are how you expose props, eg. 
    `export let productName` within a component lets you assign to productName as a prop when declaring the component.
- `let` in a script tag in a svelte file is by default reactive, as it is compiled. Thus there is no need for hooks.
- `$: ` is a reactive declaration, which updates when referenced values are updated.

Otherwise, the overall structure of components won't be too alien to JSX as seen in React, though the structure is more akin to embedding JS within HTML rather than vice versa.

## State management is done with stores, which are located in `src/stores`.

State management is very simple here. The only state which is not managed locally in components is the cart.

## The majority of logic that is more advanced than conditional rendering is broken out into purer functions

Logic functions are organised within `/src/logic`

# Reflections

It has been an interesting project. 

I'm quite glad that I started working on CSS sooner rather than later.
I find that on every project I relearn that CSS is more time consuming than I expect.
In the long run, finding better tools than writing pure CSS or some slightly tidier SCSS from scratch every time is going to be a priority.

I think the overall style is clear and coherent, although there are certainly a number of small details I would like to fix with the CSS.

I'm mostly happy with the result for something that is thrown together over a couple of days. 
The majority of the code is relatively well organised, though I would have liked to refactor the code for the cart store.
The logic here is implemented directly in the store, and I would prefer to break that out.

Using svelte has been a delight. I'm finding it very quick to get to a point of comfort with the framework where it ceases to get in the way, and just becomes a powerful and expressive tool. 

The amount of boilerplate code is kept to a minimum, barring in particular the use of reactive variables in CSS. However there is probably a package that remedies this.
I found that with this short a project, going hunting for packages to solve small nuisances wasn't a judicious use of time. 

Most importantly, I think a lot of the positive structure that svelte naturally enforces transfers well to other frameworks, so even if I wind up working primarily in frameworks like React, it will still benefit from the time spent here. 

If working with a more built out production API, it would also become a priority to look into sveltekit's server side rendering, for semi-dynamic content. 
This would drastically reduce the amount of momentary flicker as data loads in, and reduce loading times generally. Though that said, this is chasing fairly marginal gains, as it's already fairly snappy, which is helped by being able to prefetch content on link hover. 

I am slightly disappointed not to have implemented testing. I think with a bit more time with the framework, it would be more comfortable to have a TDD approach, even when working quickly. This would also in the long run very clearly force a clean structure with more logic broken out into easily testable functions. 
