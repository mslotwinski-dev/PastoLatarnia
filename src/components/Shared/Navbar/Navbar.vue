<template>
  <div class="container">
    <nav>
      <router-link to="/">
        <div class="logo" />
      </router-link>
      <div class="cont">
        <router-link to="/pasty">PASTY</router-link>
        <router-link to="/szukaj">SZUKAJ</router-link>
        <router-link to="/kontakt" class="hidemob">KONTAKT</router-link>
        <a href="https://github.com/mslotwinski-dev/Pastolatarnia">
          <ic class="git" :icon="['fab', 'fa-github']" />
        </a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  justify-content: center;
}
nav {
  position: fixed;
  z-index: 10;
  background: $rose;
  display: flex;
  justify-content: space-evenly;
  width: 95vw;
  margin: 10px auto;
  height: $height;
  border-radius: 10px;
  align-items: center;
  div,
  a {
    margin: 5px 10px;
    font-size: 20px;

    @media (max-width: 1000px) {
      margin: 5px;
      font-size: 17px;
    }
  }
  .git {
    font-size: 35px;
  }
  @media (max-width: 1000px) {
    height: $heightmob;
  }
}

.hidemob {
  @media (max-width: 1000px) {
    display: none;
  }
}

.logo {
  width: 200px;
  height: 80px;
  background-image: url('../../../assets/logo_dark.png');
  background-size: 100%;
  margin: 0 7vw;
  @media (max-width: 1000px) {
    width: 100px;
    height: 40px;
    margin: 0 2vw;
  }
}

.cont {
  display: flex;
  align-items: center;
}
</style>
