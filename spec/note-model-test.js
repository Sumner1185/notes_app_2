function storesText() {
  var note;
  note = new Note("test note");
  assert.isTrue(note._text === "test note");
}

function returnsText() {
  var note = new Note("test note");
  var text = note.receivesText();
  assert.isTrue(text === "test note");
}

function returnIdWhenCalled() {
  let note = new Note("test", 4);
  assert.isTrue(note.returnId() === 4);
}

storesText();
returnsText();
returnIdWhenCalled();
