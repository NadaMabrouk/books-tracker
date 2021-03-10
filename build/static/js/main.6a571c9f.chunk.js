(this["webpackJsonpbooks-tracker"]=this["webpackJsonpbooks-tracker"]||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(20),r=n.n(s),c=n(6),i=n(7),l=n(9),u=n(8),h=n(2),b=n(11),d="https://reactnd-books-api.udacity.com",j=localStorage.token;j||(j=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:j},p=function(e,t){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)(Object(b.a)({},f),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},O=function(e){return fetch("".concat(d,"/search"),{method:"POST",headers:Object(b.a)(Object(b.a)({},f),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},k=(n(27),n(15)),v=n(1),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.props.updateShelf(a.props.book,e.target.value)},a.state={options:[{value:"currentlyReading",label:"Currently Reading"},{value:"wantToRead",label:"Want To Read"},{value:"read",label:"Read"},{value:"none",label:"None"}]},a.handleChange=a.handleChange.bind(Object(k.a)(a)),a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.book;return Object(v.jsx)("div",{className:"book-shelf-changer",children:Object(v.jsxs)("select",{value:e.shelf,onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"move",disabled:!0,children:"Move To ..."}),this.state.options.map((function(e){return Object(v.jsx)("option",{value:e.value,children:e.label},e.value)}))]})})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.book,n=e.updateShelf,a=t.hasOwnProperty("imageLinks")?t.imageLinks.smallThumbnail:"";return Object(v.jsxs)("div",{className:"book",children:[Object(v.jsxs)("div",{className:"book-top",children:[Object(v.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(a,")")}}),Object(v.jsx)(x,{book:t,updateShelf:n})]}),Object(v.jsx)("div",{className:"book-title",children:t.title}),t.authors&&Object(v.jsx)("div",{className:"book-authors",children:1===t.authors.length?t.authors[0]:t.authors.map((function(e){return Object(v.jsxs)("span",{children:[e,","]},e)}))})]})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.books,a=e.updateShelf;return Object(v.jsxs)("div",{className:"bookshelf",children:[Object(v.jsx)("h2",{className:"bookshelf-title",children:t}),Object(v.jsx)("div",{className:"bookshelf-books",children:Object(v.jsx)("ol",{className:"books-grid",children:n.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(m,{book:e,updateShelf:a})},e.id)}))})})]})}}]),n}(a.Component),g=n(12),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.books,n=e.updateShelf,a=t.filter((function(e){return"currentlyReading"===e.shelf})),o=t.filter((function(e){return"wantToRead"===e.shelf})),s=t.filter((function(e){return"read"===e.shelf}));return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"list-books-content",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{title:"Currently Reading",books:a,updateShelf:n}),Object(v.jsx)(y,{title:"Want To Read",books:o,updateShelf:n}),Object(v.jsx)(y,{title:"Read",books:s,updateShelf:n})]})}),Object(v.jsx)(g.b,{to:"/searchBooks",className:"open-search",children:"Add a book"})]})}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={query:"",searchResults:[]},e.handleSearchQuery=function(t){var n=t.target.value;e.setState((function(){return{query:n}})),e.searchBooksAPI(n)},e.searchBooksAPI=function(t){t.length>0?O(t).then((function(t){void 0===t||t.error?e.setState({searchResults:[]}):e.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},{searchResults:t})}))})):e.setState({searchResults:[]})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.shelfBooks,n=e.updateShelf,a=this.state.query.length>0?this.state.searchResults:[];return Object(v.jsxs)("div",{className:"search-books",children:[Object(v.jsxs)("div",{className:"search-books-bar",children:[Object(v.jsx)(g.b,{to:"/",className:"close-search",children:"Close"}),Object(v.jsx)("input",{type:"text",value:this.state.query,placeholder:"Search by title or author",onChange:this.handleSearchQuery})]}),Object(v.jsx)("div",{className:"search-books-results",children:a&&0===a.length?Object(v.jsx)("p",{children:"There's no books to display"}):Object(v.jsx)("ol",{className:"books-grid",children:a&&!a.error&&a.map((function(e){var a=t.find((function(t){return t.id===e.id}));return e.shelf=a?a.shelf:"none",Object(v.jsx)(m,{book:e,updateShelf:n},e.id)}))})})]})}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={books:[]},e.updateShelf=function(t,n){p(t,n),"none"===n?e.setState((function(e){return{books:e.books.filter((function(e){return e.id!==t.id}))}})):(t.shelf=n,e.setState((function(e){return{books:e.books.filter((function(e){return e.id!==t.id})).concat(t)}})))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(d,"/books"),{headers:f}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(t){e.setState((function(){return{books:t}}))}))}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)("div",{className:"list-books",children:[Object(v.jsx)(h.a,{exact:!0,path:"/",render:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"list-books-title",children:Object(v.jsx)("h1",{children:"Books"})}),Object(v.jsx)(S,{books:e.state.books,updateShelf:e.updateShelf})]})}}),Object(v.jsx)(h.a,{path:"/searchBooks",render:function(){return Object(v.jsx)(N,{shelfBooks:e.state.books,updateShelf:e.updateShelf})}})]})})}}]),n}(o.a.Component);n(37);r.a.render(Object(v.jsx)(g.a,{children:Object(v.jsx)(C,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6a571c9f.chunk.js.map