import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";
import router from "@/router";
import VIntersection from "@/directives/VIntersection";

// App - корневой компонет
const app = createApp(App);

//глобальная регистрация компонентов
components.forEach((component) => {
  app.component(component.name, component);
});

app.directive("intersection", VIntersection);

app.use(router);

app.mount("#app");
