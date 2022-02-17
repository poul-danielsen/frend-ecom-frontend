import { writable } from 'svelte/store';

function createCart() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        addItem: (item) => update(cart => [...cart, item]),
        removeItem: (index) => update(cart => {
            cart.splice(index, 1);
            return(cart);
        }),
        clearCart: () => set([]),
        incrementItem: (index) => update(cart => {
            if (cart[index].quantity < cart[index].stock) {
             cart[index].quantity += 1;
             cart[index].totalPrice = cart[index].price * cart[index].quantity;
            }
            return cart;
        }),
        decrementItem: (index) => update(cart => {
            if (cart[index].quantity > 1) {
             cart[index].quantity -= 1;
             cart[index].totalPrice = cart[index].price * cart[index].quantity;
            }
            return cart;
        }),
    }
}

export const cart = createCart();