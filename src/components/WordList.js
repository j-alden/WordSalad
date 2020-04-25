import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';

const WordList = () => {
  const words = useSelector((state) => state.words);
  const dispatch = useDispatch();
  // Fetch transactions from api
  useEffect(() => {
    dispatch(actions.getWords());
  }, []);

  const renderWords = (wordsArray) => {
    return wordsArray.map((word) => <li>{word}</li>);
  };
  console.log(words);
  return (
    <div className='rainbow-m-around_large'>
      <h2>Submitted Words</h2>
      <ul>{renderWords(words)}</ul>
    </div>
  );
};

export default WordList;
