<template>
  <v-form ref="form" lazy-validation>
    <v-text-field
      v-model="firstname"
      :counter="10"
      label="Name"
      required
    ></v-text-field>

    <v-text-field v-model="lastname" label="Lastname" required></v-text-field>

    <v-checkbox v-model="married" label="Married?"></v-checkbox>

    <v-btn color="success" class="mr-4" @click="onSubmit"> Submit </v-btn>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateUser",
  data() {
    return { firstname: "", lastname: "", married: false };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const newUser = {
        firstname: this.firstname,
        lastname: this.lastname,
        married: this.married,
      };

      axios
        .post("/api/users", { data: newUser })
        .then((response) => this.$emit("create-new-user", response.data))(
        (this.firstname = "")
      ),
        (this.lastname = ""),
        (this.married = false);
    },
  },
};
</script>
