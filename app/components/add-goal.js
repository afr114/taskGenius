import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  saveGoal() {
    var params = {
      name: this.get('name'),
      note: this.get('note'),
      list: this.get('list')
    };
      this.sendAction('saveGoal', params);
    }
  }
});
