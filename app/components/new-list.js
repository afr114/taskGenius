import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveList() {
      var params = {
        title: this.get('title')
        };
      this.sendAction('saveList', params);
      }
    }
  });
