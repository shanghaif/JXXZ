﻿Ext.define('TianZun.store.citizenservice.GetCitizenImages', {
    extend: 'Ext.data.Store',

    proxy: {
        type: 'ajax',
        method: "GET",
        url: configs.WebApi + 'api/CitizenEvent/GetCitizenServicesAttr',
    },
    autoLoad: true
});