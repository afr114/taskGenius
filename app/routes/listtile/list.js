import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('list', params.list_id);
  },

  actions: {
    saveGoal(params) {
      var newGoal = this.store.createRecord('goal', params);
      var list = params.list;
      list.get('goals').addObject(newGoal);
      newGoal.save().then(function() {
          return list.save();
      });
      this.transitionTo('index');
    },

    destroyGoal(goal){
      goal.destroyRecord();
    },

    achieveGoal: function() {
      $("#goalname").css("text-decoration","line-through");
    }
  }
});
