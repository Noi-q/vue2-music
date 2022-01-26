<template>
  <div class="Search">
    <div class="Header">
      <h2>选择搜索平台</h2>
      <el-radio v-model="radio" label="163">网易云</el-radio>
      <el-radio v-model="radio" label="qq">QQ</el-radio>
      <el-radio v-model="radio" label="kugou">酷狗</el-radio>
      <el-radio v-model="radio" label="kuwo">酷我</el-radio>
      <el-radio v-model="radio" label="xiami">虾米</el-radio>
    </div>
    <div class="main">
      <input
          type="text"
          placeholder="请输入音乐名字"
          @keyup.enter="SearchMusic"
          v-model="MusicName"
      >
    </div>
    <div class="MusicList">
      <router-link class="item" v-for="(item,index) in MusicList" :key="index" :to="`/player/${item.songid}`">
        <img :src="item.pic" alt="">
        <p>{{item.name}}</p>
        <p>{{item.author}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {SearchMusic} from '../api'
  export default {
    name: "Search",
    data(){
      return {
        radio:'163',
        MusicName:'',
        MusicList:[]
      }
    },
    methods:{
      async SearchMusic(){
        // console.log("1")
        const result = await SearchMusic({
          input:this.MusicName,
          filter:'name',
          type: this.radio
        })
        this.MusicList = result.data
        // console.log(result)
      }
    }
  }
</script>

<style scoped lang="less">
.Search{
  //height:100vh;
  margin-top: 5px;
  //background-color:red;
  background-color:#f8f8f8;
  .Header{
    padding:10px;
    text-align: center;
    h2{
      margin-bottom:10px;
    }
    label{
      margin-left: 10px;
      font-size:14px;
    }
  }
  .main{
    text-align: center;
    input{
      padding:10px;
      outline: none;
      border: solid #f8d5d5;
      border-radius:30px;
    }
  }
  .MusicList{
    margin-top: 50px;
    .item{
      margin: 20px;
      //background-color:red;
      //display: inline-block;
      //border-radius:40px;
      background-color:#f1f0f0;
      overflow: hidden;
      cursor: pointer;
      display:block;
      color: black;
      img{
        float: left;
        //display: inline-block;
        border-radius:50%;
        width:50px;
        //margin-left:50px;
      }
      p{
        text-align: center;
        //padding-left:50px;
        //margin-left:20px;
        //background-color:red;
      }
      p:nth-of-type(2){
        color:gray;
        font-size:14px;
      }
    }
    .item:hover {
      background-color:#b3a9a9;
    }
  }
}
</style>