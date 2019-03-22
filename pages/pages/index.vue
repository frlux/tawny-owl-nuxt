<template>

    <!-- <Channel network="pages"/> -->
     <main class="channel" role="main">

        <header class="background--white d-flex p-4">

            <div class="col-md-10 m-auto">

                <div class="col-md-8">

                    <heading class="channel__title text--dark text--serif" level="h1">
                       Library Information
                    </heading>

                    <p class="channel__description">Find Information about general library services, how-to's and more.</p>

                </div>

            </div>

        </header>

        <section class="background--white library__section p-3">

            <div class="col-lg-10 m-lg-auto">

                <div class="d-md-flex">


                    <div class="col-md-4">
                      <content-search :date-filter="true" :location-filter="true"
                          :selected-date="selectedDate"
                          :filter="filter" @querycontent="filter=$event"
                          :library="library" @filterlibrary="library = $event"
                          @clearcontentfilter="clearFilter()"
                          />
                    </div>

                    <div class="col col-lg-8">


                          <filter-results :total="total"
                                          :selectedDate="selectedDate"
                                          :filter="filter"
                                          :location="library"
                                          contentName="page"/>
                          <stream type="pages"
                                          @totalresults="total=$event"
                                          :filter="filter"
                                          :selected-date="selectedDate"
                                          :location="library"
                                          :contents="items"
                                          />

                    </div>

                </div>

            </div>
        </section>
   </main>

</template>

<script>
import * as api from '../../store/api.js';
import moment from 'moment';
export default {
  computed: {
    callsToAction() {
      return this.$store.getters.getCallsToActionByCategory(this.slug);
    },
  },
  mounted(){
    this.getContent();

  },
  created(){
    this.$root.$on('loadmore', data=>{
      this.loadmore=true;
    });
    this.$root.$on('resetPage', data=>{
      this.page=1;
    });
    this.getContent();
  },
   data(){
    return{
      items: [],
      filter: null,
      library: null,
      selectedDate: null,
      loadmore: null,
      page: 1,
      total: 0,
    }
  },
  watch:{
    selectedDate(){
      this.$root.$emit('resetpage')
    },
    filter(){
      this.$root.$emit('resetpage')
    },
    library(){
      this.$root.$emit('resetpage')
    },
    $route(){
      this.getContent();
    }
  },
   methods:{
    clearFilter() {
      this.selectedDate = null;
      this.filter = null;
      this.library = null;
      this.page = 1;
    },
    getContent(){
      let params = {page: this.page, per_page: 5};
      if(this.filter){
        params.search = this.filter;
      }
      if(this.library){
        let loc = this.$store.state.locations.find(location => location.slug === this.location);
        params.locations = loc.id;
      } 
       if(this.selectedDate){
          params.after = moment(this.selectedDate, 'YYYY-MM-DD').subtract(14, 'days').format('YYYY-MM-DD');
          params.before = moment(this.selectedDate, 'YYYY-MM-DD').add(14, 'days').format('YYYY-MM-DD');
        }

      return api.fetchData('pages', params).then((results)=>{
        this.total=Number(results.headers['x-wp-total']);
        console.log(results.data);
        this.items = results.data;
      })
    }

  },
  loading: true,
    async fetch({ route, store }) {

      if(store.state.pages.length === 0 ) {
        await store.dispatch('getPages');
      }
      if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
      }
      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getCallsToAction');
      }

       if (store.state.locations.length === 0) {
      await store.dispatch("getLocations");
      }
  
    }
};
</script>
