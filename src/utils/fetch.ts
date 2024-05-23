const API_KEY ='PYDWbvib05h0gcE59vhVDjfgUKCw5RlaZM2ONcHe';
const API_URL ='https://api.nasa.gov/planetary/apod';
 
export default async (urlParams?:string | undefined)=>{
    try {
        console.log(`${API_URL}?api_key=${API_KEY}${urlParams? urlParams:''}`)
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${urlParams? urlParams:''}`);
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
};