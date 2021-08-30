var Users = [{
    id: 1,
    username: "admin",
    password: "admin"
}
    ,
{
    id: 2,
    username: "lama",
    password: "m"
}];

module.exports.verifyUser = (a, b) => {
    var user = Users.find((user) => {
        return user.username === a && user.password === b
    });
    
    if(user)
    {
        return user.id;
    }
}