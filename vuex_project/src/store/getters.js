export default{
    isLogged(state) {
    return state.isLoggedIn;
    },
    cantidadDeCarros(state) {
        return state.cart.qty;
    },
    productos(state) {
        return state.products;
    },
    totalDeCarros(state) {
        return state.cart.total;
    },
    carro(state) {
        return state.cart;
    }
}