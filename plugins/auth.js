// Before every request, Take the token and put in the header
export default ({ store, $axios }) => {
  $axios.interceptors.request.use((config) => {
    config.headers.Authorization = store.state.auth.token
    return config
  })
}
