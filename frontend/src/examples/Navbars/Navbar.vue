<template>
  <nav
    class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
    :class="this.$store.state.isAbsolute ? 'mt-4' : 'mt-0'"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :textWhite="textWhite" />
      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          <vmd-input label="Search here" />
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item dropdown d-flex align-items-center">
            <a
              href="#"
              class="px-0 nav-link font-weight-bold lh-1"
              :class="[
                textWhite ? textWhite : 'text-body',
                showMenu ? 'show' : '',
              ]"
              id="dropdownUser"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <i
                class="material-icons"
                :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-1'"
              >
                account_circle
              </i>
            </a>
            <ul
              class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownUser"
            >
              <li class="mb-2">
                <router-link
                  class="dropdown-item border-radius-md"
                  to="/profile"
                >
                  Perfil
                </router-link>
              </li>
              <li>
                <a
                  class="dropdown-item border-radius-md"
                  href="javascript:;"
                  @click="sair()"
                >
                  Sair
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              href="#"
              @click="toggleSidebar"
              class="p-0 nav-link text-body lh-1"
              id="iconNavbarSidenav"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li class="px-3 nav-item d-flex align-items-center">
            <a
              class="p-0 nav-link lh-1"
              @click="toggleConfigurator"
              :class="textWhite ? textWhite : 'text-body'"
            >
              <i class="material-icons fixed-plugin-button-nav cursor-pointer">
                settings
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import VmdInput from "@/components/VmdInput.vue";
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),

    toggleSidebar() {
      this.navbarMinimize();
    },
    sair() {
      localStorage.removeItem("token");
      this.$router.push("/sign-in");
    },
  },
  components: {
    Breadcrumbs,
    VmdInput,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
