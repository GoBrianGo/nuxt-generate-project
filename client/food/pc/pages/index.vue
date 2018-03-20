<template>
  <div>
    nuxt generate file
  </div>
</template>
<script>
export default {
  asyncData({app, query, payload}) {
    return {
      name: ''
    }
  },
  head() {
    return {
      title: `Abou1t Page (${this.name}-side)`
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>

</style>
