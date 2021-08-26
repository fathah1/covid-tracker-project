document.addEventListener("DOMContentLoaded", ()=>{ //Domcontentloaded checks(listens) if everything is loaded and then executes the code
const selectDrop = document.querySelector('#countries');


fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations').then(res=>{
    return res.json();
}).then(data =>{
    
    console.log(data.locations)
    let output ="";
    let sortedArray=data.locations.sort((a,b) => a.country < b.country ? -1 : a.country === b.country ? 0 : 1); //sorting the array 
    
    sortedArray.forEach(country => {
       output += `<option value="${country.country}">${country.country}</option>`
       
    });

    selectDrop.innerHTML = output;
}).catch(err =>{
    console.log(err);
})

})


    
function updateData() {

    var select=document.getElementById("countries");
    var option = select.value;
    document.getElementById("Heading1Page2").innerHTML= "Latest Stats for <br> " + option;
    console.log(option);





}
   

  





