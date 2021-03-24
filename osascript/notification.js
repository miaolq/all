var app = Application.currentApplication()
app.includeStandardAdditions = true
 
var statusText = "编译完成"
var task = $.NSTask.launchedTaskWithLaunchPathArguments("/usr/bin/say", [statusText])
 
try {
    app.displayDialog(statusText)
    task.terminate
}
catch(error){
    task.terminate
}