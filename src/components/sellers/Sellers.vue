<template>
  <div class="sellers">
    {{seller.name}}
  </div>
</template>

<script>
	export default {
		name: 'sellers',
    data:function () {
      return {
        msg:'this tis sellers',
        seller:''
      }
    },
    created(){

    }
	}
</script>

<style lang="less">


</style>
