<template>
  <form @submit.prevent class="form">
    <input class="input_search" type="text" placeholder="Skywalker" />

    <Button>Search</Button>
  </form>
</template>

<script>
import Button from "../button/Button.vue";
export default {
  name: "Form",

  components: { Button },

  computed: {},

  methods: {
    incriment() {
      this.amauntOfClick += 1;
    },
  },
};
</script>

<style scoped>
.form {
  margin-bottom: 50px;
  display: flex;
}

.input_search {
  margin-right: 10px;
  padding-left: 5px;
  width: 300px;
  height: 30px;
  color: #000083;
  border: 1px solid #1919a7;
}
</style>
