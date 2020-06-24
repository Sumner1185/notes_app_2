(function(exports) {

  function NoteController(noteList = new NoteList) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById('app');

    element.innerHTML = this.noteListView.returnHTML();
  };

  exports.NoteController = NoteController;
})(this);