<template>
  <div class="canvasWrap">
    <canvas id="sakura" width="3000" height="800" />
  </div>
</template>

<script>
import Sakura from '~/assets/js/Sakura.js'
export default {
  data() {
    return {
      num: null
    }
  },
  mounted() {
    const sakura = new Sakura()
    sakura.run()
  }
}
</script>

<style>
.canvasWrap {
  position: absolute;
  top: 0;
  left: 50%;
  width: 3000px;
  height: 100vh;
  margin: 0 auto;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
#sakura {
  width: 3000px;
  height: 100vh;
}
</style>
