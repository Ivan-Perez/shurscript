// Shur Scripts SA
// GPLv2 Licensed
// http://www.gnu.org/licenses/gpl-2.0.html
//
// ==UserScript==
// @name            ShurScript
// @description     Script para ForoCoches
// @namespace       http://shurscript.es
// @version         0.25.0-exp
// @author          TheBronx
// @author          xusO
// @author          Fritanga / Korrosivo
// @author          Juno / ikaros45
// @author          Electrosa
// @include         http://www.forocoches.com*
// @include         http://forocoches.com*
// @grant           GM_log
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_xmlhttpRequest
// @grant           GM_registerMenuCommand
// @grant           GM_addStyle
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_getMetadata
// @run-at          document-end
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/plugins/bootbox.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/plugins/Markdown.Converter.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/plugins/bootstrap-tokenfield.min.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/plugins/icheck.min.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/core.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/eventbus.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/sync.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/shurbar.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/modulemanager.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/topbar.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/templater.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/autoupdater.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/preferences.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/components/parser.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/Quotes.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/FilterThreads.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/BetterPosts.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/Scrollers.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/NestedQuotes.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/BottomNavigation.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/RefreshSearch.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/HighlightOP.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/ImageUploader.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/ThreadUpdater.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/AutoIcons.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/PrivateMode.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/Integrations.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/Reader.js
// @require         https://github.com/Electrosa/shurscript/raw/no-libs/modules/AutoSpoiler.js
// @resource        bootstrapcss https://github.com/Electrosa/shurscript/raw/no-libs/css/bootstrap.css
// @resource        modalcss https://github.com/Electrosa/shurscript/raw/no-libs/css/modal.css
// @resource        shurbarcss https://github.com/Electrosa/shurscript/raw/no-libs/css/shurbar.css
// @resource        modalhtml https://github.com/Electrosa/shurscript/raw/no-libs/html/modal.html
// @resource        quotehtml https://github.com/Electrosa/shurscript/raw/no-libs/html/quote.html
// @resource        imageuploadercss https://github.com/Electrosa/shurscript/raw/no-libs/css/imageuploader.css
// @resource        imageuploaderhtml https://github.com/Electrosa/shurscript/raw/no-libs/html/imageuploader.html
// @resource        autoiconscss https://github.com/Electrosa/shurscript/raw/no-libs/css/autoicons.css
// @resource        readercss https://github.com/Electrosa/shurscript/raw/no-libs/css/reader.css
// @resource        readerhtml https://github.com/Electrosa/shurscript/raw/no-libs/html/reader.html
// ==/UserScript==

/**
 * Es imprescindible que los archivos js se carguen en este orden:
 * core > componentes > modulos
 */

if (window.top === window) { // [xusoO] Evitar que se ejecute dentro de los iframes WYSIWYG
	// Lanza la carga prematura
	SHURSCRIPT.core.initializeEagerly();

	// Programa la carga normal
	jQuery(document).ready(SHURSCRIPT.core.initialize);
}
