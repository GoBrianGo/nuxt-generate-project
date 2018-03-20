<template>
  <div></div>
</template>
<script>
export default {
  asyncData({app, query, payload}) {
    console.log(payload)
    return {
      name: payload.gameCode
    }
  },
  head() {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style scoped>

</style>
