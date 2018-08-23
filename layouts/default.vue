<template>

  <div class="library" id="app">

    <header class="align-items-center d-flex justify-content-center justify-content-md-between library__header p-3">

      <nuxt-link to="/">

        <Logo fill="white" />

      </nuxt-link>

      <Menu />

    </header>

    <Search />

    <nuxt />

    <footer class="col-md-10 m-auto library__footer p-3 text--white">
      I am a footer
    </footer>

  </div>

</template>

