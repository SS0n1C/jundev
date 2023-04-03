<template>
  <div class="jsCourse">
    <div class="jsCourse__title">
        Course
    </div>
    <div class="jsCourse__courseArea">
    <vueper-slides
    3d fixed-height="400px" arrows-outside bullets-outside :bullets="false" :touchable="false">
    <vueper-slide
    v-for="(schoolList, i) in getschoolList"
    :key="i">
    <template #content>
        <div class="jsCourse__field">
          <div class="jsCourseItem">
            <div class="jsCourseItem__title">{{ schoolList.title }}</div>
            <div class="jsCourseItem__site">{{ schoolList.webSite }}</div>
            <div class="jsCourseItem__logo"> <img :src="schoolList.img" alt=""></div>
            <div class="jsCourseItem__rait">
              <star-rating v-bind:star-size="30"
                v-model:rating="schoolList.starRaiting"
                v-bind:increment="0.5"
                v-bind:show-rating="false"/>
            </div>
            <div class="jsCourseItem__coment">Coments: {{ schoolList.coment }}</div>
          </div>
          <div class="jsCourse__discript">
            <div>lorem </div>
          </div>
        </div>
      </template>
  </vueper-slide>
</vueper-slides>
</div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css' 
import StarRating from 'vue-star-rating';
import { mapGetters } from 'vuex';
export default {
  data: () => ({
  slides: [
    {
      title: 'Slide #1',
      content: 'Slide 1 content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide 2 content.'
    }
  ]
}),
  components: {
  StarRating,
  VueperSlides, 
  VueperSlide,
},
computed:{
      ...mapGetters(["getschoolList"]),
    },
}
</script>

<style>

</style>