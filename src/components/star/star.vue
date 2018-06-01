<template>
  <div class="star" :class="starType">
      <span v-for="itemClass in itemClasses" class="star-item" :class="itemClass">

      </span>
  </div>
</template>

<script>
  const length = 5 ;
  const class_on = 'on';
  const class_off = 'off';
  const class_half = 'half';


  export default {
    name: 'stars',
    props: {
      size: Number,
      score: Number,
    },
    computed: {
      starType() {
        return 'star-' + this.size
      },
      itemClasses(){
        let ret = [];
        let score = (Math.floor( this.score * 2 )) / 2;
        let hasDecimal = score % 1 !== 0 ;
        let integer = Math.floor(score);
        console.log(score)
        for ( let i = 0 ; i < integer ; i++){
          ret.push(class_on);
        }
        if(hasDecimal){
          ret.push( class_half )
        }

        while ( ret.length < length){
          ret.push( class_off )
        }

        console.log(ret)
        return ret
      }
    },
    data() {
      return {}
    },

  }
</script>

<style lang="less">

  .on() {
    background-image: url("./star48_on@3x.png");
  }

  .half() {
    background-image: url("./star48_half@3x.png");
  }

  .off() {
    background-image: url("./star48_off@3x.png");
  }

  .star {

    .star-item {
      display: inline-block;
      background-repeat: no-repeat;
      &.on{
        .on()
      }
      &.off{
        .off()
      }
      &.half{
        .half()
      }
      &:last-child{
        margin-right: 0;
      }
    }
    &.star-48 {
      > .star-item {
        height: 20px;
        width: 20px;
        margin-right: 22px;
        background-size: 20px;
      }
    }
    &.star-36 {
      > .star-item {
        height: 15px;
        width: 15px;
        margin-right: 16px;
        background-size: 15px;
      }
    }

    &.star-24 {
      > .star-item {
        height: 10px;
        width: 10px;
        margin-right: 3px;
        background-size: 10px;
      }
    }

  }

</style>
