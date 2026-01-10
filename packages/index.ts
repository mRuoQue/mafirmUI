// export * from "./components/index"
import components from "./components";
import "./styles/index.css";
export const install: any = (app: any) => {
  if (install.installed) {
    return;
  }
  install.installed = true;
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default install;
