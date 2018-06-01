<template>
  <div class="header">
    <div class="content-wrapper" v-if="seller.name">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{ seller.description }} / {{seller.deliveryTime}} 分钟送达
        </div>
        <div v-if="seller.supports.length > 0 " class="support">
          <span class="icon" :class=" classMap[ seller.supports[0].type ] "></span>


          <span class="text"> {{ seller.supports[0].description }}  </span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="modelDetailShow = !modelDetailShow">
        <span class="count"> {{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>

    <div @click="modelDetailShow = !modelDetailShow" class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text"> {{seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <div class="header-bg">
      <img :src="seller.avatar">
    </div>

    <transition name="fade">
      <div v-show="modelDetailShow" class="model-detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main ">
            <h1 class="name">{{ seller.name }}</h1>
            <div class="star-wrapper">
              <Star :score="Number(seller.score)" :size="48" class="star"></Star>
            </div>

            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>

            <ul v-if="seller.supports" class="supports">
              <li class="supports-item" v-for="item in seller.supports"> <span class="icon" :class="classMap[ item.type ]"></span> <span class="text">{{ item.description }}</span></li>
            </ul>

            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>

            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>

          </div>
        </div>

        <div class="detail-close" @click="modelDetailShow = !modelDetailShow">
          <i class="icon-close"></i>
        </div  >
      </div>
    </transition>
  </div>
</template>

<script>
  import Star from '../star/star.vue'

  export default {
    name: 'Header',
    props: {
      seller: {
        type: Object
      }

    },
    components:{
      Star:Star
    },
    data() {
      return {
        modelDetailShow: false,
        classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      }
    },
    beforeCreate: function () {
//      alert('beforeCreated:');
//      console.log( 'beforeCreated:this.seller' , this.seller )
//      console.log( 'beforeCreated:this.classMap' , this.classMap)
    },
    created: function () {

//      alert('created:');
//      console.log( 'created:this.seller' , this.seller )
//      console.log( 'created:this.classMap' , this.classMap)


    },
    beforeMount() {
//      alert('beforeMount')
//      console.log( 'beforeMount:this.seller' , this.seller )
//      console.log( 'beforeMount:this.classMap' , this.classMap)
    },
    mounted: function () {
//      alert('mounted')
//      console.log( 'mounted:this.seller' , this.seller )
//      console.log( 'mounted:this.classMap' , this.classMap)
    }

  }
</script>

<style lang="less">
  @import "../../common/style/mixin.less";
  @import "../../common/style/base.less";
  @import "../../common/style/icon.css";

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active , .fade-leave-active{
    transition: all .3s linear;
  }
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 13px;
    background-repeat: no-repeat;
    vertical-align: top;
    &.decrease {
      background-image: url("./decrease_1@3x.png");
    }
    &.discount {
      background-image: url("./discount_2@3x.png ");
    }
    &.guarantee {
      background-image: url("./guarantee_2@3x.png");
    }
    &.invoice {
      background-image: url("./invoice_3@3x.png");
    }
    &.special {
      background-image: url("./special_4@3x.png");
    }

  }

  .header {
    position: relative;
    background: rgba(0, 0, 0, .3);
    color: #fff;
    overflow: hidden;
    .content-wrapper {
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size: 0; //去掉空元素占据的位置
      .avatar {
        display: inline-block;
        vertical-align: top;
        img {
          border-radius: 2px;
        }
      }
      .content {
        display: inline-block;
        font-size: 14px;
        margin-left: 14px;
        .title {
          margin: 2px 0 8px 0;
          .brand {
            background-color: red;
            display: inline-block;
            width: 30px;
            height: 18px;
            background-size: 30px 18px;
            background-repeat: no-repeat;
            vertical-align: top;
          }
          .name {
            font-size: 16px;
            font-weight: 600;
          }
        }
        .description, .support {
          margin-left: 5px;
          line-height: 12px;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .support {
          .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 13px;
            background-repeat: no-repeat;
            vertical-align: top;
            &.decrease {
              background-image: url("./decrease_1@3x.png");
            }
            &.discount {
              background-image: url("./discount_2@3x.png ");
            }
            &.guarantee {
              background-image: url("./guarantee_2@3x.png");
            }
            &.invoice {
              background-image: url("./invoice_3@3x.png");
            }
            &.special {
              background-image: url("./special_4@3x.png");
            }

          }
          .text {
            font-size: 10px;
            line-height: 12px;
            font-weight: lighter;
          }
        }
      }
      .support-count {
        position: absolute;
        bottom: 24px;
        right: 12px;
        height: 24px;
        line-height: 24px;
        background: rgba(0, 0, 0, .2);
        text-align: center;
        padding: 1px 5px;
        border-radius: 15px;
        .count {
          font-size: 10px;
          vertical-align: top;
        }
        .icon-keyboard_arrow_right {
          font-size: 10px;
          line-height: 24px;
          margin-left: 2px;
        }
      }
    }
    .bulletin-wrapper {
      background: rgba(0, 0, 0, .2);
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .bulletin-title {
        display: inline-block;
        width: 22px;
        height: 12px;
        background-image: url("./bulletin@3x.png");
        background-repeat: no-repeat;
        background-size: 22px 12px;
        position: relative;
        top: 2px;
      }
      .bulletin-text {
        margin: 0 4px;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        display: inline-block;
        top: 8px;
        right: 10px;
        font-size: 14px;
      }
    }
    .header-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      top: 0;
      left: 0;
      overflow: hidden;
      filter: blur(5px);
      img {
        width: 100%;
      }
    }
    .model-detail {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(7, 17, 27, .8);
      .detail-wrapper{
        min-height: 100%;
        display: block;
        .detail-main{
          padding-top: 64px;
          padding-bottom: 64px;
          .name{
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
          }
          .star-wrapper{
            padding-top: 18px ;
            .star{
              text-align: center;
            }
          }
          .title{
            width: 80%;
            display: flex;
            margin: 28px auto 24px auto;
            /*background: salmon;*/
            .line{
              flex: 1;
              position: relative;
              top: -6px;
              border-bottom: 1px solid rgba(255,255,255,.2);
            }
            .text{
              padding: 0 12px;
              font-size: 14px;
              font-weight: 700;
            }
          }
          .supports{
            width: 80%;
            margin: 0 auto;
            .supports-item{
              margin-bottom: 12px;
              padding: 0 12px;
              .icon{
                display: inline-block;
                width: 16px;
                height: 16px;
                vertical-align: top;
                margin-right: 6px;
                background-size: 16px;
                background-repeat: no-repeat;
              }
              .text{
                font-size: 12px;
                line-height: 16px;
                font-weight: 200;

              }
              &:last-child{
                margin-bottom: 0;
              }
            }
          }
          .bulletin{
            width: 80%;
            margin: 0 auto;
            p{
              padding: 0 12px;
              font-size: 12px;
              font-weight: 200;
              line-height: 24px;
            }
          }
        }
      }

      .detail-close{
        display: block;
        text-align: center;
        position: relative;
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 20px;
        width: 100%;
        height: 64px;
        line-height: 64px;
      }
    }




  }

</style>
