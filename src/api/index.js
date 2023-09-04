import axios from 'axios';


const URL = 'https://tripadvisor1.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '4beeb86cc2msheb3c5629f5ed70fp12a3cajsn56e85b0134fd',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }, 
          });


        return data;
    } catch (error) {
        console.log(error);
    }
}