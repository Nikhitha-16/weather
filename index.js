function showWeather(){
    let input = document.getElementById("city")
    getWeather(input.value)
}
async function getWeather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '13cd9e7898msh8ce24faef4c372ap1419ebjsnaecd97da8974',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    displayData(result.main.temp)
} catch (error) {
	console.log(error.message);
}
}

function displayData(data){
    let container = document.getElementById("main")
    container.innerHTML = `
    <h3>TEMPERATURE : ${data}</h3>
    `
}
