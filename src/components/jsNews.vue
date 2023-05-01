<template>
  <div class="jsNews">
    <div class="jsNews__head">
      <div class="jsNews__head--title">News</div>
      <div class="jsNews__head--search">
        <div class="search__field">
          <input type="text" name="" id="" class="search__field">
        </div>
        <div class="search__dandruff">
          <svg>
              <use xlink:href = "@/assets/img/sprite.svg#search"></use>  
            </svg>
        </div>
      </div>
    </div>
    <div class="jsNews__area">
        <div class="jsNews__area--item"
        v-for="(n, index) in this.postCount" :key="index">
            <div class="news__sourse">{{ getJsNews[index].source }}</div>
            <div class="news__img"> <img :src="getJsNews[index].img" alt=""></div>
            <div class="news__data">{{ getJsNews[index].data }}</div>
            <div class="news__title">{{ getJsNews[index].title }}</div>
            <div class="news__discription">{{ getJsNews[index].dicript }}</div>
        </div>
    </div>
    <div class="jsNews__area--morePost" @click="morePost" v-if="hideShowButton">
        <div class="morePost__txt">More post</div>
        <div class="morePost__arrow"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return{
      postCount: 4,
      hideShowButton: true,
    }
  },
    computed:{
      ...mapGetters(["getJsNews"]),
    },
    methods:{
      morePost(){
        let test = this.getJsNews.length
        if(this.postCount +4 < test){
          console.log(test)
           this.postCount += 4
        }
        else{
           this.postCount = test
           this.hideShowButton = false
        }
      },
    }
}
</script>

<style>

</style>