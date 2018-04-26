
const usersData = require('../data/foodee_users.js');
const reviewsData = require('../data/foodee_reviews.js');
const restaurantNames = require('../data/foodee_restaurant_names.js');


exports.seed = function(knex, Promise) {
  return knex('foodee_reviews').del()
  .then(() => {
    return knex('foodee_users').del();
  })
  .then(() => {
    return knex('foodee_restaurant_names').del();
  })
  .then(() => {
    return knex('foodee_users').insert(usersData);
  })
  .then(() => {
    return knex('foodee_reviews').insert(reviewsData);
  })
  .then(() => {
    return knex('foodee_restaurant_names').insert(restaurantNames);
  });
};
