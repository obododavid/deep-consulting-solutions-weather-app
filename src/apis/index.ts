// const BASE_URL = "http://api.weatherstack.com";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
/**
 *
 * @param searchQuery Search string indicating the city to search
 */
export const getPlaceWeather = async (searchQuery: string): Promise<any> => {
    try {
        // let res: any = await fetch(
        //     `${BASE_URL}/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API}&query=${searchQuery}`
        // );
        let res: any = await fetch(`${BASE_URL}?q=${searchQuery}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);

        res = await res.json();

        // if (res.success === false) {
        //     throw res;
        // } else {
        //     return res;
        // }

        return res;
    } catch (err) {
        // logginservice.logerror(err);
        // throw err;
        return err;
    }
};

/**
 * Description of the function
 * @param cities List of cities
 * @returns Array of cities weather details
 */
// export const getWeatherInCities = async (cities: string[]): Promise<IWeatherData[]> => {
//     const result = cities.map((city: string) => {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const res = await getPlaceWeather(city);
//                 resolve(res);
//             } catch (err) {
//                 reject(err);
//             }
//         });
//     });
//     const allResults: IWeatherData[] = (await Promise.all(result).catch((err) =>
//         console.log(err, "ERROR WHEN RETRIEVING CITIES")
//     )) as IWeatherData[];
//     return allResults;
// };

export const getWeatherInCities = (cities: string[]) => Promise.all(cities.map(getPlaceWeather));
