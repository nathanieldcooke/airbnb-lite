'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    src: { 
      type: DataTypes.STRING,
      allowNull: false,
  },
    title: { 
      type: DataTypes.STRING,
      allowNull: false, 
  },
    main: { 
      type: DataTypes.BOOLEAN,
      allowNull: false, 
  },
    spotId: { 
      type: DataTypes.INTEGER,
      allowNull: false, 
  }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };
  return Image;
};