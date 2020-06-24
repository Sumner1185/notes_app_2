function returnsAStringOfHTML() {
  const note = new Note("Favourite drink: seltzer");
  const singleNote = new SingleNoteView(note);
  assert.isTrue(
    singleNote.returnHtmlString() === "<div>Favourite drink: seltzer</div>"
  );
}
