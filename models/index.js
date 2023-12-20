const User = require('./User');
const UserParks = require('./UserParks');
const Parks = require('./Parks');


// Products belongToMany Tags (through ProductTag)
User.belongsToMany(Parks, 
    {
      through: {
        model: UserParks,
        unique: false
      }
    });
  // Tags belongToMany Products (through ProductTag)
  Parks.belongsToMany(User, 
    {
      through: {
        model: UserParks,
        unique: false
      }
    });
  
module.exports = { User, UserParks, Parks };
