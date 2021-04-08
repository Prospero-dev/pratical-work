const checkDetails = details =>{
    if(details.name === "Busta" && details.dept === "Software"){
        console.log("Busta is here");
    }else{
        console.log("Who the hell are you looking for");
    }
}
module.exports = checkDetails;