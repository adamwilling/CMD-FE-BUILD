"use strict";(self.webpackChunkcmd_management=self.webpackChunkcmd_management||[]).push([[828],{5828:function(e,r,s){s.r(r);var a=s(1413),o=s(885),t=s(2791),n=s(6030),i=s(6871),c=s(3504),l=s(8820),d=s(7692),p=s(7022),u=s(3360),m=s(9140),x=s(8182),j=s(2001),f=s(6351),h=s(7328),v=s(9388),Z=s(6777),N=s(4230),b=s(3723),g=s(184),y=s(4245);r.default=function(){var e=(0,n.v9)(f.ai).status,r=(0,n.v9)(f.ai).proposals,s=(0,n.v9)(f.ai).pagination,T=(0,n.I0)(),w=(0,i.TH)(),C=(0,i.s0)(),I=(0,t.useState)({page:1}),k=(0,o.Z)(I,2),D=k[0],O=k[1],A=(0,t.useState)({proposalTypeIds:[],creatorIds:[],statusIds:[],createDateFrom:"",createDateTo:""}),B=(0,o.Z)(A,2),L=B[0],M=B[1];(0,t.useEffect)((function(){if(document.title="\u0110\u1ec1 xu\u1ea5t",w.search.length>0){for(var e=y.parse(w.search),r={},s=0,a=Object.entries(e);s<a.length;s++){var t=(0,o.Z)(a[s],2),n=t[0],i=t[1];"page"===n&&(r[n]=i)}O(r)}}),[]),(0,t.useEffect)((function(){T((0,j.Ul)({params:D,filters:L}))}),[D,L]),(0,t.useEffect)((function(){var e=w.pathname+"?"+y.stringify(D);C(e),T((0,j.Ul)({params:D,filters:L}))}),[D,L]);var U=function(e){null!==D.order&&D.order?"asc"===D.order?O((0,a.Z)((0,a.Z)({},D),{},{sort:e,order:"desc"})):O((0,a.Z)((0,a.Z)({},D),{},{sort:null,order:null})):O((0,a.Z)((0,a.Z)({},D),{},{sort:e,order:"asc"}))};return(0,g.jsxs)(p.Z,{fluid:!0,children:[(0,g.jsxs)(p.Z,{fluid:!0,children:[(0,g.jsxs)("div",{className:"row justify-content-xl-between justify-content-end align-items-center",children:[(0,g.jsx)("div",{className:"col-auto fw-bolder fs-5 mb-xl-0 mb-3",children:"T\u1ea4T C\u1ea2 \u0110\u1ec0 XU\u1ea4T"}),(0,g.jsx)("div",{className:"col"}),(0,g.jsx)("div",{className:"col-auto mb-xl-0 mb-3 d-sm-block d-none",children:(0,g.jsx)(N.Z,{})}),(0,g.jsx)("div",{className:"col-auto mb-xl-0 mb-3 d-sm-block d-none",children:(0,g.jsx)(b.Z,{filtersAdvanced:L,setFiltersAdvanced:M,type:"all"})})]}),(0,g.jsxs)("div",{className:"d-flex justify-content-start align-items-center",children:[(0,g.jsx)(c.OL,{to:"/proposals",end:!0,children:function(e){var r=e.isActive;return(0,g.jsx)(u.Z,{className:"col-auto m-1",variant:(0,x.Z)({primary:r,"outline-primary":!r}),children:"T\u1ea5t c\u1ea3"})}}),(0,g.jsx)(c.OL,{to:"/proposals/created-by-me",children:function(e){var r=e.isActive;return(0,g.jsx)(u.Z,{className:"col-auto m-1",variant:(0,x.Z)({primary:r,"outline-primary":!r}),children:"\u0110\u1ec1 xu\u1ea5t c\u1ee7a t\xf4i"})}}),(0,g.jsx)(c.OL,{to:"/proposals/approve-by-me",children:function(e){var r=e.isActive;return(0,g.jsx)(u.Z,{className:"col-auto m-1",variant:(0,x.Z)({primary:r,"outline-primary":!r}),children:"\u0110\u1ec1 xu\u1ea5t t\xf4i duy\u1ec7t"})}})]}),(0,g.jsx)("hr",{})]}),(0,g.jsxs)(p.Z,{fluid:!0,children:[(0,g.jsxs)("div",{className:"proposal proposal-header",children:[(0,g.jsx)("div",{className:"ms-lg-5"}),(0,g.jsx)("div",{className:"proposal-creator",children:(0,g.jsxs)("span",{className:"fw-bolder cursor-pointer",onClick:function(){return U("pro.creator.name")},children:["NG\u01af\u1edcI \u0110\u1ec0 XU\u1ea4T","pro.creator.name"===D.sort&&"asc"===D.order?(0,g.jsx)(l.i4I,{}):"pro.creator.name"===D.sort&&"desc"===D.order?(0,g.jsx)(l.BwW,{}):(0,g.jsx)(d.bM7,{})]})}),(0,g.jsx)("div",{className:"proposal-type",children:(0,g.jsxs)("span",{className:"fw-bolder cursor-pointer",onClick:function(){return U("pro.proposalType.id")},children:["LO\u1ea0I \u0110\u1ec0 XU\u1ea4T","pro.proposalType.id"===D.sort&&"asc"===D.order?(0,g.jsx)(l.i4I,{}):"pro.proposalType.id"===D.sort&&"desc"===D.order?(0,g.jsx)(l.BwW,{}):(0,g.jsx)(d.bM7,{})]})}),(0,g.jsx)("div",{className:"proposal-content",children:(0,g.jsx)("span",{className:"fw-bolder",onClick:function(){return U("receiver.name")},children:"M\u1ee4C \u0110\xcdCH/L\xdd DO"})}),(0,g.jsx)("div",{className:"proposal-createDate",children:(0,g.jsxs)("span",{className:"fw-bolder cursor-pointer",onClick:function(){return U("pro.createDate")},children:["NG\xc0Y T\u1ea0O","pro.createDate"===D.sort&&"asc"===D.order?(0,g.jsx)(l.i4I,{}):"pro.createDate"===D.sort&&"desc"===D.order?(0,g.jsx)(l.BwW,{}):(0,g.jsx)(d.bM7,{})]})}),(0,g.jsx)("div",{className:"proposal-status",children:(0,g.jsxs)("span",{className:"fw-bolder cursor-pointer",onClick:function(){return U("pro.status.id")},children:["TR\u1ea0NG TH\xc1I","pro.status.id"===D.sort&&"asc"===D.order?(0,g.jsx)(l.i4I,{}):"pro.status.id"===D.sort&&"desc"===D.order?(0,g.jsx)(l.BwW,{}):(0,g.jsx)(d.bM7,{})]})})]}),"loading"===e?(0,g.jsx)(v.Z,{}):"error"===e?(0,g.jsx)("div",{className:"text-center py-3",children:"C\xf3 l\u1ed7i trong qu\xe1 tr\xecnh l\u1ea5y d\u1eef li\u1ec7u t\u1eeb Server"}):(0,g.jsxs)("div",{className:"list-group-horizontal-lg",children:[null===r||void 0===r?void 0:r.map((function(e){return(0,g.jsx)(Z.Z,{proposalInfo:e},e.id)})),0===(null===r||void 0===r?void 0:r.length)?(0,g.jsx)(m.Z.Body,{align:"center",children:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"}):null]}),(0,g.jsx)(h.Z,{pagination:(0,a.Z)((0,a.Z)({},s),{},{page:D.page}),onPageChange:function(e){O((0,a.Z)((0,a.Z)({},D),{},{page:e}))}})]})]})}}}]);
//# sourceMappingURL=828.22bcc77c.chunk.js.map