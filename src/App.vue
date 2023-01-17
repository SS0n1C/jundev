<template>
  <div class="wrapper">
    <header>
      <MainHeader/>
    </header>
    <main>
      <router-view/>
    </main>
  <footer>
    <MainFooter/>
  </footer>
  </div>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from "@/components/MainFooter.vue";
export default {
components:{
  MainHeader,
  MainFooter,
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
</style>