<template>
  <div class="Topic">
    <div class="List">
      <div class="item" v-for="(item,index) in HotMusicList" :key="index">
          <router-link :to="`/player/${item.songid}`">
              <img :src="item.pic" alt="">
              <p>{{item.name}}</p>
              <p>{{item.author}}</p>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {HotMusicList} from "../api";
  export default {
    name: "Topic",
    data(){
      return {
        HotMusicList:[]
      }
    },
    async created() {
      let result = await HotMusicList()
      this.HotMusicList = result.data
      console.log(result)
    }

  }
</script>

<style scoped lang="less">
.Topic{
  margin-top: 5px;
  background-color:#f8f8f8;

  .List{
    .item{
      //background-color:skyblue;
      padding:5px;
      //text-align: center;

      a{
        margin-top:5px;
        display: block;
        background-color: #f1f0f0;
        cursor: pointer;
        color: black;
        overflow:hidden;
        padding:5px;
        img{
          float:left;
          margin-left:10px;
          width:50px;
          border-radius:50%;
        }
        p{
          //display:block;
          //margin-left:20px;
          //background-color:red;
          text-align: center;
        }
        p:nth-of-type(2){
          color:gray;
          font-size:14px;
        }
      }
      a:hover {
        background-color:#b3a9a9;
      }
    }
  }
}
</style>