/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({

    requires: [
        'AI.util.i18n',
        'Ext.window.MessageBox'
    ],
    models: [
        'mvc.Tree',
        'mvc.Listeners'
    ],
    stores: [
        'MVC',
        'mvc.Listeners',
        'mvc.Records'
    ],
    views: [
        'mvc.Listeners',
        'Records',
        'mvc.Records'
    ],
    controllers: [
        'Main',
        'Components',
        'Stores',
        'Layouts',
        'Events',
        'MVC'
    ],
    name: 'AI',

    launch: function() {
        Ext.create('AI.view.MainView');
    }

});
