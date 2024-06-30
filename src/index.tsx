import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import store, { persistor } from "./app/store";
import { Layout } from "./components/Layout/Layout.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
