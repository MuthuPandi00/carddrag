define(["require", "exports"], function (require, exports) {
    var Utilitties = (function () {
        function Utilitties() {
        }
        Utilitties.prototype.getUrlVars = function () {
            //console.log("getUrlVars");
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        };
        return Utilitties;
    })();
    return Utilitties;
});
//# sourceMappingURL=Utilitties.js.map