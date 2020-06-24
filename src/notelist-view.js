
(function(exports) {

  function NoteListView(notelist) {
    this.viewnotelist = notelist;
  }

  NoteListView.prototype.returnHTML = function() {
    var notetext = []
    this.viewnotelist.showList().forEach(function(note){
      notetext.push(note.receivesText().substr(0,20));
    });
    return "<ul><li><div>"+notetext.join("</div></li><li><div>")+"</div></li></ul>";
  }

exports.NoteListView = NoteListView;
})(this);
