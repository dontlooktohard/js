function countryToLiveIn(language, isIsland, population, country){
    if (language === 'English' && !isIsland && population<50 && country){
        console.log(`${country} this is the  country for you`)
    }
    else {
        console.log(' this is not  a country for you')
    }
}
