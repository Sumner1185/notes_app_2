(function (exports) {
  function NoteController(noteList) {
    this.noteList = new NoteList();
    this.noteList.addNote("Test0owuiehowheoiwheoiuwefwerfeifjho23", 0);
    this.noteList.addNote("Test1powiehjfowuhefouwhefouhwef", 1);
    this.noteList.addNote("Testpiwjefoiwoeih2oiefho2iehf2", 2);
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.insertHTML = function () {
    document.getElementById("app").innerHTML = this.noteListView.returnHTML();
  };

  NoteController.prototype.listener = function () {
    window.location.addEventListener("hashchange", this.returnIdFromURL());
  };

  NoteController.prototype.returnIdFromURL = function () {
    var id = parseInt(window.location.hash.split("/")[1]);
    this.returnSingleNote(id);
  };

  NoteController.prototype.returnSingleNote = function (id) {
    let note = this.noteList.returnNoteById(id);
    this.returnSingleNoteHtml(note);
  };

  NoteController.prototype.returnSingleNoteHtml = function (note) {
    let singleNote = new SingleNoteView(note);
    var html = singleNote.returnHtmlString();
    this.renderSingleNoteHtml(html);
  };

  NoteController.prototype.renderSingleNoteHtml = function (html) {
    document.getElementById("app").innerHTML = html
  };

  exports.NoteController = NoteController;
})(this);
