<template>
  <div class="Topic">
    <div class="Music">
      <div class="header">
        <img src="https://avatars.githubusercontent.com/u/76736117?v=4" alt="">
        <span>新歌榜</span>
      </div>
      <div
          v-for="(item,index) in NewMusicList.slice(0,3)"
          :key="index"
          class="item"
      >
        <i>{{index+1}}.</i>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="Music">
      <div class="header">
        <img src="https://avatars.githubusercontent.com/u/76736117?v=4" alt="">
        <span>热歌榜</span>
      </div>
      <div
          v-for="(item,index) in HotMusicList.slice(0,3)"
          :key="index"
          class="item"
      >
        <i>{{index+1}}.</i>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="Music">
      <div class="header">
        <img src="https://avatars.githubusercontent.com/u/76736117?v=4" alt="">
        <span>飙升榜</span>
      </div>
      <div
          v-for="(item,index) in SoarMusicList.slice(0,3)"
          :key="index"
          class="item"
      >
        <i>{{index+1}}.</i>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="Music">
      <div class="header">
        <img src="https://avatars.githubusercontent.com/u/76736117?v=4" alt="">
        <span>原创榜</span>
      </div>
      <div
          v-for="(item,index) in OriginalMusicList.slice(0,3)"
          :key="index"
          class="item"
      >
        <i>{{index+1}}.</i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {NewMusic,HotMusic,SoarMusic,OriginalMusic} from "../api";
  export default {
    name: "Topic",
    data(){
      return {
        NewMusicList:[],
        HotMusicList:[],
        SoarMusicList:[],
        OriginalMusicList:[]
      }
    },
    async created() {
      if(this.NewMusicList || this.HotMusicList || this.SoarMusicList || this.OriginalMusicList === ''){
      }
      let result = await NewMusic()
      this.NewMusicList = result.data
      let result2 = await HotMusic()
      this.HotMusicList = result2.data
      let result3 = await SoarMusic()
      this.SoarMusicList = result3.data
      let result4 = await OriginalMusic()
      this.OriginalMusicList = result4.data
    }

  }
</script>

<style scoped lang="less">
.Topic{
  margin-top: 5px;
  background-color:#f8f8f8;
  .Music{
    margin: 0 auto;
    margin-bottom:10px;
    //margin-top: 5px;
    width: 80%;
    //background-color:red;
    box-shadow: 0 0 5px gray;
    border-radius: 10px;
    min-height:150px;
    .header{
      overflow: hidden;
      img{
        margin-left:10px;
        margin-top: 10px;
        float: left;
        width:50px;
        border-radius:50%;
      }
      span{
        margin-right:10px;
        margin-top: 25px;
        float: right;
        color: #e47670;
      }
    }
    .item{
      text-align: center;
      i{
        color: red;
      }
    }
  }
}
</style>