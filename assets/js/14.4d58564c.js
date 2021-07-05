(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{462:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Недавно довелось столкнуться с необходимостью отладки (запуска дебагера) программы, которая работает\nв Docker-контейнере внутри Vagrant'а. Как оказалось, сделать это достаточно просто. Далее будет\nнебольшая инструкция, как этого добиться.")]),s._v(" "),e("p",[s._v("Недавно довелось столкнуться с необходимостью отладки (запуска дебагера) программы, которая работает\nв Docker-контейнере внутри Vagrant'а. Как оказалось, сделать это достаточно просто. Далее будет\nнебольшая инструкция, как этого добиться.")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("Для удалённой отладки Goland предлагает использовать Delve. Поэтому, устанавливаем его.")])]),s._v(" "),e("li",[e("p",[s._v("Выполняем команду:")])])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("dlv debug --headless --listen"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(":1234 --api-version"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Эта команда компилирует программу с отключением оптимизации, запускает и прикрепляет к ней дебагер.\nДебагер запускается в не интерактивном режиме и слушает порт 1234 Есть альтернативный способ.\nКомпилируем программу следующим образом:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("go build -gcflags "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all=-N -l"')]),s._v(" github.com/app/demo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("(для Go версии 1.10+)\nлибо:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("go build -gcflags "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-N -l"')]),s._v(" github.com/app/demo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("В Goland заходим в настройки конфигурации запуска (Run/Debug Configuration):")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/goland_run_config.webp",alt:"Goland Run/Debug configuration"}})]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[s._v("Добавляем новую конфигурацию: Go Remote")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/go_remote.webp",alt:"Go Remote"}})]),s._v(" "),e("p",[s._v("Указываем host vagrant'а и порт, который использовали при запуске Delve (п. 2). Сохраняем, закрываем\nнастройки")]),s._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[s._v("Запускаем режим дебага в Goland (Run → Debug). После этого будет непосредственно запущена\nпрограмма, и теперь к ней можно обращаться обычным образом (например, из браузера).")])]),s._v(" "),e("p",[s._v("Пример команды, запускающей таким образом программу внутри докера:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run --name your_programm -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6789")]),s._v(":6789 -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v('"')]),s._v(":/your_package_name -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/your_gopath -w /your_package_name golang:1.10 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"go build -gcflags='all=-N -l' your_package_name && ./bin/dlv --listen=:6789 --headless=true --api-version=2 exec ./your_programm\"")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Обратите внимание, что тут указывается два порта - для обычных запросов к программе (8080) и для\ndelve (6789). Не забываем указать актуальный путь к dlv (в моём случае: ./bin/dlv).")])])}),[],!1,null,null,null);a.default=n.exports}}]);