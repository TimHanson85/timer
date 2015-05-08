// var apt = new Date('May 8, 2015 11:15:00')


// function setReminder(date, callback){
// 	console.log('ALARM!')
// }
// function alert(){
// 	console.log('ALERM!')
// }

// setReminder(apt, setTimeout(alert, 100))

// var alerm = function(){
// 	console.log('ALL THE ALERMS!!!')
// }

// function setReminder(alarmTime, callback){
// 	var currentTime = new Date();
// 	var interval = alarmTime.getTime() - currentTime.getTime();
// 	setTimeout(callback, interval);
// }

// module.exports={setReminder: setReminder};

// module.exports={
// 	setReminder: setReminder,
// 	alerm: alerm
// };
// }

[10,9,8,7,6,5,4,3,2,1].forEach(function(x){
	setTimeout(function(){
		console.log(x);
	}, (11 -x) * 1000);
})

// for(i=1;i<11;i++){

// 	setTimeout(function(){
// 		console.log(i);
// 	}i * 1000)
// }




