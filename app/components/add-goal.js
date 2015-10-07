import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  saveGoal() {
    var params = {
      name: this.get('name'),
      note: this.get('note')
      };
      this.sendAction('saveGoal', params);
    }
  }
});
