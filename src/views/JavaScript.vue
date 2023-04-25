<template>
  <div class="conteiner"  v-on:click="clossLangMenu">
      <jsNav/>
      <jsNews/>
      <jsCourse/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import jsNav from '@/components/jsNav.vue'
import jsNews from '@/components/jsNews.vue'
import jsCourse from '@/components/JsCurse.vue'
export default {
components:{
  jsNav,
  jsNews,
  jsCourse,
},
methods:{
  ...mapMutations(["clossCourseList"]),
  clossLangMenu(){
   this.clossCourseList()
      
  }
}
}
</script>

<style>

</style>