import { createStore } from 'vuex';
import rootGetters from "./getters.js";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import authModule from "./auth.js";

const store = createStore({
    modules: {
        auth: authModule
    },
    state(){
        return {
            coaches:null,
            requests: null,
        };
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions,
});

export default store;
