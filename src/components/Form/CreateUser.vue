<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <v-form v-else ref="form" lazy-validation class="add-form">
      <v-text-field
        v-model="first_name"
        v-bind:label="this.formConfig.fields[0].label"
        required
      ></v-text-field>

      <v-text-field
        v-model="last_name"
        v-bind:label="this.formConfig.fields[1].label"
        required
      ></v-text-field>

      <v-checkbox
        v-model="is_married"
        v-bind:label="this.formConfig.fields[2].label"
      ></v-checkbox>

      <v-btn color="success" class="mr-4" @click="onSubmit"> Submit </v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateUser",
  data() {
    return {
      first_name: "",
      last_name: "",
      is_married: false,
      formConfig: {},
      isLoading: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.first_name || !this.last_name) {
        alert(`${this.formConfig.onError}`);
        return;
      }
      const newUser = {
          first_name: this.first_name,
          last_name: this.last_name,
          is_married: this.is_married
      
      };
    
      axios
        .post(`/api${this.formConfig.submitApi}`, { data: newUser })
        .then((response) => this.$emit("create-new-user", response.data));

      (this.first_name = ""), (this.last_name = ""), (this.is_married = false);
      alert(`${this.formConfig.onSuccess}`);
    },
  },

  created() {
    this.isLoading = true;
    axios.get("/api/createUser/uiconfig").then((response) => {
      this.formConfig = response.data;
      this.isLoading = false;
    });
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
</style>
