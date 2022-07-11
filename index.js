function saturdayFun( target = "roller-skate") {
    return `This Saturday, I want to ${target}!`;

}

const mondayWork = function(target = "go to the office") {
    return `This Monday, I will ${target}.`
}
   
function wrapAdjective(flair = '*') {
    return function(target = "special") {
        return `You are ${flair}${target}${flair}!` 
    }
}
