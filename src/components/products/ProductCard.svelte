<script>
    import { textPrimary, backgroundSecondary } from "../../components/spring22/styleVariables"
    import { incrementQuantity, decrementQuantity } from "../../logic/purchaseAndCartLogic/functions"
    import { cart } from "../../stores/cart"

    export let name;
    export let id;
    export let description;
    export let price;
    export let variants;

    let activeVariantIndex = 0;
    $: activeVariant = variants[activeVariantIndex];
    $: stock = activeVariant.stock;

    let quantityToPurchase = 1;
    $: cartItem = {
        name,
        variant: activeVariant.name,
        quantity: quantityToPurchase,
        stock,
        price,
        totalPrice: price * quantityToPurchase
    }
</script>

<article style="--text-primary:{textPrimary}; --background-secondary:{backgroundSecondary}">
    <div class="image-wrapper">
        {#each variants as variant}
            {#if variant.id === activeVariant.id}
                <img src={variant.image} alt={variant.description}>
            {/if}
        {/each}
    </div>
    <div class="info-wrapper">
        <div class="details-wrapper">
            <h2>{name}</h2>
            <p>{description}</p>
            <div class="variant-wrapper">
                {#each variants as variant, i}
                    <button on:click={() => {
                        activeVariantIndex = i;
                        quantityToPurchase = 1;
                    }}
                        style="--text-primary:{textPrimary}"
                        class:active={activeVariantIndex === i}>
                        {variant.name}
                    </button>
                {/each}
            </div>
        </div>
        <div class="purchase-wrapper">
            {#if stock === 0}
                <p>{price} NOK</p>
                <p>Not currently in stock.</p>
            {:else}
                <p>{price} NOK</p>
                <p>{stock} currently in stock.</p>
                <div class="purchase">
                    <button on:click={() => {quantityToPurchase = decrementQuantity(quantityToPurchase)}}>
                        -
                    </button>
                    <p>{quantityToPurchase}</p>
                    <button on:click={() => {quantityToPurchase = incrementQuantity(quantityToPurchase, stock)}}>
                        +
                    </button>
                    <button on:click={() => cart.addItem(cartItem)}>
                        Add to Cart
                    </button>
                </div>
            {/if}
        </div>
    </div>
</article>

<style>
    article {
        display: flex;
        gap: 5vmin;
        border: 3px solid var(--text-primary);
        padding: 2vmin;
        width: inherit;
        max-width: 1200px;
    }

    .image-wrapper {
        height: 60vh;
        width: 45vh;
        min-width: 45vh;
    }

    img {
        height: inherit;
        width: inherit;
        object-fit: cover;
    }

    .info-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .details-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2vmin;
    }

    h2 {
        font-size: 2em;
        font-family: "Rubik", sans-serif;
    }

    p {
        font-size: 1.5em;
        font-family: "Rubik", sans-serif;
        font-weight: 300;
    }

    .variant-wrapper {
        display: flex;
        gap: 1vmin;
    }

    button {
        background: none;
        border: 3px solid var(--text-primary);
        font-family: "Rubik", sans-serif;
        font-size: 1.5em;
        font-weight: 300;
        color: var(--text-primary);
    }

    button:hover {
        background: var(--background-secondary);
    }

    .active {
        background: var(--background-secondary);
    }

    .purchase-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1vmin;
    }

    .purchase {
        display: flex;
        gap: 1vmin;
    }
</style>