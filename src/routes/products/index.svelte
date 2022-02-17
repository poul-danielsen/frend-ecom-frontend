<script>
    import { fetchProducts } from "../../logic/apiFunctions"

    import ProductCard from "../../components/categories/ProductCard.svelte"

    let productsData = fetchProducts();

</script>

<div class="page-wrapper">

    {#await productsData}
        <h3>Loading products...</h3>
    {:then products}
        {#if products.length > 0}
            <div class="wrapper">
                {#each products as product (product.id) }
                    <ProductCard {...product} />
                {/each}
            </div>
        {:else}
            <h3>No products found</h3>
        {/if}
    {:catch error}
        <p style="color: red">{error.message}</p>
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
    }

    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5vmin;
    }

</style>