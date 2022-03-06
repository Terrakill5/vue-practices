export default {
    coaches(state) {
        return state.coaches;
    },
    requests(state) {
        const coachId = state.userId
        return state.requests.filter(req => req.coachId === coachId);
    },
    hayCoaches(state) {
        //console.log(state.coaches);
        //console.log(state.coaches.length);
        return state.coaches && state.coaches.length > 0;
    },
    hayRequests(_, getters) {
        //console.log(state.coaches);
        //console.log(state.coaches.length);
        return getters.requests && getters.requests.length > 0;
    },
    userId(state) {
        return state.userId;
    }

}