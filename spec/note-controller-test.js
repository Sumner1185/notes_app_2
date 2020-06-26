function returnIdFromURLHash() {
  var noteController = new NoteController();
  var url = "Notes-app-day1/TestRunner.html#notes/0";
  console.log(noteController.returnIdFromURL(url));
  assert.isTrue(noteController.returnIdFromURL(url) === 0);
}

function returnNoteBasedOnId() {
  var noteList = new NoteList();
  noteList.addNote("Test");
  var noteController = new NoteController(noteList);

  assert.isTrue(noteController.returnSingleNote(0) instanceof Note);
}

function returnCorrectHtmlFromPassedInNote() {
  var noteController = new NoteController();
  let note = new Note("this is a test", 5);
  assert.isTrue(
    noteController.returnSingleNoteHtml(note) === "<div>this is a test</div>"
  );
}

returnIdFromURLHash();
returnNoteBasedOnId();
returnCorrectHtmlFromPassedInNote();
