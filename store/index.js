export const actions = {
    //                   STORE, CTX
    async nuxtServerInit(store, { req }) {
        let user = req.cookies['user'];
        user = user && JSON.parse(user)

        if (user) {
            store.commit('auth/SET_USER_DATA', user)
        }
    }
}