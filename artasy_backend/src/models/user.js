const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
      
            username : {
                type : Sequelize.STRING(32),
                allowNull : false,
            },

            password : {
                type : Sequelize.STRING(100),
                allowNull : false,
            },

        }, {
            sequelize,
            timestamps : true,
            underscored: false,
            modelName: 'User',
            tableName: 'Users',
            paranoid : true,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db) {
        db.User.belongsToMany(db.Art, {through : db.UserReviewList , onUpdate : 'CASCADE', onDelete : 'CASCADE', foreignKey : 'user_id', sourceKey: "id"});
    }

    
};
