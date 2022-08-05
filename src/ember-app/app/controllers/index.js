import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tes.caption'),
          title: i18n.t('forms.application.sitemap.tes.title'),
          children: [{
            link: 'i-i-s-tes-клиент-l',
            caption: i18n.t('forms.application.sitemap.tes.i-i-s-tes-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.tes.i-i-s-tes-клиент-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-tes-продажа-l',
            caption: i18n.t('forms.application.sitemap.tes.i-i-s-tes-продажа-l.caption'),
            title: i18n.t('forms.application.sitemap.tes.i-i-s-tes-продажа-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})