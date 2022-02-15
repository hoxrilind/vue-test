<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="firstname"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="lastname"
      :rules="nameRules"
      label="Lastname"
      required
    ></v-text-field>

    <v-checkbox v-model="checkbox" label="Married?"></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="onSubmit">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
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

      this.$emit("create-new-user", newUser);

      (this.firstname = ""), (this.lastname = ""), (this.married = false);
    },
  },
};
</script>
