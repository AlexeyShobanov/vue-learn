import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";
import router from "@/router";
import directives from "@/directives";

// App - корневой компонет
const app = createApp(App);

//глобальная регистрация компонентов
components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router);

app.mount("#app");
