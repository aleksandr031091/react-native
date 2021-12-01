<template>
  <form @submit.prevent>
    <input type="text" />
    <h1>{{ title }}</h1>
    <Button @click="incriment">click me</Button>
  </form>
</template>

<script>
export default {
  name: "Form",

  data() {
    return { amauntOfClick: 0 };
  },
  computed: {
    title() {
      return `amaunt of click ${this.amauntOfClick}`;
    },
  },

  methods: {
    incriment() {
      this.amauntOfClick += 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
