<template>
<v-app>
  <CreateUser @create-new-user="createNewUser" />
  <Users :users="users" />
</v-app>
</template>

<script>
import CreateUser from "../src/components/CreateUser";
import Users from "../src/components/Users";

export default {
  name: "App",
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
