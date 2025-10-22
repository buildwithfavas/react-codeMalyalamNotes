import './4-Homepage.css';
import ListItem from './4-Listitem';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDataInfo from './4-api';

function Homepage() {

  const dispatch = useDispatch();

  const data = useSelector(state => state.dataInfo.data);
  const loading = useSelector(state => state.dataInfo.loading);
  const error = useSelector(state => state.dataInfo.error);

  useEffect(() => {
    //getDataInfo(dispatch);
    dispatch(getDataInfo());
  }, []);

  // const handleRefresh = () => {
  //   getDataInfo(dispatch);
  // }

  return (
    <div>
      {
        loading && <div className='loading'>Loading...</div>
      }
      {
        error && <div className='error'>{error}</div>
      }

                <div className='app-list'>
            {
                data.map((obj) => {
                    return <ListItem
                        className="task-row"
                        key={obj.title}
                        title={obj.title}
                        descr={obj.descr}
                        isActive={obj.isActive}
                    />
                })
            }
        </div>

    </div>
  )
}

export default Homepage;
