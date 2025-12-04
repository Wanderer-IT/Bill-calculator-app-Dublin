async function requireAuth() {
    const session = await checkAuth();
    if (!session) {
        window.location.href = "Login.html";
        return false;
    }
    return true;
}

async function initAuth() {
    const session = await checkAuth();
    if (!session) {
        window.location.href = "Login.html";
    }
    return session;
}

async function redirectIfAuthenticated() {
    const session = await checkAuth();
    if (session) {
        window.location.href = "HomePage.html";
    }
}