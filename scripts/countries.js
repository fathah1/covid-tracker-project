document.addEventListener("DOMContentLoaded", ()=>{ //Domcontentloaded checks(listens) if everything is loaded and then executes the code
const selectDrop = document.querySelector('#countries');


fetch('https://api.covid19api.com/countries').then(res=>{
    return res.json();
}).then(data =>{
    
    
    let output ="";
    let sortedArray=data.sort((a,b) => a.Country < b.Country ? -1 : a.Country === b.Country ? 0 : 1); //sorting the array 
    console.log(sortedArray)
    sortedArray.forEach(country => {
       output += `<option value="${country.Country}">${country.Country}</option>`
       
    });

    selectDrop.innerHTML = output;
}).catch(err =>{
    console.log(err);
})

})

