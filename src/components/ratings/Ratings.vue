<template>
    <div class="ratings">
      <h1>{{ msg }}</h1>
    </div>
</template>

<script>
	export default {
		name: 'Ratings',
    data:function () {
      return {
        msg:'this is ratings'
      }
    }
	}
</script>

<style lang="less">
  .ratings{
    /*background: cadetblue;*/
  }
</style>
