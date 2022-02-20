<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="text-left">
          <th v-for="tableData in formConfig.fields" :key="tableData.label">
            {{ tableData.label }}
          </th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
        <User :user="user" />
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import User from "./User";
import axios from "axios";

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
      formConfig: [],
    };
  },
  created() {
    axios.get("/api/createUser/uiconfig").then((response) => {
      this.formConfig = response.data;
    });
  },
};
</script>