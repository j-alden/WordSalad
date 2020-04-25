import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';
//import moment from 'moment';

// Rainbow Components
import { Input } from 'react-rainbow-components';

const containerStyles = {
  maxWidth: 700,
};

// Ant Design
//import { Timeline, Typography } from 'antd';

const AddWord = () => {
  //const transactions = useSelector(state => state.transactions);
  //const dispatch = useDispatch();

  // Fetch transactions from api
  // useEffect(() => {
  //     dispatch(actions.getTransactions());
  // }, []);

  //console.log(transactions);
  return (
    //   <Input
    //             label='aplication component search'
    //             hideLabel
    //             placeholder='Search'
    //             icon={
    //               <FontAwesomeIcon
    //                 icon={faSearch}
    //                 className='rainbow-color_gray-3'
    //               />
    //             }
    //             type='search'
    //             className='rainbow-p-around_small'
    //             style={inputStyles}
    //           />
    <Input
      label='Add Word'
      placeholder='Enter Word'
      isCentered
      style={containerStyles}
      className='rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto'
    />
  );
};

export default AddWord;
