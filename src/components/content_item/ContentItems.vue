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

            <ul
              v-else-if="Array.isArray(item) && item.length"
              class="content_items"
            >
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

      <!-- =========================== render info on click link in entitiesInfo ===========================  -->

      <ul v-if="currentLink === listCurrentLink" class="content_items">
        <li class="link_text" :key="key" v-for="(item, key) in entitiesInfo">
          {{ item }}
        </li>
      </ul>

      <!-- =========================== render info on click link in entitiesInfo ===========================  -->
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
    content: Object,
    currentLink: String,
    currentLinkSearch: String,
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
@import "../../assets/scss/variables.scss";

.content_items,
.content_items_list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  &:hover {
    background-color: $bgColor;
    box-shadow: $boxShadow;
  }
}
.content_items_list {
  &:hover {
    background: none;
  }
}

.link_text {
  color: $accentTextColor;

  &:hover {
    cursor: pointer;
    color: $hoverAccentTextColor;
  }
}

.link_list_title {
  margin-bottom: 10px;
  font-weight: 700;
  color: $listTitleColor;
}
</style>
