
const users = [{
    id: 1,
    name: "Drews",
    univId: 111
},
{
    id: 2,
    name: "Jas",
    univId: 222
}];

const grades = [{
    id: 1,
    univId: 111,
    grade: 95
},
{
    id: 2,
    univId: 222,
    grade: 65
},
{
    id: 3,
    univId: 111,
    grade: 78
}];

var getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) =>  user.id === id);
        if(user){
            resolve(user);
        } else {
            reject(`Unable to fetch the user with id of ${id}`);
        }
    });
};

var getGrades = (univId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.univId === univId));
    });
};

var getStatus = (userId) => {
    let user;
    let average = 0;
    return getUser(userId).then((singleUser) => {
        user = singleUser;
        return getGrades(user.univId);
    }).then((grades) => {
        if(grades.length > 0){
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
        }
        return `${user.name} has the average of ${average}`;
    });
};

var getStatusAlt = async(userId) => {

    const user = await getUser(userId);
    const grades = await getGrades(user.univId);
    if(grades.length > 0){
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }
    return `${user.name} has the average of ${average}`;
    console.log(user, grades);

};
getStatusAlt(1).then((res) => console.log(res)).catch((e) => console.log(e));
//getStatus(2).then((res) => console.log(res)).catch((e) => console.log(e));