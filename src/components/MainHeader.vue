  <template>
    <div class="conteiner">
      <div class="headerField">
        <div class="headerField__course">
          <div class="headerField__course--block" :class="{dropDownList: getDropStatus}">
            <div class="course__menu">
              <div class="course__menu--active" v-show="!getDropStatus">
                {{ getFirstLang}}
              </div>
              <div class="course__menu--arrow" v-on:click="openAllLang" v-if="getDropStatus">
                <svg class="course__menu--arrow">
                  <use xlink:href = "@/assets/img/sprite.svg#arrowDown"></use>  
                </svg>
              </div>
              <div class="course__menu--arrow" v-on:click="openAllLang" v-if="!getDropStatus">
                <svg class="course__menu--arrow">
                  <use xlink:href = "@/assets/img/sprite.svg#arrowUp"></use>  
                </svg>
            </div>
            </div>
            <div class="courseBlock__lang"> 
              <div class="courseBlock__lang--item" 
                v-for="(allCourse, index) in getAlllang" :key = index>
                <div v-if="getDropStatus"
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
      }
    },
    computed:{
      ...mapGetters(["getLogin","getFirstLang","getAlllang","getDropStatus"]),
  },
    methods:{
      ...mapMutations(["openLogin","openRegistration","openAll"]),
      openAllLang(){
        this.openAll()
      },
      openLog(){
        this.openLogin()
      },
      openReg(){
        this.openRegistration()
      },
      changeLang(allCourse){
        let findInx =  this.getAlllang.map(e => e).find(e => e == allCourse)
        this.getAlllang.sort(function(x,y){ 
              return x == findInx ? -1 : y == findInx ? 1 : 0; 
            });
        this.openAllLang()
      }
    }
  }
  </script>
  
  <style>

  </style>