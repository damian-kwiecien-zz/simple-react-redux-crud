import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './root-reducer'

const configureStore = preloadedState => {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const composedEnhancers = compose(middlewareEnhancer)

    return createStore(rootReducer, preloadedState, composedEnhancers)
}

export default configureStore