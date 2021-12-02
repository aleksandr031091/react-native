<template>
  <li>
    <p className="link_text">{{ this.link }}</p>
  </li>
</template>

<script>
export default {
  name: "ContentItem",

  props: {
    link: String,
    default: String,
  },
};
</script>

<style lang="scss" scoped></style>
