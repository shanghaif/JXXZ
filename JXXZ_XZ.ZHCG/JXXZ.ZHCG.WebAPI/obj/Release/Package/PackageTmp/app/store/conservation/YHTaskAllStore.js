﻿Ext.define('TianZun.store.conservation.YHTaskAllStore', {
    extend: 'Ext.data.Store',
    //model: 'TianZun.model.conservation.ConservationunitModel',
    pageSize: configs.PageSize,
    remoteFilter: true,
    proxy: {
        type: 'ajax',
        method: "GET",
        url: configs.WebApi + 'api/YhTask/GetAllYhtaskList',
        reader: {
            type: 'json',
            rootProperty: 'Items',
            totalProperty: 'Total',
            idProperty: 'ID'
        }
    },
    autoLoad: true
});