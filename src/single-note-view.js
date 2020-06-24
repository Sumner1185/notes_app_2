(function (exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.returnHtmlString = function() {
    return '<div>'+this.note.receivesText()+'</div>'
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
