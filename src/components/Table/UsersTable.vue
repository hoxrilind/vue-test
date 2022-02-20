<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="text-left">
          <th v-for="tableData in tableConfig.headers" :key="tableData.headers">
            {{ tableData }}
          </th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
        <tr>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.first_name }} {{ user.last_name }}</td>
          <td>{{ user.number }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersTable",
  data() {
    return { users: [], tableConfig: [] };
  },
  created() {
    axios.get("/api/users/uiconfig").then((response) => {
      this.tableConfig = response.data;
    });

    axios.get("/api/users/userdata").then((response) => {
      this.users = response.data;
    });
  },
};
</script>
