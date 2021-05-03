import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import spotsReducer from './spots';
import spotReducer from './spot'
import bookingsReducer from './bookings'
import reviewsReducer from './reviews'
import stayedAtHistoryReducer from './stayedAtHistory'

const rootReducer = combineReducers({
    session: sessionReducer,
    spots: spotsReducer,
    spot: spotReducer,
    bookings: bookingsReducer,
    reviews: reviewsReducer,
    stayedAtHistory: stayedAtHistoryReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;