// Action Types
import { GET_WORDS, ADD_WORD } from './types';

// Firestore
import { Firestore } from '@google-cloud/firestore';

// Get all transactions
export const getWords = () => async (dispatch) => {
  const firestore = new Firestore();
  // Call cloud function
  //const res = await axios.get(`${gcloudApiUrl}/transactions`);
  const res = {
    data: ['word1', 'word2', 'word3'],
  };
  dispatch({ type: GET_WORDS, payload: res.data });
};
