import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list-tile', {});
  this.route('list', {path: 'list/:list_id'});
});

export default Router;
