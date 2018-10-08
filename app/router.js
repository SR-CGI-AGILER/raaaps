import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('discuss');
  this.route('management');
  this.route('discover-project');
  this.route('dashboard');
  this.route('start-discussion', function() {});
  this.route('tasks-list')
  this.route('create-team');
  this.route('integration');
});

export default Router;
