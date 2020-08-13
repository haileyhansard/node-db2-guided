
exports.up = function(knex) {
  return knex.schema
  .createTable('classes', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
  })
  .createTable('weapons', tbl => {
    tbl.increments();
    tbl.string('name').notNullable().defaultTo(1);
})
.createTable('armors', tbl => {
    tbl.increments();
})
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('armors')
    .dropTableIfExists('weapons')
    .dropTableIfExists('classes');
};
//its good to drop the tables in the reverse order, like the last one written in up() becomes the first one written in down()