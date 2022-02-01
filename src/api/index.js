import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const { data : { data } } = await axios.get(URL, {
            params: {
              tr_longitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              bl_latitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'f117f695f3mshb0a838ae8f4716cp1819c2jsnf06c6bce31a5'
            }
          });

        return data;
    } catch (error) {
        console.log(error);
    }
}