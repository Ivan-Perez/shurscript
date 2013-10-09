(function ($, SHURSCRIPT, undefined) {
    'use strict';

    var ALL = 'ALL',
        NO_FRONTPAGE = 'NO_FRONTPAGE';

    // Registra Objeto base para modulos
    SHURSCRIPT.protoModule = {
        enabledByDefault: true,
        additionalLoadCheck: function () {return true;},
        getPreferences: function () {return {};},
        domain: NO_FRONTPAGE,
        isValidPage: function () {
            /*
            Comprueba si en la pagina actual el modulo
            debe lanzarse.
            */
            var domain = this.domain,
                page = SHURSCRIPT.env.page;

            if (typeof domain === 'string') {
                if (domain === ALL) {
                    return true;
                } else if (domain === NO_FRONTPAGE) {
                    return page !== '/';
                }
                return page === domain;
            }

            // Si array, true si page en array
            return (domain.indexOf(page) > -1);
        }
    };

})(jQuery, SHURSCRIPT);