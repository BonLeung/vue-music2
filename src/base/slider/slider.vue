<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script>
import { addClass } from 'common/js/dom'

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    setTimeout(() => {
      this._initSliderWidth()
      this._initSlider()
    }, 20)
  },
  methods: {
    _initSliderWidth() {
      this.children = this.$refs.sliderGroup.children

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
      }
    },
    _initSlider() {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.slider
  min-height: 1px;
  .slider-group
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slider-item
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      a
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      img
        display: block;
        width: 100%;

</style>


