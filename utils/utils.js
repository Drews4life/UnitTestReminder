module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x*x;

module.exports.setName = (user, fullName) => {
    var name = fullName.split(" ");

    user.firstName = name[0];
    user.lastName = name[1];
    return user;
};

module.exports.asyncSome = (x, y, callback) =>{
    setTimeout(()=>{
        callback(x + y);
    }, 1000);
};

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {

        callback(x*x);

    },1000);
};