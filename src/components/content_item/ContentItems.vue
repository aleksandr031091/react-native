<template>
  <li class="content_items">
    <p class="link_text" @click="onClickLink(link)">{{ link }}</p>
    <div v-if="currentLink === link && content">
      <!-- вынести p в отдельный компонент -->

      <ul class="content_items">
        <li v-for="(item, key) in content" :key="key">
          <p>{{ key }} - {{ item }}</p>
        </li>
      </ul>

      <!-- вынести p в отдельный компонент -->

      <!-- <p class="link_items" v-if="content.title">{{ content.title }}</p>
      <p class="link_items" v-if="content.opening_crawl">
        {{ content.opening_crawl }}
      </p>
      <p class="link_items" v-if="content.episode_id">
        episode: ({{ content.episode_id }})
      </p>
      <p class="link_items" v-if="content.release_date">
        release date:
        {{ content.release_date.split("-").reverse().join("-") }}
      </p>
      <p class="link_items" v-if="content.director">
        director: {{ content.director }}
      </p>
      <p class="link_items" v-if="content.producer">
        producer: {{ content.producer }}
      </p>
      <p class="link_items" v-if="content.name">name: {{ content.name }}</p>
      <p class="link_items" v-if="content.height">
        height: {{ content.height }}
      </p>
      <p class="link_items" v-if="content.mass">mass: {{ content.mass }}</p>
      <p class="link_items" v-if="content.hair_color">
        hair color: {{ content.hair_color }}
      </p>
      <p class="link_items" v-if="content.skin_color">
        skin color: {{ content.skin_color }}
      </p>
      <p class="link_items" v-if="content.eye_color">
        eye color: {{ content.eye_color }}
      </p>
      <p class="link_items" v-if="content.gender">
        gender: {{ content.gender }}
      </p>
      <p class="link_items" v-if="content.model">model: {{ content.model }}</p>
      <p class="link_items" v-if="content.starship_class">
        starship class: {{ content.starship_class }}
      </p>
      <p class="link_items" v-if="content.passengers">
        passanger: {{ content.passengers }}
      </p>
      <p class="link_items" v-if="content.diameter">
        diameter: {{ content.diameter }}
      </p>
      <p class="link_items" v-if="content.population">
        population: {{ content.population }}
      </p>
      <p class="link_items" v-if="content.gravity">
        gravity: {{ content.gravity }}
      </p>
      <p class="link_items" v-if="content.rotation_period">
        rotation period: {{ content.rotation_period }}
      </p>

      <ul class="content_items" v-if="content.films">
        <li class="link_text" :key="filmLink" v-for="filmLink of content.films">
          {{ filmLink }}
        </li>
      </ul>

      <ul class="content_items" v-if="content.residents">
        <li
          class="link_text"
          :key="residentsLink"
          v-for="residentsLink of content.residents"
        >
          {{ residentsLink }}
        </li>
      </ul>

      <ul class="content_items">
        <li
          class="link_text"
          :key="pilotsLink"
          v-for="pilotsLink of content.pilots"
        >
          {{ pilotsLink }}
        </li>
      </ul>

      <ul class="content_items">
        <li
          class="link_text"
          :key="charactersLink"
          v-for="charactersLink of content.charactersLink"
        >
          {{ charactersLink }}
        </li>
      </ul>

      <ul class="content_items">
        <li
          class="link_text"
          :key="planetsLink"
          v-for="planetsLink of content.planets"
        >
          {{ planetsLink }}
        </li>
      </ul>

      <ul class="content_items">
        <li
          class="link_text"
          :key="starshipsLink"
          v-for="starshipsLink of content.starships"
        >
          {{ starshipsLink }}
        </li>
      </ul>

      <ul class="content_items">
        <li
          class="link_text"
          :key="vehiclesLink"
          v-for="vehiclesLink of content.vehicles"
        >
          {{ vehiclesLink }}
        </li>
      </ul>

      <ul class="content_items">
        <li
          class="link_text"
          :key="speciesLink"
          v-for="speciesLink of content.species"
        >
          {{ speciesLink }}
        </li>
      </ul> -->
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ContentItem",

  props: {
    link: String,
    currentLink: String,
    content: Object,
  },

  methods: {
    ...mapActions(["getEntitiesInfoAction"]),

    onClickLink(link) {
      this.getEntitiesInfoAction(link);
    },
  },
};
</script>

<style scoped>
.content_items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
}

.link_text:hover {
  cursor: pointer;
  color: #0066ff;
}

.link_text:not(:last-child) {
  margin-bottom: 5px;
}
</style>
