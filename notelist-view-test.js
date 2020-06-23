function noteListViewInstantiation() {
  notelist = new NoteList()
  nlview = new NoteListView(notelist)
  assert.isTrue(nlview.viewnotelist === notelist)
}

noteListViewInstantiation()