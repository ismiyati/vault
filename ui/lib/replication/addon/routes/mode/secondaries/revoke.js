import Base from '../../replication-base';

export default Base.extend({
  model() {
    return this.modelFor('mode.secondaries');
  },

  redirect(model) {
    const replicationMode = this.get('replicationMode');
    if (!model.get(`${replicationMode}.isPrimary`) || !model.get('canRevokeSecondary')) {
      return this.transitionTo('application', model.get('name'));
    }
  },

  resetController(controller) {
    controller.reset();
  },
});
