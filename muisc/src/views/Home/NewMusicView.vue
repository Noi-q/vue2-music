<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>新歌榜</h3>
        <a href="">更多</a>
      </div>
      <div class="list clearfix">
        <router-link
            class="item"
            v-for="(item,index) in newMusicList.slice(0,6)"
            :key="index"
            :to="`/player/${item.songid}`"
        >
          <div class="img-wrapper">
            <img :src="item.pic" alt="">
          </div>
          <div class="main">
            <p>{{item.name}}</p>
          </div>
          <div class="gary">
            <p>{{item.author}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {NewMusic} from '../../api'
  export default {
    name: "MusicListView",
    data(){
      return {
        newMusicList:[]
      }
    },
    async created() {
      const a = await NewMusic()
      this.newMusicList = a.data
      // console.log(a.data)
    }
  }
</script>

<style scoped lang="less">
  .collection-block{
    margin-top: 5px;
    //background-color:red;
    background-color:#f8f8f8;
    .block-padding{
      .title{
        //background-color:red;
        overflow: hidden;
        padding:20px;
        h3{
          //background-color:red;
          float: left;
          font: 20px "微软雅黑";
          font-weight: bold;
          color: #453f3f;
        }
        a{
          float: right;
          color:gray;
        }
      }
    }
    .list{
      //text-align: center;
      //background-color:red;
      overflow: hidden;
      .item{
        float:left;
        text-align: center;
        width:120px;
        height:200px;
        display: block;
        //padding-left:10px;
        padding-top: 20px;
        //padding-bottom: 10px;
        margin-left:5px;
        //background-color:skyblue;
        cursor: pointer;
        color:black;
        .img-wrapper{
          img{
            width: 100px;
          }
        }
        .main{
          color: gray;
          font-size:12px;
          //box-sizing: border-box;
          //overflow:scroll;
          //background-color:red;
          p{
            word-wrap: break-word;
          }
        }
        .gary{
          //color: gray;
          p{
            word-wrap: break-word;
            font-size:14px;
          }
        }
      }
    }
  }
</style>