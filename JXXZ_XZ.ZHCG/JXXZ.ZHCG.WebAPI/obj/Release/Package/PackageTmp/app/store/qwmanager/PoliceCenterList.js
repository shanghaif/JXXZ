﻿Ext.define('TianZun.store.qwmanager.PoliceCenterList', {
    extend: 'Ext.data.Store',
    //model: 'TianZun.model.legalcase.CaseSource',

    pageSize: configs.PageSize,
    remoteFilter: true,
    proxy: {
        type: 'ajax',
        method: "GET",
        url: configs.WebApi + 'api/PoliceCenter/GetPoliceCenterList',
        reader: {
            type: 'json',
            rootProperty: 'Items',
            totalProperty: 'Total',
            idProperty: 'ID'
        }
    },
    autoLoad: true
});