import React from 'react'

function testMiddleware({ dispatch, getState }) {  // store have two properties => dispatch, getState
    return (next) => {
        return (action) => {
            console.log('PREV STATE:', getState());
            console.log('ACTION', action);
            next(action);
            console.log('NEXT STATE', getState());
            console.log('_________________');

            // // logic here
            // console.log("Hello", action);
            // next(action);
        }
    }
}

export default testMiddleware;
