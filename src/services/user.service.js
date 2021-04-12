
export const userService = {
    login,
    logout
}

function login(email, password) {
    if (email === "admin" && password === "12345a@") {
        return {token:"1G728923J223.34B5K3J4BK53BKJ5G3IU45KG3B4KH5GIO3.VB5JB4V6JB45MN6B34HKGKJKJ53K5K3J", userName:"andy"}
    }
    else {
        return null
    }
}

function logout() {
    return "logout"
}

