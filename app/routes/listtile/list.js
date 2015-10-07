import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    debugger;
    return this.store.findRecord('list', params.list_id);
  }

  // renderTemplate() {
  //   this.render({outlet: 'body'});
  // }
});
