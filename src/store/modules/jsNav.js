export default{
    state: {
        jsNavList:[
            {id:0, title:"news"},
            {id:1, title:"course"},
            {id:2, title:"video"},
            {id:3, title:"state"},
            {id:4, title:"mems"},
        ],
        jsNews:[
            {id:0, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:1, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:2, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:3, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:4, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:5, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:6, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:7, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:8, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:9, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:10, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:11, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:12, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:13, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:14, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
        ],
        schoolList:[
            {id:0, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 4, coment: 6 },
            {id:1, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 2, coment: 4 },
            {id:2, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 3,coment:2 },
            {id:3, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 3,coment:2 },
            {id:4, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 3,coment:2 },
        ],  
    },
    getters: {
        getJsNav(state){
            return state.jsNavList
        },
        getJsNews(state){
            return state.jsNews
        },
        getschoolList(state){
            return state.schoolList
        },
    },
}