sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sit.demoapp.demoapp.controller.View1", {

        onInit() {
            this._assist = new sap.ui.model.json.JSONModel({});
            this._loadData();
        },


        _loadData() {
            var oMydata = new sap.ui.model.json.JSONModel();
            oMydata.loadData("data/data.json", null, false);
            this._assist.setProperty('/count', oMydata.getData().results.length);
            this.getView().setModel(oMydata);
        },

        onItemPressed: function (event) {
            MessageToast.show('A line is pressed');
        },

    });
});
