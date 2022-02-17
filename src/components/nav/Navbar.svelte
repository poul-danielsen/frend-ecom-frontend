<script>
    import { page } from "$app/stores";
    import { textPrimary, backgroundPrimary, backgroundSecondary } from "../spring22/styleVariables";
    import Background from "../spring22/Background.svelte"
    let currentPage = $page.url.pathname;
    console.log(currentPage);

</script>


<nav style="--text-primary:{textPrimary};--background-primary:{backgroundPrimary}; --background-secondary:{backgroundSecondary}">
    <a class="home" sveltekit:prefetch href="/">Holzweiler</a>
    <a class="navlink" class:active="{/categories/i.test(currentPage)}" sveltekit:prefetch href="/categories">Categories</a>
    <a class="navlink" class:active="{/products/i.test(currentPage)}" sveltekit:prefetch href="/products">Products</a>
    <a class="navlink" class:active="{/cart/i.test(currentPage)}" sveltekit:prefetch href="/cart">Cart</a>
</nav>

<style>

    nav {
        display: flex;
        justify-content: space-between;
        position: fixed;
        width: inherit;
        max-width: inherit;
        border-bottom: 3px solid var(--text-primary);
        padding-top: 2vmin;
        background: var(--background-primary)
    }
    
    .background-wrapper {
        position: absolute;
        width: inherit;
        height: inherit;
        overflow: hidden;
    }

    .home {
        font-size: 2em;
        font-family: 'Rubik', serif;
        text-decoration: none;
        color: var(--text-primary);
    }

    .navlink {
        font-size: 2em;
        font-family: 'Rubik', serif;
        font-weight: 300;
        text-decoration: none;
        color: var(--text-primary);
    }

    .active {
        background-color: var(--background-secondary);
    }


</style>