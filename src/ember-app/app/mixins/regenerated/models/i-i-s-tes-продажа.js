import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  сумма: DS.attr('number'),
  коммент: DS.attr('string'),
  клиент: DS.belongsTo('i-i-s-tes-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-tes-продажа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-tes-продажа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  коммент: {
    descriptionKey: 'models.i-i-s-tes-продажа.validations.коммент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-tes-продажа.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродажаE', 'i-i-s-tes-продажа', {
    дата: attr('Дата', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    коммент: attr('Коммент', { index: 2 }),
    клиент: belongsTo('i-i-s-tes-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПродажаL', 'i-i-s-tes-продажа', {
    дата: attr('Дата', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    коммент: attr('Коммент', { index: 2 }),
    клиент: belongsTo('i-i-s-tes-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
