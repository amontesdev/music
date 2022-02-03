import { createStore } from 'vuex';
import { auth, usersCollection } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  actions: {
    async register({ commit }, user) {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password,
      );
      await usersCollection.doc(userCredentials.user.uid).set({
        name: user.name,
        email: user.email,
        age: user.age,
        country: user.country,
      });
      await userCredentials.user.updateProfile({
        displayName: user.name,
      });
      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit('toggleAuth');
      }
    },
    async login({ commit }, user) {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      commit('toggleAuth');
    },
  },
  getters: {
    getAuthModalShow: (state) => state.authModalShow,
  },
  modules: {
  },
});
