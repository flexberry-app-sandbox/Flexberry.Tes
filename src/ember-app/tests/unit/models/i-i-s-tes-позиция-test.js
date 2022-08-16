import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tes-позиция', 'Unit | Model | i-i-s-tes-позиция', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tes-клиент',
    'model:i-i-s-tes-позиция',
    'model:i-i-s-tes-продажа',
    'model:i-i-s-tes-тип-продажи',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
