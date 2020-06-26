(function (exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.insertHTML = function () {
    document.getElementById("app").innerHTML = this.noteListView.returnHTML();;
  };

  NoteController.prototype.listener = function () {
    window.addEventListener("hashchange", displayNote);
  };

  NoteController.prototype.returnIdFromURL = function () {
    console.log(window.location.hash)
    console.log(window.location.hash.split("/")[1])
    return parseInt(window.location.hash.split("/")[1]);
  };

  exports.NoteController = NoteController;
})(this);
