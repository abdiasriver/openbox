/**
 * This file is part of Adguard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * Adguard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adguard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Adguard Browser Extension.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global DevToolsRulesConstructor, contentPage */

/**
 * Helper object that provides methods used in devtools panel's code
 * Methods are invoked via inspectedWindow.eval function.
 * https://developer.chrome.com/extensions/devtools_inspectedWindow#method-eval
 *
 */
var DevToolsHelper = (function () { // jshint ignore:line

    var PREVIEW_STYLE_ID = "adguard-preview-style";

    /**
     * Add user rule
     * @param options Object {ruleText: 'ruleText'}
     */
    var addRule = function (options) {
        contentPage.sendMessage({type: 'addUserRule', ruleText: options.ruleText});
    };

    /**
     * Add rule preview
     * @param options Object {ruleText: 'ruleText'}
     */
    var applyPreview = function (options) {

        var ruleText = options.ruleText;

        var head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }

        var selector = DevToolsRulesConstructor.constructRuleCssSelector(ruleText);
        if (!selector) {
            return;
        }

        var style = document.createElement("style");
        style.setAttribute("type", "text/css");
        style.setAttribute("id", PREVIEW_STYLE_ID);
        style.appendChild(document.createTextNode(selector + " {display: none !important;}"));

        head.appendChild(style);
    };

    /**
     * Cancel early applied preview
     */
    var cancelPreview = function () {
        var head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        var style = document.getElementById(PREVIEW_STYLE_ID);
        if (style) {
            head.removeChild(style);
        }
    };

    return {
        addRule: addRule,
        applyPreview: applyPreview,
        cancelPreview: cancelPreview
    };

})();
