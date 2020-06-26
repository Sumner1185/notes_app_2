(function (exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.insertHTML = function () {
    document.getElementById("app").innerHTML = this.noteListView.returnHTML();
  };

  NoteController.prototype.listener = function () {
    window.addEventListener("hashchange", displayNote);
  };

  NoteController.prototype.returnIdFromURL = function () {
    return parseInt(window.location.hash.split("/")[1]);
  };

  NoteController.prototype.returnSingleNote = function (id) {
    let note = this.noteList.returnNoteById(id);
    return note;
  };

  NoteController.prototype.returnSingleNoteHtml = function (note) {
    let singleNote = new SingleNoteView(note);
    return singleNote.returnHtmlString();
  };

  exports.NoteController = NoteController;
})(this);
