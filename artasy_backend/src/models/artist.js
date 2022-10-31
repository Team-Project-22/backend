const Sequelize = require('sequelize');

module.exports = class Artist extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            artist_photo : {
                type : Sequelize.BLOB,
                allowNull : false,
            },

            artist_name : {
                type : Sequelize.STRING(64),
                allowNull : false,
            },

            artist_birthdeath : {
                type : Sequelize.DATE,
                allowNull : false,
            },

            artist_description : {
                type : Sequelize.STRING(500),
                allowNull : false,
            },

            artist_nationality : {
                type : Sequelize.STRING(32),
                allowNull : false,
            },


        }, {
            sequelize,
            timestamps : false,
            underscored: false,
            modelName: 'Artist',
            tableName: 'Artists',
            paranoid : false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db) {
        db.Artist.hasMany(db.Art, {foreignKey : "id", sourceKey: "id"});
    }
};