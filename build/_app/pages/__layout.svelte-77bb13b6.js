import{S as U,i as y,s as H,D as K,B as z,e as N,c as P,a as L,d as k,E as W,f as D,F as be,G as q,H as F,I as G,p as Z,x as d,u as v,J,K as w,L as de,M as ee,N as te,b as S,O as le,P as se,Q as ie,R as I,T as ne,j as M,m as Q,o as X,v as Y,k as j,n as O,r as R,w as T,U as ke,V as ae,t as x,g as p,h as fe}from"../chunks/vendor-dd92dce1.js";function $(...s){return Array.from(s).filter(e=>e!==null).join(" ")}function ve(s){let e,t,l,n;const i=s[16].default,a=K(i,s,s[15],null);let o=[s[1],{class:s[0]}],c={};for(let f=0;f<o.length;f+=1)c=z(c,o[f]);return{c(){e=N("button"),a&&a.c(),this.h()},l(f){e=P(f,"BUTTON",{class:!0});var b=L(e);a&&a.l(b),b.forEach(k),this.h()},h(){W(e,c)},m(f,b){D(f,e,b),a&&a.m(e,null),e.autofocus&&e.focus(),t=!0,l||(n=be(e,"click",s[17]),l=!0)},p(f,[b]){a&&a.p&&(!t||b&32768)&&q(a,i,f,f[15],t?G(i,f[15],b,null):F(f[15]),null),W(e,c=Z(o,[b&2&&f[1],(!t||b&1)&&{class:f[0]}]))},i(f){t||(d(a,f),t=!0)},o(f){v(a,f),t=!1},d(f){f&&k(e),a&&a.d(f),l=!1,n()}}}function Ae(s,e,t){let l;const n=["shape","size","color","wide","block","link","outline","isActive","isDisabled","glass","loading","noAnimation","class"];let i=J(e,n),{$$slots:a={},$$scope:o}=e,{shape:c="regular"}=e,{size:f="md"}=e,{color:b="primary"}=e,{wide:m=!1}=e,{block:h=!1}=e,{link:g=!1}=e,{outline:B=!1}=e,{isActive:A=!1}=e,{isDisabled:r=!1}=e,{glass:u=!1}=e,{loading:E=!1}=e,{noAnimation:C=!1}=e,{class:V=""}=e;function ge(_){de.call(this,s,_)}return s.$$set=_=>{e=z(z({},e),w(_)),t(1,i=J(e,n)),"shape"in _&&t(2,c=_.shape),"size"in _&&t(3,f=_.size),"color"in _&&t(4,b=_.color),"wide"in _&&t(5,m=_.wide),"block"in _&&t(6,h=_.block),"link"in _&&t(7,g=_.link),"outline"in _&&t(8,B=_.outline),"isActive"in _&&t(9,A=_.isActive),"isDisabled"in _&&t(10,r=_.isDisabled),"glass"in _&&t(11,u=_.glass),"loading"in _&&t(12,E=_.loading),"noAnimation"in _&&t(13,C=_.noAnimation),"class"in _&&t(14,V=_.class),"$$scope"in _&&t(15,o=_.$$scope)},s.$$.update=()=>{s.$$.dirty&32764&&t(0,l=$(V,`btn btn-${b} btn-${f} btn-${c}`,m&&"btn-wide",h&&"btn-block",g&&"btn-link",B&&"btn-outline",A&&"btn-active",r&&"btn-disabled",u&&"glass",E&&"loading",C&&"no-animation"))},[l,i,c,f,b,m,h,g,B,A,r,u,E,C,V,o,a,ge]}class oe extends U{constructor(e){super();y(this,e,Ae,ve,H,{shape:2,size:3,color:4,wide:5,block:6,link:7,outline:8,isActive:9,isDisabled:10,glass:11,loading:12,noAnimation:13,class:14})}}function Be(s){let e,t,l,n,i,a=[s[4],{class:s[2]},{style:n=`width:${s[1]}px;height:${s[1]}px;`},{viewBox:i="0 0 24 24"}],o={};for(let c=0;c<a.length;c+=1)o=z(o,a[c]);return{c(){e=ee("svg"),t=ee("path"),this.h()},l(c){e=te(c,"svg",{class:!0,style:!0,viewBox:!0});var f=L(e);t=te(f,"path",{d:!0}),L(t).forEach(k),f.forEach(k),this.h()},h(){S(t,"d",l=le["mdi"+s[3](s[0])]),se(e,o),ie(e,"svelte-vivkue",!0)},m(c,f){D(c,e,f),I(e,t)},p(c,[f]){f&1&&l!==(l=le["mdi"+c[3](c[0])])&&S(t,"d",l),se(e,o=Z(a,[f&16&&c[4],f&4&&{class:c[2]},f&2&&n!==(n=`width:${c[1]}px;height:${c[1]}px;`)&&{style:n},{viewBox:i}])),ie(e,"svelte-vivkue",!0)},i:ne,o:ne,d(c){c&&k(e)}}}function ze(s,e,t){let l;const n=["name","color","size","class"];let i=J(e,n),{name:a="account"}=e,{color:o="black"}=e,{size:c="24"}=e;const f=m=>m&&m[0].toUpperCase()+m.slice(1)||"";let{class:b=""}=e;return s.$$set=m=>{e=z(z({},e),w(m)),t(4,i=J(e,n)),"name"in m&&t(0,a=m.name),"color"in m&&t(5,o=m.color),"size"in m&&t(1,c=m.size),"class"in m&&t(6,b=m.class)},s.$$.update=()=>{s.$$.dirty&96&&t(2,l=$(b,`inline-block text-${o}`))},[a,c,l,f,i,o,b]}class Le extends U{constructor(e){super();y(this,e,ze,Be,H,{name:0,color:5,size:1,class:6})}}const De=s=>({}),ce=s=>({});function ue(s){let e,t;return e=new Le({props:{name:s[0],color:s[1],size:"24"}}),{c(){M(e.$$.fragment)},l(l){Q(e.$$.fragment,l)},m(l,n){X(e,l,n),t=!0},p(l,n){const i={};n&1&&(i.name=l[0]),n&2&&(i.color=l[1]),e.$set(i)},i(l){t||(d(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function re(s){let e,t;const l=s[11].text,n=K(l,s,s[12],ce);return{c(){e=N("p"),n&&n.c(),this.h()},l(i){e=P(i,"P",{class:!0});var a=L(e);n&&n.l(a),a.forEach(k),this.h()},h(){S(e,"class","text-sm text-base-content text-opacity-60")},m(i,a){D(i,e,a),n&&n.m(e,null),t=!0},p(i,a){n&&n.p&&(!t||a&4096)&&q(n,l,i,i[12],t?G(l,i[12],a,De):F(i[12]),ce)},i(i){t||(d(n,i),t=!0)},o(i){v(n,i),t=!1},d(i){i&&k(e),n&&n.d(i)}}}function me(s){let e,t,l,n=s[3]&&_e(s),i=s[5]&&he(s);return{c(){e=N("div"),n&&n.c(),t=j(),i&&i.c(),this.h()},l(a){e=P(a,"DIV",{class:!0});var o=L(e);n&&n.l(o),t=O(o),i&&i.l(o),o.forEach(k),this.h()},h(){S(e,"class","flex-none space-x-2")},m(a,o){D(a,e,o),n&&n.m(e,null),I(e,t),i&&i.m(e,null),l=!0},p(a,o){a[3]?n?(n.p(a,o),o&8&&d(n,1)):(n=_e(a),n.c(),d(n,1),n.m(e,t)):n&&(R(),v(n,1,1,()=>{n=null}),T()),a[5]?i?(i.p(a,o),o&32&&d(i,1)):(i=he(a),i.c(),d(i,1),i.m(e,null)):i&&(R(),v(i,1,1,()=>{i=null}),T())},i(a){l||(d(n),d(i),l=!0)},o(a){v(n),v(i),l=!1},d(a){a&&k(e),n&&n.d(),i&&i.d()}}}function _e(s){let e,t;return e=new oe({props:{size:"sm",color:"ghost",$$slots:{default:[Ee]},$$scope:{ctx:s}}}),e.$on("click",function(){ae(s[3])&&s[3].apply(this,arguments)}),{c(){M(e.$$.fragment)},l(l){Q(e.$$.fragment,l)},m(l,n){X(e,l,n),t=!0},p(l,n){s=l;const i={};n&4100&&(i.$$scope={dirty:n,ctx:s}),e.$set(i)},i(l){t||(d(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Ee(s){let e;return{c(){e=x(s[2])},l(t){e=p(t,s[2])},m(t,l){D(t,e,l)},p(t,l){l&4&&fe(e,t[2])},d(t){t&&k(e)}}}function he(s){let e,t;return e=new oe({props:{size:"sm",color:"primary",$$slots:{default:[Ce]},$$scope:{ctx:s}}}),e.$on("click",function(){ae(s[5])&&s[5].apply(this,arguments)}),{c(){M(e.$$.fragment)},l(l){Q(e.$$.fragment,l)},m(l,n){X(e,l,n),t=!0},p(l,n){s=l;const i={};n&4112&&(i.$$scope={dirty:n,ctx:s}),e.$set(i)},i(l){t||(d(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Ce(s){let e;return{c(){e=x(s[4])},l(t){e=p(t,s[4])},m(t,l){D(t,e,l)},p(t,l){l&16&&fe(e,t[4])},d(t){t&&k(e)}}}function Ie(s){let e,t,l,n,i,a,o,c,f=s[0]&&ue(s);const b=s[11].default,m=K(b,s,s[12],null);let h=s[8].text&&re(s),g=(s[3]||s[5])&&me(s),B=[s[7],{class:s[6]}],A={};for(let r=0;r<B.length;r+=1)A=z(A,B[r]);return{c(){e=N("div"),t=N("div"),f&&f.c(),l=j(),n=N("div"),i=N("h4"),m&&m.c(),a=j(),h&&h.c(),o=j(),g&&g.c(),this.h()},l(r){e=P(r,"DIV",{class:!0});var u=L(e);t=P(u,"DIV",{class:!0});var E=L(t);f&&f.l(E),l=O(E),n=P(E,"DIV",{class:!0});var C=L(n);i=P(C,"H4",{});var V=L(i);m&&m.l(V),V.forEach(k),a=O(C),h&&h.l(C),C.forEach(k),E.forEach(k),o=O(u),g&&g.l(u),u.forEach(k),this.h()},h(){S(n,"class","mx-2"),S(t,"class","flex-1"),W(e,A)},m(r,u){D(r,e,u),I(e,t),f&&f.m(t,null),I(t,l),I(t,n),I(n,i),m&&m.m(i,null),I(n,a),h&&h.m(n,null),I(e,o),g&&g.m(e,null),c=!0},p(r,[u]){r[0]?f?(f.p(r,u),u&1&&d(f,1)):(f=ue(r),f.c(),d(f,1),f.m(t,l)):f&&(R(),v(f,1,1,()=>{f=null}),T()),m&&m.p&&(!c||u&4096)&&q(m,b,r,r[12],c?G(b,r[12],u,null):F(r[12]),null),r[8].text?h?(h.p(r,u),u&256&&d(h,1)):(h=re(r),h.c(),d(h,1),h.m(n,null)):h&&(R(),v(h,1,1,()=>{h=null}),T()),r[3]||r[5]?g?(g.p(r,u),u&40&&d(g,1)):(g=me(r),g.c(),d(g,1),g.m(e,null)):g&&(R(),v(g,1,1,()=>{g=null}),T()),W(e,A=Z(B,[u&128&&r[7],(!c||u&64)&&{class:r[6]}]))},i(r){c||(d(f),d(m,r),d(h),d(g),c=!0)},o(r){v(f),v(m,r),v(h),v(g),c=!1},d(r){r&&k(e),f&&f.d(),m&&m.d(r),h&&h.d(),g&&g.d()}}}function Ne(s,e,t){let l;const n=["type","icon","iconColor","cancelButtonLabel","cancelAction","confirmButtonLabel","confirmAction","class"];let i=J(e,n),{$$slots:a={},$$scope:o}=e;const c=ke(a);let{type:f="default"}=e,{icon:b=""}=e,{iconColor:m=f}=e,{cancelButtonLabel:h="Cancel"}=e,{cancelAction:g=null}=e,{confirmButtonLabel:B="OK"}=e,{confirmAction:A=null}=e,{class:r=""}=e;return s.$$set=u=>{e=z(z({},e),w(u)),t(7,i=J(e,n)),"type"in u&&t(9,f=u.type),"icon"in u&&t(0,b=u.icon),"iconColor"in u&&t(1,m=u.iconColor),"cancelButtonLabel"in u&&t(2,h=u.cancelButtonLabel),"cancelAction"in u&&t(3,g=u.cancelAction),"confirmButtonLabel"in u&&t(4,B=u.confirmButtonLabel),"confirmAction"in u&&t(5,A=u.confirmAction),"class"in u&&t(10,r=u.class),"$$scope"in u&&t(12,o=u.$$scope)},s.$$.update=()=>{s.$$.dirty&1536&&t(6,l=$(r,`alert alert-${f}`))},[b,m,h,g,B,A,l,i,c,f,r,a,o]}class Pe extends U{constructor(e){super();y(this,e,Ne,Ie,H,{type:9,icon:0,iconColor:1,cancelButtonLabel:2,cancelAction:3,confirmButtonLabel:4,confirmAction:5,class:10})}}function Ve(s){let e;return{c(){e=x("Welcome to RelicJS!")},l(t){e=p(t,"Welcome to RelicJS!")},m(t,l){D(t,e,l)},d(t){t&&k(e)}}}function Je(s){let e,t,l;e=new Pe({props:{type:"success",$$slots:{default:[Ve]},$$scope:{ctx:s}}});const n=s[0].default,i=K(n,s,s[1],null);return{c(){M(e.$$.fragment),t=j(),i&&i.c()},l(a){Q(e.$$.fragment,a),t=O(a),i&&i.l(a)},m(a,o){X(e,a,o),D(a,t,o),i&&i.m(a,o),l=!0},p(a,[o]){const c={};o&2&&(c.$$scope={dirty:o,ctx:a}),e.$set(c),i&&i.p&&(!l||o&2)&&q(i,n,a,a[1],l?G(n,a[1],o,null):F(a[1]),null)},i(a){l||(d(e.$$.fragment,a),d(i,a),l=!0)},o(a){v(e.$$.fragment,a),v(i,a),l=!1},d(a){Y(e,a),a&&k(t),i&&i.d(a)}}}function Se(s,e,t){let{$$slots:l={},$$scope:n}=e;return s.$$set=i=>{"$$scope"in i&&t(1,n=i.$$scope)},[l,n]}class Oe extends U{constructor(e){super();y(this,e,Se,Je,H,{})}}export{Oe as default};