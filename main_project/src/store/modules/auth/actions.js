export default {
    //aca se usa la documentacion de firebase para la rest api de authentication
    async login (context, payload) {
        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQJpPdlCa9RdgOEXCkKEezntqxykywoDs", {
            method: "POST",
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const resData = await res.json();

        if (!res.ok) {
            console.log(resData);
            const error = new Error(resData.message || "Failed to authenticate.");
            throw error;
        }

        context.commit("setUser", {
            token: resData.idToken,
            userId: resData.localId,
            tokenExpiration: resData.expiresIn,
        });
    },
    async signup(context, payload) {
        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQJpPdlCa9RdgOEXCkKEezntqxykywoDs", {
            method: "POST",
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const resData = await res.json();

        if (!res.ok) {
            console.log(resData);
            const error = new Error(resData.message || "Failed to authenticate.");
            throw error;
        }

        context.commit("setUser", {
            token: resData.idToken,
            userId: resData.localId,
            tokenExpiration: resData.expiresIn,
        });


    }
}