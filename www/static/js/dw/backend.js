
/*
 * backend
 */

define([
    './backend/syncChart',
    './backend/initializeSignUp',
    './backend/initLanguageLinks',
    './backend/initializeLogout',
    './backend/snapshot',
    './backend/checkPassword',
    './backend/ui/ColorSelector',
    './backend/ui/NumberStepper',
    './backend/popupChart',
    './backend/resendActivationMail',
    './backend/notification',
    './backend/setUserData',
    './backend/cmsMode',
    ],

function(syncChart, initializeSignUp, initLanguageLinks, initializeLogout,
    snapshot, checkPassword, ColorSelector, NumberStepper, popupChart,
    resendActivationMail, notification, setUserData, cmsMode) {

    var backend = {};

    _.extend(backend, {
        init: function() {
            // syncChart(dw.backend.currentChart);
            initializeSignUp();
            initLanguageLinks();
            initializeLogout();

            // init custom jquery ui
            ColorSelector();
            NumberStepper();

            this.cmsMode.init();

            $('a[data-toggle=modal]').click(function(e) {
                var a = $(e.target),
                    tgt = $(a.data('target'));
                tgt.modal();
            });
        },

        syncChart: syncChart,
        popupChart: popupChart,
        snapshot: snapshot,
        checkPassword: checkPassword,
        resendActivationMail: resendActivationMail,
        setUserData: setUserData,
        cmsMode: cmsMode

    }, notification);

    return backend;

});