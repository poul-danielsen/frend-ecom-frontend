<script>
    import { fetchCategories } from "../../logic/apiFunctions";
    import CategoryCard from "../../components/categories/CategoryCard.svelte";

    let categories = fetchCategories();
</script>

<main>
    {#await categories}
        <CategoryCard />
    {:then categories}
        {#each categories as category}
            <CategoryCard {...category} />
        {/each}
    {:catch error}
        <CategoryCard name={error.message} />
    {/await}
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
        max-width: 1200px;
        gap: 2vmin;
        padding-top: 20vh;
    }
</style>
