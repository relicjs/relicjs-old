import{S as z,i as C,s as G,l as N,f as E,d,D as H,e as v,k as D,c as g,a as b,n as S,b as p,H as h,I as J,J as K,K as P,x as B,u as F,N as M,t as A,g as U,h as j}from"../../chunks/vendor-c385cf03.js";function q(u,e,l){const s=u.slice();return s[3]=e[l][0],s[4]=e[l][1],s}function O(u){let e,l,s=u[4]+"",t,a;return{c(){e=v("li"),l=v("span"),t=A(s),a=D(),this.h()},l(n){e=g(n,"LI",{class:!0});var i=b(e);l=g(i,"SPAN",{class:!0});var f=b(l);t=U(f,s),f.forEach(d),a=S(i),i.forEach(d),this.h()},h(){p(l,"class","uppercase"),p(e,"class","menu-title")},m(n,i){E(n,e,i),h(e,l),h(l,t),h(e,a)},p(n,i){i&1&&s!==(s=n[4]+"")&&j(t,s)},d(n){n&&d(e)}}}function Q(u){let e,l,s=u[4]+"",t,a,n;return{c(){e=v("li"),l=v("a"),t=A(s),n=D(),this.h()},l(i){e=g(i,"LI",{});var f=b(e);l=g(f,"A",{class:!0,href:!0});var r=b(l);t=U(r,s),r.forEach(d),n=S(f),f.forEach(d),this.h()},h(){p(l,"class","capitalize"),p(l,"href",a=u[3])},m(i,f){E(i,e,f),h(e,l),h(l,t),h(e,n)},p(i,f){f&1&&s!==(s=i[4]+"")&&j(t,s),f&1&&a!==(a=i[3])&&p(l,"href",a)},d(i){i&&d(e)}}}function w(u){let e;function l(a,n){return a[3]?Q:O}let s=l(u),t=s(u);return{c(){t.c(),e=N()},l(a){t.l(a),e=N()},m(a,n){t.m(a,n),E(a,e,n)},p(a,n){s===(s=l(a))&&t?t.p(a,n):(t.d(1),t=s(a),t&&(t.c(),t.m(e.parentNode,e)))},d(a){t.d(a),a&&d(e)}}}function R(u){let e,l,s,t,a,n,i,f=u[0],r=[];for(let c=0;c<f.length;c+=1)r[c]=w(q(u,f,c));const I=u[2].default,_=H(I,u,u[1],null);return{c(){e=v("div"),l=v("div"),s=v("div"),t=v("ul");for(let c=0;c<r.length;c+=1)r[c].c();a=D(),n=v("div"),_&&_.c(),this.h()},l(c){e=g(c,"DIV",{class:!0});var m=b(e);l=g(m,"DIV",{class:!0});var o=b(l);s=g(o,"DIV",{class:!0});var k=b(s);t=g(k,"UL",{class:!0});var V=b(t);for(let y=0;y<r.length;y+=1)r[y].l(V);V.forEach(d),k.forEach(d),a=S(o),n=g(o,"DIV",{class:!0});var L=b(n);_&&_.l(L),L.forEach(d),o.forEach(d),m.forEach(d),this.h()},h(){p(t,"class","menu py-3 shadow-lg bg-base-100 rounded-box"),p(s,"class","col-span-12 md:col-span-4 xl:col-span-2"),p(n,"class","col-span-12 md:col-span-8 xl:col-span-10 documentation"),p(l,"class","grid grid-cols-12 gap-10"),p(e,"class","container mx-auto p-4")},m(c,m){E(c,e,m),h(e,l),h(l,s),h(s,t);for(let o=0;o<r.length;o+=1)r[o].m(t,null);h(l,a),h(l,n),_&&_.m(n,null),i=!0},p(c,[m]){if(m&1){f=c[0];let o;for(o=0;o<f.length;o+=1){const k=q(c,f,o);r[o]?r[o].p(k,m):(r[o]=w(k),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=f.length}_&&_.p&&(!i||m&2)&&J(_,I,c,c[1],i?P(I,c[1],m,null):K(c[1]),null)},i(c){i||(B(_,c),i=!0)},o(c){F(_,c),i=!1},d(c){c&&d(e),M(r,c),_&&_.d(c)}}}function T(u,e,l){let{$$slots:s={},$$scope:t}=e,{menu:a=[[null,"\u{1F680} Getting Started"],["./installation","Installation"],["./usage","Usage"]]}=e;return u.$$set=n=>{"menu"in n&&l(0,a=n.menu),"$$scope"in n&&l(1,t=n.$$scope)},[a,t,s]}class X extends z{constructor(e){super();C(this,e,T,R,G,{menu:0})}}export{X as default};
