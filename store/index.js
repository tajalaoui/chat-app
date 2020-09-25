export const state = () => ({
  isAuthenticated: false,
  user: null,
})

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

    localStorage.removeItem('user')

    this.$axios.defaults.headers.common['Authorization'] = null
    this.$router.push('/welcome')
  },
}

export const actions = {
  register({ commit }, credentials) {
    return this.$axios
      .post('/register', credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  login({ commit }, credentials) {
    return this.$axios.post('/login', credentials).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  logout({ commit }) {
    commit('CLEAR_USER_DATA')
  },
}
