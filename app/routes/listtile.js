import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('list');
  },

  actions: {
    saveGoal(params) {
      var newGoal = this.store.createRecord('goal', params);
      newGoal.save();
      this.transitionTo('listtitle');
    }
  }

});
