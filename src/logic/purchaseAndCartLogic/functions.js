export const incrementQuantity = (quantity, stock) => {
    if (quantity < stock) {
        return quantity + 1;
    }
    return quantity;
}

export const decrementQuantity = (quantity) => {
    if (quantity > 1) {
        return quantity -1;
    }
    return quantity;
}