Molyb.Views.NotesIndex = Backbone.View.extend({
  template: JST["notes/index"],

  events: {
   // add blur save
  },

  render: function () {
    // this.$el.html(this.template({notes: this.collection}));
    this.$el.html("hello there");
    return this;
  }
});
