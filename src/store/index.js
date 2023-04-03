import { createStore } from 'vuex'
import header from "@/store/modules/header"
import jsNav from "@/store/modules/jsNav"

export default createStore({
  modules: {
    header,
    jsNav,
  }
})