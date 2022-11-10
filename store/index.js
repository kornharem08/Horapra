export const state = () => ({
  users: {
    name: '',
    phone: '',
    email: '',
    line: ''
  },
  auspicious_packages: {
    package: null,
    monk: 0,
    is_monk: false,
    is_churchwarden: true,
    style_buffet: '',
    price: 0,
    is_morepackage: false
  },
  loading: false,
  accessories: null,
  summary: {},
  pdf: null
})

export const getters = {
  getUsers (state) {
    return state.users
  },
  getSummary (state) {
    return state.summary
  },
  getAccessories (state) {
    return state.accessories
  },
  getPdf (state) {
    return state.pdf
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
  SET_SUMMARY (state, data) {
    state.summary = { ...data }
  },
  SET_ACCESSORIES (state, data) {
    state.accessories = data
  },
  SET_PDF (state, data) {
    state.pdf = data
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
  },
  setSummary ({ commit }, data) {
    commit('SET_SUMMARY', data)
  },
  setAccessories ({ commit }, data) {
    commit('SET_ACCESSORIES', data)
  },
  setPdf ({ commit }, data) {
    commit('SET_PDF', data)
  }
}
