<template>
  <div class="wrapper">
    <header class="header">
      <MainHeader/>
    </header>
    <main class="main">
      <Registration v-if="getLogin"/>
      <LoginIn v-if="getRegistration"/>
      <router-view v-if="!getLogin && !getRegistration"/>
    </main>
  <footer>
    <MainFooter/>
  </footer>
  </div>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from "@/components/MainFooter.vue";
import Registration from "@/components/Registration.vue";
import LoginIn from "@/components/LoginIn.vue";
import { mapGetters } from 'vuex';
export default {
computed: mapGetters(["getLogin","getRegistration"]),
components:{
  MainHeader,
  MainFooter,
  Registration,
  LoginIn,
}
}
</script>

<style lang="scss">
.wrapper{
  margin: 0;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.header{
  position: sticky;
  top:0px;
}


</style>