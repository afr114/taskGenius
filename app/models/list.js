import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  goals: DS.hasMany('goal', {async: true})
});
