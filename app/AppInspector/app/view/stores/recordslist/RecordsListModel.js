/**
 * @class   AI.view.stores.recordslist.RecordsListModel
 * @extends Ext.app.ViewModel
 */
Ext.define('AI.view.stores.recordslist.RecordsListModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.recordslist',

    requires: [
        'Ext.data.reader.Json',
        'AI.ux.data.proxy.InspectedWindow',
        'AI.util.Store'
    ],

    stores: {
        Records: {
            storeId : 'Records',
            fields  : ['id', 'modelData', 'rawData'],
            sorters : 'id',
            pageSize: 50,
            proxy   : {
                type  : 'inspectedwindow',
                evalFn: 'AI.util.Store.getRecords',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});
