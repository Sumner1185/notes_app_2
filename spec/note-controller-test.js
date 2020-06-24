function returnsHTML() {
  const noteController = new NoteController();
  assert.isTrue(
    noteController == "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
  );
}
