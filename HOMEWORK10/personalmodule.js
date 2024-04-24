
function systemInfo (userName){
    const currentTime = new Date();
    const currentHour = currentTime.getUTCHours()
    let timeOfTheDay;

    if (currentHour > 0 && currentHour < 6){
        timeOfTheDay = 'night'
    } else if (currentHour > 6 && currentHour < 12){
        timeOfTheDay = 'morning'
    }else if (currentHour > 12 && currentHour < 18){
        timeOfTheDay = 'afternoon'
    }else if (currentHour > 18 && currentHour < 24){
        timeOfTheDay = 'evening'
    }

    return `Good ${timeOfTheDay}, ${userName}`
}

module.exports = {systemInfo}