function returnIdFromURLHash() {
  var noteController = new NoteController();
  var url = "Notes-app-day1/TestRunner.html#notes/0"
  assert.isTrue(noteController.returnIdFromURL(url) === 0)
};

returnIdFromURLHash();

