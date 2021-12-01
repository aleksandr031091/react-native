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
  data() {
    return { onClickFilm: 0 };
  },
};
</script>

<style lang="scss" scoped></style>
