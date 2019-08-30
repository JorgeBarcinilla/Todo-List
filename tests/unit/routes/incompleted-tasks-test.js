import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | incompleted-tasks', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:incompleted-tasks');
    assert.ok(route);
  });
});
