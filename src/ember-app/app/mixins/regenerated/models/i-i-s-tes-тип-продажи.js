import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string')
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-tes-тип-продажи.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТипПродажиE', 'i-i-s-tes-тип-продажи', {
    название: attr('Название', { index: 0 })
  });

  modelClass.defineProjection('ТипПродажиL', 'i-i-s-tes-тип-продажи', {
    название: attr('Название', { index: 0 })
  });
};
