const Sequelize = require('sequelize');

module.exports = class UserReviewList extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            art_rank : {
                type : Sequelize.INTEGER(1)
            }

        }, {
            sequelize,
            timestamps : false,
            underscored: false,
            modelName: 'UserReviewList',
            tableName: 'User_review_list',
            paranoid : false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

};