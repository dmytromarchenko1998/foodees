//MODELO

const db = require('../../database/index.js');

module.exports = {
  restaurant: {
    get: (id) => {
      console.log('inside model get. id: ', id);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT business_name FROM foodee_restaurant_names WHERE business_id = '${id}'`;

        db.query(queryStr, (err, name) => {
          if (err) {
            console.log('GET RESTAURANT NAME DB QUERY ERROR: ', err);
            reject(err);
          } else {
            console.log('GET RESTAURANT NAME SUCCESS');
            resolve(name.rows);
          }
        });
      });
    }
  },
  reviews: {
    getByDateDesc: (id, page) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {
            //console.log('GET REVIEW DB QUERY SUCCESS: ', reviewData);
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;
            //console.log('queryStr2: ', queryStr2);

            //SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                //console.log('GET USER DB QUERY SUCCESS: ', userData);

                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });

            // resolve(reviewData);
          }
        });
      });
    },
    getByDateAsc: (id, page) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {
            //console.log('GET REVIEW DB QUERY SUCCESS: ', reviewData);
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;
            //console.log('queryStr2: ', queryStr2);

            //SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                //console.log('GET USER DB QUERY SUCCESS: ', userData);

                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });

            // resolve(reviewData);
          }
        });
      });
    },
    getByRatingDesc: (id, page) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY stars DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {
            //console.log('GET REVIEW DB QUERY SUCCESS: ', reviewData);
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY stars DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;
            //console.log('queryStr2: ', queryStr2);

            //SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                //console.log('GET USER DB QUERY SUCCESS: ', userData);

                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });

            // resolve(reviewData);
          }
        });
      });
    },
    getByRatingAsc: (id, page) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY stars ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {
            //console.log('GET REVIEW DB QUERY SUCCESS: ', reviewData);
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY stars ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;
            //console.log('queryStr2: ', queryStr2);

            //SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                //console.log('GET USER DB QUERY SUCCESS: ', userData);

                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });

            // resolve(reviewData);
          }
        });
      });
    },
    getCount: (id) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT count(*) FROM foodee_reviews WHERE business_id = '${id}'`;

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('GET REVIEW COUNT DB QUERY ERROR: ', err);
            reject(err);
          } else {
            console.log('GET REVIEW COUNT SUCCESS');
            resolve(data.rows);
          }
        });
      });
    },
    post: (review) => {
      return new Promise((resolve, reject) => {
        var queryStr = '';
      });
    },
    patch: (compliment) => {
      return new Promise((resolve, reject) => {
        var queryStr = '';
      });
    }
  },
  search: {
    // how do i do this
    getByDateDesc: (id, page, searchTerm) => {
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;
        //SELECT * FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' AND text LIKE '%steak%' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET SEARCH DB QUERY ERROR: ', err);
            reject(err);
          } else {
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getByDateAsc:(id, page, searchTerm) => {
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY date ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;
        //SELECT * FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' AND text LIKE '%steak%' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET SEARCH DB QUERY ERROR: ', err);
            reject(err);
          } else {
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY date ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getByRatingDesc: (id, page, searchTerm) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY stars DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {
            //console.log('GET REVIEW DB QUERY SUCCESS: ', reviewData);
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY stars DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;
            //console.log('queryStr2: ', queryStr2);

            //SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                //console.log('GET USER DB QUERY SUCCESS: ', userData);

                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });

            // resolve(reviewData);
          }
        });
      });
    },
    getByRatingAsc: (id, page, searchTerm) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY stars ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {
            //console.log('GET REVIEW DB QUERY SUCCESS: ', reviewData);
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY stars ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;
            //console.log('queryStr2: ', queryStr2);

            //SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                //console.log('GET USER DB QUERY SUCCESS: ', userData);

                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });

            // resolve(reviewData);
          }
        });
      });
    },
    getCount: (id, searchTerm) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT count(*) FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%'`;

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('GET REVIEW COUNT DB QUERY ERROR: ', err);
            reject(err);
          } else {
            console.log('GET REVIEW COUNT SUCCESS');
            resolve(data.rows);
          }
        });
      });
    }
  }
};
