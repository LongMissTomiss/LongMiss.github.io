(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{41:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(33),i=s.n(n),r=(s(41),s(3)),l=s(4),o=s(6),j=s(5),d=s(8),h=s(12),b=s.n(h),m=s(16),u=s.n(m),O=s(0),x=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={auth:""},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;u.a.subscribe("auth",(function(t,s){console.log(1111),e.setState({auth:s})}))}},{key:"render",value:function(){return b.a.get("auth")?Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar navbar-light",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(d.b,{className:"navbar-brand",to:"/",activeClassName:"active",children:"conduit"}),Object(O.jsxs)("ul",{className:"nav navbar-nav pull-xs-right",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link active",to:"/",activeClassName:"active",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(d.b,{className:"nav-link",to:"/editor",activeClassName:"active",children:[Object(O.jsx)("i",{className:"ion-compose"}),"\xa0New Post"]})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(d.b,{className:"nav-link",to:"/setting",activeClassName:"active",children:[Object(O.jsx)("i",{className:"ion-gear-a"}),"\xa0Settings"]})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link",to:"/login",activeClassName:"active",children:"Sign In"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link",to:"/resign",activeClassName:"active",children:"Sign up"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(d.b,{className:"nav-link ng-binding","ui-sref-active":"active","ui-sref":"app.profile.main({username:$ctrl.currentUser.username})",to:"/profile",activeClassName:"active",children:[Object(O.jsx)("img",{"ng-src":"https://ftp.bmp.ovh/imgs/2021/04/5e93944c4f55c78c.jpg",src:"https://ftp.bmp.ovh/imgs/2021/04/5e93944c4f55c78c.jpg",className:"user-pic",alt:"\u56fe\u7247"}),"Wzm"]})})]})]})})}):Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar navbar-light",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(d.b,{className:"navbar-brand",to:"/",activeClassName:"active",children:"conduit"}),Object(O.jsxs)("ul",{className:"nav navbar-nav pull-xs-right",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link active",to:"/",activeClassName:"active",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link",to:"/login",activeClassName:"active",children:"Sign In"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link",to:"/resign",activeClassName:"active",children:"Sign up"})})]})]})})})}}]),s}(a.Component),p=s(2),v=(s(51),s(52),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container footer-container",children:[Object(O.jsx)("a",{href:"/",className:"logo-font",children:"conduit"}),Object(O.jsxs)("span",{className:"attribution",children:["An interactive learning project from ",Object(O.jsx)("a",{href:"https://thinkster.io",children:"Thinkster"}),". Code & design licensed under MIT."]})]})}}]),s}(a.Component)),f=s(22),N=s.n(f),g=s(35),y=s(14),k=s(36),w=s.n(k).a.create({baseURL:"https://conduit.productionready.io"}),S=function(e){console.log(e,12323123);var t=e.slug;return w.interceptors.request.use((function(e){return e.headers.Authorization="Token ".concat(b.a.get("auth")),e}),(function(e){return Promise.reject(e)})),w({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},C=function(e){var t=e.slug;return w.interceptors.request.use((function(e){return e.headers.Authorization="Token ".concat(b.a.get("auth")),e}),(function(e){return Promise.reject(e)})),w({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},T=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={data:[],pages:[],current:1,count:null},e.favorite=e.favorite.bind(Object(y.a)(e)),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;b.a.get("auth")&&(w.interceptors.request.use((function(e){return e.headers.Authorization="Token ".concat(b.a.get("auth")),e}),(function(e){return Promise.reject(e)})),w({method:"GET",url:"/api/articles",params:{}}).then((function(t){console.log(t);for(var s=[],a=0;a<t.data.articlesCount/20;a++)s.push(a);e.setState({data:t.data.articles,pages:s})})))}},{key:"favorite",value:function(){var e=Object(g.a)(N.a.mark((function e(t){var s=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.favorited){e.next=6;break}return e.next=3,C(t).then((function(e){s.setState({count:e.data.article.favoritesCount})}));case 3:t.favorited=!1,e.next=9;break;case 6:return e.next=8,S(t).then((function(e){s.setState({count:e.data.article.favoritesCount})}));case 8:t.favorited=!0;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"home-page",children:[Object(O.jsx)("div",{className:"banner",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"logo-font",children:"conduit"}),Object(O.jsx)("p",{children:"A place to share your knowledge."})]})}),Object(O.jsx)("div",{className:"container page",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-md-9",children:[Object(O.jsx)("div",{className:"feed-toggle",children:Object(O.jsxs)("ul",{className:"nav nav-pills outline-active",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link disabled",href:"",children:"Your Feed"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link active",href:"",children:"Global Feed"})})]})}),this.state.data.map((function(t,s){return Object(O.jsxs)("div",{className:"article-preview",children:[Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"profile.html",children:Object(O.jsx)("img",{src:t.author.image})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:t.author.username}),Object(O.jsx)("span",{className:"date",children:t.createdAt})]}),Object(O.jsxs)("button",{className:"btn btn-outline-primary btn-sm pull-xs-right",onClick:function(){e.favorite(t)},children:[Object(O.jsx)("i",{className:"ion-heart"})," ",e.state.count]})]}),Object(O.jsxs)("a",{href:"",className:"preview-link",children:[Object(O.jsx)("h1",{children:t.title}),Object(O.jsx)("p",{children:t.description}),Object(O.jsx)("span",{children:"Read more..."})]})]},s)})),Object(O.jsx)("ul",{className:"pagination",children:this.state.pages.map((function(t,s){return Object(O.jsx)("li",{className:e.state.current==s+1?"page-item active":"page-item",children:Object(O.jsx)("a",{className:"page-link",href:"",children:t+1})},s)}))})]}),Object(O.jsx)("div",{className:"col-md-3",children:Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsx)("p",{children:"Popular Tags"}),Object(O.jsxs)("div",{className:"tag-list",children:[Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:"programming"}),Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:"javascript"}),Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:"emberjs"}),Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:"angularjs"}),Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:"react"}),Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:"mean"}),Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:"node"}),Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:"rails"})]})]})})]})})]})})}}]),s}(a.Component),E=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).blur=e.blur.bind(Object(y.a)(e)),e}return Object(l.a)(s,[{key:"blur",value:function(e){var t=e.target.value;u.a.publish("value",t)}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Your Name",onBlur:this.blur})})})}}]),s}(a.Component),P=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).onsubmit=e.onsubmit.bind(Object(y.a)(e)),e.onblur1=e.onblur1.bind(Object(y.a)(e)),e.onblur2=e.onblur2.bind(Object(y.a)(e)),e.state={username:"",email:"",password:""},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;u.a.subscribe("value",(function(t,s){e.setState({username:s})}))}},{key:"isLogin",value:function(){return"/login"===this.props.match.path}},{key:"onsubmit",value:function(e){var t=this;e.preventDefault();var s={username:this.state.username?this.state.username:"",email:this.state.email,password:this.state.password};console.log(s),w({method:"POST",url:s.username?"/api/users":"/api/users/login",data:{user:s}}).then((function(e){console.log(e),b.a.set("auth",e.data.user.token),t.props.history.push("/"),u.a.publish("auth",e.data.user.token)}))}},{key:"onblur1",value:function(e){this.setState({email:e.target.value})}},{key:"onblur2",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"auth-page",children:Object(O.jsx)("div",{className:"container page",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(O.jsx)("h1",{className:"text-xs-center",children:this.isLogin()?"Sign Up":"Sign In"}),Object(O.jsx)("p",{className:"text-xs-center",children:Object(O.jsxs)("a",{href:"/",children:[this.isLogin()?"Have":"Need"," an account?"]})}),Object(O.jsx)("ul",{className:"error-messages",children:Object(O.jsx)("li",{children:"That email is already taken"})}),Object(O.jsxs)("form",{onSubmit:this.onsubmit,children:[this.isLogin()?"":Object(O.jsx)(E,{}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Email",onBlur:this.onblur1})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password",onBlur:this.onblur2})}),Object(O.jsx)("button",{className:"btn btn-lg btn-primary pull-xs-right",children:this.isLogin?"Sign In":"Sign Up"})]})]})})})})})}}]),s}(a.Component),A=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"settings-page",children:Object(O.jsx)("div",{className:"container page",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(O.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),Object(O.jsx)("form",{children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control",type:"text",placeholder:"URL of profile picture"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Your Name"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("textarea",{className:"form-control form-control-lg",rows:"8",placeholder:"Short bio about you"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Email"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password"})}),Object(O.jsx)("button",{className:"btn btn-lg btn-primary pull-xs-right",children:"Update Settings"})]})})]})})})})})}}]),s}(a.Component),q=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"profile-page",children:[Object(O.jsx)("div",{className:"user-info",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg",className:"user-img"}),Object(O.jsx)("h4",{children:"Eric Simons"}),Object(O.jsx)("p",{children:"Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games"}),Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-secondary action-btn",children:[Object(O.jsx)("i",{className:"ion-plus-round"}),"\xa0 Follow Eric Simons"]})]})})})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(O.jsx)("div",{className:"articles-toggle",children:Object(O.jsxs)("ul",{className:"nav nav-pills outline-active",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link active",href:"",children:"My Articles"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link",href:"",children:"Favorited Articles"})})]})}),Object(O.jsxs)("div",{className:"article-preview",children:[Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:"Eric Simons"}),Object(O.jsx)("span",{className:"date",children:"January 20th"})]}),Object(O.jsxs)("button",{className:"btn btn-outline-primary btn-sm pull-xs-right",children:[Object(O.jsx)("i",{className:"ion-heart"})," 29"]})]}),Object(O.jsxs)("a",{href:"",className:"preview-link",children:[Object(O.jsx)("h1",{children:"How to build webapps that scale"}),Object(O.jsx)("p",{children:"This is the description for the post."}),Object(O.jsx)("span",{children:"Read more..."})]})]}),Object(O.jsxs)("div",{className:"article-preview",children:[Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"",children:Object(O.jsx)("img",{src:"http://i.imgur.com/N4VcUeJ.jpg"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:"Albert Pai"}),Object(O.jsx)("span",{className:"date",children:"January 20th"})]}),Object(O.jsxs)("button",{className:"btn btn-outline-primary btn-sm pull-xs-right",children:[Object(O.jsx)("i",{className:"ion-heart"})," 32"]})]}),Object(O.jsxs)("a",{href:"",className:"preview-link",children:[Object(O.jsx)("h1",{children:"The song you won't ever stop singing. No matter how hard you try."}),Object(O.jsx)("p",{children:"This is the description for the post."}),Object(O.jsx)("span",{children:"Read more..."}),Object(O.jsxs)("ul",{className:"tag-list",children:[Object(O.jsx)("li",{className:"tag-default tag-pill tag-outline",children:"Music"}),Object(O.jsx)("li",{className:"tag-default tag-pill tag-outline",children:"Song"})]})]})]})]})})})]})})}}]),s}(a.Component),J=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"article-page",children:[Object(O.jsx)("div",{className:"banner",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"How to build webapps that scale"}),Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:"Eric Simons"}),Object(O.jsx)("span",{className:"date",children:"January 20th"})]}),Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-secondary",children:[Object(O.jsx)("i",{className:"ion-plus-round"}),"\xa0 Follow Eric Simons ",Object(O.jsx)("span",{className:"counter",children:"(10)"})]}),"\xa0\xa0",Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-primary",children:[Object(O.jsx)("i",{className:"ion-heart"}),"\xa0 Favorite Post ",Object(O.jsx)("span",{className:"counter",children:"(29)"})]})]})]})}),Object(O.jsxs)("div",{className:"container page",children:[Object(O.jsx)("div",{className:"row article-content",children:Object(O.jsxs)("div",{className:"col-md-12",children:[Object(O.jsx)("p",{children:"Web development technologies have evolved at an incredible clip over the past few years."}),Object(O.jsx)("h2",{id:"introducing-ionic",children:"Introducing RealWorld."}),Object(O.jsx)("p",{children:"It's a great solution for learning how other frameworks work."})]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"article-actions",children:Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"profile.html",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:"Eric Simons"}),Object(O.jsx)("span",{className:"date",children:"January 20th"})]}),Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-secondary",children:[Object(O.jsx)("i",{className:"ion-plus-round"}),"\xa0 Follow Eric Simons ",Object(O.jsx)("span",{className:"counter",children:"(10)"})]}),"\xa0",Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-primary",children:[Object(O.jsx)("i",{className:"ion-heart"}),"\xa0 Favorite Post ",Object(O.jsx)("span",{className:"counter",children:"(29)"})]})]})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-xs-12 col-md-8 offset-md-2",children:[Object(O.jsxs)("form",{className:"card comment-form",children:[Object(O.jsx)("div",{className:"card-block",children:Object(O.jsx)("textarea",{className:"form-control",placeholder:"Write a comment...",rows:"3"})}),Object(O.jsxs)("div",{className:"card-footer",children:[Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg",className:"comment-author-img"}),Object(O.jsx)("button",{className:"btn btn-sm btn-primary",children:"Post Comment"})]})]}),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-block",children:Object(O.jsx)("p",{className:"card-text",children:"With supporting text below as a natural lead-in to additional content."})}),Object(O.jsxs)("div",{className:"card-footer",children:[Object(O.jsx)("a",{href:"",className:"comment-author",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg",className:"comment-author-img"})}),"\xa0",Object(O.jsx)("a",{href:"",className:"comment-author",children:"Jacob Schmidt"}),Object(O.jsx)("span",{className:"date-posted",children:"Dec 29th"})]})]}),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-block",children:Object(O.jsx)("p",{className:"card-text",children:"With supporting text below as a natural lead-in to additional content."})}),Object(O.jsxs)("div",{className:"card-footer",children:[Object(O.jsx)("a",{href:"",className:"comment-author",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg",className:"comment-author-img"})}),"\xa0",Object(O.jsx)("a",{href:"",className:"comment-author",children:"Jacob Schmidt"}),Object(O.jsx)("span",{className:"date-posted",children:"Dec 29th"}),Object(O.jsxs)("span",{className:"mod-options",children:[Object(O.jsx)("i",{className:"ion-edit"}),Object(O.jsx)("i",{className:"ion-trash-a"})]})]})]})]})})]})]})})}}]),s}(a.Component),F=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"editor-page",children:Object(O.jsx)("div",{className:"container page",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-10 offset-md-1 col-xs-12",children:Object(O.jsx)("form",{children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Article Title"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"What's this article about?"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("textarea",{className:"form-control",rows:"8",placeholder:"Write your article (in markdown)"})}),Object(O.jsxs)("fieldset",{className:"form-group",children:[Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter tags"}),Object(O.jsx)("div",{className:"tag-list"})]}),Object(O.jsx)("button",{className:"btn btn-lg pull-xs-right btn-primary",type:"button",children:"Publish Article"})]})})})})})})})}}]),s}(a.Component),I=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return b.a.get("auth")?Object(O.jsxs)(d.a,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",children:Object(O.jsx)(T,{})}),Object(O.jsx)(p.a,{path:"/editor",children:Object(O.jsx)(F,{})}),Object(O.jsx)(p.a,{path:"/setting",component:A}),Object(O.jsx)(p.a,{path:"/login",component:P}),Object(O.jsx)(p.a,{path:"/resign",component:P}),Object(O.jsx)(p.a,{path:"/profile",component:q}),Object(O.jsx)(p.a,{path:"/arcitle",component:J})]}),Object(O.jsx)(v,{})]}):Object(O.jsxs)(d.a,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",children:Object(O.jsx)(T,{})}),Object(O.jsx)(p.a,{path:"/editor",children:Object(O.jsx)(F,{})}),Object(O.jsx)(p.a,{path:"/setting",component:P}),Object(O.jsx)(p.a,{path:"/login",component:P}),Object(O.jsx)(p.a,{path:"/resign",component:P}),Object(O.jsx)(p.a,{path:"/profile",component:P}),Object(O.jsx)(p.a,{path:"/arcitle",component:P})]}),Object(O.jsx)(v,{})]})}}]),s}(a.Component);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.c0ee0a30.chunk.js.map