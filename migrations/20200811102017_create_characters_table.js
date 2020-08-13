
exports.up = function(knex) {
    return knex.schema.createTable('characters', tbl => {
        //primary key
        tbl.increments('id')

        //don't need the character name to be unique (someone might delete char and then someone else may use that name later), also required
        tbl.string('name', 256).notNullable();
    });  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters');
};
