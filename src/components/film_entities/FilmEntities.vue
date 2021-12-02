<template>
  <div className="entitiesInfo_wrapper" v-if="this.film.episode_id">
    <div className="entitiesInfo_list_wrapper">
      <h3 className="entitiesInfo_title">characters</h3>
      <ul className="entitiesInfo_list">
        <ContentItem
          v-for="link in film.characters"
          :key="link"
          currentLink="{currentLink}"
          :link="link"
          object="{entitiesInfo}"
          onHandleClickLink="{onHandleClickLink}"
        />
      </ul>
    </div>

    <div className="entitiesInfo_list_wrapper">
      <h3 className="entitiesInfo_title">starships</h3>
      <ul className="entitiesInfo_list">
        <ContentItem
          v-for="link in film.starships"
          :key="link"
          currentLink="{currentLink}"
          :link="link"
          object="{entitiesInfo}"
          onHandleClickLink="{onHandleClickLink}"
        />
      </ul>
    </div>

    <div className="entitiesInfo_list_wrapper">
      <h3 className="entitiesInfo_title">planets</h3>
      <ul className="entitiesInfo_list">
        <ContentItem
          v-for="link in film.planets"
          :key="link"
          currentLink="{currentLink}"
          :link="link"
          object="{entitiesInfo}"
          onHandleClickLink="{onHandleClickLink}"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContentItem from "../content_item/ContentItems.vue";

export default {
  name: "FilmEntities",

  components: { ContentItem },

  computed: mapGetters(["film"]),
};
</script>

<style lang="scss" scoped></style>
