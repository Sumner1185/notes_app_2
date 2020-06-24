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
  assert.isTrue(nlview.returnHTML() === "<ul><li><div>Favourite food: pest</div></li></ul>")
  notelist.addNote("Favourite drink: seltzer")
  assert.isTrue(nlview.returnHTML() === "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>")
}
// function returnHTMLTest() {
//   var notelist = new NoteList()
//   nlview = new NoteListView(notelist)
//   assert.isTrue(nlview.returnHTML() === "<ul><li><div></div></li></ul>")
//   notelist.addNote("Favourite food: pesto")
//   assert.isTrue(nlview.returnHTML() === "<ul><li><div>Favourite food: pesto</div></li></ul>")
//   notelist.addNote("Favourite drink: seltzer")
//   assert.isTrue(nlview.returnHTML() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
// }

noteListViewInstantiation()
returnHTMLTest()