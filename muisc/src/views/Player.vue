<template>
  <div class="Player">
    <!-- 播放器 -->
<!--    <p v-show="MusicURL[0] = !MusicURL[0]">网络出问题了！</p>-->
    <header>
      <i class="fa fa-angle-left h-a" aria-hidden="true" @click="GetHome"></i>
      <div class="author">
        <p>{{MusicURL[0].name}}</p>
        <p>{{MusicURL[0].author}}</p>
      </div>
      <i class="fa fa-search h-b" aria-hidden="true" @click="GetSearch"></i>
      <div class="MusicImg">
        <img :src="MusicURL[0].pic" alt="">
      </div>
      <i class="fa fa-star-o h-c" aria-hidden="true" @click="GetCollection"></i>
      <i class="fa fa-download h-d" aria-hidden="true" @click="GetDownload"></i>
      <div class="MP3">
        <audio controls preload="true" loop>
          <source :src="MusicURL[0].music" type="audio/mpeg">
        </audio>
      </div>
    </header>
  </div>
</template>

<script>
  import {PlayerMusic} from "../api";
  export default {
    name: "Player",
    data(){
      return{
        MusicURL:''
      }
    },
    methods: {
      GetHome(){
        this.$router.push({
          path:'/'
        })
      },
      GetSearch(){
        this.$router.push({
          name:'Search'
        })
      },
      // 收藏
      GetCollection(){},
      // 下载
      async GetDownload(){
        const result = await PlayerMusic({
          input:this.$route.params.songid,
          filter:'id',
          type:'163'
        }).then(
            res =>{
              if(res.code === 200){
                let a = document.createElement('a')
                let url = res.data[0].music
                let filename = res.data[0].name
                a.href = url
                a.download = filename
                a.click()
              }
            }
        )
        console.log(result)

      }
    },
    async created() {
      const result = await PlayerMusic({
        input:this.$route.params.songid,
        filter:'id',
        type:'163'
      })
      this.MusicURL = result.data
      console.log(result)
      // this.MusicURL = a.data[0].music
      // console.log(a)
    }
  }
</script>

<style scoped lang="less">
.Player{
  position:fixed;
  top:0;
  background-color:white;
  width:100%;
  height:100%;
  //padding-left:15px;
  //padding-right:15px;
  header{
    overflow: hidden;
    text-align: center;
    .h-a{
      cursor:pointer;
      padding-top: 15px;
      padding-left:15px;
      font-size:30px;
      float:left;
    }
    .author{
      display: inline-block;
      padding-top: 15px;
      //background-color:red;
      text-align: center;
      p:nth-of-type(1){
        font-size:15px;
      }
      p:nth-of-type(2){
        color:gray;
        font-size:12px;
      }
    }
    .h-b{
      cursor:pointer;
      padding-top: 15px;
      padding-right:15px;
      font-size:25px;
      float:right;
      //background-color:red;
    }
    .MusicImg{
      //background-color:red;
      img{
        width:150px;
        box-shadow:0 0 5px black;
        margin-top:50px;
      }
    }
    .h-c{
      cursor:pointer;
      padding-top: 15px;
      padding-left:15px;
      font-size:25px;
      float:left;
    }
    .h-d{
      cursor:pointer;
      padding-top: 15px;
      padding-right:15px;
      font-size:25px;
      float:right;
    }
    .MP3{
      text-align: center;
      audio{
        margin-top:100px;
        //background-color:rgba( 251, 246, 246 , 0.1);
        border-radius:10px;
      }
    }
  }
}
</style>