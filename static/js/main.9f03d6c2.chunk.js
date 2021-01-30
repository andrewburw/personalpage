(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{27:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i(1),o=i.n(a),r=i(20),c=i.n(r),n=(i(27),i(13)),l=i(4),j=i(5),d=i(7),h=i(6),p=i(11),m=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).closeMenu=function(){e.props.closeMenu()},e}return Object(j.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"overlay",style:this.props.show?{width:"100%"}:{width:"0%"},children:[Object(s.jsx)("button",{className:"closebtn link-button",onClick:this.closeMenu,children:"\xd7"}),Object(s.jsxs)("div",{className:"overlay-content",children:[Object(s.jsx)(p.b,{to:"/",onClick:this.closeMenu,children:"Home"}),Object(s.jsx)(p.b,{to:"/main/about",onClick:this.closeMenu,children:"About"}),Object(s.jsx)(p.b,{to:"/main/skills",onClick:this.closeMenu,children:"Skills"}),Object(s.jsx)(p.b,{to:"/main/portfolio",onClick:this.closeMenu,children:"Portfolio"}),Object(s.jsx)(p.b,{to:"/main/contacts",onClick:this.closeMenu,children:"Contacts"}),Object(s.jsx)(p.b,{to:"/main/art",onClick:this.closeMenu,children:"Art"})]})]})})}}]),i}(o.a.Component);function b(e,t){return"main image loaded"===t.type?t.src:e||t.src}var g=function(e){var t=e.src,i=e.fallbackSrc,s=o.a.useReducer(b),a=Object(n.a)(s,2),r=a[0],c=a[1];return o.a.useEffect((function(){var e=new Image,s=new Image;e.onload=function(){c({type:"main image loaded",src:t})},s.onload=function(){c({type:"fallback image loaded",src:i})},e.src=t,s.src=i}),[t,i]),r},u=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),i=t[0],o=t[1],r=g({src:"images/cover.jpg",fallbackSrc:"images/cover-min.jpg"});return Object(s.jsxs)("div",{children:[Object(s.jsx)(m,{show:i,closeMenu:o}),Object(s.jsxs)("div",{className:"flex_container",children:[Object(s.jsx)("nav",{className:"nav",children:Object(s.jsxs)("div",{className:"nav__menu container",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("p",{children:"A n d r e w"})}),Object(s.jsxs)("div",{className:"nav-burger__menu",style:{cursor:"pointer"},onClick:o,children:[Object(s.jsx)("div",{className:"burger__line"}),Object(s.jsx)("div",{className:"burger__line"}),Object(s.jsx)("div",{className:"burger__line"})]})]})}),Object(s.jsxs)("main",{className:"flex_item_left container",children:[Object(s.jsx)("div",{className:"main-slogan",children:Object(s.jsx)("h1",{children:"Simple is beautiful"})}),Object(s.jsx)("div",{className:"old__version",children:Object(s.jsx)("a",{href:"https://andrewburw.github.io/personal-page/",children:"Old version."})})]}),Object(s.jsx)("div",{className:"../images/cover.jpg"===r?"flex_item_right  thumb":"flex_item_right  full",style:{backgroundImage:"url("+(void 0===r?"./images/cover-min.jpg":r)+")"}})]})]})},x=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("main",{className:"flex_container-content fadeInSlow ",children:[Object(s.jsx)("div",{className:"flex_item_left-content",children:Object(s.jsxs)("div",{className:"page__header",children:[Object(s.jsx)("h1",{children:"About Me"}),Object(s.jsx)("p",{children:"What I am all about"})]})}),Object(s.jsxs)("div",{className:"flex_item_right-content",children:[Object(s.jsx)("div",{className:"author__image",children:Object(s.jsx)("img",{src:"/personalpage/images/myself.jpg ",height:"85",width:"85",alt:"Andrew Burw"})}),Object(s.jsxs)("div",{className:"about__info container",children:[Object(s.jsx)("p",{children:"Hi! A'm Andrew Results-oriented  Fullstack Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish."}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"about__list",children:[Object(s.jsx)("div",{className:"about__list",children:Object(s.jsxs)("ul",{className:"about__list-list about_li",children:[Object(s.jsx)("li",{children:"Gender:"}),Object(s.jsx)("li",{children:"Place of Birth:"}),Object(s.jsx)("li",{children:"Language:"})]})}),Object(s.jsx)("div",{className:"about__list",children:Object(s.jsxs)("ul",{className:"about__list-list2 about_li",children:[Object(s.jsx)("li",{children:"Male."}),Object(s.jsx)("li",{children:"Riga."}),Object(s.jsx)("li",{children:"RU,LV,EN."})]})})]})]})]})]})}}]),i}(o.a.Component),O=[{name:"JavaScript",precentage:60,description:"My main programming language.",color:"is-warning"},{name:"Html",precentage:80,description:"...",color:"is-danger"},{name:"Css",precentage:50,description:"...",color:"is-info"},{name:"Scss",precentage:20,description:"Gulp environment.",color:"is-info"},{name:"MongoDB",precentage:40,description:"My main DB.Need more practice.",color:"is-primary"},{name:"mongooseJS",precentage:40,description:"My main DB.Need more practice.",color:"is-primary"},{name:"NodeJS",precentage:40,description:"My main programming backend language.",color:"is-success"},{name:"ReactJS",precentage:60,description:"My favorite UI framework.",color:"is-info"},{name:"Php",precentage:30,description:"Small projects.",color:"is-success"},{name:"Git",precentage:40,description:"Need more practice to work in team and large projects.",color:"is-black"},{name:"FrameWorks",precentage:80,description:"Bootstrap, Bulma, Jquery,D3,Lifletjs"},{name:"Excel",precentage:80,description:"7 years of use of the Excel environment + experience in developing VBA applications(with PostGress DB).",color:"is-success"},{name:"VisualBasic",precentage:99,description:""},{name:"PostGress",precentage:20,description:"Creating tables, linking tables through pgadmin."},{name:"LibreBase",precentage:65,description:'Application development in "Libre Base" interaction with postgres.'},{name:"Sql",precentage:50,description:"Small applications.",color:"is-link"},{name:"PowerBi",precentage:50,description:"Creating a sql and exel database reports."},{name:"Python",precentage:10,description:"Coursera 5 courses."},{name:"AdobeIllustrator",precentage:40,description:"Small graphic illustrations."},{name:"Figma",precentage:60,description:"Figma  page development and Figma => HTML/CSS."},{name:"Linux",precentage:20,description:"Linux user while coding."}],w=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("main",{className:"flex_container-content fadeInSlow ",children:[Object(s.jsx)("div",{className:"flex_item_left-content",children:Object(s.jsxs)("div",{className:"page__header",children:[Object(s.jsx)("h1",{children:"Skills"}),Object(s.jsx)("p",{children:"What I am all about"})]})}),Object(s.jsx)("div",{className:"flex_item_right-content flex_item_right_pdd20px",children:Object(s.jsxs)("div",{className:"about__info about__info-0px container ",children:[Object(s.jsx)("p",{children:"I have three years of experience developing and supporting small applications (logging systems) in the environment of Libre Base & PostgreSQL database as my main job. There are also many projects  in web technologies.In below or right section is quick overview of my main technical skill sets and technologies I use. Want to find out more about my expirience? Check out my project portfolio."}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"skilzz__section",children:Array.from(O).map((function(e,t){return Object(s.jsxs)("div",{className:"progress__box",style:{cursor:"pointer"},children:[Object(s.jsxs)("h5",{children:[e.name," ",Object(s.jsxs)("span",{className:"progress__box-precent",children:[e.precentage,"%"]})]}),Object(s.jsx)("div",{className:"meter",children:Object(s.jsx)("span",{style:{width:e.precentage+"%"},children:Object(s.jsx)("span",{className:"progress"})})}),Object(s.jsx)("span",{className:"proggres__info",children:e.description})]},t)}))})]})})]})}}]),i}(o.a.Component),f=[{id:1,modalTitle:"Web Project",projectName:"Planify",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/planify.png",projectDescription:"Fullstack project - More info soon...",technologyDescription:"none",technologyList:["Figma","Laravel","React","Gulp","Scss","React hooks","PHP"],creationDescription:"My biggest and most difficult project at the moment.",links:{github:"https://github.com/andrewburw/planify",projectSite:"/"},progress:20},{id:10,modalTitle:"Web Project",projectName:"Trip Map",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/trip_map.png",projectDescription:"Fullstack project - App for drawing maps of your adventures.You can draw,comment and share your trip route.",technologyDescription:"M.E.R.N",technologyList:["NodeJS","MongoDB","Express","ReactJS","Bulma Framework","Liflet.js"],creationDescription:"My biggest and most difficult project at the moment.",links:{github:"https://github.com/andrewburw/Trip-Map",projectSite:"https://tripmap.herokuapp.com/"},progress:90},{id:2,modalTitle:"Web Project",projectName:"Tank App",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/tank_app.png",projectDescription:"Full Stack apllication -  Tank App is comunity of low-prices.Do not refuel at the highest price! Use the map to find the best gas station prices near you. .",technologyDescription:"I chose this development environment (M.E.R.N) as my main area of development as a developer. For more effective training, it was necessary to develop a more complex application.",technologyList:["NodeJS","MongoDB","Express","ReactJS","Bootstrap framework","Liflet js"],creationDescription:"In implementing this project, I explored a lot of new interesting information as developer. What I liked in this project: from a white sheet and ideas to a really working service.\n\n                      ",links:{github:"https://github.com/andrewburw/tank-app",projectSite:"https://tankappplatvia.herokuapp.com/"},progress:80},{id:3,modalTitle:"Web Project",projectName:"Guitar Teacher",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/note_project.png",projectDescription:"Static aplication - for learning notes on the guitar fretboard. Studying gammas and visualizing them on a standard & non-standard neck.",technologyDescription:"I chose SVG graphics technology to implement this idea. The control of the graphical interface occurs through the library  D3  .",technologyList:["D3 framework","Jquery framework","SVG Technology","Bootstrap framework"],creationDescription:"First I drew the interface in illustrator and then transferred to html code, wrote interface control using d3 library. In implementing this project, I explored the possibilities of svg graphics, the possibility of\n             libraries for web interfaces.In 2017, it seemed to me that the possibility of developing this idea through SVG was very interesting and quickly implemented.\n              In the near future I plan to add a description of the help section and the elimination of bugs.\n                        ",links:{github:"https://github.com/andrewburw/Guitar-note-teacher",projectSite:"https://andrewburw.github.io/Guitar-note-teacher"},progress:90},{id:8,modalTitle:"Web Project",projectName:"Product SKU page",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/products.png",projectDescription:"Product SKU page - You can add or edit difrent products.",technologyDescription:"The goal of the project is write a site with no css frameworks; ",technologyList:["PHP","MariaDB","Open server"],creationDescription:"Project writed on plain PHP with OPP concept.",links:{github:"https://github.com/andrewburw/test_task",projectSite:"/"},progress:99},{id:4,modalTitle:"Web Project",projectName:"Employe Work Hours",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/timing_project.png",projectDescription:"Fullstack project - a really working project from my last work. The goal of the project is to view the set hours of work with the ability to watch the archive of months.",technologyDescription:"I chose from the available development tools.",technologyList:["PHP","Jquery framework","PostGress(SQL)","Bootstrap framework"],creationDescription:"Task: display hours of work with PostGress db in a web environment. Backend - a simple API on php  (get the data from the database by SQL query).\n           Frontend - jqery + bootstrap.One of the difficulties was to write api in php without experience in this language.\n           What I liked in this project: receive positive feedback from employees about a well-functioning application.\n\n                      ",links:{github:"https://github.com/andrewburw/timing",projectSite:"https://github.com/andrewburw/timing"},progress:99},{id:9,modalTitle:"Web Project",projectName:"This Portfolio site",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/this-site.png",projectDescription:"Portfolio Static Site - This site is about me and my achievements.",technologyDescription:"The goal of the project is write a site with no css frameworks; ",technologyList:["Vannila css","ReactJS"],creationDescription:"The goal of the project is write a site with no css frameworks.",links:{github:"https://github.com/andrewburw/personalPageReact",projectSite:"/"},progress:99},{id:5,modalTitle:"Web Project",projectName:"Password Generator",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/pass_gen.png",projectDescription:"Password generator static site - This site is for quick pass generation.",technologyDescription:"The goal of the project is write a site for pass generation for own use; ",technologyList:["Vannila JS","Bootstrap"],creationDescription:'Task: use only "Vannila JS" and do not use  JQuery or other labirarys.\n           ',links:{github:"https://github.com/andrewburw/personal-page",projectSite:"none"},progress:99},{id:6,modalTitle:"Web Project",projectName:"Patterns",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/patterns.png",projectDescription:'JS Static Visualization - just visualization.Display pattern by "Vannila JS"',technologyDescription:"The goal of the project is to understand how the Jquery works. To write my own library on Vannila JS.",technologyList:["Vannila JS"],creationDescription:'Task: display pattern by "Vannila JS".\n           Memory leak consumption of large resources.\n            In next version is idea to revrite pattren to "canvas". ',links:{github:"https://github.com/andrewburw/patterns",projectSite:"https://github.com/andrewburw/patterns"},progress:99},{id:7,modalTitle:"Web Project",projectName:"Portfolio Site",projectSubTitle:"Web Project.",pictSRC:"/personalpage/images/works_img/this_site.png",projectDescription:"Portfolio Static Site - This site is about me and my achievements.",technologyDescription:"The goal of the project is write a site on bulma framework; create a modular system of modals; use only vanilla js.",technologyList:["Vannila JS","Bulma","ab_lib.js","Google Firebase"],creationDescription:'Task: use only "Vannila JS" and do not use Bootstrap or JQuery or other labirarys.\n            ',links:{github:"https://github.com/andrewburw/personal-page",projectSite:"none"},progress:99}],v=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).closeModal=function(){e.props.closeModal()},e}return Object(j.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"modal fadeInfaster",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsx)("span",{className:"close",onClick:this.closeModal,children:"Hide"}),Object(s.jsx)("div",{className:"modal__title",children:Object(s.jsx)("h1",{children:this.props.data.projectName})}),Object(s.jsx)("div",{className:"modal__subtitle",children:Object(s.jsx)("h1",{children:this.props.data.projectSubTitle})}),Object(s.jsxs)("div",{className:"modal_content",children:[Object(s.jsxs)("div",{className:"modal_item_left",children:[Object(s.jsx)("p",{children:this.props.data.projectDescription}),Object(s.jsx)("p",{children:this.props.data.creationDescription}),Object(s.jsx)("div",{className:"modal__tags",children:Object(s.jsx)("p",{children:this.props.data.technologyList.join("  ,")})})]}),Object(s.jsx)("div",{className:"modal_item_right",children:Object(s.jsxs)("div",{className:"modal__author-info",children:[Object(s.jsxs)("ul",{className:"modal__right-list",children:[Object(s.jsx)("li",{children:"Author:"}),Object(s.jsx)("li",{children:"Github:"}),Object(s.jsx)("li",{children:"Site:"}),Object(s.jsx)("li",{children:"Complite:"})]}),Object(s.jsxs)("ul",{className:"modal__right-list modal__right-list-list",children:[Object(s.jsx)("li",{children:"Andrew"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:this.props.data.links.github,children:"Visit"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:this.props.data.links.projectSite,children:"Visit"})}),Object(s.jsxs)("li",{children:[this.props.data.progress,"%"]})]})]})})]})]})})}}]),i}(o.a.Component),k=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showWork:!1,showWorkId:null},e.showWork=function(t){var i=f.find((function(e){return e.id===Number(t.target.value)}));e.setState({showWork:!0,showWorkId:i})},e}return Object(j.a)(i,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("main",{className:"flex_container-content fadeInSlow ",children:[Object(s.jsxs)("div",{className:"flex_item_left-content",children:[Object(s.jsxs)("div",{className:"page__header",children:[Object(s.jsx)("h1",{children:"Portfolio"}),Object(s.jsx)("p",{children:"All about my works"})]}),this.state.showWork?Object(s.jsx)(v,{data:this.state.showWorkId,closeModal:function(){return e.setState({showWork:!1})}}):""]}),Object(s.jsx)("div",{className:"flex_item_right-content flex_item_right_pdd20px",children:Object(s.jsxs)("div",{className:"about__info about__info-0px container",children:[Object(s.jsxs)("p",{children:["In this section you can view some of my work. Some works are very simple, but some are quite large and took months of development. In the opening menu you can see more about the work and technologies used in the project.All projects and code you can view via",Object(s.jsx)("a",{href:"https://github.com/andrewburw",style:{color:"black"},children:" Github"}),"."]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"portfolio__section",children:Array.from(f).map((function(t,i){return Object(s.jsxs)("div",{className:"work__box",children:[Object(s.jsx)("div",{className:"picture",children:Object(s.jsx)("img",{src:t.pictSRC,height:"117",width:"117",alt:t.projectName})}),Object(s.jsxs)("div",{className:"work__container",children:[Object(s.jsx)("div",{className:"work__title",children:Object(s.jsx)("h1",{children:t.projectName})}),Object(s.jsx)("div",{className:"work__text",children:Object(s.jsx)("p",{children:t.projectDescription})}),Object(s.jsx)("div",{className:"work__view",children:Object(s.jsx)("button",{value:t.id,onClick:e.showWork,children:"View info"})})]})]},i)}))})]})})]})}}]),i}(o.a.Component),_=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).closeModal=function(){e.props.closeModal()},e}return Object(j.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"modalImg",children:[Object(s.jsx)("span",{className:"closeIMG",onClick:this.closeModal,children:"\xd7"}),Object(s.jsx)("img",{className:"modal-content-img",alt:"Andrew Art Work",src:this.props.src})]})})}}]),i}(o.a.Component),y=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showModal:!1,imgSrc:""},e.showModal=function(t){e.setState({showModal:!0}),e.setState({imgSrc:t.target.src})},e}return Object(j.a)(i,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[this.state.showModal?Object(s.jsx)(_,{closeModal:function(){return e.setState({showModal:!1})},src:this.state.imgSrc}):"",Object(s.jsxs)("main",{className:"flex_container-content fadeInfaster",children:[Object(s.jsx)("div",{className:"flex_item_left-content",children:Object(s.jsxs)("div",{className:"page__header",children:[Object(s.jsx)("h1",{children:"Art Gallery"}),Object(s.jsx)("p",{children:"My Art Gallery"})]})}),Object(s.jsx)("div",{className:"flex_item_right-content",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"column showImgModal",children:[Object(s.jsx)("img",{src:"../images/lightBox/personal_page.png",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/photo1.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/tank-main.png",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/triangle_work.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/kar_work.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/dark_wood.jpg",onClick:this.showModal,alt:"andrey art work"})]}),Object(s.jsxs)("div",{className:"column showImgModal",children:[Object(s.jsx)("img",{src:"../images/lightBox/planify.png",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/gg_work.png",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/gg_blue.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/photo3.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/bike_work.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/sea_work.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/minimal_workl.jpg",onClick:this.showModal,alt:"andrey art work"})]}),Object(s.jsxs)("div",{className:"column showImgModal",children:[Object(s.jsx)("img",{src:"../images/lightBox/photo5.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/photo4.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/dust_work.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/hexagon_work.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/radio_work.jpg",onClick:this.showModal,alt:"andrey art work"}),Object(s.jsx)("img",{src:"../images/lightBox/space_work.jpg",onClick:this.showModal,alt:"andrey art work"})]})]})})]})]})}}]),i}(o.a.Component),N=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("main",{className:"flex_container-content fadeInSlow ",children:[Object(s.jsx)("div",{className:"flex_item_left-content",children:Object(s.jsxs)("div",{className:"page__header",children:[Object(s.jsx)("h1",{children:"Contacts"}),Object(s.jsx)("p",{children:"Hire me"})]})}),Object(s.jsx)("div",{className:"flex_item_right-content",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"contacts__container",children:[Object(s.jsxs)("div",{className:"left__contacts",children:[Object(s.jsxs)("div",{className:"contacts__left-one",children:[Object(s.jsx)("h1",{children:"Location"}),Object(s.jsx)("p",{children:"Riga"})]}),Object(s.jsxs)("div",{className:"contacts__left-two",children:[Object(s.jsx)("h1",{children:"Github"}),Object(s.jsx)("a",{href:"https://github.com/andrewburw",children:"github.com/andrewburw"})]})]}),Object(s.jsxs)("div",{className:"right__contacts",children:[Object(s.jsxs)("div",{className:"contacts__right-one",children:[Object(s.jsx)("h1",{children:"Email"}),Object(s.jsx)("p",{children:"andrejsburackovs@gmail.com"})]}),Object(s.jsxs)("div",{className:"contacts__right-two",children:[Object(s.jsx)("h1",{children:"LinkedIn"}),Object(s.jsx)("a",{href:"https://www.linkedin.com/in/andrejs-burackovs-3219641b8/",children:"linkedin.com"})]})]})]}),Object(s.jsx)("div",{className:"sign",children:Object(s.jsx)("img",{src:"/personalpage/images/sign.png",alt:"ab_sign"})})]})})]})}}]),i}(o.a.Component),S=i(2),M=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),i=t[0],o=t[1],r=g({src:"../images/bg-cover2.jpg",fallbackSrc:"../images/bg-cover2-min.jpg"});return console.log("1",r),Object(s.jsxs)("div",{children:[Object(s.jsx)(m,{show:i,closeMenu:o}),Object(s.jsx)("nav",{className:"nav",children:Object(s.jsxs)("div",{className:"nav__menu container",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("p",{children:"A n d r e w"})}),Object(s.jsxs)("div",{className:"nav-burger__menu",style:{cursor:"pointer"},onClick:o,children:[Object(s.jsx)("div",{className:"burger__line"}),Object(s.jsx)("div",{className:"burger__line"}),Object(s.jsx)("div",{className:"burger__line"})]})]})}),Object(s.jsx)("div",{className:"background__image container",children:Object(s.jsx)("div",{className:"../images/bg-cover2-min.jpg"===r?"imagin thumb":"imagin full",style:{backgroundImage:"url("+r+")"}})}),Object(s.jsxs)(S.c,{children:[Object(s.jsx)(S.a,{path:"/main/about",exact:!0,component:x}),Object(s.jsx)(S.a,{path:"/main/skills",component:w}),Object(s.jsx)(S.a,{path:"/main/portfolio",component:k}),Object(s.jsx)(S.a,{path:"/main/art",component:y}),Object(s.jsx)(S.a,{path:"/main/contacts",component:N})]}),Object(s.jsx)("div",{className:"footer",children:Object(s.jsx)("p",{children:"\xae 2020 Andrew. All Rights Reserved."})})]})};var C=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(p.a,{basename:"/personalpage",children:Object(s.jsxs)(S.c,{children:[Object(s.jsx)(S.a,{exact:!0,path:"/",component:u}),Object(s.jsx)(S.a,{path:"/main",component:M})]})})})},P=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,34)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),s(e),a(e),o(e),r(e)}))};c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),P()}},[[33,1,2]]]);
//# sourceMappingURL=main.9f03d6c2.chunk.js.map