<template>
  <div class="conteiner">
      <jsNav/>
      <jsNews/>
      <jsCourse/>
  </div>
</template>

<script>
import jsNav from '@/components/jsNav.vue'
import jsNews from '@/components/jsNews.vue'
import jsCourse from '@/components/JsCurse.vue'
export default {
components:{
  jsNav,
  jsNews,
  jsCourse,
}
}
</script>

<style>

</style>