import { Server, Model } from "miragejs";
import usersUiConfig from './api/users/uiconfig.json';
import userdata from './api/users/userdata.json';
import formUiConfig from './api/createUser/uiconfig.json'

new Server({
    models: {
        users: Model,
      },
    seeds(server) {
      server.db.loadData({
        users: [],
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/users/uiconfig", () => {
        return usersUiConfig
      });
      this.get("/users/userdata", () => {
        return userdata
      });
      this.get("/createUser/uiconfig", () => {
        return formUiConfig
      });
      
      this.post("/user/create", (schema, request) => {
        const user = JSON.parse(request.requestBody).data;
        return schema.db.users.insert(user);
      });
    },
  });