<script>
    import { page } from "$app/stores"
    import { fetchProductById } from "../../logic/apiFunctions"
    import ProductCard from "../../components/products/ProductCard.svelte"

    let product = $page.url.pathname.match(/(?<=\/products\/)\d+/);
    let productData = fetchProductById(product);

</script>

<div class="page-wrapper">
    {#await productData}
        <h2>Loading product...</h2>
    {:then product}
        <ProductCard {...product}/>
    {:catch error}
        <h2>{error.message}</h2>
    {/await}
</div>

<style>
    .page-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5vmin;
        padding-top: 10vh;
        padding-bottom: 15vh;
        width: inherit;
        max-width: 1200px;
    }
</style>