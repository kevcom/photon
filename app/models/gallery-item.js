import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('description'),
    type: DS.attr('string'),
    uri: DS.attr('string'),
    size: DS.attr('string'),
    active: DS.attr('boolean'),
});