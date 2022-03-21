export default {
    actualizarCoaches(state,payload) {
       // console.log(payload);
        //state.coaches = payload.slice();
         const coaches = [];
        //console.log(payload);
        for (const key in payload) {
            const contenedor = payload[key];
            for (const llave in contenedor) {
                //console.log(contenedor[llave]);
                const coach = {
                    firstName: contenedor[llave].firstName,
                    id: contenedor[llave].id,
                    lastName: contenedor[llave].lastName,
                    rate: contenedor[llave].rate,
                    especialization: contenedor[llave].especialization,
                };
               // console.log(coach);
            coaches.push(coach);
            }
            
            
        }
        //console.log(coaches); 
       // console.log(payload);
        //const coaches = Object.values(payload);
        //console.log(coaches);
        state.coaches = coaches.slice();
    },
    actualizarRequests(state,payload) {
        state.requests = payload.slice();
    },
}