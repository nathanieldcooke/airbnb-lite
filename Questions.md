1. `sameSite: isProduction && "Lax"` -- explain this Jesse

2. What is index on sequelize for Models? 
    - https://stackoverflow.com/questions/42195348/how-to-define-unique-index-on-multiple-columns-in-sequelize/46070340

    ``` js from Stack Overflow
        - var Tag = sequelize.define('Tag', {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            count: {
                type: DataTypes.INTEGER(11),
                allowNull: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['user_id', 'count', 'name']
                }
            ]
        });
    ```

3. MODEL: User.js Line 23, why use custom validation over standar `isEmail: true` ??

4. MODEL: User.js Line 41, What determines if it's a currentUser or a loginUser

5. getCurrentUserById in user.js model.

6. what is the 'return User' returning in model files. 

7. Backend routes index.js 