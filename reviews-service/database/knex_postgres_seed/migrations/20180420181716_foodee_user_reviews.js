

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('foodee_users', (table) => {
      table.string('id').primary();
      table.string('name');
      table.integer('review_count');
      table.dateTime('yelping_since');
      table.integer('useful');
      table.integer('funny');
      table.integer('cool');
      table.integer('fans');
      table.float('average_stars');
      table.integer('compliment_hot');
      table.integer('compliment_more');
      table.integer('compliment_profile');
      table.integer('compliment_cute');
      table.integer('compliment_list');
      table.integer('compliment_note');
      table.integer('compliment_plain');
      table.integer('compliment_cool');
      table.integer('compliment_funny');
      table.integer('compliment_writer');
      table.integer('compliment_photos');
    }),
    knex.schema.createTable('foodee_reviews', (table) => {
      table.string('id');
      table.string('business_id');
      table.string('user_id');
      table.integer('stars');
      table.dateTime('date');
      table.string('text', 10000);
      table.integer('useful');
      table.integer('funny');
      table.integer('cool');
    }),
    knex.schema.createTable('foodee_restaurant_names', (table) => {
      table.string('business_id');
      table.string('business_name');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('foodee_reviews'),
    knex.schema.dropTable('foodee_users'),
    knex.schema.dropTable('foodee_restaurant_names')
  ]);
};
