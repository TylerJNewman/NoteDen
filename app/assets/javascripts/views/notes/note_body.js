Molyb.Views.NoteBody = Backbone.View.extend({
  template: JST["notes/body"],


  render: function () {
    this.$el.html(this.template({note: this.model}));
    return this;
  },

});
