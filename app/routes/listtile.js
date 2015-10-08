import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('list');
  },

  actions: {
    saveList(params) {
      var newList = this.store.createRecord('list', params);
      newList.save();
    }
  }
});
