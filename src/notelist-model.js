(function (exports) {
  function NoteList() {
    this._list = [];
    this.id = 0;
  }

  NoteList.prototype.showList = function () {
    return this._list;
  };

  NoteList.prototype.showID = function () {
    return this.id;
  };

  NoteList.prototype.addNote = function (string, id) {
    var note = new Note(string, this.id);
    this._list.push(note);
    this.incrementId();
  };

  NoteList.prototype.incrementId = function () {
    this.id++;
  };

  NoteList.prototype.returnNoteById = function (id) {
    let result = this._list.filter((note) => {
      return note.returnId() == id;
    });
    return result[0];
  };

  exports.NoteList = NoteList;
})(this);
