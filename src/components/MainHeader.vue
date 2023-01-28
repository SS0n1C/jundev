  <template>
    <div class="conteiner">
      <div class="headerField">
        <div class="headerField__course">
          <div class="headerField__course--block" :class="{dropDownList: dropActive}">
            <div class="courseBlock__lang"> 
              <div class="courseBlock__lang--item"  
                v-for="testing in course" 
                :key = testing.id>
                <div class="testss" v-if="dropActive">
                  {{ testing.name }}
                </div>
              </div>
              <div class="test" v-if="!dropActive">
                {{ test }}
              </div>
            </div>
            <div class="curseBlock__arrow" v-on:click="openAllLang" v-if="dropActive">
              &#8593
            </div>
            <div class="curseBlock__arrow" v-on:click="openAllLang" v-if="!dropActive">
              &#8595
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
          <div class="headerField__login--sing">
            sing in
          </div>
          <div class="headerField__login--sing">
            sing up
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        dropActive: false,
        course:[
          {id: 0, name: "JavaScript"},
          {id: 1, name: "Python"},
          {id: 2, name: "SEO"},
          {id: 3, name: "PM"},
        ],
      }
    },
    computed:{
        test(){
           return this.course[0].name
        }
  },
    methods:{
      openAllLang(){
       if(this.dropActive == true){
        this.dropActive = false
       } else if(this.dropActive == false){
        this.dropActive = true
       }
        
      }
    }
  }
  </script>
  
  <style>

  </style>