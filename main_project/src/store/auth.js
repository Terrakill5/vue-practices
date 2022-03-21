export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },
  actions: {
    async login(context, payload) {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQJpPdlCa9RdgOEXCkKEezntqxykywoDs',
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const resData = await res.json();

      if (!res.ok) {
        console.log(resData);
        const error = new Error(resData.message || 'Failed to authenticate.');
        throw error;
      }

      context.commit('setUser', {
        token: resData.idToken,
        userId: resData.localId,
        tokenExpiration: resData.expiresIn,
      });
    },
    async signup(context, payload) {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQJpPdlCa9RdgOEXCkKEezntqxykywoDs',
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const resData = await res.json();

      if (!res.ok) {
        console.log(resData);
        const error = new Error(resData.message || 'Failed to authenticate.');
        throw error;
      }

      context.commit('setUser', {
        token: resData.idToken,
        userId: resData.localId,
        tokenExpiration: resData.expiresIn,
      });
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
  },
};
