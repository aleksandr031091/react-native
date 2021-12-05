<template>
  <form @submit.prevent="onHandleSubmit" class="form">
    <CustomInput v-model.trim="text" />
    <Button type="submit">Search</Button>
  </form>
</template>

<script>
import CustomInput from "../shared/CustomInput.vue";
import Button from "../button/Button.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Form",

  data() {
    return {
      text: "",
    };
  },

  components: { CustomInput, Button },

  methods: {
    ...mapActions(["getSearchAction"]),
    ...mapMutations(["setIsSearching"]),

    onHandleSubmit() {
      if (!this.text) return;
      this.getSearchAction(this.text);
      this.setIsSearching(true);
      this.text = "";
    },
  },
};
</script>

<style scoped>
.form {
  margin-bottom: 50px;
  display: flex;
}
</style>
