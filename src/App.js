import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Routes from "./Routes";
import store, { history } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
        {/* <BrowserRouter>
        </BrowserRouter> */}
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
