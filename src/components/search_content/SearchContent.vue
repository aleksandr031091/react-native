<template>
  <ul>
    <li
      class="list_items"
      v-for="arr of searchContent"
      :key="searchContent.indexOf(arr)"
    >
      <ul>
        <li
          className="items"
          :key="(content.title && content.title) || content.name"
          v-for="content of arr"
        >
          <ContentItem :content="content" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import ContentItem from "../content_item/ContentItems.vue";

export default {
  name: "SearchContent",

  data() {
    return { currentLink: "" };
  },

  components: { ContentItem },

  computed: mapGetters(["searchContent"]),

  //   methods: {
  //     onClickLink(event) {
  //       const target = event.target;
  //       console.log(target);
  //       if (target) this.currentLink = target.textContent;
  //     },
  //   },
};
</script>
