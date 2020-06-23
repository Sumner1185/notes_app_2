(function (exports) {
  function NoteList() {
    this._list = [];
  }

  NoteList.prototype.showList = function() {
    return this._list
  }

  NoteList.prototype.addNote = function (string) {
    var note = new Note(string);
    this._list.push(note.receivesText());
  };

  exports.NoteList = NoteList;
})(this);
