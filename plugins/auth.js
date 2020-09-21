// export default function (context) {
//   try {
//     const userLocalStorage = localStorage.getItem('user')

//     if (!userLocalStorage) {
//       return context.store.dispatch('logout')
//     }

//     const userData = JSON.parse(userLocalStorage)

//     // If the user have local storage we recomit it's data
//     context.store.commit('SET_USER_DATA', userData)

//     context.$axios.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         console.log(error.response)
//         if (error.response.status === 401) {
//           // context.store.dispatch('logout')
//         }
//         return Promise.reject(error)
//       }
//     )
//   } catch (error) {
//     context.store.dispatch('logout')
//   }
// }
