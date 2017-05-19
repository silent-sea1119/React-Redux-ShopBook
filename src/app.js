"user strict"
import {createStore} from 'redux';

// STEP 3 DEFINE REDUCER

const reducer = function(state=[], action){
  switch (action.type){
    case "POST_BOOK":
    return state = action.payload;
    break;

  }
};

// STEP 1 CREATE THE store
 const store = createStore(reducer);
 store.subscribe(function(){
   console.log('Current state is ', store.getState());
   console.log('Current price is ', store.getState()[1].Price);
 })


// STEP 2 CREATE AND DISPATCH ACTION

store.dispatch({type:"POST_BOOK", payload: [
  {
  Title: "les 4 fantastique",
  Author: "Herge",
  Category: "Siencfiction",
  Price: 29.5
  },
  {
  Title: "Matrix",
  Author: "Brother",
  Category: "Siencfiction",
  Price: 33.5
}
]})
