<script>
    import { page } from "$app/stores"

    import { fetchCategories, fetchProducts } from "../../logic/apiFunctions"

    import ProductCard from "../../components/categories/ProductCard.svelte"

    import { backgroundSecondary } from "../../components/spring22/styleVariables"

    let category = $page.url.pathname.match(/(?<=\/categories\/)\d+/);
    let categoryData = fetchCategories(category);
    let productsData = fetchProducts(category);

</script>

<div class="page-wrapper">
    {#await categoryData}
        <h2 style="--background-secondary:{backgroundSecondary}">...loading</h2>
    {:then data}
        <h2 style="--background-secondary:{backgroundSecondary}">{data.name}</h2>
    {:catch error}
        <h2 style="color: red">{error.message}</h2>
    {/await}

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

    h2 {
        font-size: 2em;
        font-weight: 300;
        font-family: "Rubik", sans-serif;
        text-align: center;
        background: var(--background-secondary);
    }
</style>