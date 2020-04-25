import { GET_WORDS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GET_WORDS:
      return action.payload;
    default:
      return state;
  }
}
