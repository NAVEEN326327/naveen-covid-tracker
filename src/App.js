import React from 'react';

import { Cards, Chart, CountryPicker } from './components'; //importing these classes from components/index.js file and index.js file has imported different components
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }


    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState( { data: fetchedData } );
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country})

// fetch the data
// set the state
    }
    render() {
        const {data, country } = this.state;
        return (
            <div className={styles.container}>
                <Cards data= {this.state.data} /> 
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }f
}

export default App;