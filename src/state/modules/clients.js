/* I called to the users in the playground table clients
because i saw that a users module already exsist
*/

import axios from 'axios'

export const state = {
   clients: getSavedState('clients'),
}

export const getters = {
   clients(state) {
      return state.clients
   }
}

// Set the state with the updated data
export const mutations = {
   SET_CLIENTS(state, clients) {
      state.clients = clients
      saveState('clients', clients)
      setDefaultAuthHeaders(state)
   }
}

// The API call to the endpoint for getting clients
export const actions = {
   async fetchClients({ commit }) {
      const res = await axios.get('https://reqres.in/api/users?page=2')
      commit('SET_CLIENTS', res.data.data)
   },
}



// ===
// Private helpers
// ===

function getSavedState(key) {
   return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
   window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
   axios.defaults.headers.common.Authorization = state.currentUser
      ? state.currentUser.token
      : ''
}
