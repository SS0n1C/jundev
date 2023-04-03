  <template>
    <div class="conteiner">
      <div class="headerField">
        <div class="headerField__course">
          <div class="headerField__course--block" :class="{dropDownList: dropActive}">
            <div class="course__menu">
              <div class="course__menu--active" v-show="!dropActive">
                {{ activeCourse}}
              </div>
              <div class="course__menu--arrow" v-on:click="openAllLang" v-if="dropActive">
                <svg class="course__menu--arrow">
                  <use xlink:href = "@/assets/img/sprite.svg#arrowDown"></use>  
                </svg>
              </div>
              <div class="course__menu--arrow" v-on:click="openAllLang" v-if="!dropActive">
                <svg class="course__menu--arrow">
                  <use xlink:href = "@/assets/img/sprite.svg#arrowUp"></use>  
                </svg>
            </div>
            </div>
            <div class="courseBlock__lang"> 
              <div class="courseBlock__lang--item" 
                v-for="(allCourse, index) in course" :key = index>
                <div v-if="dropActive"
                @click="changeLang(allCourse)">
                  {{ allCourse.name }}
                </div>
              </div>
              
            </div>
          </div>
       <!-- -->
        </div>
        <div class="headerField__logo">
            <div class="headerField__logo--img">
              <img src="@/assets/img/JDlogo.png" alt="logo">
            </div>
            <div class="headerField__logo-txt">
              JunDev
            </div>
        </div>
        <div class="headerField__login">
          <div class="headerField__login--sing" @click ="openLog">
            sing up
          </div>
          <div class="headerField__login--sing" @click ="openReg">
            sing in
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import { mapMutations } from 'vuex';
  export default {
    data(){
      return{
        dropActive: false,
        curentLangId: 0,
        course:[
          {id: 0, name: "JavaScript"},
          {id: 1, name: "Python"},
          {id: 2, name: "SEO"},
          {id: 3, name: "PM"},
        ],
      }
    },
    computed:{
      ...mapGetters(["getLogin"]),
        activeCourse(){
           return this.course[0].name
        }
  },
    methods:{
      ...mapMutations(["openLogin","openRegistration"]),
      openAllLang(){
       if(this.dropActive == true){
        this.dropActive = false
       } else if(this.dropActive == false){
        this.dropActive = true
       }
      },
      openLog(){
        this.openLogin()
      },
      openReg(){
        this.openRegistration()
      },
      changeLang(allCourse){
        let findInx =  this.course.map(e => e).find(e => e == allCourse)
        this.course.sort(function(x,y){ 
              return x == findInx ? -1 : y == findInx ? 1 : 0; 
            });
            return this.dropActive = false
      }
    }
  }
  </script>
  
  <style>

  </style>