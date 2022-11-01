<template>
    <nav class="header">
        <img class="header__logo" src="./assets/logo.png">
        <div class="header__nav">
            <router-link class="header__nav__link btn btn-outline-light" to="/">Home</router-link>
            <router-link class="header__nav__link btn btn-outline-light" to="/projects">My projects</router-link>
            <router-link class="header__nav__link btn btn-outline-light" to="/experiences">My experiences</router-link>
            <router-link class="header__nav__link btn btn-outline-light" to="/other">Other stuff</router-link>
            <router-link class="header__nav__link btn btn-outline-light" to="/about">About</router-link>
        </div>
    </nav>
    <router-view></router-view>
</template>

<style>
.header {
    background-color: #13265C;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.header__logo {
    height: auto;
    width: 75px;
}

.header__nav {
    display: inline;
}

.header__nav__link {
    color: black;
    margin: 0 20px;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
