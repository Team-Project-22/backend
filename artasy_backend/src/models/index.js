const Sequelize = require('sequelize');

const Art = require('./art');
const Artist = require('./artist');
const UserReviewList = require('./user_review_list');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Art = Art;
db.Artist = Artist;
db.UserReviewList = UserReviewList;
db.User = User;

Art.init(sequelize);
Artist.init(sequelize);
UserReviewList.init(sequelize);
User.init(sequelize);

Art.associate(db);
Artist.associate(db);
User.associate(db);

// Object.keys(db).forEach((modelName) => {
//     db[modelName].init(sequelize)
// });

// Object.keys(db).forEach((modelName) => {
//     if(db[modelName].associate){
//         db[modelName].associate(db)
//     }
// });

module.exports = db;