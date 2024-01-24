"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[1332],{94348:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>f,contentTitle:()=>x,default:()=>b,frontMatter:()=>u,metadata:()=>j,toc:()=>y});var l=s(85893),i=s(11151),n=s(58219),t=(s(62316),s(51039)),r=s.n(t),d=(s(82723),s(9487)),c=s(41429),o=s(5397),m=s(4667),p=s(9472),h=s(85162);const u={id:"getdocument",title:"Get document by ID",description:"The Get Document API enables you to retrieve details about a specific document.",sidebar_label:"Get document by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vu9u2zYQfxXuPjWAbMlJ2qLCMCxY0sxrkRSNiwFLjICSzhYTiWRJyolh6NueZI+2JxmOkhzZTrYZ2PolsY73/+53dytwfG4hvoZTlVYlSmdhGkCGNjVCO6EkxDDJkZ2jYx0LO/k0Zih5UqBlS1Uxp5hBZwQukGXouCgs44mqHOPMakzFTKQsa6WHEIDSaDhpH2cQwxxd9wgBaG54iQ4NubUCyUuEGDqGW5FBAILc0tzlsO2rSu4wdeOMqRlLlXQ8JZ0Gv1bCYAaxMxUGYN2yIK1WlLpACAAfdaEyhHjGC0sMaY4lh3gFbqk9pzNCziGAmTIld30KPnKvJQb98yjJ08NcJ1DXUzJrtZIWLSk6jCL6t+murdIUrZ1VBVvnBAIgzykb8Qq41oVI/UN4Z0lotetdEzUlz5AaJxqTXTL2jeP9ubg/PEryL79AHcBEOKLup8L6H1R0UnGh3N4adIHcIrNiLte9Q7reqyJDs6+2S43ySszln7//wU6NWKBXJfYPLHdO2zgMW0plimGqStJ2+SD39+tOIUvQe0Pu+a5fa+DG8CW1u8PS/nO5LzxUdu1vWIO6DsA1JX1CVWebHlOD3GF24v5e12F0eDQYRYPo7WT0Jj5+F79+M4yi6DcI4LEsSLaDLnc+vrXR9rvS2TewU++w9XppOw9Q1yRwHB3vQnU9/aRybKYqmX333yEVjVHP9s5THp6z36+lkIWQeNvNnNvj6Pj2aB3Q692AxnLBC5H5aT5R9yi/bTx9864xv1ss0TD5d9gItk9vgrSYVka4pV8bjwOuxaB5j6+nNI1LdLlq943fMy6HGMKu9uGqt2NqIH1m0W2hyhQ97FvH50LOB1zrodIoaUYVPLE0CUKuRbgYAVnsPLqirDWJ2fDrCehafEBCeht2n6vddjlyGnsUqJAz5YXbZHSzzadyMdrZiZNcWCasf+5i9GVlM2XYljRLuMWMKclcjv6R6EfD0XqTe9Ehu5E38kqVyCqLtL8KIe9tfCMH7PpyNhOp4AX7FRMrHE5fdZl7eHjYydiBlzkXLq8SZlCrJ/a5J/q09qXWHwcQgENT2svZFZqFSLsJ/YKp0DOHbZ/TbUC9WnJB1W1JP24LUd8VIkVpsdeZJ+efPrKjYQRBrzn+hcvhx/FPZxdXZ6SV2qsp0WgYDSMiaWVdyWXPEF1eXdVYsmTj0+0Cr55Q+z/cam2LOnx0oS648Dj0Ia9aDF1D73yL+5faNIBcWUcsqxU11hdT1DWRv1ZoCKnTABbcCPLPAy0Tln5n60vsxUhffW6PugP2/NH3rOMd4CShbcGLir4ggHtcbl2Z9bQOOtSRZw3HSZqidj3ZnSm5MWrOzyYQAK8oTX2033u0tz9I+7N+bY6BxgH6WwcvCHxP1f6Ayx/W7M3LiwJtfB035Wha1/Vfwu4bqA==",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},x=void 0,j={id:"API-docs/getdocument",title:"Get document by ID",description:"The Get Document API enables you to retrieve details about a specific document.",source:"@site/docs/API-docs/getdocument.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/getdocument",permalink:"/docs/API-docs/getdocument",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"getdocument",title:"Get document by ID",description:"The Get Document API enables you to retrieve details about a specific document.",sidebar_label:"Get document by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vu9u2zYQfxXuPjWAbMlJ2qLCMCxY0sxrkRSNiwFLjICSzhYTiWRJyolh6NueZI+2JxmOkhzZTrYZ2PolsY73/+53dytwfG4hvoZTlVYlSmdhGkCGNjVCO6EkxDDJkZ2jYx0LO/k0Zih5UqBlS1Uxp5hBZwQukGXouCgs44mqHOPMakzFTKQsa6WHEIDSaDhpH2cQwxxd9wgBaG54iQ4NubUCyUuEGDqGW5FBAILc0tzlsO2rSu4wdeOMqRlLlXQ8JZ0Gv1bCYAaxMxUGYN2yIK1WlLpACAAfdaEyhHjGC0sMaY4lh3gFbqk9pzNCziGAmTIld30KPnKvJQb98yjJ08NcJ1DXUzJrtZIWLSk6jCL6t+murdIUrZ1VBVvnBAIgzykb8Qq41oVI/UN4Z0lotetdEzUlz5AaJxqTXTL2jeP9ubg/PEryL79AHcBEOKLup8L6H1R0UnGh3N4adIHcIrNiLte9Q7reqyJDs6+2S43ySszln7//wU6NWKBXJfYPLHdO2zgMW0plimGqStJ2+SD39+tOIUvQe0Pu+a5fa+DG8CW1u8PS/nO5LzxUdu1vWIO6DsA1JX1CVWebHlOD3GF24v5e12F0eDQYRYPo7WT0Jj5+F79+M4yi6DcI4LEsSLaDLnc+vrXR9rvS2TewU++w9XppOw9Q1yRwHB3vQnU9/aRybKYqmX333yEVjVHP9s5THp6z36+lkIWQeNvNnNvj6Pj2aB3Q692AxnLBC5H5aT5R9yi/bTx9864xv1ss0TD5d9gItk9vgrSYVka4pV8bjwOuxaB5j6+nNI1LdLlq943fMy6HGMKu9uGqt2NqIH1m0W2hyhQ97FvH50LOB1zrodIoaUYVPLE0CUKuRbgYAVnsPLqirDWJ2fDrCehafEBCeht2n6vddjlyGnsUqJAz5YXbZHSzzadyMdrZiZNcWCasf+5i9GVlM2XYljRLuMWMKclcjv6R6EfD0XqTe9Ehu5E38kqVyCqLtL8KIe9tfCMH7PpyNhOp4AX7FRMrHE5fdZl7eHjYydiBlzkXLq8SZlCrJ/a5J/q09qXWHwcQgENT2svZFZqFSLsJ/YKp0DOHbZ/TbUC9WnJB1W1JP24LUd8VIkVpsdeZJ+efPrKjYQRBrzn+hcvhx/FPZxdXZ6SV2qsp0WgYDSMiaWVdyWXPEF1eXdVYsmTj0+0Cr55Q+z/cam2LOnx0oS648Dj0Ia9aDF1D73yL+5faNIBcWUcsqxU11hdT1DWRv1ZoCKnTABbcCPLPAy0Tln5n60vsxUhffW6PugP2/NH3rOMd4CShbcGLir4ggHtcbl2Z9bQOOtSRZw3HSZqidj3ZnSm5MWrOzyYQAK8oTX2033u0tz9I+7N+bY6BxgH6WwcvCHxP1f6Ayx/W7M3LiwJtfB035Wha1/Vfwu4bqA==",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Create document by template_id",permalink:"/docs/API-docs/createdocumentwithtemplateid"},next:{title:"Update document by ID",permalink:"/docs/API-docs/update-document"}},f={},y=[{value:"Request",id:"request",level:2}];function g(e){const a={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"openapi__heading",children:(0,l.jsx)(a.p,{children:"Get document by ID"})}),"\n",(0,l.jsx)(r(),{method:"get",path:"/document/{document_id}"}),"\n",(0,l.jsx)(a.p,{children:"The Get Document API enables you to retrieve details about a specific document."}),"\n",(0,l.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(c.Z,{className:"paramsItem",param:{name:"document_id",in:"path",description:"objectId of contact",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"string",example:"pH1bhc2hpb"}}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(h.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"successful operation"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(m.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"FGik23bhUJ"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"sample doc"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"please sign document"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Folder",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"OpenSign\u2122 Drive"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"File",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"https://exampleurl.com"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"joe bee"}}),(0,l.jsx)(m.Z,{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(a.p,{children:"Signers"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(a.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"Array ["})})}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"joe"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(a.p,{children:"]"})})})]})]})}),(0,l.jsx)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}})]})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(o.Z,{responseExample:'{\n  "objectId": "FGik23bhUJ",\n  "Title": "sample doc",\n  "Note": "please sign document",\n  "Folder": "OpenSign\u2122 Drive",\n  "File": "https://exampleurl.com",\n  "Owner": "joe bee",\n  "Signers": [\n    {\n      "Name": "joe"\n    }\n  ],\n  "createdAt": "2023-10-07T16:49:56.000Z",\n  "updatedAt": "2023-10-07T16:49:56.000Z"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(h.default,{label:"404",value:"404",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Document not found!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Document not found!"}})})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(o.Z,{responseExample:'{\n  "error": "Document not found!"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(h.default,{label:"405",value:"405",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid API Token!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(o.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function b(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}}}]);