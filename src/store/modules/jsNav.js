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
            {id:0, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 1", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:1, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 2", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:2, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 3", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:3, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 4", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:4, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 5", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:5, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 6 ", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:6, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 7", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:7, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 8", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:8, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 9", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:9, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 10", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:10, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 11", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:11, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 12", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:12, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some fdgfgg news 13", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:13, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 14", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:14, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some new 15", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:15, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 16", dicript:"tell me ff about your days tell me about your days tell me about your days tell me about your days"},
            {id:15, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:"some news 17", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
            {id:15, source:"google.com", img: require('@/assets/img/test.png'),data:"22.22.22", title:" news 18", dicript:"tell me about your days tell me about your days tell me about your days tell me about your days"},
        ],
        schoolList:[
            {id:0, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 4, coment: 6, aboutTitle: "Your tech career starts here.", about:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro provident voluptate dignissimos eveniet perferendis beatae laboriosam placeat nulla quos ducimus dolore, in molestiae quis nobis, minima eligendi quidem accusantium architecto."},
            {id:1, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 2, coment: 4, aboutTitle: "Your tech career starts here.", about:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro provident voluptate dignissimos eveniet perferendis beatae laboriosam placeat nulla quos ducimus dolore, in molestiae quis nobis, minima eligendi quidem accusantium architecto."},
            {id:2, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 3,coment:2, aboutTitle: "Your tech career starts here.", about:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro provident voluptate dignissimos eveniet perferendis beatae laboriosam placeat nulla quos ducimus dolore, in molestiae quis nobis, minima eligendi quidem accusantium architecto."},
            {id:3, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 3,coment:2, aboutTitle: "Your tech career starts here.", about:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro provident voluptate dignissimos eveniet perferendis beatae laboriosam placeat nulla quos ducimus dolore, in molestiae quis nobis, minima eligendi quidem accusantium architecto."},
            {id:4, title:"Beetroot academy", webSite:"google.com", img: require('@/assets/img/course/beetroot.jpg'),starRaiting: 3,coment:2, aboutTitle: "Your tech career starts here.", about:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro provident voluptate dignissimos eveniet perferendis beatae laboriosam placeat nulla quos ducimus dolore, in molestiae quis nobis, minima eligendi quidem accusantium architecto."},
        ],  
        searchTexts: "some"
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
    mutations: {
        newSearchText(state, searchTexts){
            state.searchTexts = searchTexts
        },
        searchPost(state){
            let search = "some news 9"
            state.jsNews.forEach(e => {
                let element = e.title.split(" ")
                let res = element.filter((item) => 
                  search.split(" ").includes(item))
                  if(res.length == search.split(" ").length){
                    console.log(e)
                  }
              });
        }
    }
}