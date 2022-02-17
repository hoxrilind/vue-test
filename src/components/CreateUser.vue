<template>
  <v-form ref="form" lazy-validation  class="add-form">
    <v-text-field
      v-model="first_name"
      label="Firstname"
      required
    ></v-text-field>

    <v-text-field v-model="last_name" label="Lastname" required></v-text-field>

    <v-checkbox v-model="is_married" label="Married ?"></v-checkbox>

    <v-btn color="success" class="mr-4" @click="onSubmit"> Submit </v-btn>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateUser",
  data() {
    return { first_name: "", last_name: "", is_married: false };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const newUser = {
        first_name: this.first_name,
        last_name: this.last_name,
        is_married: this.is_married,
      };

      axios
        .post("/api/user/create", { data: newUser })
        .then((response) => this.$emit("create-new-user", response.data))
       
        this.first_name = "",
        this.last_name = "",
        this.is_married = false
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
</style>
