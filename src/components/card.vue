<template lang="pug">
  div
    p.card {{ text }}
</template>
<script>
export default {
  props: ['text']
}
</script>
<style lang="stylus" scoped>
.card
  padding 10px
</style>
