<template>
  <counter-warp>
    <p>
      Vuex counter：{{ count }}
    </p>
    <p v-text="countComputed">
    </p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">1</button>
    </p>
    <a href="/pages/index">去往首页</a>

  </counter-warp>

</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  config: {
    navigationBarTitleText: 'Vuex示例'
  },
  computed: {
    ...mapState('number', ['count']),
    ...mapGetters('number', ['countComputed'])
  },
  methods: {
    ...mapMutations('number', [
      'increment',
      'decrement'
    ])
  }
}
</script>
<style lang="stylus" scoped>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
