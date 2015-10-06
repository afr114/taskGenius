import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  note: DS.attr(),
  list: DS.belongsTo('list', {async:true}),
  tasks: DS.hasMany('task', {async: true})
});
