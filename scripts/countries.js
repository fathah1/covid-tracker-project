 function getValues(array,countryName){
        let countryArray = array.filter(number =>number.name == countryName);
        console.log(countryArray);
        return countryArray;
    }


document.addEventListener("DOMContentLoaded", ()=>{ //Domcontentloaded checks(listens) if everything is loaded and then executes the code
const selectDrop = document.querySelector('#countries');

fetch('https://corona-api.com/countries').then(res=>{
    return res.json();
}).then(data =>{
    let output ="";
    console.log(data.data);
    sortedArray=data.data.sort((a,b) => a.name < b.name ? -1 : a.name === b.name ? 0 : 1); //sorting the array 
    
    sortedArray.forEach(country => {
       output += `<option value="${country.name}">${country.name}</option>`
       
    });
    selectDrop.innerHTML = output;

   
    getValues(sortedArray,"Afghanistan")

}).catch(err =>{
    console.log(err);
})

})

function updateData() {
    var select=document.getElementById("countries");
    var option = select.value;

    countryData =getValues(sortedArray,option); //calls getValues everytime option is changed

    console.log(Object.keys(countryData));
    console.log(countryData[0]);

    var latestCases = countryData[0].today.confirmed;
    var latestDeaths = countryData[0].today.deaths;
   

    var allTimeCases = countryData[0].latest_data.confirmed;
    var allTimeDeaths = countryData[0].latest_data.deaths;
    var allTimeRecovered = countryData[0].latest_data.recovered;

    console.log(allTimeCases);

   
    document.getElementById("Heading1Page2").innerHTML= "Latest Stats for <br> " + option;
    document.getElementById("latestCases").innerHTML = latestCases;
    document.getElementById("latestDeaths").innerHTML = latestDeaths;
    


    document.getElementById("allTimeCases").innerHTML =  allTimeCases;
    document.getElementById("allTimeDeaths").innerHTML = allTimeDeaths;
    document.getElementById("allTimeRecovered").innerHTML = allTimeRecovered;
}








