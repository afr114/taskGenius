import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  tasks: DS.hasMany('task', {async: true})
});
