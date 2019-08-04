let sleepHours=function(day){
if (day==='monday'){
    return 7;
}
else if(day==='tuesday'){
return 8;
}
else if(day==='wednesday'){
return 9;
}
else if (day==='thursday'){
return 8;
}
else if (day==='friday'){
return 7;
}
else if (day==='saturday'){
return 10;
         }
else if (day==='sunday'){
return 8;
}
}
console.log(sleepHours('monday'));
let sleepHoursWeek=sleepHours('monday')+sleepHours('tuesday')+sleepHours('wednesday')+sleepHours('thursday')+sleepHours('friday')+sleepHours('saturday')+sleepHours('sunday');
console.log(sleepHoursWeek);
function sleepAdvice(){
if(sleepHoursWeek===56){
console.log('Your sleeping hours is 56 hours. It\'s good. Let hold!');
}
else if(sleepHoursWeek>56){
console.log(`You sleep ${sleepHoursWeek-56} hours more than necessary`);
}
else {
console.log(`You sleep ${56-sleepHoursWeek} hours less than necessary`);
}
}
console.log(sleepAdvice());
