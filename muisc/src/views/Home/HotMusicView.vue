<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>热歌榜</h3>
        <a href="">更多</a>
      </div>
      <div class="list clearfix">

        <router-link
            class="item"
            v-for="(item,index) in hotMusicList.slice(0,6)"
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
  import {mapState} from 'vuex'
  export default {
    name: "HotMusicView",
    computed: {
      ...mapState({
        'hotMusicList':state => state.HotMusic.hotMusicList
      })
    },
    mounted() {
      this.$store.dispatch('GetHotMusic')
    },
    methods: {
    }

  }
</script>

<style scoped lang="less">
.collection-block{
  margin-top: 10px;
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
    //background-color:red;
    overflow: hidden;
    //text-align: center;
    //margin: 0 auto;
    .item{
      float:left;
      text-align: center;
      width:120px;
      height:200px;
      display: block;
      cursor: pointer;
      padding-top: 20px;
      //padding-left:10px;
      margin-left:5px;
      color:black;
      //display: inline-block;
      //padding:10px;
      //background-color:skyblue;
      .img-wrapper{
        img{
          width: 100px;
        }
      }
      .main{
        color: gray;
        font-size:12px;
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