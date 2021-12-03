<template>
  <form @submit.prevent="onHandleSubmit" class="form">
    <CustomInput type="text" v-model="text" />
    <Button type="submit">Search</Button>
  </form>
</template>

<script>
import CustomInput from "../shared/CustomInput.vue";
import Button from "../button/Button.vue";
import { mapActions } from "vuex";

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

    onHandleSubmit() {
      this.getSearchAction(this.text);
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
