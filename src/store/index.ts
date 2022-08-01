import { createStore, applyMiddleware,compose } from 'redux'
import reducer from './reducer'
import thunk, { ThunkMiddleware } from 'redux-thunk'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(
            thunk as ThunkMiddleware
        )
    )
)

export type rootState = ReturnType<typeof reducer>

export default store