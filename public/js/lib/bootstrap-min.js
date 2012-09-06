var bootstrap = function () {
    function r(c, b) {
        var a = document.createElement("script");
        a.setAttribute("type", "text/javascript");
        a.src = c;
        a.id = b;
        return a
    }

    function s(c, b) {
        var a = document.createElement("link");
        a.rel = "stylesheet";
        a.type = "text/css";
        a.href = c;
        a.id = b;
        return a
    }

    function t(c) {
        for (var b in c)m(c[b], b)
    }

    var i = [], m = function () {
        function c(u, n) {
            for (var h, j, d = 0, f = i.length; d < f;) {
                if (i[d] == a)return false;
                d++
            }
            if (n === "js") {
                h = document.getElementsByTagName("script");
                j = "src"
            } else if (n === "css") {
                h = document.getElementsByTagName("link");
                j = "href"
            }
            d = function () {
                for (var o = [], p = h.length; p-- > 0;)p in h && o.push(h.c);
                return o
            };
            f = 0;
            for (var v = d.length; f < v; f++)if (j in d[f] && d[f][j] == u)return false;
            return true
        }

        var b = arguments;
        if (b.length != 0) {
            var a = "", e = b[0];
            if (typeof e === "string")a = e; else if (typeof e == "object" || typeof e == "array")t(e);
            e = document.head || document.getElementsByTagName("head")[0];
            var q = b[1] || "script" + Math.floor(Math.random() * 1234), k = false, g = null, l = l = b[2] || null;
            if (a.indexOf(".js") > -1 && c(a, "js")) {
                i.push(a);
                g = r(a, q)
            }
            if (a.indexOf(".css") >
                -1 && c(a, "css")) {
                i.push(a);
                g = s(a, q)
            }
            if (g) {
                g.onload = function () {
                    k = true
                };
                g.onreadystatechange = function () {
                    if (!k)if (this.readyState == "loaded" || this.readyState == "complete")k = true
                };
                e.appendChild(g)
            }
            var w = window.setInterval(function () {
                if (k) {
                    window.clearInterval(w);
                    l != null && l()
                }
            }, 0)
        }
    };
    return window.bootstrap = window.$b = m
}();
