import { createStore} from "vuex";

import rootMutations from "./mutations.js";
import rootGetters from "./getters.js";
import counterModule from "./counter/index.js"

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLog: false
        };
    },
    mutations: rootMutations,
    getters: rootGetters,
});

export default store;