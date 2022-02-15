import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { Server } from "miragejs";

Vue.config.productionTip = false;

new Server({
  seeds(server) {
    server.db.loadData({
      users: [
        {
          firstname: "Rilind",
          lastname: "Hoxhaj",
          married: false,
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/users", (schema) => {
      return schema.db.users;
    });

    this.post("/users", (schema, request) => {
      const user = JSON.parse(request.requestBody).data;
      return schema.db.users.insert({
        firstname: user.firstname,
        lastname: user.lastname,
        married: user.married,
      });
    });
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
