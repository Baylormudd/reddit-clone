<template>
  <div id="app">
   <nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    Link-Comment-Post
</div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-danger" @click="login()" v-if="!isLoggedIn">
              Login with Google
            </a>
          </p>
          <p class="control" v-if="isLoggedIn">
            <section style="align-items:center;">
            <figure class="image is-32x32">
              <img :src="user.image" alt="">
            </figure>
            <figcaption>{{user.name}}</figcaption>
            </section>
            <a class="button is-primary" @click="logout()">
            logout
            </a>
          </p>
        </div>
      </div>
    </div>
  
</nav>
    <router-view class="main container"/>
  </div>
</template>

<style lang="scss">
.main {
  margin-top:15px;
}
</style>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  computed: mapState('auth',['user', 'isLoggedIn']),
  methods: mapActions('auth',['login','logout'])
};
</script>
