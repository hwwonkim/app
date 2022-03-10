import Vue from 'vue'
import Vuex from 'vuex'

export { store }

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userToken: null,
        userSponsor: null,
        userId: null
    },
    mutations: {
        login(state, {userToken, userSponsor, userId}) {
            state.userToken = userToken;
            state.userSponsor = userSponsor;
            state.userId = userId;
        }
    }
})

