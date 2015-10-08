import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('list', params.list_id);
    return this.store.findRecord('goal', params.goal_id)
  },

  actions: {
    saveGoal(params) {
      var newGoal = this.store.createRecord('goal', params);
      newGoal.save();
      // var list = params.list
      // list.get('goals').addObject(newGoal);
      // list.save();
      this.transitionTo('listtile.list', params.list);
    }
  }
});
