<template>
  <div class="collection-block">
    <div class="Rotation">

      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>

    </div>
    <div class="Rotation-Tabs">
      <van-tabs v-model="active">
        <van-tab title="新歌榜">
          <div class="list">
            <router-link
                class="Music"
                v-for="(item,index) in newMusicList.slice(0,6)"
                :key="index"
                :to="`/player/${item.songid}`"
            >
              <div class="Music-img">
                <img :src="item.pic">
              </div>
              <div class="Music-name">
                <span>{{item.name}}</span>
              </div>
              <div class="Music-author">
                <span>{{item.author}}</span>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab title="热歌榜">
          <div class="list">
            <router-link
                class="Music"
                v-for="(item,index) in hotMusicList.slice(0,6)"
                :key="index"
                :to="`/player/${item.songid}`"
            >
              <div class="Music-img">
                <img :src="item.pic">
              </div>
              <div class="Music-name">
                <span>{{item.name}}</span>
              </div>
              <div class="Music-author">
                <span>{{item.author}}</span>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab title="飙升榜">
        </van-tab>
        <van-tab title="原创榜">
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import {NewMusic,HotMusic} from '../../api'
  export default {
    name: "Rotation",
    data() {
      return {
        images: [
          'http://p1.music.126.net/wGn6i-dyt1PZeosJovk6cg==/109951167012075675.jpg?imageView&quality=89',
          'http://p1.music.126.net/OoHklvCVTabVXTHF1iwe3Q==/109951167012092168.jpg?imageView&quality=89',
            'http://p1.music.126.net/x9vSJlEGAUeh9f1mYJ7o5Q==/109951167012080733.jpg?imageView&quality=89',
            'http://p1.music.126.net/i4t-Z4Kf07AqiA6vbZs-Dg==/109951167012098609.jpg?imageView&quality=89'
        ],
        active: 0,
        newMusicList:[],
        hotMusicList:[]
      };
    },
    async created() {
      const result = await NewMusic()
      this.newMusicList = result.data
      const result2 = await HotMusic()
      this.hotMusicList = result2.data
    }
  }
</script>

<style scoped lang="less">
  .collection-block{
    margin-top: 10px;
    background-color:#f8f8f8;
    .Rotation{
      img{
        width: 100%;
        height: 250px;
      }
    }
    .Rotation-Tabs{
      .van-tabs{
        .list{
          margin-top:5px;
          //background-color:red;
          background-color:#f4f6f9;
          //overflow: hidden;
          .Music{
            //margin-bottom:50px;
            //height:60px;
            display: block;
            cursor: pointer;
            overflow: hidden;
            .Music-img{
              //height: 100px;
              //margin-top: 2px;
              //background-color:red;
              float: left;
              img{
                margin-left:10px;
                width: 50px;
                height:50px;
                background-size: 100%;
              }
            }
            .Music-name{
              text-align: center;
              span{
                color: gray;
              }
            }
            .Music-author{
              text-align: center;
              span{
                color: black;
                font-size: 14px;
              }
            }
          }
          .Music::after{
            content: "";
            display: block;
            border-bottom: 1px solid white;
          }
        }
      }
    }
  }
</style>