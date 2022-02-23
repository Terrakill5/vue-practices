export default {
    coaches(state) {
        return state.coaches;
    },
    requests(state) {
        return state.requests;
    },
    hayCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    filtro(state) {
        return state.filtroCoach;
    }
}