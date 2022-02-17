<script>
    import { textPrimary, backgroundPrimary, backgroundSecondary } from "../spring22/styleVariables"

    export let id;
    export let name;
    export let variants;
    export let description;

    let image = variants[0].image;
</script>

<a href="/products/{id}">
    <div class="wrapper" style="--text-primary:{textPrimary}; --background-secondary:{backgroundSecondary}">
        <img src={image} alt={description}>
        <h3>{name}</h3>
    </div>
</a>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        padding: 2vmin;
        border: 3px solid var(--text-primary);
        justify-content: center;
        align-items: stretch;
        font-size: 2em;
        font-family: 'Rubik', sans-serif;
        color: var(--text-primary);
    }

    img {
        height: 50vh;
        width: auto;
    }

    .wrapper:hover {
        background: var(--background-secondary);
    }

    a {
        text-decoration: none;
    }

    h3 {
        font-weight: 300;
    }

</style>