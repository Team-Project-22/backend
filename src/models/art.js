const Sequelize = require('sequelize');

module.exports = class Art extends Sequelize.Model{ // Art 모델을 만들고 밖으로 내보냄

    static init(sequelize){ // 테이블에 대한 설정 <-> static associate : 다른 모델과의 관계
        return super.init({ // super.init의 첫 번째 인수 : 테이블에 대한 칼럼 설정
            Obj_ID : {
                type : Sequelize.STRING(10),
                allowNull : false,
            },

            Title : {
                type : Sequelize.STRING(50),
                allowNull : false,
            },

            Img_file : {
                type : Sequelize.STRING(50),
                allowNull : false,
            },

            Obj_dates : {
                type : Sequelize.STRING(50),
                allowNull : false,
            },

            Dimensions : {
                type : Sequelize.STRING(50),
                allowNull : false,
            },

            Mediums : {
                type : Sequelize.STRING(50),
                allowNull : false,
            },

            Description : {
                type : Sequelize.STRING(500),
                allowNull : false,
            },

        }, {
            sequelize,
            timestamps : false,
            underscored: false,
            modelName: 'Art',
            tableName: 'Arts',
            paranoid : false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db) {
        db.Art.belongsToMany(db.User, {through : db.UserReviewList, onUpdate : 'CASCADE', onDelete : 'CASCADE', foreignKey : 'art_id', sourceKey : "id"});
    }
};