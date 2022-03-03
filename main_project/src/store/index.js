import { createStore } from 'vuex';
import rootGetters from "./getters.js";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";

const store = createStore({
    state(){
        return {
            coaches:null,
            requests: [{
                coachId: null,
                message: "",
                email: "",
            }]
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions,
});

export default store;
