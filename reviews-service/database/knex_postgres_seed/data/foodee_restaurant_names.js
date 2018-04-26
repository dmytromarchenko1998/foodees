var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'dmytromarchenko',
    password : '',
    database : 'foodee_user_reviews'
  }
});


var restaurantNames = [
  {
    "business_id": "--9e1ONYQuAa-CB_Rrw7Tw",
    "business_name": "Delmonico Steakhouse"
  },
  {
    "business_id": "--q7kSBRb0vWC8lSkXFByA",
    "business_name": "Double Play Sports Bar"
  },
  {
    "business_id": "-153AjTW5luZPK4omEujWA",
    "business_name": "Jody Maronis Sausage Kingdom"
  },
  {
    "business_id": "-1m9o3vGRA8IBPNvNqKLmA",
    "business_name": "Bavettes Steakhouse & Bar"
  },
  {
    "business_id": "-1vfRrlnNnNJ5boOVghMPA",
    "business_name": "Red Ginseng Narita Sushi & BBQ"
  },
  {
    "business_id": "-3zffZUHoY8bQjGfPSoBKQ",
    "business_name": "Michael Mina"
  },
  {
    "business_id": "-8R_-EkGpUhBk55K9Dd4mg",
    "business_name": "Sin City Thai Restaurant"
  },
  {
    "business_id": "-9YyInW1wapzdNZrhQJ9dg",
    "business_name": "Fresh Buffet"
  },
  {
    "business_id": "-a857YYdjzgOdOjFFRsRXQ",
    "business_name": "Beer Park"
  },
  {
    "business_id": "-AD5PiuJHgdUcAK-Vxao2A",
    "business_name": "Smashburger"
  },
  {
    "business_id": "-ADtl9bLp8wNqYX1k3KuxA",
    "business_name": "Ichi Ramen House"
  },
  {
    "business_id": "-AGdGGCeTS-njB_8GkUmjQ",
    "business_name": "Woo Chun Korean BBQ"
  },
  {
    "business_id": "-Bf8BQ3yMk8U2f45r2DRKw",
    "business_name": "In-N-Out Burger"
  },
  {
    "business_id": "-BmqghX1sv7sgsxOIS2yAg",
    "business_name": "Merkato Ethiopian Cafe"
  },
  {
    "business_id": "-BS4aZAQm9u41YnB9MUASA",
    "business_name": "Argana"
  },
  {
    "business_id": "-Bv-HHUs8aHzDrdWcZHn8w",
    "business_name": "Smashburger"
  },
  {
    "business_id": "-C8sSrFqaCxp51pyo-fQLQ",
    "business_name": "The Rice Shop"
  },
  {
    "business_id": "-CbDQXiuKzPQ0_jiUz03aw",
    "business_name": "Taiga Modern Japanese & Thai Restaurant"
  },
  {
    "business_id": "-CQokjildrY7UZezXCdEBw",
    "business_name": "Toddy Shop"
  },
  {
    "business_id": "-cxD1NimFldATDUsN-oa3A",
    "business_name": "Coasta Cantina"
  },
  {
    "business_id": "-CZwX0Fy14DGCY_2aFkhKg",
    "business_name": "K Jun Chicken"
  },
  {
    "business_id": "-dGORHtjPRnQzTZ2-SYa_g",
    "business_name": "Great Wraps"
  },
  {
    "business_id": "-ed0Yc9on37RoIoG2ZgxBA",
    "business_name": "Le Thai"
  },
  {
    "business_id": "-EohS3nXZGl6odE9Lx5BSw",
    "business_name": "Panda Express"
  },
  {
    "business_id": "-FcZY7a7qgxTUlTvwuyJnQ",
    "business_name": "8 Noodle Bar"
  },
  {
    "business_id": "-FlrlELIGmCqdt_JxbdFgg",
    "business_name": "Panda Express"
  },
  {
    "business_id": "-FNquqGseSCVMWo7KbK-Tg",
    "business_name": "Chipotle Mexican Grill"
  },
  {
    "business_id": "-G7MPSNBpxRJmtrJxdwt7A",
    "business_name": "La Costa Del Sol"
  },
  {
    "business_id": "-gXDD2oSHBDA3zgjX6g9pQ",
    "business_name": "The Plate Bar & Grill"
  },
  {
    "business_id": "-hzQQ8tbXThpp0k5E_y1Dw",
    "business_name": "Blizz"
  },
  {
    "business_id": "-iBk1_3M_efQtY6Bcygp5w",
    "business_name": "Viva Salsa"
  },
  {
    "business_id": "-iFvYhgysvjkxckCr42NRw",
    "business_name": "Ranis World Foods"
  },
  {
    "business_id": "-ilCufjKjeswCLyIrCtuqQ",
    "business_name": "Tequila Bar and Grill"
  },
  {
    "business_id": "-IWsoxH7mLJTTpU5MmWY4w",
    "business_name": "Pho Kinh Do"
  },
  {
    "business_id": "-jEyZSptICvvaNhuur9rUg",
    "business_name": "Barista Bagels"
  },
  {
    "business_id": "-JfncbVURtvuzBbof40o1w",
    "business_name": "The Cafe at Monte Carlo"
  },
  {
    "business_id": "-JFVxwdVQfX207554dx1nw",
    "business_name": "Teriyaki Madness"
  },
  {
    "business_id": "-Jo0rJr2mZxBVgaJqDs-TQ",
    "business_name": "Chiamaka Food"
  },
  {
    "business_id": "-K82LBrI3H0FVuhTbNDpRA",
    "business_name": "Shoku Ramen"
  },
  {
    "business_id": "-kbPPBNsIPDfMfgUGO7QhA",
    "business_name": "Kopper Keg South"
  },
  {
    "business_id": "-kFyzXRzOlyoL4NyzoVkMA",
    "business_name": "Breakfast Buffet at Trump International Tower"
  },
  {
    "business_id": "-Le6cwbZL4tDZwNHwipfKg",
    "business_name": "Marrakech"
  },
  {
    "business_id": "-leM8v_oCbtzTthTln-YHg",
    "business_name": "Carls Jr And Green Burrito"
  },
  {
    "business_id": "-LMycE26AortJDsbc8oXOg",
    "business_name": "Jack In the Box"
  },
  {
    "business_id": "-LyGT6bztmvWd3_pa93YDg",
    "business_name": "Flame Kabob"
  },
  {
    "business_id": "-LzUYsR54hd8cCiYXTquRA",
    "business_name": "Medley Buffet"
  },
  {
    "business_id": "-mhBbHbh5T_hxKZUYfdexw",
    "business_name": "TSS Grill"
  },
  {
    "business_id": "-mN7z9oY01Mh_-dwTyzpqg",
    "business_name": "Einstein Bros Bagels"
  },
  {
    "business_id": "-n8PaipyFGNUJE4xlnrOAg",
    "business_name": "Burger Dogs"
  },
  {
    "business_id": "-NjZ5HZApXjRJaTVZeSO_w",
    "business_name": "San Salvador Restaurant"
  },
  {
    "business_id": "-nYB-fMXn2i_hcyQ6lY9oA",
    "business_name": "Great American Cookies"
  },
  {
    "business_id": "-N_agk8RUHvHk3GVDsyunQ",
    "business_name": "Hitchin Post Saloon & Steakhouse"
  },
  {
    "business_id": "-OEIW0dO96-492qa_luxaw",
    "business_name": "Aces & Ales"
  },
  {
    "business_id": "-oUM2uISux96lMGeawHIOA",
    "business_name": "Sugar Factory"
  },
  {
    "business_id": "-P8dGzSVhJi-5oZ-8U2y0w",
    "business_name": "Cannery Row Buffet"
  },
  {
    "business_id": "-PbM4ksxhGZVpgCpRakcgA",
    "business_name": "Great Steak"
  },
  {
    "business_id": "-pG5srxtnRkd1bdIYn78xA",
    "business_name": "Carlitos Cuban Food"
  },
  {
    "business_id": "-pGO9M4JLQJHiaCOrqCgbQ",
    "business_name": "Port of Subs"
  },
  {
    "business_id": "-PGsEXB6DFTVKa1eDOlzWA",
    "business_name": "Black Bear Diner"
  },
  {
    "business_id": "-Qkx7W0itbAApcG5lJuMFQ",
    "business_name": "Jaburritos"
  },
  {
    "business_id": "-QNQ4R1VgRoL4b6lC8Anrg",
    "business_name": "Mizuya"
  },
  {
    "business_id": "-RJ216TTIghZshCkUlD1WQ",
    "business_name": "Sushi Takashi"
  },
  {
    "business_id": "-sEbDB_5jI_yIlklu1o1VQ",
    "business_name": "Haifa Restaurant"
  },
  {
    "business_id": "-SGZcGqnsp_uRIjKP2RGZg",
    "business_name": "Ranch House Grille"
  },
  {
    "business_id": "-sN_og_84rLW22CaE3cjVw",
    "business_name": "Full House BBQ"
  },
  {
    "business_id": "-SWWUof5TuWDVL5SEAml8Q",
    "business_name": "Wildburger"
  },
  {
    "business_id": "-tseCGdDvepLP8IIWtZikQ",
    "business_name": "Polish Deli"
  },
  {
    "business_id": "-Tv5UZeFHdKz3RM9vOYpaw",
    "business_name": "Milanos Pizzeria"
  },
  {
    "business_id": "-U7tvCtaraTQ9b0zBhpBMA",
    "business_name": "MGM Grand Buffet"
  },
  {
    "business_id": "-Uix-n4Jqo4W7ERagC5qAA",
    "business_name": "Wok & Roll TAPSILOGAN"
  },
  {
    "business_id": "-uRn5Hf1uo4vf3UTtOvIfA",
    "business_name": "Don Tortaco Mexican Grill"
  },
  {
    "business_id": "-UtYWvCnUppcSaC_u1pTYQ",
    "business_name": "Kopper Keg Restaurant & Lounge"
  },
  {
    "business_id": "-vb_yx5QnIhpXUIdPVD2og",
    "business_name": "Fair View Chinese Cuisine"
  },
  {
    "business_id": "-wCtRhzWJ40Z4F8mmg7kWg",
    "business_name": "Herringbone"
  },
  {
    "business_id": "-wDNRL4lm1UgeFLG9KcrjQ",
    "business_name": "Yummy Grill & Sushi"
  },
  {
    "business_id": "-WLrZPzjKfrftLWaCi1QZQ",
    "business_name": "Blueberry Hill Family Restaurant"
  },
  {
    "business_id": "-WQhVJnBmyapFn0digQJwg",
    "business_name": "FruitLand Las Vegas"
  },
  {
    "business_id": "-xbQQR_ydEJGqYzHSF4DnQ",
    "business_name": "Macianos Pizza & Pastaria"
  },
  {
    "business_id": "-XKG6GamlSBwy5AcXQGAfA",
    "business_name": "Rickenbackers Cafe"
  },
  {
    "business_id": "-xX-Vjol_fwWaN2mn1F1wg",
    "business_name": "Voodoo Pizza"
  },
  {
    "business_id": "-YCd2_DdJUeZx3RRcmIZ_g",
    "business_name": "Taco Bell"
  },
  {
    "business_id": "-Ylpy3VyRWwubf9dysuwjQ",
    "business_name": "The Cheesecake Factory"
  },
  {
    "business_id": "-YWr1wm_NaAlgEf9TZzsMQ",
    "business_name": "Jumbo Super Buffet"
  },
  {
    "business_id": "-zbJp3NGEhvmNOiFziN8Lg",
    "business_name": "Lopez Restaurant"
  },
  {
    "business_id": "-zkn2p1mu9g-kbGNdM1lUA",
    "business_name": "Chinos Locos"
  },
  {
    "business_id": "-_TSaVr53qiEGqMkwyEMaQ",
    "business_name": "Parsley Modern Mediterranean"
  },
  {
    "business_id": "-_yEVC3_3M6YOsamYfNFEw",
    "business_name": "Jasons Deli"
  },
  {
    "business_id": "005XmZKuJZuNbl5tGXc5SA",
    "business_name": "Tony Romas"
  },
  {
    "business_id": "011ayCokCnktQPSx-uL_SA",
    "business_name": "McDonalds"
  },
  {
    "business_id": "01Ov9eDxKRY5k6ImMdiWLQ",
    "business_name": "Hong Kong Garden Seafood & BBQ Cafe"
  },
  {
    "business_id": "01SiPgdiOskMC5bUJoyy_g",
    "business_name": "Winchells Pub & Grill"
  },
  {
    "business_id": "01VPJkcU0m8WzlA7dCEpVQ",
    "business_name": "Tea Space"
  },
  {
    "business_id": "02pL_Xj3sTO_lHcWqUcwKA",
    "business_name": "Rollin Smoke BBQ"
  },
  {
    "business_id": "03hgFWEcDg205hOCnswwiQ",
    "business_name": "RE Tapas"
  },
  {
    "business_id": "03icrim6SfEQJlejDMbzsA",
    "business_name": "Pho Saigon"
  },
  {
    "business_id": "03Yt7kMeYihN_y6ptiXxyQ",
    "business_name": "Del Taco"
  },
  {
    "business_id": "05Solp0aY1YTZqoORMjUTg",
    "business_name": "La Pupusa Loca"
  },
  {
    "business_id": "065c76tt1dXBNmoGBymUgQ",
    "business_name": "Cheffinis Hot Dogs"
  },
  {
    "business_id": "06MlxbtB4ZYeg_ri02RIAQ",
    "business_name": "El Pollo Loco"
  },
  {
    "business_id": "07AZL5XenCQ_-op_onKLdw",
    "business_name": "BLT Steak"
  }
];

for (var i = 0; i < restaurantNames.length; i++) {
  knex('foodee_restaurant_names').insert(restaurantNames[i]).then(() => {
    console.log('inserted');
  });

}
