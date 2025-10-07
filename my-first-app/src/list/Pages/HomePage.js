import React from "react";
import Tools from "../../components/Tools";
import SimpleList from "../SimpleList";

const MyContext = React.createContext();

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeState: "all",
            message: '',
            showLabel: true
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch("/data.json")
            .then((data) => data.json())
            .then((data) => {
                this.setState({
                    data: data
                });
            })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        if (prevState.message !== this.state.message) {
            this.setState({
                message: 'Message'
            });
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    onListChange = (e) => {
        //console.log(e.target.value);
        const value = e.target.value;

        this.setState({
            activeState: value
        });
    }

    handleDelete = (item) => {
        const newArr = this.state.data.filter((element) => element.id !== item.id);

        this.setState({
            data: newArr
        });
    }

    handleLabelClick = (arg) => {
        this.setState({
            activeState: arg
        });
    }

    handleShowLabel = (event) => {
        //console.log(event.target.checked);
        this.setState({
            showLabel: event.target.checked
        });
    }

    render() {
        const { data, activeState } = this.state;
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

        return (
            <div>
                <div>
                    <input checked={this.state.showLabel} onChange={this.handleShowLabel} type='checkbox'></input> Show Label
                </div>
                <MyContext.Provider value={this.state.showLabel}>
                    <Tools labelValue={activeState} onAction={this.onListChange}>
                        <SimpleList onLabelClick={this.handleLabelClick} data={newArr} onAction={this.handleDelete} />
                    </Tools>
                </MyContext.Provider>
            </div>
        );
    }
}

export default HomePage;

export {
    MyContext
}