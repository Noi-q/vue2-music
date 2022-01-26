<template>
  <div class="Mine">
    <div class="Header">
      <img src="https://avatars.githubusercontent.com/u/76736117?v=4" alt="">
      <div>Noi-q</div>
    </div>
    <div class="main">
      <div class="main-a">
        <i class="fa fa-star-o h-a" aria-hidden="true"></i>
        <br>
        <span>我的收藏</span>
      </div>
      <div class="main-a">
        <i class="fa fa-headphones h-a" aria-hidden="true"></i>
        <br>
        <span>听歌记录</span>
      </div>
    </div>
    <div class="main">
      <div class="main-a" @click="Feedback">
        <i class="fa fa-star-o h-a" aria-hidden="true"></i>
        <br>
        <span>问题反馈</span>
      </div>
      <div class="main-a" @click="Sponsor">
        <i class="fa fa-headphones h-a" aria-hidden="true"></i>
        <br>
        <span>赞助打赏</span>
      </div>
      <div class="main-a" @click="Author">
        <i class="fa fa-headphones h-a" aria-hidden="true"></i>
        <br>
        <span>关于作者</span>
      </div>
    </div>
    <div class="saying">
      <span>{{saying}}</span>
    </div>
  </div>
</template>

<script>
  import request from '../utils/request'
  export default {
    name: "Mine",
    data(){
      return {
        saying:''
      }
    },
    async created() {
      const result = await request.get("https://api.xygeng.cn/one")
      console.log(result)
      this.saying = result.data.content
    },
    methods: {
      Feedback(){
        const a = confirm('发邮箱至noi.vcal@gmail.com')
        console.log(a)
      },
      Sponsor(){
        console.log('a')
      },
      Author(){
        const a = confirm('本项目开源至Github地址为https://github.com/Noi-q/music.git')
      }
    }
  }
</script>

<style scoped lang="less">
.Mine{
  height:92vh;
  margin-top: 5px;
  //background-color:red;
  background-color:#f8f8f8;
  .Header{
    //background-color:#cecaca;
    text-align: center;
    img{
      margin-top:40px;
      width:60px;
      border-radius: 50%;
    }
    div{
      margin-top:10px;
    }
  }
  .main{
    //background-color:red;
    margin: 20px;
    box-shadow:0 0 5px #cecaca;
    border-radius:10px;
    text-align: center;
    .main-a{
      display: inline-block;
      text-align: center;
      margin-left: 20px;
      padding: 5px;
      cursor: pointer;
      //background-color:red;
      .h-a{
        font-size:20px;
      }
    }
    .main-a:hover{
      background-color:#e4dfdf;
    }
  }
  .saying{
    margin-top:50px;
    padding:50px;
    span{
      //padding:10px;
      box-sizing: border-box;
      color:gray;
      font-size:14px;
    }
  }
}
</style>