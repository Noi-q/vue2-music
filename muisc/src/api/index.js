import request from '../utils/request'

// 统一管理


// 新歌版
const NewMusic = () =>{
  return request({
    url:'/api/',
    method:'get',
    params:{
      input: '快手最新歌曲',
      filter: 'name',
      type:'163'
    }
  })
}

// 热歌版
const HotMusic = ()=>{
  return request({
    url:'/api/',
    method: 'get',
    params:{
      input: '抖音最火歌曲',
      filter: 'name',
      type:'163'
    }
  })
}

// 榜单
const HotMusicList = ()=>{
  return request({
    url:'/api/',
    method: 'get',
    params: {
      input: '最热排行榜歌曲',
      filter: 'name',
      type: '163'
    }
  })
}

// 搜索
const SearchMusic = (params)=>{
  return request({
    url:'/api/',
    method: 'get',
    params: params
  })
}

// 播放器
const PlayerMusic = (params)=>{
  return request({
    url:'/api/',
    method: 'get',
    params: params
  })
}


export {
  NewMusic,
  HotMusic,
  PlayerMusic,
  HotMusicList,
  SearchMusic,
}