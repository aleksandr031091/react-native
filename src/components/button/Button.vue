<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  type: {
    type: String,
    default: "button",
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  color: $accentTextColor;
  border: 1px solid $accentTextColor;
  background-color: transparent;

  &:hover {
    color: $hoverAccentTextColor;
    border: 1px solid $hoverAccentTextColor;
    background-color: $bgColor;
    box-shadow: $boxShadow;
    transform: scale(0.9);
    cursor: pointer;
  }
}
</style>
