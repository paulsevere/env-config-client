import { createStore, applyMiddleware, bindActionCreators } from "redux";

import thunk from "redux-thunk";
import reducers from "./reducers";

import actions from "./actions";

// export bindActionCreators(actions, store.dispatch)

const store = createStore(reducers, applyMiddleware(thunk));
export const boundActions = bindActionCreators(actions, store.dispatch);

export default store;
