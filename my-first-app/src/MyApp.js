import { Component } from 'react';
import HomePage from './list/Pages/HomePage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import DummyPage from './list/Pages/DummyPage';
import Usage from "./list/Pages/Usage";

class MyApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSelected: 'home'
        };
    }

    handleMenuSelect = (value) => {
        console.log(value);
        this.setState({
            currentSelected: value
        });
    }

    getPage() {
        const {
            currentSelected
        } = this.state;

        switch (currentSelected) {
            case 'home':
                return <HomePage />
            case 'usage':
                return <Usage />
            case 'settings':
                return <DummyPage key="settings" name='Settings' />
            case 'logout':
                return <DummyPage key="logout" name='Logout' />
            default:
                break;
        }
    }

    render() {
        return (
            <div className='app'>
                <Header onMenuSelect={this.handleMenuSelect} />
                <div className='app-body'>
                    {this.getPage()}
                </div>
                <Footer />
            </div>
        );
    }
}

export default MyApp;