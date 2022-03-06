import { createStore } from 'vuex';
import rootGetters from "./getters.js";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";

const store = createStore({
    state(){
        return {
            coaches:null,
            requests: null,
            userId: null
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions,
});

export default store;
