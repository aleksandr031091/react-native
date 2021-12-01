<template>
  <button>
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

<style lang="scss" scoped></style>
