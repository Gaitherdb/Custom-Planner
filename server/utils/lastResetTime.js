const ResetTime = require('../models/ResetTime');

async function getLastResetTime() {
    const resetTime = await ResetTime.findOne();
    console.log(resetTime, "resetTime")
    return resetTime ? resetTime.lastResetTime : null;
}

async function setLastResetTime(time) {
    const resetTime = await ResetTime.findOne();
    if (resetTime) {
        resetTime.lastResetTime = time;
        await resetTime.save();
    } else {
        await ResetTime.create({ lastResetTime: time });
        console.log(time, "time")
    }
}

module.exports = { getLastResetTime, setLastResetTime };