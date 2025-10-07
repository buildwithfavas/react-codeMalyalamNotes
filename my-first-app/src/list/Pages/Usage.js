import { useState, useEffect } from 'react';
import './Usage.css';

function Usage() {

    const [value, setValue] = useState(0);
    const [color, setColor] = useState('white');

    useEffect(()=>{
        console.log("Effect 1");
        return ()=>{
            console.log("Cleanup 1");
        }
    },[]);

    useEffect(()=>{
        console.log("Effect 2");
        return ()=>{
            console.log("Cleanup 2");
        }
    },[]);

    return (
        <div className='usage'>
            <div className='usage-item' style={{ background: color }}>
                <button onClick={() => {
                    setValue(value + 1)
                }}>Increment</button>
                <label className='usage-item-label'>{value}</label>
                <button onClick={() => {
                    setValue(value - 1)
                }}>Decrement</button>
            </div>
            <button onClick={() => {
                setColor('green')
            }}>Green</button>
            <button onClick={() => {
                setColor('blue')
            }}>Blue</button>
        </div>
    );
}

export default Usage;