import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
} 

export const authMethods = mapActions('auth', ['logIn', 'logOut'])


// helpers for getting the data and methods from store to the playground page 
export const clientComputed = {
  ...mapState('clients', {
    clients: (state) => state.clients
  }),
  ...mapGetters('clients',['clients'])
}

export const clientMethods = mapActions('clients',['fetchClients'])