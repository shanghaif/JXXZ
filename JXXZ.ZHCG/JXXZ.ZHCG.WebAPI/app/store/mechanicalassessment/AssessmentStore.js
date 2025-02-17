﻿Ext.define('TianZun.store.mechanicalassessment.AssessmentStore', {
    extend: 'Ext.data.Store',
    pageSize: configs.PageSize,
    remoteFilter: true,
    proxy: {
        type: 'ajax',
        method: "GET",
        url: configs.WebApi + 'api/MechanicalExam/GetMechExamList',
        reader: {
            type: 'json',
            rootProperty: 'Items',
            totalProperty: 'Total',
            idProperty: 'ID'
        }
    },
    autoLoad: true
});