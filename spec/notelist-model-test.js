function arraySetup() {
  var notelist;
  notelist = new NoteList();
  // console.log(notelist._list)
  assert.isTrue(Array.isArray(notelist._list) === true);
  assert.isTrue(notelist._list.length === 0);
}

function showListTest() {
  var notelist;
  notelist = new NoteList();
  assert.isTrue(Array.isArray(notelist.showList()));
}

function createsNote() {
  var notelist = new NoteList();
  var text = 'Favourite drink: seltzer';
  notelist.addNote(text);
  assert.isTrue(notelist.showList()[0].receivesText() === text);
  assert.isTrue(notelist.showList()[0].id === 0);
  assert.isTrue(notelist.showList().length === 1);
}

function checkSecondId() {
  var notelist = new NoteList();
  notelist.addNote("Hi");
  notelist.addNote("Hey");
  assert.isTrue(notelist.showList()[1].id === 1);
}

checkSecondId();
arraySetup();
showListTest();
createsNote();
