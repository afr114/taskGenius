import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  status: DS.attr(),
  notes: DS.attr(),
  priority: DS.attr(),
  goal: DS.belongsTo('goal', {async:true}),
  steps: DS.hasMany('step', {async: true})
});
