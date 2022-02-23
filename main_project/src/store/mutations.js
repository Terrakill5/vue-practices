export default {
    actualizarCoaches(state,payload) {
        state.coaches = payload;
    },
    actualizarFiltro(state, payload) {
        //let contenedor = {};
        for (let i in state.coaches) {
            if (payload === state.coaches[i].especialization) {
                this.coach = this.coaches[i];
            }
        } 
    }
}