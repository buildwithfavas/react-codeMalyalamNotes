import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';
import './Details.css';

export default function Details() {

  const location = useLocation();
  const state = location.state || {};
  //console.log(location);

  const { userId } = useParams();
  const [user, setUser] = useState(state.data);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios('/data.json')
        .then((response) => {
          const item = response.data.find((userItem) => userItem.id === parseInt(userId));
          setUser(item);
        });
    }
  }, [userId, user]);

  if (!user) {
    return null;
  }

  return (
    <div className='page details'>
      <div className='title'>{user.name}</div>
      <div className='body'>{user.address}</div>
      <div className='body'>{user.phone}</div>
      <div className='body'>{user.class}</div>
      <div className='sub-menu'>
        <NavLink to="" end><span>Mark</span></NavLink>
        <NavLink to="sports"><span>Sports</span></NavLink>
        <NavLink to="remarks"><span>Remarks</span></NavLink>
      </div>
      <div className='details-body'>
        <Outlet context={user} />
      </div>
      <div><button onClick={() => {
        navigate('..');
        //navigate(-1);
        // navigate('/users');
      }}>BACK</button></div>

    </div>
  )
}
