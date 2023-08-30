import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";

// App - корневой компонет
const app = createApp(App);

//глобальная регистрация компонентов
components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
