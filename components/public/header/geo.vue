<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>
    {{city}}
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>[香河 廊坊 天津]
  </div>
</template>

<script>
export default {
  name: 'geo',
  computed: {
    city() {
      return this.$store.state.geo.position.city;
    }
  }
}
</script>

<style lang="css">
</style>
