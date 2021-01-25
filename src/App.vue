<template>
  <div id="app">
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">The Boring Game</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/home"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/collection">Game Collection</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="/feedback">Feedback</a>
            </li> -->
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                </form> -->
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>



<script>
// import HelloWorld from './component/HelloWorld.vue'

export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  background-image: url("../src/assets/360_F_323880864_TPsH5ropjEBo1ViILJmcFHJqsBzorxUB.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
}
</style>
