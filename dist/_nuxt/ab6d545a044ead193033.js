(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(t,e,n){"use strict";n.r(e);n(30);var r=n(2),o={computed:{pageObject:function(){return this.$store.getters.getContentBySlug(this.$route.params.slug,"posts")}},loading:!0,fetch:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.route,r=e.store,r.getters.getContentBySlug(n.params.slug,"posts")){t.next=5;break}return t.next=5,r.dispatch("getContentBySlug",{type:"posts",params:{slug:n.params.slug}});case 5:if(0!==r.state.menu.length){t.next=8;break}return t.next=8,r.dispatch("getMenus");case 8:if(0!==r.state.locations.length){t.next=11;break}return t.next=11,r.dispatch("getLocations");case 11:if(0!==r.state.services.length){t.next=14;break}return t.next=14,r.dispatch("getServices");case 14:if(0!==r.state.events.length){t.next=17;break}return t.next=17,r.dispatch("getUpcomingEvents");case 17:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),meta:{parent:{name:"blog",text:"Shelf Life in the Mountains"},type:{store:"posts",wp:"post"}}},c=n(16),component=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("Page",{attrs:{"page-object":this.pageObject}})},[],!1,null,null,null);e.default=component.exports}}]);