(this["webpackJsonpimage-search-unsplash"]=this["webpackJsonpimage-search-unsplash"]||[]).push([[0],{35:function(n,t,e){n.exports=e.p+"static/media/search.504ddb8d.svg"},37:function(n,t,e){n.exports=e.p+"static/media/zoom-in.7d3ea534.svg"},39:function(n,t,e){n.exports=e(65)},44:function(n,t,e){},65:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(28),o=e.n(i),c=e(15),s=(e(44),e(10)),u=e(11),l=e(13),d=e(12),m=e(29),p=e(4),h=e(9),f=e.n(h),g=e(16),v=e(2),b=e(3);function x(){var n=Object(v.a)(["\n   position: relative;\n   top: 3px;\n   width: 100%;\n   grid-column-start: 1;\n   grid-column-end: 3;\n   margin: 0;\n   padding: 0;\n   background-color: white;\n   border: 1px solid #d6d6d6;\n   border-radius: 3px;\n   list-style: none;\n   z-index: 1;\n\n   li {\n      padding: 5px 10px;\n\n      &.option {\n         cursor: pointer;\n\n         &:hover { background-color: #f5f5f5 }\n      }\n\n   }\n"]);return x=function(){return n},n}function w(){var n=Object(v.a)(["\n   cursor: pointer;\n   background-color: initial;\n   margin: 0;\n   padding: 0;\n   border: 0;\n   padding: 0 10px 0 15px;\n   display: flex;\n   align-items: center;\n\n   &:focus { outline: 0 }\n"]);return w=function(){return n},n}function y(){var n=Object(v.a)(["\n   flex-grow: 1;\n   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n     sans-serif;\n   border: 0;\n   height: 100%;\n   width: 100%;\n   background-color: initial;\n   padding: 0 10px 0 0;\n\n   &:focus {\n      outline: 0;\n   }\n"]);return y=function(){return n},n}function j(){var n=Object(v.a)(["\n   margin: 0 auto;\n   height: 40px;\n   display: grid;\n   grid-template-columns: auto 1fr;\n   grid-auto-rows: 40px auto;\n   background-color: white;\n   width: 100%;\n   position: relative;\n   border-radius: 20px;\n   box-shadow: 1px 1px 3px rgb(0 0 0 / 0.3);\n   max-width: 1200px;\n"]);return j=function(){return n},n}function O(){var n=Object(v.a)(["\n   width: 100%;\n   padding: 20px 15px 0;\n"]);return O=function(){return n},n}var E=b.a.nav(O()),k=b.a.form(j()),C=b.a.input(y()),R=b.a.button(w()),L=b.a.ul(x()),S=e(35),D=e.n(S),I=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){var n;return Object(s.a)(this,e),(n=t.call(this)).handleCloseHintList=function(t){n.hintsListRef.current&&!n.hintsListRef.current.contains(t.target)&&n.setState({hintsLoading:!0,hints:[]})},n.handleOnChange=function(t){var e=t.target.value;clearTimeout(n.typingTimer),e.length>=3?n.typingTimer=setTimeout((function(){return n.fetchHints(e)}),500):n.setState({hintsLoading:!0,hints:[]})},n.handleFormSubmit=function(t){t.preventDefault();var e=n.inputRef.current.value;n.props.history.push("/search/".concat(e)),n.formReset()},n.formReset=function(){clearTimeout(n.typingTimer),n.formRef.current.reset(),n.setState({hintsLoading:!0,hints:[]})},n.handleHintClick=function(t){n.props.history.push("/search/".concat(t)),n.formReset()},n.fetchHints=function(){var t=Object(g.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n.searchAPI).concat(e)).then((function(n){return n.json()})).then((function(t){n.setState({hintsLoading:!1,hints:t.slice(0,5)})}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),n.state={hintsLoading:!0,hints:[]},n.formRef=Object(a.createRef)(null),n.inputRef=Object(a.createRef)(null),n.hintsListRef=Object(a.createRef)(null),n.typingTimer=null,n.searchAPI="https://api.datamuse.com/sug?s=",n}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=this;document.addEventListener("mousedown",(function(t){return n.handleCloseHintList(t)}))}},{key:"render",value:function(){var n=this,t=this.state,e=t.hintsLoading,a=t.hints;return r.a.createElement(E,null,r.a.createElement("h1",null,"Search from many beautiful images."),r.a.createElement(k,{ref:this.formRef,onSubmit:function(t){return n.handleFormSubmit(t)}},r.a.createElement(R,{type:"submit"},r.a.createElement("img",{width:"16",height:"16",src:D.a,alt:""})),r.a.createElement(C,{type:"text",ref:this.inputRef,placeholder:"Search photos...",onChange:this.handleOnChange,required:!0}),!e&&r.a.createElement(L,{ref:this.hintsListRef},a.length?a.map((function(t){return r.a.createElement("li",{key:t.word,className:"option",onClick:function(){return n.handleHintClick(t.word)}},t.word)})):r.a.createElement("li",null,"No matches found..."))))}}]),e}(a.Component),T=Object(p.f)(I),B=e(36),P=new(e.n(B).a)({accessKey:"Tiyk0aSVgvnWC8CY7Kpp3hXyCrR2bvSDk4tOgHPv5_8",timeout:3e4});function W(){var n=Object(v.a)(["\n   position: absolute;\n   width: 100%;\n   height: 100%;\n   background-color: rgba(0 0 0 / 0.3);\n   opacity: 0;\n   transition: all .2s ease-in-out;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n\n   img {\n      width: 48px;\n      height: 48px;\n   }\n"]);return W=function(){return n},n}function H(){var n=Object(v.a)(["\n   -webkit-column-break-inside: avoid;\n   width: 100%;\n   padding-bottom: 40px;\n   cursor: zoom-in;\n\n   figure {\n      margin: 0;\n      display: flex;\n      justify-content: center;\n      position: relative;\n      transition: all .2s ease-in-out;\n\n      > img {\n         width: 100%;\n         height: auto;\n      }\n\n      &:hover {\n         transform: scale(1.02);\n\n         > div {\n            opacity: 1;\n         }\n      }\n   }\n"]);return H=function(){return n},n}function N(){var n=Object(v.a)(["\n   width: 100%;\n   column-count: 1;\n   column-gap: 20px;\n   max-width: 1200px;\n   margin: 0 auto;\n\n   @media screen and (min-width: 768px) { column-count: 2 }\n   @media screen and (min-width: 992px) { column-count: 3 }\n"]);return N=function(){return n},n}function z(){var n=Object(v.a)(["\n   @media screen and (min-width: 768px) { padding: 0 15px }\n"]);return z=function(){return n},n}function A(){var n=Object(v.a)(["\n   margin: 20px 0 20px 15px;\n\n   &.loading {\n      text-align: center;\n   }\n\n   @media screen and (min-width: 768px) { margin: 20px 0 }\n"]);return A=function(){return n},n}var M=b.a.h2(A()),F=b.a.div(z()),U=b.a.section(N()),q=b.a.div(H()),_=b.a.div(W());function J(){var n=Object(v.a)(["\n   text-align: center;\n   font-size: 30px;\n"]);return J=function(){return n},n}var K=b.a.h1(J()),V=function(n){var t=n.searchTerm;return r.a.createElement(K,null,"No Images found with '",t,"'...")},X=e(37),Y=e.n(X),$=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){var n;return Object(s.a)(this,e),(n=t.call(this)).fetchData=function(){var t=Object(g.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.search.photos(e,1,25).then((function(n){return n.json()})).then((function(t){var e=t.results;n.setState({photos:e,areImagesLoading:!1})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),n.state={areImagesLoading:!0,photos:[]},n}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.fetchData(this.props.match.params.searchTerm)}},{key:"componentDidUpdate",value:function(n){var t=n.match.params.searchTerm,e=this.props.match.params.searchTerm;t!==e&&(this.setState({areImagesLoading:!0}),this.fetchData(e))}},{key:"render",value:function(){var n,t,e=this,a=this.state,i=a.photos,o=a.areImagesLoading,s=this.props.match.params.searchTerm;return i.length?(n=i.map((function(n){var t=n.id,a="".concat(n.urls.raw,"&auto=format&fit=crop&w=400&q=60"),i=n.alt_description;return r.a.createElement(c.b,{key:t,to:{pathname:"/photo/".concat(t),state:{background:e.props.location,image:{src:"".concat(n.urls.raw,"&auto=format&fit=crop&w=1100&q=60"),id:t,alt:i,paddingBottom:(n.height/n.width*100).toPrecision(4),maxWidth:(n.width/n.height).toPrecision(4)}}}},r.a.createElement(q,{key:t},r.a.createElement("figure",{"data-photo-id":t},r.a.createElement("img",{src:a,alt:i}),r.a.createElement(_,null,r.a.createElement("img",{src:Y.a,alt:"zoom in"})))))})),t=r.a.createElement(M,null,s)):t=r.a.createElement(V,{searchTerm:s}),r.a.createElement(F,null,o?r.a.createElement(M,{className:"loading"},"Loading..."):r.a.createElement(r.a.Fragment,null,t,n?r.a.createElement(U,null,n):null))}}]),e}(a.PureComponent),G=e(38);function Q(){var n=Object(v.a)(["\n   display: none;\n   @media screen and (max-width: 767px) { display: block }\n"]);return Q=function(){return n},n}function Z(){var n=Object(v.a)(["\n   display: none;\n   margin: 0 auto;\n   @media screen and (min-width: 768px) { display: block }\n"]);return Z=function(){return n},n}function nn(){var n=Object(v.a)(["\n   padding: 15px 0;\n\n   .photoContainer {\n      position: relative;\n      img { position: absolute };\n   }\n"]);return nn=function(){return n},n}function tn(){var n=Object(v.a)(["\n   width: 100%;\n   height: 100%;\n"]);return tn=function(){return n},n}function en(){var n=Object(v.a)(["\n   padding: 0 15px;\n   font-weight: 500;\n   font-size: 14px;\n   text-align: right;\n\n   @media screen and (min-width: 768px) { padding: 0 }\n"]);return en=function(){return n},n}function an(){var n=Object(v.a)(["\n   width: 32px;\n   height: 32px;\n   border-radius: 50%;\n   margin-right: 10px;\n"]);return an=function(){return n},n}function rn(){var n=Object(v.a)(["\n   font-weight: 500;\n   padding: 0 15px;\n   display: flex;\n   align-items: center;\n\n   @media screen and (min-width: 768px) { padding: 0 }\n"]);return rn=function(){return n},n}function on(){var n=Object(v.a)(["\n   position: absolute;\n   left: 0;\n   top: 0;\n   cursor: pointer;\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   height: 48px;\n   width: 48px;\n\n   div {\n      width: 32px;\n      height: 3px;\n      background-color: white;\n      transform: rotate(-45deg);\n      transform-origin: 18px;\n      border-radius: 30px;\n      position: relative;\n      left: -1px;\n   }\n\n   div:last-of-type {\n      transform: rotate(45deg);\n   }\n\n"]);return on=function(){return n},n}function cn(){var n=Object(v.a)(["\n   cursor: initial;\n   width: 100%;\n   height: fit-content;\n   background-color: white;\n   padding: 20px 0;\n   max-width: 1200px;\n   margin: 0 auto;\n   display: flex;\n   flex-direction: column;\n\n   @media screen and (min-width: 768px) {\n      padding: 30px;\n   }\n"]);return cn=function(){return n},n}function sn(){var n=Object(v.a)(["\n   overflow-x: hidden;\n   position: fixed;\n   left: 0;\n   right: 0;\n   top: 0;\n   bottom: 0;\n   background-color: rgba(0 0 0 / 0.7);\n   cursor: zoom-out;\n   padding: 48px 0 0;\n\n   @media screen and (min-width: 768px) {\n      padding: 50px 100px;\n   }\n"]);return sn=function(){return n},n}var un=b.a.div(sn()),ln=b.a.div(cn()),dn=b.a.div(on()),mn=b.a.a(rn()),pn=b.a.img(an()),hn=b.a.div(en()),fn=b.a.img(tn()),gn=b.a.div(nn()),vn=b.a.div(Z()),bn=b.a.div(Q()),xn=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(n){var r;return Object(s.a)(this,e),(r=t.call(this,n)).fetchLocation=function(){var n=Object(g.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.photos.getPhoto(t).then((function(n){return n.json()})).then((function(n){r.setState({location:n.location.name,author:{name:n.user.name,link:n.user.links.html,avatar:n.user.profile_image.medium}})}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),r.handleCloseModal=function(n){r.modalContainer.current&&!r.modalContainer.current.contains(n.target)&&r.props.history.goBack()},r.modifyImagesDimension=function(){var n=r.photoDesktopContainer.current,t=r.image,e=t.paddingBottom,a=t.maxWidth;Object(G.a)(document.querySelectorAll(".photoContainer")).forEach((function(n){n.style.paddingBottom="".concat(e,"%")})),n.style.maxWidth="calc((100vh - 250px) * ".concat(a,")")},r.state={location:[],author:{name:"",link:"",avatar:""}},r.modalContainer=Object(a.createRef)(null),r.photoRef=Object(a.createRef)(null),r.photoDesktopContainer=Object(a.createRef)(null),r.image={id:r.props.location.state.image.id,src:r.props.location.state.image.src,alt:r.props.location.state.image.alt,paddingBottom:r.props.location.state.image.paddingBottom,maxWidth:r.props.location.state.image.maxWidth},r}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.fetchLocation(this.image.id),this.modifyImagesDimension(),document.body.classList.add("lockedOverflow"),document.addEventListener("mousedown",this.handleCloseModal)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lockedOverflow"),document.removeEventListener("mousedown",this.handleCloseModal)}},{key:"render",value:function(){var n=this.state,t=n.location,e=n.author;return r.a.createElement(un,null,r.a.createElement(dn,null,r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(ln,{ref:this.modalContainer},r.a.createElement(mn,{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(pn,{src:e.avatar,alt:e.name}),e.name),r.a.createElement(gn,null,r.a.createElement(bn,{className:"photoContainer"},r.a.createElement(fn,{ref:this.photoRef,src:this.image.src,alt:this.image.alt})),r.a.createElement(vn,{ref:this.photoDesktopContainer},r.a.createElement("div",{className:"photoContainer"},r.a.createElement(fn,{ref:this.photoRef,src:this.image.src,alt:this.image.alt})))),r.a.createElement(hn,null,t||"unknown location")))}}]),e}(a.Component),wn=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var n=this.props.location,t=n.state&&n.state.background;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,"Image search App | Unsplash API"),r.a.createElement("meta",{name:"description",content:"React app for image search using Unsplash API"})),r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(p.c,{location:t||n},r.a.createElement(p.a,{exact:!0,path:"/search/:searchTerm",component:$})),t&&r.a.createElement(p.a,{path:"/photo/:imageId"},r.a.createElement(xn,this.props))))}}]),e}(r.a.Component),yn=Object(p.f)(wn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(yn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.d97ea41e.chunk.js.map