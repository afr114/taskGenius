import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('listtile', function() {
    this.route('list', {path: 'list/:list_id'});
  });
});

export default Router;
