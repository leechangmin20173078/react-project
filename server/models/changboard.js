/* server/models/teacher.js */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'changboard', // 테이블의 이름을 지정합니다.
      {
       title: {
        type: DataTypes.STRING(50),
        allowNull : true
       },
       content: {
        type: DataTypes.STRING(100),
        allowNull : true
       },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};