import React, { useState, useEffect, useMemo, useCallback } from "react";
import Tools from "../../components/Tools";
import SimpleList from "../SimpleList";
import JustInfo from "./JustInfo";

const MyContext = React.createContext();

function HomePage(props) {

    const [data, setData] = useState([]);
    const [activeState, setActiveState] = useState("all");
    const [showLabel, setShowLabel] = useState(true);

    useEffect(() => {
        fetch("/data.json")
            .then((data) => data.json())
            .then((data) => {
                setData(data);
            })
    }, []);

    const onListChange = (e) => {
        //console.log(e.target.value);
        const value = e.target.value;
        setActiveState(value);
    }

    const handleDelete = (item) => {
        const newArr = data.filter((element) => element.id !== item.id);
        setData(newArr);
    }

    const handleLabelClick = (arg) => {
        setActiveState(arg)
    }

    const handleShowLabel = (event) => {
        //console.log(event.target.checked);
        setShowLabel(event.target.checked)
    }

    const newArr = data.filter((item) => {
        if (activeState === "all") {
            return true;
        }
        if (activeState === "active") {
            return item.isActive === true;
        }
        if (activeState === "non-active") {
            return item.isActive === false;
        }
        return false;
    });

    console.log("RENDER HomePage");

    // const value = useMemo(() => {
    //     return {  
    //         key: 'value1',
    //         activeState: activeState
    //     };
    // }, [activeState]);

    // const handleClick = useMemo(() => {
    //     return () => {
    //         console.log('Clicked', activeState);
    //     };
    // }, [activeState]);

    const handleClick = useCallback(() => {
        console.log('Clicked', activeState);
    }, [activeState]);

    return (
        <div>
            <div>
                <input checked={showLabel} onChange={handleShowLabel} type='checkbox'></input> Show Label
            </div>
            <MyContext.Provider value={showLabel}>
                <Tools labelValue={activeState} onAction={onListChange}>
                    <SimpleList onLabelClick={handleLabelClick} data={newArr} onAction={handleDelete} />
                </Tools>
                {/* <JustInfo testValue={value} showLabel={showLabel} /> */}
                <JustInfo onClick={handleClick} showLabel={showLabel} />
            </MyContext.Provider>
        </div>
    );
}

export default HomePage;

export {
    MyContext
}