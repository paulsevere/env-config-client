import React from "react";

import { Provider } from "react-redux";

import "./registerServiceWorker";
import Env from "./components/Env.jsx";
import "./scss/main.scss";
import { fetchEnv } from "./actions";
import store from "./store";

class App extends React.Component {
  componentWillMount() {
    console.log("coool");
    store.dispatch(fetchEnv());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Env />
        </div>
      </Provider>
    );
  }
}

export default App;
