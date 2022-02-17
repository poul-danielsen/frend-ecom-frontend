<script>
    import { textPrimary } from "./styleVariables";
</script>

<div class="wrapper">
    <article style="--text-primary:{textPrimary}">
        <div class="back-border" />
        <img 
            src="/images/hero_left.png" 
            class="hero-left"
            alt="A young man wears a striped shirt">
        <img 
            src="/images/hero_main.png" 
            class="hero-main"
            alt="A young man wears an army green shirt">
        <img 
            src="/images/hero_right.png" 
                class="hero-right"
                alt="A young woman wear a striped shirt">
        <div class="front-border" />
        <h2>SPRING 22</h2>
    </article>
</div>


<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 90vw;
        max-width: 1200px;
        gap: 3vmin;
        padding-top: 15vh;
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        width: inherit;
        max-width: 1200px;
        height: calc(100vh - 20vmin);
    }

    .hero-main {
        position: absolute;
        height: inherit;
        width: inherit;
        object-fit: contain;
        object-position: bottom;
        max-width: 1200px;
    }

    .hero-left {
        position: absolute;
        height: inherit;
        width: inherit;
        object-fit: contain;
        object-position: 10% bottom;
        max-width: 1200px;
    }

    .hero-right {
        position: absolute;
        height: inherit;
        width: inherit;
        object-fit: contain;
        object-position: 90% bottom;
        max-width: 1200px;
    }

    .back-border {
        border: 5px solid var(--text-primary);
        width: inherit;
        max-width: 1200px;
        height: 80%;
    }

    .front-border {
        position: absolute;
        border-bottom: 5px solid var(--text-primary);
        width: inherit;
        max-width: 1200px;
        height: 80%;
    }

    h2 {
        position: absolute;
        font-size: 5em;
        font-family: 'Elsie', cursive;
        color: var(--text-primary);
        align-self: flex-end;
        margin: 10px;
        line-height: 60%
    }

   

</style>