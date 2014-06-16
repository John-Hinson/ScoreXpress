/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.MessageBox'
    ],
    models: [
        'KPIModel',
        'LowIsBetter'
    ],
    stores: [
        'KPIStore',
        'LowIsBetterStore'
    ],
    views: [
        'Mainview',
        'ScoreXpressForm',
        'scoreList'
    ],
    controllers: [
        'ScoreXpress'
    ],
    isIconPrecomposed: false,
    name: 'ScoreXpress',
    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '640x1096': 'resources/startup/640x1096.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {

        Ext.create('ScoreXpress.view.Mainview', {fullscreen: true});
    }

});