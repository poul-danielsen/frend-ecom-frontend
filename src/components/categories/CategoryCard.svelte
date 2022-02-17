<script>
    import { textPrimary, backgroundPrimary, backgroundSecondary } from "../spring22/styleVariables"

    export let id;
    export let name;
</script>

<a href="/categories/{id}">
    <button class="wrapper" style="--text-primary:{textPrimary}; --background-primary:{backgroundPrimary}; --background-secondary:{backgroundSecondary}">
        {name}
    </button>
</a>

<style>
    .wrapper {
        display: flex;
        height: 10vh;
        width: 80vw;
        max-width: 800px;
        border: 3px solid var(--text-primary);
        justify-content: center;
        align-items: center;
        background: none;
        font-size: 2em;
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
        color: var(--text-primary);
    }

    .wrapper:hover {
        background: var(--background-secondary);
    }

    a {
        text-decoration: none;
    }

</style>