import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTesКлиентLForm from './forms/i-i-s-tes-клиент-l';
import IISTesПродажаLForm from './forms/i-i-s-tes-продажа-l';
import IISTesТипПродажиLForm from './forms/i-i-s-tes-тип-продажи-l';
import IISTesКлиентEForm from './forms/i-i-s-tes-клиент-e';
import IISTesПродажаEForm from './forms/i-i-s-tes-продажа-e';
import IISTesТипПродажиEForm from './forms/i-i-s-tes-тип-продажи-e';
import IISTesКлиентModel from './models/i-i-s-tes-клиент';
import IISTesПозицияModel from './models/i-i-s-tes-позиция';
import IISTesПродажаModel from './models/i-i-s-tes-продажа';
import IISTesТипПродажиModel from './models/i-i-s-tes-тип-продажи';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tes-клиент': IISTesКлиентModel,
    'i-i-s-tes-позиция': IISTesПозицияModel,
    'i-i-s-tes-продажа': IISTesПродажаModel,
    'i-i-s-tes-тип-продажи': IISTesТипПродажиModel
  },

  'application-name': 'Tes',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tes',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tes',
          title: 'Tes'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        tes: {
          caption: 'Tes',
          title: 'Tes',
          'i-i-s-tes-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-tes-продажа-l': {
            caption: 'Продажа',
            title: ''
          },
          'i-i-s-tes-тип-продажи-l': {
            caption: 'Тип продажи',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tes-клиент-l': IISTesКлиентLForm,
    'i-i-s-tes-продажа-l': IISTesПродажаLForm,
    'i-i-s-tes-тип-продажи-l': IISTesТипПродажиLForm,
    'i-i-s-tes-клиент-e': IISTesКлиентEForm,
    'i-i-s-tes-продажа-e': IISTesПродажаEForm,
    'i-i-s-tes-тип-продажи-e': IISTesТипПродажиEForm
  },

});

export default translations;
