function storesText() {
  var note;
  note = new Note('test note');
  assert.isTrue(note._text === 'test note');
}

function returnsText() {
  var note = new Note("test note");
  var text = note.receivesText();
  assert.isTrue(text === 'test note');
}



storesText();
returnsText();
