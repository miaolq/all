var app = Application.currentApplication()
app.includeStandardAdditions = true

var response = app.displayDialog("What's your name?", {
  defaultAnswer: '',
  withIcon: 'note',
  buttons: ['Cancel', 'Continue'],
  defaultButton: 'Continue',
})
// Result: {"buttonReturned":"Continue", "textReturned":"Jen"}
app.displayDialog('Hello, ' + response.textReturned + '.')
