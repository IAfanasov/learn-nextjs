(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{7076:function(e,t,a){Promise.resolve().then(a.bind(a,5932))},5932:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var l,n,s=a(7437),r=a(4855),i=a(1091),u=a(6876),c=a(7805),o=a(2125),d=a(7533),h=a(8759),x=a(8029),m=a(4033),f=a(2265);function g(){var e;let t=(0,m.useSearchParams)(),a=(0,m.usePathname)(),{replace:l}=(0,m.useRouter)(),n=null!==(e=t.get("title"))&&void 0!==e?e:"",g=t.get("date"),v=t.get("locale"),j=(0,f.useMemo)(()=>"ru"==v?x.ru:void 0,[v]),b=(0,f.useMemo)(()=>g?new Date(g):new Date,[g]),[w,S]=(0,f.useState)(n),[k,p]=(0,f.useState)(g||""),[N,C]=(0,f.useState)(!1),[_,y]=(0,f.useState)(new Date),E=(0,f.useMemo)(()=>(0,d.Z)((0,h.Z)({start:_,end:b}),{locale:j}),[j,_,b]),D=(0,f.useCallback)(()=>{C(!1);let e=new URLSearchParams(t);e.set("title",w),e.set("date",k),l("".concat(a,"?").concat(e.toString()))},[w,l,t,a,k]);return(0,f.useEffect)(()=>{let e=setInterval(()=>y(new Date),1e3);return()=>clearInterval(e)},[]),(0,s.jsx)("div",{className:"flex h-screen",children:(0,s.jsxs)(r.K,{className:"m-auto",children:[N?(0,s.jsx)("form",{onSubmit:D,children:(0,s.jsxs)(r.K,{children:[(0,s.jsx)(i.I,{type:"text",value:w,onChange:e=>S(e.target.value),size:"lg"}),(0,s.jsx)(i.I,{type:"datetime-local",size:"lg",value:k,onChange:e=>p(e.target.value)}),(0,s.jsx)(u.h,{rounded:"full",type:"submit","aria-label":"Save",icon:(0,s.jsx)(c.Z,{width:32})})]})}):(0,s.jsxs)("h1",{className:"cursor-pointer text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",onClick:()=>C(!0),children:[n,(0,s.jsx)(u.h,{className:"inline",background:"none","aria-label":"Edit title",icon:(0,s.jsx)(o.Z,{width:32})})]}),(0,s.jsx)("p",{className:"mt-4 text-xl text-gray-500",children:E})]})})}(l=n||(n={})).title="title",l.date="date",l.locale="locale"}},function(e){e.O(0,[901,397,971,472,744],function(){return e(e.s=7076)}),_N_E=e.O()}]);