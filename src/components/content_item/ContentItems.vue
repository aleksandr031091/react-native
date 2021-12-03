<template>
  <li class="content_items">
    <p className="link_text" @click="onClickLink(link)">{{ link }}</p>
    <div v-if="this.currentLink === link">
      <p>{{ entitiesInfo.eye_color }}</p>
      <p>{{ entitiesInfo.gender }}</p>
      <p>{{ entitiesInfo.name }}</p>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ContentItem",

  props: {
    link: String,
    currentLink: String,
  },

  methods: {
    ...mapActions(["getEntitiesInfoAction"]),

    onClickLink(link) {
      this.getEntitiesInfoAction(link);
    },
  },

  computed: mapGetters(["entitiesInfo"]),
};
</script>

<style scoped>
.content_items {
  display: flex;
  align-items: flex-start;
  padding: 5px;
  cursor: pointer;
}

.content_items:hover {
  color: #0066ff;
}
.entitiesInfo_box {
  margin-left: 20px;
}
.content_items:not(:last-child) {
  margin-bottom: 5px;
}
</style>
