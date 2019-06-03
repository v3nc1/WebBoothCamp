import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro';

const greeting=React.createElement('h1',{},'Tv Series')



const state = {

    series : []
    }

const currentDate = () => {
    const date=new Date();
    return date.toDateString();
}


function App() {
    return ( 

    <div className='App'> 
    <header className='App-header'>

     {greeting}  
    </header>
    {currentDate()} 
    <Intro message='Evo Jelića' />
    {state.series.length}
    
    <div>
    <img src={logo} className='App-logo' />
    </div>
    </div>
    );
}

export default App;