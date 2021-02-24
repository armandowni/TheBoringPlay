<template>
  <v-app transition="fade-transition">
    <div v-if="load">
      <div v-if="page === 'Home' || page === 'LandingPage'">
        <v-app id="inspire" transition="fade-transition">
          <router-view :breakpointSize="breakpointSize"></router-view>
        </v-app>
      </div>
      <div v-else>
        <v-app id="inspire" transition="fade-transition">
          <header-component class="anotherHeader" />
          <router-view></router-view>
        </v-app>
      </div>
    </div>

    <div class="text-center" id="loader" v-if="!load">
      <v-progress-circular
        :size="100"
        :width="10"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-app>
</template>



<script>
import HeaderComponent from "./components/HeaderAndFooter/Header/Header.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      load: false,
      page: "",
      breakpointSize:0,
    };
  },
  beforeMount() {
    this.load = false;
  },
  mounted() {
    this.doLoading();
    this.checkRouteName();
    this.checkDisplays()
  },
  methods: {
    checkDisplays(){
      this.breakpointSize = this.$vuetify.breakpoint.width
    },
    checkRouteName() {
      this.page = this.$route.name;
    },
    doLoading() {
      this.load = false;
      setTimeout(() => {
        this.load = true;
      }, 2000);
    },
  },
};
</script>

<style>
.anotherHeader {
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
}
#loader {
  position: fixed;
  top: 45%;
  left: 45%;
}
.v-application--wrap {
  min-height: 0vh;
  max-height: 0%;
}
</style>
