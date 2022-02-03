<template>
  <div :class="['fixed z-10 inset-0 overflow-y-auto', !getAuthModalShow ? 'hidden' : null]"
   id="modal">
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click="toggleAuthModal">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center" v-for="tab in tabs" :key="tab.id">
              <a
                :class="[tab.class, tab.name == currentTab ?
                'hover:text-white text-white bg-blue-600':
                null]"
                href="#"
                @click.prevent="setCurrentTab(tab.name)"
                >{{tab.name}}</a
              >
            </li>
          </ul>
        <component :is="currentComponent"></component>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import RegisterForm from './RegisterForm.vue';
import LoginForm from './LoginFom.vue';

export default {
  name: 'Auth',
  components: {
    RegisterForm,
    LoginForm,
  },
  data() {
    return {
      currentTab: 'login',
      tabs: [
        {
          id: 1,
          name: 'login',
          class: 'block rounded py-3 px-4 transition',
        },
        {
          id: 2,
          name: 'register',
          class: 'block rounded py-3 px-4 transition',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getAuthModalShow: 'getAuthModalShow',
    }),
    ...mapMutations({
      toggleAuthModal: 'toggleAuthModal',
    }),
    isLogin() {
      return this.currentTab === 'login';
    },
    isRegister() {
      return this.currentTab === 'register';
    },
    currentComponent() {
      return this.isLogin ? 'LoginForm' : 'RegisterForm';
    },
  },
  methods: {
    setCurrentTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>
