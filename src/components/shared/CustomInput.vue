<template>
  <input class="custom_input" placeholder="Skywalker" v-on="listeners" />
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
@import "../../assets/scss/variables.scss";

.custom_input {
  margin-right: 10px;
  padding-left: 5px;
  width: 300px;
  height: 30px;
  color: $accentTextColor;
  border: 1px solid $accentTextColor;
}
</style>
