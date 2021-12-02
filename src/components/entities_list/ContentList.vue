<template>
  <div>
    <slot name="title"></slot>
    <ul>
      <template>
        <slot name=""></slot>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContentList",
};
</script>

<style lang="scss" scoped></style>
