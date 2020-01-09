import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger();

const configureStore = (preloadedState?: any) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunkMiddleware, loggerMiddleware)
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers/index", () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;
