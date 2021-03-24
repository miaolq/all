var app = Application.currentApplication()
app.includeStandardAdditions = true

var dialogText = 'The current date and time is ' + app.currentDate()
const a = app.displayDialog(dialogText)
// Result: {"buttonReturned":"OK"} {"buttonReturned":"好"}
// 如果点了 ok、好  会继续执行。 否则中断
if(!a)
console.log(JSON.stringify(a) + 'ss')
