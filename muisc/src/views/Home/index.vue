<template>
  <div class="Home">
    <NewMusicView></NewMusicView>
    <HotMusicView></HotMusicView>
    <RotationView></RotationView>
  </div>
</template>

<script>
  import NewMusicView from './NewMusicView'
  import HotMusicView from './HotMusicView'
  import RotationView from "./RotationView";
  export default {
    data(){
      return {
        newMusic:[]
      }
    },
    components:{
      NewMusicView,
      HotMusicView,
      RotationView
    },

  }
</script>

<style scoped>

</style>