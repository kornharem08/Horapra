export const state = () => ({
  users: {
    name: '',
    phone: '',
    email: ''
  },
  auspicious_packages: {
    package: null,
    monk: 0,
    is_monk: true,
    is_churchwarden: true,
    style_buffet: '',
    price: 0
  },
  loading: false
})

export const getters = {
  getUsers (state) {
    return state.users
  },
  loading: state => state.loading
}

export const mutations = {
  SET_USER (state, data) {
    state.users = {
      ...state.users,
      ...data
    }
  },
  SET_LOADING (state, status) {
    state.loading = status
  },
  SET_AUSPICIOUS_PACKAGES (state, data) {
    state.auspicious_packages = {
      ...state.auspicious_packages,
      ...data
    }
  }
}

export const actions = {
  setUsers ({ commit }, data) {
    commit('SET_USER', data)
  },
  setAuspiciousPackages ({ commit }, data) {
    commit('SET_AUSPICIOUS_PACKAGES', data)
  },
  handleLoading ({ commit }, status) {
    commit('SET_LOADING', status)
  }
}
