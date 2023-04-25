export default{
state: {
    registration:false,
    login:false,
    dropActive: false,
    course:[
      {id: 0, name: "JavaScript"},
      {id: 1, name: "Python"},
      {id: 2, name: "SEO"},
      {id: 3, name: "PM"},
    ],
},
getters: {
    getLogin(state){
        return state.login
    },
    getRegistration(state){
        return state.registration
    },
    getDropStatus(state){
        return state.dropActive
    },
    getFirstLang(state){
        return state.course[0].name
    },
    getAlllang(state){
        return state.course
    },

},
mutations: {
    openLogin(state){
        if(state.login == true) {
             state.registration = false   
             state.login = false
        } else{
             state.login = true
             state.registration = false
            }
         },
    openRegistration(state){
        if(state.registration == true) {
            state.login = false
            state.registration = false
           } else{
            state.registration = true
            state.login = false
           }
        },
    clossWind(state){
        state.registration = false
        state.login = false
    },
    openAll(state){
        if(state.dropActive == true){
            state.dropActive = false
        } else if(state.dropActive == false){
            state.dropActive = true
        }
    },
    clossCourseList(state){
        state.dropActive = false
        
    }

},

actions: {
}
}