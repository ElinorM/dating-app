import Ape, { name, age, image, date, arrayOf } from 'ape-mock';
import { setUsers, getUsers, setFakeUsers, getFakeUsers} from "../Server/server.js";


const  isUserExist = (username, users) => {
    return users.find(user => user.username === username);
}

async function checkUsersInServer() {
    const usersFromServer = await getUsers();
    return usersFromServer ? usersFromServer : [];
}

const createUser = (
    username, 
    password,
    name = "",
    age = "",
    gender = "",
    lookingFor = ""
    ) => {
        return {
            username,
            password,
            name,
            age,
            gender,
            lookingFor
        }
    };

function createFakeUsers() {
    const femaleApeUsers = Ape({
        users: arrayOf({
            firstName: name().female(),
            lastName: name().lastName(),
            age: age().adult(),
            image: image().width(100).height(50),
            gender: "female",
            joinedDate: date().random().startYearsAgo(10)
        }).random(10,10)
    }).generate();
    
    const maleApeUsers = Ape({
        users: arrayOf({
            firstName: name().male(),
            lastName: name().lastName(),
            age: age().adult(),
            image: image().width(100).height(50),
            gender: "male",
            joinedDate: date().random().startYearsAgo(10)
        }).random(10,10)
    }).generate();
    return [...femaleApeUsers.users, ...maleApeUsers.users]
}
    
export async function registerUserToServer(username, password) {
    const users = await checkUsersInServer();
    if (!isUserExist(username, users)) {
        const newUser = createUser(username, password);
        users.push(newUser);
        setUsers(users)
        return newUser;
    }
    return null;
}

export async function loginUserFromServer(username, password) {
    const users = await checkUsersInServer();
    const user =  isUserExist(username, users);
    return (user && user.password === password) ? user : null
}

export async function updateProfileToServer(username, name, age, gender, lookingFor) {
    const users = await checkUsersInServer();
    const user =  isUserExist(username, users);
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.lookingFor = lookingFor;
    setUsers(users );
    return user;
}

export async function getFakeUsersFromServer() {
    let fakeUsers = await getFakeUsers();
    if (!fakeUsers) {
        fakeUsers = createFakeUsers().sort(function(a,b){
            return new Date(b.joinedDate) - new Date(a.joinedDate);
          });;
        setFakeUsers(fakeUsers)
    } 
    return fakeUsers;
}
