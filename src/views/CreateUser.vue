<template>
<v-app class="app">
  <CreateUser @create-new-user="createNewUser" />
  <Users :users="users" />
</v-app>
</template>

<script>
import CreateUser from "../../src/components/Form/CreateUser"
import Users from "../../src/components/Form/Users";

export default {
  name: "Createuser",
  components: {
    CreateUser,
    Users,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    createNewUser(user) {
      this.users = [...this.users, user]
    },
  },
};
</script>

<style scoped>
.app{
    width: 300px;
    margin-left: 40px;
}
</style>
