(function (exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.insertHTML = function () {
    document.getElementById("app").innerHTML = this.noteListView.returnHTML();;
  };

  NoteController.prototype.listener = function () {
    window.addEventListener("hashchange", displayNote);
  };

  NoteController.prototype.returnIdFromURL = function () {
    return parseInt(window.location.hash.split("/")[1]);
  };

  exports.NoteController = NoteController;
})(this);
