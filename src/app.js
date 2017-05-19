"user strict"
import {createStore} from 'redux';

// STEP 3 DEFINE REDUCER

const reducer = function(state=0, action){
  switch (action.type){
    case "INCREMENT":
    return state + action.payload;
    break;
  }
};

// STEP 1 CREATE THE store
 const store = createStore(reducer);
 store.subscribe(function(){
   console.log('Current state is ' + store.getState());
 })


// STEP 2 CREATE AND DISPATCH ACTION

store.dispatch({type: "INCREMENT", payload: 1})
store.dispatch({type: "INCREMENT", payload: 1})
store.dispatch({type: "INCREMENT", payload: 1})
