// import axios from '@/axios.js'

const state = {
  status: false,
  userData: {
    displayName: 'Prashant',
    photoUrl: 'https://i.pravatar.cc/150?u=1'
  }
}

const getters = {
  userLoggedStatus (state) {
    return state.status
  }
}

const actions = {
  async signInUser (
    { commit },
    data
  ) {
    // validate if the user has the same email and password
    console.log(data)
    // const users = await axios.get('/login', {
    //   email: data.email,
    //   password: data.passord
    // })
    if (data.email !== 'testuser@zealousys.com' && data.password !== '123456') return ('Failure')
    const userData = {
      displayName: 'Prashant',
      photoUrl: 'https://i.pravatar.cc/150?u=1'
    }
    commit('SET_USER', userData)
    return ('Success')
  },
  signOutUser ({ commit }) {
    commit('REMOVE_USER')
  }
}

const mutations = {
  SET_USER (state, data) {
    state.status = true
    state.userData = data
  },
  REMOVE_USER (state) {
    // eslint-disable-next-line no-unused-expressions
    state.status = false,
    state.userData = {
      displayName: '',
      photoUrl: 'https://i.pravatar.cc/150?u=1'
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
