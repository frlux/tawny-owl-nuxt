<template>

  <div class="library" id="app">

    <div class="alert pb-2 pt-2 pl-4 pr-4" style="background-color: #47a0ff; color: white;">
      <div class="align-items-center col-md-12 m-auto d-flex justify-content-between">
        <h4 class="text--bold mt-1">
          Version 0.15.0
          <small class="text--small ml-3">December 11, 12:55 p.m.</small>
        </h4>
        <div>
          <a class="button button--link text--white" href="https://github.com/fontana-regional-library/feathers-design-system/blob/master/CHANGELOG.md">
            Latest changes
          </a>
          <a href="https://github.com/fontana-regional-library/feathers-design-system/issues" class="button button--pink">
            See known issues
          </a>
        </div>
      </div>
    </div>

    <header class="align-items-center d-flex justify-content-center justify-content-md-between library__header p-3">

      <nuxt-link to="/">

        <Logo fill="white" />

      </nuxt-link>

      <main-menu />

    </header>

    <Search :search-action="$route.name" />

    <nuxt />

    <app-footer :menu-items="[]" />
  </div>

</template>

<script>
import MainMenu from "../components/MainMenu";
export default {
  components: {
    MainMenu
  },
};
</script>
