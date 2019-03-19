<template>

    <nav class="d-flex justify-content-md-end menu" role="navigation">

        <a class="align-items-center align-self-center d-flex flex-column flex-fill flex-md-grow-0 menu__item nav-link nav-item text--white"
           href="https://fontana.nccardinal.org/eg/opac/login?redirect_to=%2Feg%2Fopac%2Fmyopac%2Fmain">

            <span class="menu__item__icon">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill: #fff;" aria-role="img" aria-labelledby="accountsvg">
                    <title id="accountsvg">Account icon</title>
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
            </span>

            <span class="menu__item__label">Account</span>

        </a>

        <nuxt-link to="/events" href="#" class="align-items-center align-self-center d-flex flex-column flex-fill flex-md-grow-0 menu__item  nav-link nav-item text--white">

            <span class="menu__item__icon">
                <svg id="icon-calendar" fill="white" height="20" viewBox="0 0 32 32">
                    <title>calendar</title>
                    <path d="M10 12h4v4h-4zM16 12h4v4h-4zM22 12h4v4h-4zM4 24h4v4h-4zM10 24h4v4h-4zM16 24h4v4h-4zM10 18h4v4h-4zM16 18h4v4h-4zM22 18h4v4h-4zM4 18h4v4h-4zM26 0v2h-4v-2h-14v2h-4v-2h-4v32h30v-32h-4zM28 30h-26v-22h26v22z"></path>
                    </svg>
            </span>

            <span class="menu__item__label">Events</span>

        </nuxt-link>

        <nuxt-link class="align-items-center align-self-center d-none d-lg-flex flex-column flex-fill flex-md-grow-0 menu__item  nav-link nav-item text--white"
                   href="#"
                   to="/services" >

            <span class="menu__item__label">Services</span>

        </nuxt-link>

        <div class="menu__divider"></div>

        <a href="#" class="align-self-center d-none d-md-flex flex-column flex-fill flex-md-grow-0 menu__item nav-link nav-item text--white">

            <span class="menu__item__icon">Icon</span>

            <span class="menu__item__label">Donate</span>

        </a>

        <Dropdown button-class="button--blue-alternate d-none d-md-block menu__item menu__item--location nav-link text--ellipsis text--nowrap text--white"
                  class="align-self-center nav-item"
                  dropdown-menu-class="text--nowrap text--right"
                  label-class="menu__item__label">
            <template slot="label">{{ currentLocation }}</template>
            <template slot="items">

                <a @click="setLocation('all')">All Libraries</a>
                <a href="javascript:void(null);"
                        class="d-block dropdown__menu__item link link--undecorated mb-1 mt-1 text--underlined"
                        :key="location.id"
                        @click="setLocation(`${location.slug}`)"
                        v-for="location in locations">
                    {{ location.name }}
                </a>
            </template>
        </Dropdown>

    </nav>

</template>

<script>
  export default {
    computed: {

      /**
       * The `currentLocation` will return the name of the library as its slug
       * if it's present in the url.
       */
      currentLocation() {
        const locationSlugInUrl = this.$store.state.userLocation ? this.$store.state.userLocation : this.$route.query.location;
        const location = this.locations.find(location => location.slug === locationSlugInUrl);

        return (location ? location.name : 'All Libraries');
      },

      locations() {
        return this.$store.state.locations;
      },
    },

    methods: {
      setLocation(locationSlug) {
        this.$store.commit('setUserLocation', locationSlug);
/*         return {
          query: Object.assign({}, this.$route.query, { location: `${locationSlug}` }),
        }; */
      },
    },

    mounted() {
      this.$store.dispatch('getLocations');
    },
  };
</script>
