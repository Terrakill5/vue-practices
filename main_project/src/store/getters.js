export default {
    coaches(state) {
        return state.coaches;
    },
    requests(state) {
        return state.requests;
    },
    hayCoaches(state) {
        console.log(state.coaches);
        //console.log(state.coaches.length);
        return state.coaches && state.coaches.length > 0;
    },
}