import Ember from 'ember';

export default Ember.Component.extend({
  isNoteShowing: false,

actions: {
  openNoteField() {
    this.set('isNoteShowing', true);
    },

    closeNoteField() {
      this.set('isNoteShowing', false);
    },

  saveGoal() {
    var params = {
      name: this.get('name'),
      note: this.get('note'),
      list: this.get('list')
    };
    if (params.note == undefined) {
        params.note = ""
      }
      
      this.sendAction('saveGoal', params);
    }
  }

});
