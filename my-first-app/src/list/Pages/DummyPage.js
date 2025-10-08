import { Component } from 'react';

class DummyPage extends Component {

    componentDidMount() {
        console.log("componentDidMount", this.props.name);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.props.name);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", this.props.name);
    }

    render() {
        console.log("RENDER DummyPage");
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default DummyPage;