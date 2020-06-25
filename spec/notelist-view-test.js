function noteListViewInstantiation() {
  var notelist = new NoteList()
  var nlview = new NoteListView(notelist)
  assert.isTrue(nlview.viewnotelist === notelist)
}

function returnHTMLTest() {
  var notelist = new NoteList()
  nlview = new NoteListView(notelist)
  assert.isTrue(nlview.returnHTML() === "<ul><li><div></div></li></ul>")
  notelist.addNote("Favourite food: pesto")
  assert.isTrue(nlview.returnHTML() == '<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li></ul>')
  notelist.addNote("Favourite drink: seltzer")
  assert.isTrue(nlview.returnHTML() == '<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li><li><div><a href="#notes/1">Favourite drink: sel</a></div></li></ul>')
}


noteListViewInstantiation()
returnHTMLTest()