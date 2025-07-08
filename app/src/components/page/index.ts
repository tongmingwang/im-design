import PageWrapper from './PageWrapper.vue';
import PageCard from './PageCard.vue';
import CodeTemp from './CodeTemp.vue';
import ComponentApi from './ComponentApi.vue';
import AppAnchor from './AppAnchor.vue';

export default {
  install(app: any) {
    app.component('PageWrapper', PageWrapper);
    app.component('PageCard', PageCard);
    app.component('CodeTemp', CodeTemp);
    app.component('ComponentApi', ComponentApi);
    app.component('AppAnchor', AppAnchor);
  },
};
