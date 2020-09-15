const redux = require('redux');
const creationStore = redux.createStore;

const initialState = {
    counter: 0
}

//reducer

const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter+1
        };
    }
    if (action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter+10
        };
    }
    return state;
};

//store

const store = redux.createStore(rootReducer);
console.log(store.getState());

// dispatching actrion

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// subscription

store.subscription(() => {
    console.log('[subscription]', store.getState());
});
