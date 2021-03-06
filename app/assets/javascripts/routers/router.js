Molyb.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$leftEl = $('.left-panel');
    this.$midEl = $('.mid-panel');
    this.$rightEl = $('.right-panel');
    this.$titleEl = $('.note-title');
    this.$bodyEl = $(".note-content");
    this.editNoteView = options.editNoteView;
    this.notes = options.notes;
    this.notebook = new Molyb.Collections.NoteBooks();
    this.navbar = options.navbar;
    // this.listenTo(this.notes, '')
  },

  routes: {
    "": "notesIndex",
    "notes/:id": "showNote",
    'notebooks/:id': 'showNotebook',
  },

  notesIndex: function () {
    this.notes.fetch();
    var indexView = new Molyb.Views.NotesIndex({collection: this.notes, navbar: this.navbar});
    this._swapMid(indexView);
  },

  showNote: function (id) {
    if (_.isEmpty(this.notes.models)) { return; }
    if (this.currentNote) {

      this.notes.get(window.id) && this.editNoteView.save();
      // this.currentNote.save();
    }

    this.currentNote = this.notes.getOrFetch(id);
    window.id = id;

    // var bodyNoteView = new Molyb.Views.NoteBody({
    //   model: this.currentNote,
    //   collection: this.notes
    // });

    $("div.text-area").html(this.currentNote.get('body'));
    this.$titleEl.val(this.currentNote.get('title'));

    var spanClass = $("div.text-area").children().attr('class');
    if($('.glyphicon-triangle-bottom').parent().prop("tagName") === "SPAN") {
      $('.glyphicon-triangle-bottom').unwrap();
    };

    $('.glyphicon-triangle-bottom').wrap("<span class='" + spanClass +"'></div>");



  },

  // editNote: function (id) {
  //   window.id = id;
  //   var model = this.notes.getOrFetch(id);
  //   var editNoteView = new Molyb.Views.NoteEdit({model: model, collection: this.notes});
  //   this._swapRight(editNoteView);
  // },


  // showNote: function (id) {
  //   console.log("requested note with id: " + id);
  //   var model = this.notes.getOrFetch(id);
  //   var showNoteView = new Molyb.Views.NoteShow({model: model, collection: this.notes});
  //   this._swapRight(showNoteView);
  // },

  // showNotebook: function (id) {
  //   var model = this.notes.getOrFetch(id);
  //   var showNotebookView = new Molyb.Views.NotebookShow({model: model});
  //   this._swapView(showNotebookView);
  // },


  // _swapLeft: function (view) {
  //   this._leftListView && this._leftListView.remove();
  //   this._leftListView = view;
  //   this.$leftEl.html(view.render().$el);
  // },

  _swapMid: function (view) {
    this._midListView && this._midListView.remove();
    this._midListView = view;
    this.$midEl.html(view.render().$el);
  },

  _swapBody: function (view) {
    this._bodyListView && this._bodyListView.remove();
    this._bodyListView = view;
    this.$bodyEl.html(view.render().$el);
  },

  // _swapRight: function (view) {
  //   this._rightListView && this._rightListView.remove();
  //   this._rightListView = view;
  //   this.$rightEl.html(view.render().$el);
  // },
  //


});
