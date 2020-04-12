import React from 'react';

import { Cards, Chart, CountryPicker } from './components'; //importing these classes from components/index.js file and index.js file has imported different components
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
    }


    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState( { data: fetchedData } );
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards data= {this.state.data} /> 
                <CountryPicker />
                <Chart />
            </div>
        );
    }f
}

export default App;