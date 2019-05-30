import React from 'react';
import logo from './logo.svg';
import './App.css';


const word = 'Hello world';
var quantity = 0;
class Product extends React.Component {

    constructor(props) {
        super(props);
        this.quantity = 0;
    }
    getInitialState() {
        return { quantity: 0 };
    }
    buy() {
        this.setState({ quantity: this.setState.quantity + 1 });
    }
    render() {
        return ( <
            div className = "App" >
            <
            p > Android - 199 $ < /p> <
            button onClick = { this.buy } > Buy < /button> <
            h3 > Quantity: { this.state.quantity }
            item < /h3> < /
            div >
        );
    }
}




function App() {
    return ( <
        div > < Product / > <
        /div>
    );
}

export default App;