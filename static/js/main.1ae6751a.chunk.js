(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{38:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),r=n(28),i=n.n(r),o=n(8),l=n(2),j=n(17),u=n.n(j),m=n(29),d=n(11),b=n(12),h=n(14),v=n(13),p=(n(38),n(30)),O=n.n(p);n(57);var x=function(e){var t=e.id,n=e.year,a=e.title,c=e.summary,r=e.poster,i=e.genres;return Object(s.jsx)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:c,poster:r,genres:i}},children:Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:r,alt:a,title:a}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:a}),Object(s.jsx)("h5",{className:"movie__year",children:n}),Object(s.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[c.slice(0,180),"..."]})]})]})})},f=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(u.a.mark((function t(){var n,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{class:"loader",children:Object(s.jsx)("span",{className:"loader_text",children:'"Loading..."'})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component);var y=function(e){return console.log(e),Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("h1",{children:"about"}),Object(s.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(s.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},_=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsx)("span",{children:e.state.title}):null}}]),n}(c.a.Component);n(66);var g=function(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};n(67);var N=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(g,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(s.jsx)(l.a,{path:"/about",component:y}),Object(s.jsx)(l.a,{path:"/movie/:id",component:_})]})};i.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.1ae6751a.chunk.js.map