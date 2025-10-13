import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css';

export default function Details() {

  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios('/data.json')
      .then((response) => {
        const item = response.data.find((userItem) => userItem.id === parseInt(userId));
        setUser(item);
      });
  }, [userId]);

  return (
    <div className='page details'>
      <div className='title'>{user.name}</div>
      <div className='body'>{user.address}</div>
      <div className='body'>{user.phone}</div>
      <div className='body'>{user.class}</div>
      
    </div>
  )
}
