"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[8106],{56181:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>j,contentTitle:()=>x,default:()=>y,frontMatter:()=>u,metadata:()=>f,toc:()=>g});var t=s(85893),l=s(11151),i=s(58219),n=(s(62316),s(51039)),r=s.n(n),m=(s(82723),s(9487)),d=s(41429),p=s(5397),c=s(4667),o=s(9472),h=s(85162);const u={id:"get-template",title:"Get template by ID",description:"The Get Template API allows you to retrieve details about a specific template. Templates serve as blueprints for creating documents with predefined structures.",sidebar_label:"Get template by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1P40YQ/ivb+XRIJnGAo6o/FfUoRT0BOlJVKiC0scfxgr27tzsORJH/ezXrF3zJHdyH6qR+Sjw7z87rM7MbILn0kNzAHCtbSkIPdxFk6FOnLCmjIYF5geIMSfQq4uTqXMiyNE9erE0tyAiH5BSuUGRIUpVeyIWpSUjhLaYqV6mgDjwZrvHCo1uhkF4syhqtU5q8yI0TqUNJSi9FZtK6QhY/KSqEdZhhrjRmwpOrU6od+glEYCw6yd6eZ5DAEqm3ARFY6WSFhI7D3ICWFUICvTv3KoMIFIdpJRWwHfv5B2HywXlBhSShETPPUS9Q5EhpgXyHw8+1cphBQq7GCDytS7bkVWVLdgSfbWkyhCSXpWeFtMBKQrIBWtugSU7pJUSQG1dJaiV6CU1zx9d7a7RHz4CDOOafL131dZqi93ldiiEfEEFqNKEm1pfWlioNB9MHz6DNrhdm8YApceIcX0OqNdmKOb+v+9tK8FmGqBN4nv2x0JU/uFpCE8FcEUt3r3gB+PBnSDmjLgy9ARoKpE0L+d2UGbrXQXnQEaEjGKLecq0gsj6ZTntrtUc3SU3F6Msn/Za9wcnQ3+bF8rVa6tCfA1o6J9fcmISVf7s4F6GpX7P9YFAsEKFpIqC2CC8c6O3zYfANsxN6/b6D+OBwfxbvxz/PZ8fJ0S/J++NJHMf/QATPVcnYjmhZV8PeaP9d2+wH2Gm21cZttZ0HaBoGHMVHu+SajxpM5KbW2U//HbfQOfNG73zN/riWSpdK430/Je6P4qP74yGg97sBneuVLFUWZvncPKL+sfGMzVNrfrdYqlUK5/BFsGN5G2SFVJhu+oepTwUkMFB1uhlN/AYiCLun2wm1K0fs9iSXSi/3pbUTY1F7tdSlXHhm+lRaNV3NgCeyx7R2itbXnJU28Od9adV+69eIzFb9iczmLqyxVrd7CpQ8rjgQpXMTwF2wlxY1EzSkajXb2VDzQnmhfDju92UoW1ilW2ixkB4zYbSgAsMhyw8ns2FRB+hE3OpbfW0qFLVH3iil0o8+udX74uYyz1WqZCn+xoVXhHfv+sw9PT3tZGwvYM4UFfVCOLTmRX0ZhCGtY9TwsQcRELrKX+bX6FYq7WfwN0xNg/K062OZhj7GSiqubif6dRvEfVWqFLXHUeednF19FIeTGKJRc3yHy9OP57+dXlyf8q3cXm2JZpN4ErPIGk+V1CND/K4a9sJiLc4/bBd488LK/8FLrGt5wmea2lKqwNuQwk3HyZuXeRtBMn6H3UVQGE+sstlwo/7lyqZh8eca3RqSm7sIVtIpuWBm3GwgU57/Z8Ob6puZe/epe57tie9/0n01mJ7Umhm9kmXNXxDBI6633pXNXRP1zGZvW42TNEVLI+zOpOXhMoyzs9M5NM2/nPkBdw==",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},x=void 0,f={id:"API-docs/get-template",title:"Get template by ID",description:"The Get Template API allows you to retrieve details about a specific template. Templates serve as blueprints for creating documents with predefined structures.",source:"@site/docs/API-docs/get-template.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/get-template",permalink:"/docs/API-docs/get-template",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-template",title:"Get template by ID",description:"The Get Template API allows you to retrieve details about a specific template. Templates serve as blueprints for creating documents with predefined structures.",sidebar_label:"Get template by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1P40YQ/ivb+XRIJnGAo6o/FfUoRT0BOlJVKiC0scfxgr27tzsORJH/ezXrF3zJHdyH6qR+Sjw7z87rM7MbILn0kNzAHCtbSkIPdxFk6FOnLCmjIYF5geIMSfQq4uTqXMiyNE9erE0tyAiH5BSuUGRIUpVeyIWpSUjhLaYqV6mgDjwZrvHCo1uhkF4syhqtU5q8yI0TqUNJSi9FZtK6QhY/KSqEdZhhrjRmwpOrU6od+glEYCw6yd6eZ5DAEqm3ARFY6WSFhI7D3ICWFUICvTv3KoMIFIdpJRWwHfv5B2HywXlBhSShETPPUS9Q5EhpgXyHw8+1cphBQq7GCDytS7bkVWVLdgSfbWkyhCSXpWeFtMBKQrIBWtugSU7pJUSQG1dJaiV6CU1zx9d7a7RHz4CDOOafL131dZqi93ldiiEfEEFqNKEm1pfWlioNB9MHz6DNrhdm8YApceIcX0OqNdmKOb+v+9tK8FmGqBN4nv2x0JU/uFpCE8FcEUt3r3gB+PBnSDmjLgy9ARoKpE0L+d2UGbrXQXnQEaEjGKLecq0gsj6ZTntrtUc3SU3F6Msn/Za9wcnQ3+bF8rVa6tCfA1o6J9fcmISVf7s4F6GpX7P9YFAsEKFpIqC2CC8c6O3zYfANsxN6/b6D+OBwfxbvxz/PZ8fJ0S/J++NJHMf/QATPVcnYjmhZV8PeaP9d2+wH2Gm21cZttZ0HaBoGHMVHu+SajxpM5KbW2U//HbfQOfNG73zN/riWSpdK430/Je6P4qP74yGg97sBneuVLFUWZvncPKL+sfGMzVNrfrdYqlUK5/BFsGN5G2SFVJhu+oepTwUkMFB1uhlN/AYiCLun2wm1K0fs9iSXSi/3pbUTY1F7tdSlXHhm+lRaNV3NgCeyx7R2itbXnJU28Od9adV+69eIzFb9iczmLqyxVrd7CpQ8rjgQpXMTwF2wlxY1EzSkajXb2VDzQnmhfDju92UoW1ilW2ixkB4zYbSgAsMhyw8ns2FRB+hE3OpbfW0qFLVH3iil0o8+udX74uYyz1WqZCn+xoVXhHfv+sw9PT3tZGwvYM4UFfVCOLTmRX0ZhCGtY9TwsQcRELrKX+bX6FYq7WfwN0xNg/K062OZhj7GSiqubif6dRvEfVWqFLXHUeednF19FIeTGKJRc3yHy9OP57+dXlyf8q3cXm2JZpN4ErPIGk+V1CND/K4a9sJiLc4/bBd488LK/8FLrGt5wmea2lKqwNuQwk3HyZuXeRtBMn6H3UVQGE+sstlwo/7lyqZh8eca3RqSm7sIVtIpuWBm3GwgU57/Z8Ob6puZe/epe57tie9/0n01mJ7Umhm9kmXNXxDBI6633pXNXRP1zGZvW42TNEVLI+zOpOXhMoyzs9M5NM2/nPkBdw==",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Create template",permalink:"/docs/API-docs/createtemplate"},next:{title:"Update template by ID",permalink:"/docs/API-docs/update-template"}},j={},g=[{value:"Request",id:"request",level:2}];function b(e){const a={h2:"h2",p:"p",...(0,l.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(a.p,{children:"Get template by ID"})}),"\n",(0,t.jsx)(r(),{method:"get",path:"/template/{template_id}"}),"\n",(0,t.jsx)(a.p,{children:"The Get Template API allows you to retrieve details about a specific template. Templates serve as blueprints for creating documents with predefined structures."}),"\n",(0,t.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(d.Z,{className:"paramsItem",param:{name:"template_id",in:"path",description:"ID of template that needs to be fetched",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"strng"}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(h.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"successful operation"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(o.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(c.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"x1Hbnms2Pg"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"sample template"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"template note"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Folder",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"folder name"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"File",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"https://templateuser.com"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"template creator name"}}),(0,t.jsx)(c.Z,{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(a.p,{children:"Signers"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(a.p,{children:"object[]"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(a.p,{children:"Array ["})})}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"joe bee"}}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(a.p,{children:"]"})})})]})]})}),(0,t.jsx)(c.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}})]})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "objectId": "x1Hbnms2Pg",\n  "Title": "sample template",\n  "Note": "template note",\n  "Folder": "folder name",\n  "File": "https://templateuser.com",\n  "Owner": "template creator name",\n  "Signers": [\n    {\n      "Name": "joe bee"\n    }\n  ],\n  "createdAt": "2023-10-07T16:49:56.000Z",\n  "updatedAt": "2023-10-07T16:49:56.000Z"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(h.default,{label:"404",value:"404",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Template not found!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(o.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Template not found!"}})})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "error": "Template not found!"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(h.default,{label:"405",value:"405",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Invalid API Token!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(o.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function y(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);