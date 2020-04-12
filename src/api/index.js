import axios from 'axios'; // use to make api request

const url = 'https://covid19.mathdro.id/api';


// exporting current updates
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate }; // returning these from api


    } catch (error) {

    }
}

// exporting daily data
// export const fetchDailyData = async () => {
//     try {
//         const { data } = await axios.get(`${url}/daily`);

//         console.log(data);

//     } catch (error) {

//     }
// }
