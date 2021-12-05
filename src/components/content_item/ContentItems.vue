<template>
  <li class="content_items">
    <p class="link_text" @click="onHandleClickLink(link)">{{ link }}</p>

    <div v-show="(currentLink === link && content) || listCurrentLink">
      <ul class="content_items_list">
        <li v-for="(item, key) in content" :key="key">
          <template>
            <p
              v-if="
                !Array.isArray(item) &&
                key !== 'url' &&
                key !== 'created' &&
                key !== 'edited' &&
                key !== 'homeworld'
              "
            >
              <span class="link_list_title">{{ key }}</span> - {{ item }}
            </p>

            <ul v-if="Array.isArray(item) && item.length" class="content_items">
              <span class="link_list_title">{{ key }}</span>
              <li
                class="link_text"
                :key="link"
                v-for="link of item"
                @click="onHandleClickListLink(link)"
              >
                {{ link }}
              </li>
            </ul>
          </template>
        </li>
      </ul>

      <ul
        v-show="currentLink === listCurrentLink && !currentLink"
        class="content_items"
      >
        <li class="link_text" :key="key" v-for="(item, key) in entitiesInfo">
          {{ item }}
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ContentItem",

  data() {
    return { listCurrentLink: "" };
  },

  props: {
    link: String,
    currentLink: String,
    content: Object,
  },

  computed: mapGetters(["entitiesInfo"]),

  methods: {
    ...mapActions(["getEntitiesInfoAction"]),

    onHandleClickLink(link) {
      this.listCurrentLink = "";
      this.getEntitiesInfoAction(link);
    },

    onHandleClickListLink(link) {
      this.listCurrentLink = link;
      this.getEntitiesInfoAction(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.content_items,
.content_items_list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  &:hover {
    background-color: #caffca9d;
    box-shadow: 0px 8px 23px -7px rgba(175, 199, 96, 0.53);
  }
}
.content_items_list {
  &:hover {
    background: none;
  }
}

.link_text {
  color: rgb(0, 162, 255);

  &:hover {
    cursor: pointer;
    color: #0066ff;
  }
}

.link_list_title {
  margin-bottom: 10px;
  font-weight: 700;
  color: #41528f;
}
</style>
