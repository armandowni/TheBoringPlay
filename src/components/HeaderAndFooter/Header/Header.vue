
<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand white--text" href="/">The Boring Game</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="color: white"
      >
        <v-icon color="white">fas fa-bars</v-icon>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link white--text" href="/home" >{{t('HomeMenu')}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link white--text" href="/collection"
              >{{t('CollectionMenu')}}</a
            >
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                </form> -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="white" v-bind="attrs" v-on="on">
              <country-flag :country="lang.icon" style="border:1px solid black;"/>
              <span style="padding-left:10px;">{{ lang.title }}</span>
            </v-btn>
          </template>
          <v-list >
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>
                <a @click="changeLang(item)">
                  <country-flag :country="item.icon" style="border:1px solid black;"/>
                  <span style="padding-left:10px;">{{ item.title }}</span>
                </a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </nav>
  </div>
</template>

<script src="./Header.js"></script>

<style scoped src="./Header.css"></style>
