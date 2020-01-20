import { setUsers, getUsers} from "../Server/server.js";


const  isUserExist = (username, users) => {
    return users.some(user => user.username === username);
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

export async function registerUserServer(username, password) {
    const usersFromServer = await getUsers();
    const users = usersFromServer ? usersFromServer : [];
    if (!isUserExist(username, users)) {
        const newUser = createUser(username, password);
        users.push(newUser);
        setUsers(users)
        return newUser;
    }
    return null;
}

export async function loginUserServer(username, password) {
    const usersFromServer = await getUsers();
    const users = usersFromServer ? usersFromServer : [];
    const user =  users.find(user => user.username === username);
    return (user && user.password === password) ? user : null
}
