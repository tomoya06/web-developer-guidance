<template>
  <div>
    <div>ABOUT ME</div>
    <div>ID: {{ id }}</div>
    <nuxt-link to="/">回去</nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    const { id } = this.$route.params;
    return {
      id,
    };
  },
};
</script>