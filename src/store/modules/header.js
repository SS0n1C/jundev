export default{
state: {
    registration:false,
    login:false,
},
getters: {
    getLogin(state){
        return state.login
    },
    getRegistration(state){
        return state.registration
    }
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
    }
    },

actions: {
}
}