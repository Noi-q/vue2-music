<template>
  <div>
    <ul class="top-nav">
      <li><router-link exact to="/">首页</router-link></li>
      <li><router-link to="/topic">榜单</router-link></li>
      <li><router-link to="/mine">我的</router-link></li>
      <li><router-link to="/search">搜索</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped lang="less">
div{
  position:sticky;
  top:0;
  box-shadow:0 0 5px #c5bebe;
  .top-nav{
    display:flex;
    background-color:#fff;
    li{
      //display: inline-block;
      flex:1;
      text-align: center;
      padding-top: 10px;
      //background-color:red;
      a{
        display: block;
        padding-bottom: 8px;
        color: #4e4444;
      }
      .active{
        border-bottom: 2px solid #ff0000;
      }
    }
  }
}
</style>