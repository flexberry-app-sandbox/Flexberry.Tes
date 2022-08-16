import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tes',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tes',
          title: 'Tes'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
