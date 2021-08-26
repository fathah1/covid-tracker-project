document.addEventListener("DOMContentLoaded", ()=>{ //Domcontentloaded checks(listens) if everything is loaded and then executes the code   
    fetch('https://api.covid19api.com/summary').then(res=>{
        return res.json();
    }).then(data =>{
        console.log(data.Global);
        newData=data.Global 
        updateData(newData);
    }).catch(err =>{
        console.log(err);
    })

})
    function updateData(data) {
        var latestCases = data.NewConfirmed;
        var latestDeaths = data.NewDeaths;
        var latestRecovered = data.NewRecovered;
        
        var allTimeCases = data.TotalConfirmed;
        var allTimeDeaths = data.TotalDeaths;
        var allTimeRecovered = data.TotalRecovered;

        console.log(latestCases);
    
        document.getElementById("latestCases").innerHTML = latestCases;
        document.getElementById("latestDeaths").innerHTML = latestDeaths;
        document.getElementById("latestRecovered").innerHTML = latestRecovered;
        
        
    
        document.getElementById("allTimeCases").innerHTML =  allTimeCases;
        document.getElementById("allTimeDeaths").innerHTML = allTimeDeaths;
        document.getElementById("allTimeRecovered").innerHTML = allTimeRecovered;
    }

