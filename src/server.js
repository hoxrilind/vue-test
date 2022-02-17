import { Server, Model } from "miragejs";
import usersJson from '../src/api/create_users.json';

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
    //   this.urlPrefix = 'http://localhost:9000';
      this.namespace = "api";
      this.get("/users", (schema) => {
        return schema.db.users;
      });
      
    //   this.passthrough()

      this.post("/user/create", (schema, request) => {
        const user = JSON.parse(request.requestBody).data;
        return schema.db.users.insert(user);
      });
    },
  });