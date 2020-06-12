(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{NC8T:function(e,t,n){"use strict";var a=n("UutA"),r=n("oXiK"),l=n("aOgs"),o=n("q1tI"),i=n.n(o),s=n("8gyx"),c=n("VhsB"),g=n("nkI/"),b=n("bWhc"),p=n("og4h"),m=n("sqpL"),u=Object(a.f)(r.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function d(e){var t=e.items,n=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(r.Box,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(r.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(d,{items:e.items,depth:n+1}):null)})))}d.defaultProps={depth:0};var h=d,j=Object(a.f)(r.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),O=Object(a.f)(r.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),f=Object(a.f)(r.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),N=Object(a.f)(r.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(a.f)(r.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=a.title,u=a.description,d=a.status,C=a.source,x=a.additionalContributors,v=void 0===x?[]:x;return i.a.createElement(r.Flex,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:o,description:u}),i.a.createElement(c.b,null),i.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(r.Box,{display:["none",null,null,"block"]},i.a.createElement(b.a,null)),i.a.createElement(O,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(f,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(r.Heading,null,o)),n.tableOfContents.items?i.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},i.a.createElement(r.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(h,{items:n.tableOfContents.items})):null,i.a.createElement(y,null,d||C?i.a.createElement(r.Flex,{mb:3,alignItems:"center"},d?i.a.createElement(m.a,{status:d}):null,i.a.createElement(r.Box,{mx:"auto"}),C?i.a.createElement(p.a,{href:C}):null):null,n.tableOfContents.items?i.a.createElement(r.Box,{display:["block",null,"none"],mb:3},i.a.createElement(r.Details,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Text,{as:"summary",fontWeight:"bold"},i.a.createElement(r.StyledOcticon,{icon:t?l.b:l.c,mr:2}),"Table of contents"),i.a.createElement(r.Box,{pt:1},i.a.createElement(h,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(g.a,{editUrl:n.editUrl,contributors:n.contributors.concat(v.map((function(e){return{login:e}})))})))))}},aENz:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),r=n("NC8T");n("igXT");var l={},o={_frontmatter:l},i=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use the pagination component to create a connected set of links that lead to related pages (for example, previous, next, or page numbers)."),Object(a.b)("h2",null,"Basic example"),Object(a.b)("p",null,"The pagination component only requires two properties to render: ",Object(a.b)("inlineCode",{parentName:"p"},"pageCount"),", which is the total number of pages, and ",Object(a.b)("inlineCode",{parentName:"p"},"currentPage"),", which is the currently selected page number (which should be managed by the consuming application)."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Pagination\n  pageCount={15}\n  currentPage={2}\n  onPageChange={e => e.preventDefault()}\n/>\n")),Object(a.b)("p",null,"However, to handle state changes when the user clicks a page, you also need to pass ",Object(a.b)("inlineCode",{parentName:"p"},"onPageChange"),", which is a function that takes a click event and page number as an argument:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"type PageChangeCallback = (evt: React.MouseEvent, page: number) => void\n")),Object(a.b)("p",null,"By default, clicking a link in the pagination component will cause the browser to navigate to the URL specified by the page. To cancel navigation and handle state management on your own, you should call ",Object(a.b)("inlineCode",{parentName:"p"},"preventDefault")," on the event, as in this example:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<State default={1}>\n  {([page, setPage]) => {\n    const totalPages = 15\n    const onPageChange = (evt, page) => {\n      evt.preventDefault()\n      setPage(page)\n    }\n\n    return (\n      <BorderBox p={2}>\n        <Box>Current page: {page} / {totalPages}</Box>\n        <Pagination\n          pageCount={totalPages}\n          currentPage={page}\n          onPageChange={onPageChange}\n        />\n      </BorderBox>\n    )\n  }}\n</State>\n")),Object(a.b)("h2",null,"Customizing link URLs"),Object(a.b)("p",null,"To customize the URL generated for each link, you can pass a function to the ",Object(a.b)("inlineCode",{parentName:"p"},"hrefBuilder")," property. The function should take a page number as an argument and return a URL to use for the link."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"type HrefBuilder = (page: number) => string\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<State default={'(nothing clicked yet)'}>\n  {([lastUrl, setLastUrl]) => {\n    const onPageChange = (evt, page) => {\n      evt.preventDefault()\n      setLastUrl(evt.target.href)\n    }\n    const hrefBuilder = (page) => {\n      return `https://example.com/pages/${page}`\n    }\n\n    return (\n      <BorderBox p={2}>\n        <Box>The last URL clicked was: {lastUrl}</Box>\n        <Pagination\n          pageCount={15}\n          currentPage={2}\n          onPageChange={onPageChange}\n          hrefBuilder={hrefBuilder}\n        />\n      </BorderBox>\n    )\n  }}\n</State>\n")),Object(a.b)("h2",null,"Customizing which pages are shown"),Object(a.b)("p",null,"Two props control how many links are displayed in the pagination container at any given time. ",Object(a.b)("inlineCode",{parentName:"p"},"marginPageCount")," controls how many pages are guaranteed to be displayed on the left and right of the component; ",Object(a.b)("inlineCode",{parentName:"p"},"surroundingPageCount")," controls how many pages will be displayed to the left and right of the current page."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Pagination\n  pageCount={20}\n  currentPage={10}\n  marginPageCount={1}\n  surroundingPageCount={2}\n  onPageChange={e => e.preventDefault()}\n/>\n")),Object(a.b)("p",null,"The algorithm tries to minimize the amount the component shrinks and grows as the user changes pages; for this reason, if any of the pages in the margin (controlled via ",Object(a.b)("inlineCode",{parentName:"p"},"marginPageCount"),") intersect with pages in the center (controlled by ",Object(a.b)("inlineCode",{parentName:"p"},"surroundingPageCount"),"), the center section will be shifted away from the margin. Consider the following examples, where pages one through six are shown when any of the first four pages are selected. Only when the fifth page is selected and there is a gap between the margin pages and the center pages does a break element appear."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Box>\n  {[1, 2, 3, 4, 5].map(page => (\n    <Pagination\n      pageCount={20}\n      currentPage={page}\n      marginPageCount={1}\n      surroundingPageCount={2}\n      onPageChange={e => e.preventDefault()}\n    />\n  ))}\n</Box>\n")),Object(a.b)("h3",null,"Previous/next pagination"),Object(a.b)("p",null,"To hide all the page numbers and create a simple pagination container with just the Previous and Next buttons, set ",Object(a.b)("inlineCode",{parentName:"p"},"showPages")," to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<State default={1}>\n  {([page, setPage]) => {\n    const totalPages = 10\n    const onPageChange = (evt, page) => {\n      evt.preventDefault()\n      setPage(page)\n    }\n\n    return (\n      <BorderBox p={2}>\n        <Box>Current page: {page} / {totalPages}</Box>\n        <Pagination\n          pageCount={totalPages}\n          currentPage={page}\n          onPageChange={onPageChange}\n          showPages={false}\n        />\n      </BorderBox>\n    )\n  }}\n</State>\n")),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"Pagination components get ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/emily/testing2/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"currentPage"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Required.")," The currently selected page.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"hrefBuilder"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Function"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"#${page}")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"A function to generate links based on page number.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"marginPageCount"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"How many pages to always show at the left and right of the component.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"onPageChange"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Function"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"no-op"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Called with event and page number when a page is clicked.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"pageCount"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Required.")," The total number of pages.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"showPages"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"true")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Whether or not to show the individual page links.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"surroundingPageCount"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Number"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"2"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"How many pages to display on each side of the currently selected page.")))),Object(a.b)("h2",null,"Theming"),Object(a.b)("p",null,"The following snippet shows the properties in the theme that control the styling of the pagination component:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"{\n  // ... rest of theme ...\n  pagination: {\n    fontSize,\n    fontWeight,\n    borderRadius,\n    colors: {\n      normal: {\n        fg,\n        bg,\n        border\n      },\n      disabled: {\n        fg,\n        bg,\n        border\n      },\n      hover: {\n        fg,\n        bg,\n        border\n      },\n      selected: {\n        fg,\n        bg,\n        border\n      }\n    }\n  }\n}\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-pagination-md-b0f3183558b84cf59365.js.map