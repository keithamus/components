(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"3Lzk":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var o=n("7ljp"),a=n("NC8T");n("oXiK");var r={},i={_frontmatter:r},l=a.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(l,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Primer Components come with built-in access to our Primer theme. The ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/primer/components/blob/master/src/theme-preval.js"}),"theme file")," contains an object which holds values for common variables such as color, fonts, box shadows, and more. Our theme file pulls many of its color and typography values from ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/primer/primer-primitives"}),"primer-primitives"),"."),Object(o.b)("p",null,"Many of our theme keys correspond to system props on our components. For example, if you'd like to set the max width on a ",Object(o.b)("inlineCode",{parentName:"p"},"<Box>")," set the ",Object(o.b)("inlineCode",{parentName:"p"},"maxWidth")," prop to ",Object(o.b)("inlineCode",{parentName:"p"},"medium"),": ",Object(o.b)("inlineCode",{parentName:"p"},"<Box maxWidth='medium'>")),Object(o.b)("p",null,"In the background, ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/styled-system/styled-system"}),"styled-system")," does the work of finding the ",Object(o.b)("inlineCode",{parentName:"p"},"medium")," value from ",Object(o.b)("inlineCode",{parentName:"p"},"maxWidth")," key in the theme file and applying the corresponding CSS."),Object(o.b)("p",null,"Our full theme can be found ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/primer/components/blob/master/src/theme-preval.js"}),"here"),"."),Object(o.b)("h3",null,"Custom Theming"),Object(o.b)("p",null,"Custom theming is an optional way to override the Primer values that control color, spacing, typography, and other aspects of our components."),Object(o.b)("p",null,"There are two ways to change the theme of Primer components:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can override the entire theme for an entire tree of components using the ",Object(o.b)("inlineCode",{parentName:"p"},"<ThemeProvider>")," from ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://styled-components.com/"}),"styled-components"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {Block, Button, Text, theme as primer} from '@primer/components'\nimport {ThemeProvider} from 'styled-components'\n\n// a theme with custom spacing and font sizes\nconst theme = {\n  ...primer,\n  space: [0, 8, 16, 32, 64],\n  fontSizes: [10, 12, 16, 24, 48]\n}\n\n// override\ntheme.colors.bodytext = '#111'\n\nexport default () => (\n  <ThemeProvider theme={theme}>\n    <Block color='bodytext' p={4}>\n      <Text fontSize={4}>Hello, world!</Text>\n    </Block>\n  </ThemeProvider>\n)\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"⚠️ Note: ",Object(o.b)("a",Object.assign({parentName:"strong"},{href:"https://styled-components.com/"}),"styled-components"),"'s ",Object(o.b)("inlineCode",{parentName:"strong"},"<ThemeProvider>")," only allows exactly one child."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can merge the Primer theme with your custom theme using Object.assign:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {ThemeProvider} from `styled-components`\nimport {theme} from '@primer/components'\n\nconst customTheme = { ... }\n\nconst App = (props) => {\n  return (\n    <div>\n      <ThemeProvider theme={Object.assign({}, theme, customTheme)}> // matching keys in customTheme will override keys in the Primer theme\n        <div>your app here</div>\n      </ThemeProvider>\n    </div>\n  )\n}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can theme individual components by passing the ",Object(o.b)("inlineCode",{parentName:"p"},"theme")," prop directly:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import {Text} from '@primer/components'\n\nconst theme = {\n  colors: {\n    magenta: '#f0f'\n  }\n}\n\nexport default () => (\n  <Text theme={theme} color='magenta'>Hi, I'm magenta!</Text>\n)\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"☝️ This is an intentionally convoluted example, since you can use ",Object(o.b)("inlineCode",{parentName:"strong"},"<Text color='#f0f'>")," out of the box.")))),Object(o.b)("p",null,"Read the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://styled-system.com/#theming"}),"styled-system docs")," for more information on theming in styled-system."))}m.isMDXComponent=!0},NC8T:function(e,t,n){"use strict";var o=n("UutA"),a=n("oXiK"),r=n("aOgs"),i=n("q1tI"),l=n.n(i),m=n("8gyx"),c=n("VhsB"),s=n("nkI/"),p=n("bWhc"),b=n("og4h"),d=n("sqpL"),u=Object(o.f)(a.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function h(e){var t=e.items,n=e.depth;return l.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(a.Box,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(a.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(h,{items:e.items,depth:n+1}):null)})))}h.defaultProps={depth:0};var f=h,g=Object(o.f)(a.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),y=Object(o.f)(a.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),O=Object(o.f)(a.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),j=Object(o.f)(a.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(o.f)(a.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,o=n.frontmatter,i=o.title,u=o.description,h=o.status,v=o.source,N=o.additionalContributors,k=void 0===N?[]:N;return l.a.createElement(a.Flex,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(m.a,{title:i,description:u}),l.a.createElement(c.b,null),l.a.createElement(g,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(a.Box,{display:["none",null,null,"block"]},l.a.createElement(p.a,null)),l.a.createElement(y,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(O,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(a.Heading,null,i)),n.tableOfContents.items?l.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},l.a.createElement(a.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(f,{items:n.tableOfContents.items})):null,l.a.createElement(x,null,h||v?l.a.createElement(a.Flex,{mb:3,alignItems:"center"},h?l.a.createElement(d.a,{status:h}):null,l.a.createElement(a.Box,{mx:"auto"}),v?l.a.createElement(b.a,{href:v}):null):null,n.tableOfContents.items?l.a.createElement(a.Box,{display:["block",null,"none"],mb:3},l.a.createElement(a.Details,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.Text,{as:"summary",fontWeight:"bold"},l.a.createElement(a.StyledOcticon,{icon:t?r.b:r.c,mr:2}),"Table of contents"),l.a.createElement(a.Box,{pt:1},l.a.createElement(f,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(k.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-primer-theme-md-64429315e32171f750fd.js.map