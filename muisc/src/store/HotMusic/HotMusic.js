import {HotMusic} from "../../api";
const state = {
  hotMusicList:[]
}

const mutations = {
  GETHOTMUSIC(state,a){
    state.hotMusicList = a.data
  },
}

const actions = {
  async GetHotMusic({commit}){
    let a = await HotMusic()
    commit('GETHOTMUSIC',a)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}