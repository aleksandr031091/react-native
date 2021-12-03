<template>
  <div>
    <slot name="title"></slot>
    <ul>
      <template>
        <slot></slot>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EntitiesList",
};
</script>

<style lang="scss" scoped></style>
