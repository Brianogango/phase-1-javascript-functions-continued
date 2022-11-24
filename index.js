// code your solution here

let activity =""

function saturdayFun( activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}const mondayWork = function ( activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(visualFlair="*") {
   return function (talent = "special") {
    return `You are ${visualFlair}${talent}${visualFlair}!`
    
   } 
}
console.log(wrapAdjective("||")("a dedicated programmer")("||")("!"))