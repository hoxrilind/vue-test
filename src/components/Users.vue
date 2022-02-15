<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Firstname</th>
          <th class="text-left">Lastname</th>
          <th class="text-left">Married ?</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.firstname">
          <User :user="user" />
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import User from "./User";

export default {
  name: "Users",
  props: {
    users: Array,
  },
  components: {
    User,
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>
