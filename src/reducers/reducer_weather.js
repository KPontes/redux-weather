import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  //console.log('Action received', action);
  switch(action.type) {
    //data property comes from the weather api json object and we return as array
    //as there is one data every 3 hours
    case FETCH_WEATHER:
      return state.concat([action.payload.data]);
  }
  return state;
}
//You never want to mutate state directly, it is against React and Redux best practices.
//state.concat  will return a new array with the new city included,
//while state.push  mutates the original array
