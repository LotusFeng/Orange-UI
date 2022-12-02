<template>
  <div>
    <header>标题</header>
    <main>
      <p>第一行</p>
      <p>第二行</p>
    </main>
    <footer>
      <Button>ok</Button>
      <Button>cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: {Button}
};
</script>

<style lang="scss" scoped>

</style>