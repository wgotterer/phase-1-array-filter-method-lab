

function findMatching(drivers, name){
    return drivers.filter(function(driver){
        return driver.toUpperCase() === name.toUpperCase() 
    })
}


// findMatching(drivers, 'Bobby');



function fuzzyMatch(drivers, letters){
    return drivers.filter(function(driver){
        return driver[0] === letters[0]
    })

}








function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name
    })

}


matchName(drivers, 'Bobby')












// drivers.filter(findMatching(){
    
// };


// function findMatching(drivers){
//     return drivers === "Joe"
// }


// function findMatching (collection, cb){
//     for(const truckman of collection){
//         if(cb(truckman)){
//             console.log(truckman.name);
//         }
//     }
// }


// findMatching(drivers, function(truckman){
//     return truckman.name === "Joe"
// });



