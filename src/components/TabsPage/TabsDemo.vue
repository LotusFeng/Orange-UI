<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs"/>

</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Tabs from './Tabs.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs
    };
  }
};
</script>
