<template>
  <input
    class="custom_input"
    type="text"
    placeholder="Skywalker"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: "CustomInput",

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.custom_input {
  margin-right: 10px;
  padding-left: 5px;
  width: 300px;
  height: 30px;
  color: #000083;
  border: 1px solid #1919a7;
}
</style>
