<template>
    <nav class="header">
        <div class="header__logo">
            <!--some logo -->
        </div>
        <div class="header__nav">
            <router-link class="header__nav__link btn btn-primary" to="/">Home</router-link>
            <router-link class="header__nav__link" to="/about">About</router-link>
        </div>
    </nav>
    <router-view/>
</template>

<style>
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
