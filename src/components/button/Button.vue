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

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  border: 1px solid #1919a7;
  background-color: transparent;
}
.btn:hover {
  transform: scale(0.9);
  border: 1px solid #51ff00;
  cursor: pointer;
}
</style>
