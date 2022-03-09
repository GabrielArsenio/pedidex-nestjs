<template>
  <div class="bg-white">
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div
                class="
                  col-6
                  d-lg-flex d-none
                  h-100
                  my-auto
                  pe-0
                  ps-0
                  position-absolute
                  top-0
                  start-0
                  text-center
                  justify-content-center
                  flex-column
                "
              >
                <div
                  class="
                    position-relative
                    h-100
                    m-3
                    px-7
                    border-radius-lg
                    d-flex
                    flex-column
                    justify-content-center
                  "
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/illustrations/illustration-signin.jpg') +
                      ')',
                  }"
                ></div>
              </div>
              <div
                class="
                  col-xl-4 col-lg-5 col-md-7
                  d-flex
                  flex-column
                  ms-auto
                  me-auto
                  ms-lg-auto
                  me-lg-5
                "
              >
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder">Sign In</h4>
                    <p class="mb-0">
                      Enter your email and password to register
                    </p>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <vmd-input
                        type="text"
                        label="Name"
                        name="name"
                        size="lg"
                        @input="form.name = $event?.target?.value"
                        @keyup.enter="signUp(form)"
                      />
                    </div>
                    <div class="mb-3">
                      <vmd-input
                        type="email"
                        label="Email"
                        name="email"
                        size="lg"
                        @input="form.email = $event?.target?.value"
                        @keyup.enter="signUp(form)"
                      />
                    </div>
                    <div class="mb-3">
                      <vmd-input
                        type="password"
                        label="Password"
                        name="password"
                        size="lg"
                        @input="form.password = $event?.target?.value"
                        @keyup.enter="signUp(form)"
                      />
                    </div>
                    <div class="mb-3">
                      <vmd-input
                        type="password"
                        label="Password Confirmation"
                        name="passwordConfirmation"
                        size="lg"
                        @input="
                          form.passwordConfirmation = $event?.target?.value
                        "
                        @keyup.enter="signUp(form)"
                      />
                    </div>
                    <div class="mb-3 text-center">
                      <vmd-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        @click="signUp(form)"
                        >Sign Up</vmd-button
                      >
                    </div>
                    <div class="mb-3">
                      <vmd-alert
                        class="font-weight-light"
                        color="danger"
                        dismissible
                        v-if="erros.length"
                        @dismiss="erros = []"
                      >
                        <div v-for="erro in erros" :key="erro">
                          <span class="text-sm">{{ erro }}</span>
                        </div>
                      </vmd-alert>
                    </div>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      Don't have an account?
                      <router-link
                        :to="{ name: 'SignIn' }"
                        class="text-success text-gradient font-weight-bold"
                        >Sign In</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import VmdInput from "@/components/VmdInput.vue";
import VmdButton from "@/components/VmdButton.vue";
import VmdAlert from "@/components/VmdAlert.vue";
import { signIn, signUp } from "../service/auth.service";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "sign-up",
  components: {
    VmdInput,
    VmdButton,
    VmdAlert,
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        passwordConfirm: null,
      },
      erros: [],
    };
  },
  methods: {
    async signUp(form) {
      try {
        await signUp(form);

        const respSignIn = await signIn(form);
        localStorage.setItem("token", respSignIn.data.token);
        this.$router.push(this.$route.query.redirect || "/");
      } catch (error) {
        this.erros = error.response.data.message;
      }
    },
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
