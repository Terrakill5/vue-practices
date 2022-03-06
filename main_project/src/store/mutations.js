export default {
    actualizarCoaches(state,payload) {
        state.coaches = payload.slice();
    },
    actualizarRequests(state,payload) {
        state.requests = payload.slice();
    },
}