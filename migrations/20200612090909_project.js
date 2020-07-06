exports.up = function(knex) {
    return knex.schema

    .createTable('projects', tbl => {
        tbl.increments();
        tbl.boolean('completed').defaultTo(false);
        tbl.string('name', 255).notNullable().unique().index();
        tbl.string('description', 255);
    })

    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id');
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed').defaultTo(false);
    })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique().index();
        tbl.string('description', 255);
    })

};

exports.down = function(knex) {
    return knex.schema
          .dropTableIfExists('resources')
          .dropTableIfExists('tasks')
          .dropTableIfExists('projects')
};