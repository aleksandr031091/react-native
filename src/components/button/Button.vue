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
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  border: 1px solid #1919a7;
  background-color: transparent;

  &:hover {
    color: #0066ff;
    background-color: #caffca9d;
    box-shadow: 0px 8px 23px -7px rgba(175, 199, 96, 0.53);
    transform: scale(0.9);
    cursor: pointer;
  }
}
</style>
