<template>
  <section class="container">
    <div>
      <Sakura />
    </div>
  </section>
</template>

<script>
import Sakura from '~/components/sakura.vue'

export default {
  components: {
    Sakura
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
