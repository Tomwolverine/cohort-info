
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohort', (table) => {
        table.increments('id'),
        table.string('first_name'),
        table.string('last_name'),
        table.string('photo'),
        table.sting('lat'),
        table.string('long'),
        table.string('previous_occupation')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohort');
};
