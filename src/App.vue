<template>
  <div id="app">
    <v-header class="header" :seller="seller"></v-header>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/sellers" class="tab-item"> 商 家</router-link>
    </div>

    <router-view class="content">

    </router-view>
  </div>
</template>

<script>
  import router from './router'
  import Header from './components/header/Header.vue'


  export default {
    name: 'App',
    router: router,
    components: {
      'v-header': Header
    },
    data:function () {
      return{
        seller:{}
      }
    },
    created(){
      this.$axios.get('/api/seller').then((res)=>{
        console.log(typeof res.data )
        this.seller = res.data
      }).catch((err)=>{
        console.err(err )
      })
    }


  }
</script>

<style lang="less">
  @import "./common/style/mixin";

  #app {
    .header {
      //.border-1px( 1px , green)
    }
    .tab {
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      .tab-item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: rgb(77, 85, 93);

      }
      .router-link-active {
        color: rgb(240, 20, 20);
      }

    }
    .content {
      /*height: 400px;*/
    }
  }
</style>
