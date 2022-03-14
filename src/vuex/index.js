import Vue from "vue"
import Vuex from "vuex"

export { store }

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        accessToken: null,
        userKey: null,
        userId: null
    },
    mutations: {
        storeSession(state, {token, userKey, userId}) {
            state.accessToken = token;
            state.userKey = userKey;
            state.userId = userId;
        }
    }
})

