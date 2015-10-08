import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveList() {
      var params = {
        name: this.get('name'),
        };
      this.sendAction('saveList', params);
      debugger;
      }
    }
  });
