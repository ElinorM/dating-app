const storage = window.localStorage;

export function setUsers(users) {
    return new Promise(res => {
        storage.setItem("users", JSON.stringify(users));
        res("sucess")
    })
}

export function getUsers() {
    return new Promise(res => {
        res(JSON.parse(storage.getItem("users")));
    });
}