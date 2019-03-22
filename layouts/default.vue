<template>

  <div class="library" id="app">

    <div class="alert pb-2 pt-2 pl-4 pr-4" style="background-color: #47a0ff; color: white;">
      <div class="align-items-center col-md-12 m-auto d-flex justify-content-between">
        <h4 class="text--bold mt-1">
          Version updates-201903
          <small class="text--small ml-3">March 22, 11:30 a.m.</small>
        </h4>
        <div>
          <a class="button button--link text--white" href="https://github.com/fontana-regional-library/feathers-design-system/blob/master/CHANGELOG.md">
            Latest changes
          </a>
          <a href="https://github.com/frlux/tawny-owl-nuxt/issues" class="button button--pink">
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

    <app-footer :key="$store.state.userLocation" :page-object="userLocation" :menu-items="footer"/>
  </div>

</template>

<script>
import MainMenu from "../components/MainMenu";
export default {
  components: {
    MainMenu
  },
  computed:{
    footer(){
      console.log('footer');
      let menu = this.$store.state.menu;
      menu = menu[0];
      console.log(menu);
      return menu && menu.menu ? menu.menu.items : [];
    },
    userLocation(){
      return this.$store.state.userLocation ? this.$store.getters.getLocationBySlug(this.$store.state.userLocation) : this.$store.getters.getLocationBySlug('headquarters')
    }

  },
  loading:true,
  async fetch({ store }) {
    if (store.state.menu.length == 0) {
        await store.dispatch("getMenus");
      }      
      if (store.state.locations.length === 0) {
        await store.dispatch("getLocations");
      }
    }
};
</script>
