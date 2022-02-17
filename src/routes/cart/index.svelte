<script>
    import { cart } from "../../stores/cart"
    import { textPrimary, backgroundSecondary } from "../../components/spring22/styleVariables"

    $: sum = $cart.reduce((sum, item) => sum + item.totalPrice, 0);
</script>

<div class="cart-wrapper" style="--text-primary:{textPrimary}; --background-secondary:{backgroundSecondary}">
    {#each $cart as item, i (i)}
        <div class="item">
            <div class="info">
                <p>Item: {item.name}</p>
                <p>Style: {item.variant}</p>
            </div>
            <div class="info">
                <button on:click={() => cart.decrementItem(i)}>
                    -
                </button>
                <p>{item.quantity}</p>
                <button on:click={() => cart.incrementItem(i, item.stock)}>
                    +
                </button>
                <button on:click={() => cart.removeItem(i)}>
                    Remove
                </button>
                <p>Price: {item.price}</p>
                <p>Total price: {item.totalPrice}</p>
            </div>
        </div>
    {/each}
    <div class="sum">
        <p>Cart total: {sum}</p>
    </div>
</div>

<style>
    .cart-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
        max-width: 1200px;
        gap: 2vmin;
        padding-top: 20vh;
    }

    .item, .sum {
        display: flex;
        width: inherit;
        max-width: 1200px;
        justify-content: space-between;
        border-bottom: 3px solid var(--text-primary);
        padding-bottom: 1vmin;
    }

    .sum {
        justify-content: end;
    }

    .info {
        display: flex;
        gap: 2vmin;
    }

    p {
        font-size: 1.5em;
        font-family: "Rubik", sans-serif;
        font-weight: 300;
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
</style>