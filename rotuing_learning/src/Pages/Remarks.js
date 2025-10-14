import React from 'react'
import { useOutletContext } from 'react-router-dom';
import './Remarks.css';

export default function Remarks() {

  const { remarks = [] } = useOutletContext();

  return (
    <div className='remarks'>
      {
        remarks.map((item) => {
          return (
            <div>
              {item}
            </div>
          )
        })
      }
    </div>
  )
}
