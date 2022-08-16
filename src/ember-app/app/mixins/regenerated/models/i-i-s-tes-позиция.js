import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колич: DS.attr('number'),
  продажа: DS.belongsTo('i-i-s-tes-продажа', { inverse: 'позиция', async: false })
});

export let ValidationRules = {
  колич: {
    descriptionKey: 'models.i-i-s-tes-позиция.validations.колич.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продажа: {
    descriptionKey: 'models.i-i-s-tes-позиция.validations.продажа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПозицияE', 'i-i-s-tes-позиция', {
    колич: attr('Количество', { index: 0 })
  });
};
