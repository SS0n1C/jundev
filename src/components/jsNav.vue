<template>
  <nav class="nav">
    <div class="navField">
        <div class="navField__item"
        v-for="navlist in getJsNav" 
        :key = navlist.id>
            {{ navlist.title }}
        </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
      ...mapGetters(["getJsNav"]),
    },
methods:{

}
}
</script>

<style>

</style>