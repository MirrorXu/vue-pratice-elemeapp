<template>
  <div class="goods">
    <div v-if="goods" class="menu-wrapper" ref="menu">
      <ul>
        <li v-for="(item , index ) in goods" class="menu-item" :class="{'current' : currentIndex === index }">
          <span class="text">
            <span v-if="item.type > 0" class="icon" :class="classMap[item.type]"></span>
           {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div v-if="goods" class="foods-wrapper" ref='goods'>
      <ul>
        <li v-for="item in goods" class="foods-list goods-list-hook">
          <h1 class="title"> {{ item.name }} </h1>
          <ul>
            <li v-if="item.foods" v-for="food in item.foods" class="foods-item">
              <div class="foodImg">
                <img :src="food.icon" alt="商品图片">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <div class="desc"> {{ food.description }} </div>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'


  export default {
    name: 'Goods',
    props: {
      seller: {
        type: Object
      }
    },
    data: function () {
      return {
        goods: [],
        classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
        listHeight: [],
        scrollY: 0,
      }
    },
    created() {
      this.$axios.get('/api/goods').then((res) => {
        this.goods = res.data;
        // 数据请求成功后设置BScroll插件
        this.$nextTick(() => {
          this._initScroll();
          this._calScrollHeight()

        })
//        console.log( 'goods:' , this.goods )
      }).catch((err) => {
        console.log(err)
      })
    },
    computed: {
      currentIndex:function () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
//            console.log( this.scrollY)
            return i
          }else{
          }
        }
      }
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menu, {});
        this.goodsScroll = new BScroll(this.$refs.goods, {probeType: 3})

        this.goodsScroll.on('scroll', function (pos) {
          var _this = this;
          _this.scrollY = Math.abs(Math.round(pos.y))

//          console.log( 'scrollY:' , this.scrollY )
        })
      },
      _calScrollHeight() {
        let goodsList = this.$refs.goods.getElementsByClassName('goods-list-hook');
        let height = 0;
        this.listHeight.push(height);

        for (let i = 0; i < goodsList.length; i++) {
          let item = goodsList[i];
          console.log( item.__proto__ )
          height += item.clientHeight;
          this.listHeight.push(height)
        }

      }
    }
  }
</script>

<style lang="less">
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 2px;
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

  .current {
    background: #fff;
    position: relative;
    z-index: 10;
    margin-top: -1px;
    font-weight: 700;

  }

  @bg: #f3f5f7;
  .goods {
    position: absolute;
    top: 138px + 41px;
    bottom: 46px;
    width: 100%;
    display: flex;
    overflow: hidden;
    //background: seagreen * 1.9;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: @bg;

      .menu-item {
        padding-left: 12px;
        display: table;
        height: 54px;
        padding-right: 12px;
        line-height: 14px;
        .text {
          .icon {

          }
          font-size: 12px;
          display: table-cell;
          width: 56px;
          vertical-align: middle;
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      min-height: 100%;
      /*overflow-y:auto ;*/
      /*overflow-x:  hidden;*/
      .foods-list {
        .title {
          padding-left: 14px;
          height: 26px;
          line-height: 26px;
          font-size: 12px;
          border-left: 2px solid #d9dde1;
          color: rgb(147, 153, 159);
          background: #f3f5f7;
        }
        .foods-item {
          display: flex;
          margin: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(7, 17, 27, .1);
          &:last-child {
            border-bottom: 0;
          }
          .foodImg {
            flex: 0 0 57px;
            width: 57px;
            height: 57px;
            img {
              width: 57px;
              height: 57px;
            }
          }
          .content {
            flex: 1;
            padding-left: 10px;
            .name {
              margin: 2px 0 8px 0;
              height: 14px;
              line-height: 14px;
              font-size: 14px;
              color: rgb(7, 17, 27);
            }
            .desc {
              margin-bottom: 8px;
              line-height: 10px;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
            .extra {
              line-height: 10px;
              font-size: 10px;
              color: rgb(147, 153, 159);
              & .count {
                margin-right: 12px;
                display: inline-block;
              }
            }
            .price {
              font-weight: 700;
              line-height: 24px;
              .now {
                margin-right: 8px;
                font-size: 14px;
                color: rgb(240, 20, 20);
              }
              .old {
                text-decoration: line-through;
                font-size: 10px;
                color: rgb(147, 153, 159);
              }
            }
          }
        }

      }
    }
  }

</style>
