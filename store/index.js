export const state = () => ({
  isAuthenticated: false,
  user: null,
})

// Uppercase mutations
export const mutations = {
  SET_USER_DATA(state, userData) {
    state.isAuthenticated = true
    state.user = userData

    localStorage.setItem('user', JSON.stringify(userData))
    this.$axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${userData.token}`
    this.$router.push('/')
  },
  CLEAR_USER_DATA(state) {
    state.user = null
    state.isAuthenticated = false

    localStorage.clear('user')

    this.$axios.defaults.headers.common['Authorization'] = null
    this.$router.push('/welcome')
  },
}

export const actions = {
  register({ commit }, credentials) {
    return this.$axios
      .post('/server/register', credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
  },
  login({ commit }, credentials) {
    return this.$axios.post('/server/login', credentials).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  logout({ commit }) {
    commit('CLEAR_USER_DATA')
  },
}

// // * Sweet syntax
// export const getters = {
//   isLoggedIn(state) {
//     // * It will return the truthyness
//     return !!state.isAuthenticated
//   },
// }
