import Route from '@ember/routing/route';

// TODO: Native JS classes should be used instead of classic classes
// TODO: eslintember/no-classic-classes
export default class PendenciaRecebimentosNewRoute extends Route {
  async model() {
    return this.store.createRecord('pendencia_recebimento');
  }
}
