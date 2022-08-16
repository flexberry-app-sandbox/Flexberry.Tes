import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tes-клиент-l');
  this.route('i-i-s-tes-клиент-e',
  { path: 'i-i-s-tes-клиент-e/:id' });
  this.route('i-i-s-tes-клиент-e.new',
  { path: 'i-i-s-tes-клиент-e/new' });
  this.route('i-i-s-tes-продажа-l');
  this.route('i-i-s-tes-продажа-e',
  { path: 'i-i-s-tes-продажа-e/:id' });
  this.route('i-i-s-tes-продажа-e.new',
  { path: 'i-i-s-tes-продажа-e/new' });
  this.route('i-i-s-tes-тип-продажи-l');
  this.route('i-i-s-tes-тип-продажи-e',
  { path: 'i-i-s-tes-тип-продажи-e/:id' });
  this.route('i-i-s-tes-тип-продажи-e.new',
  { path: 'i-i-s-tes-тип-продажи-e/new' });
});

export default Router;
