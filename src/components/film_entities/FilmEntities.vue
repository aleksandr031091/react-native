<template>
  <div
    className="entitiesInfo_wrapper"
    v-if="this.film.episode_id"
    @click="onClickLink"
  >
    <div className="entitiesInfo_list_wrapper">
      <h3 className="entitiesInfo_title">characters</h3>
      <ul className="entitiesInfo_list">
        <ContentItem
          v-for="link in film.characters"
          :key="link"
          :link="link"
          :currentLink="currentLink"
          :content="entitiesInfo"
        />
      </ul>
      <hr />
    </div>

    <div className="entitiesInfo_list_wrapper">
      <h3 className="entitiesInfo_title">starships</h3>
      <ul className="entitiesInfo_list">
        <ContentItem
          v-for="link in film.starships"
          :key="link"
          :link="link"
          :currentLink="currentLink"
          :content="entitiesInfo"
        />
      </ul>
      <hr />
    </div>

    <div className="entitiesInfo_list_wrapper">
      <h3 className="entitiesInfo_title">planets</h3>
      <ul className="entitiesInfo_list">
        <ContentItem
          v-for="link in film.planets"
          :key="link"
          :link="link"
          :currentLink="currentLink"
          :content="entitiesInfo"
        />
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContentItem from "../content_item/ContentItems.vue";

export default {
  name: "FilmEntities",

  data() {
    return { currentLink: "" };
  },

  components: { ContentItem },

  computed: mapGetters(["film", "entitiesInfo"]),

  methods: {
    onClickLink(event) {
      this.currentLink = event.target.textContent;
    },
  },
};
</script>
