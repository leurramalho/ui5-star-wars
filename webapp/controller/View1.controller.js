sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("ovly.star_wars.controller.View1", {
	
		onInit: function () {
			this.identificador = this.byId("identificador"); // sap.m.SearchField
			
			this.oModel = this.getOwnerComponent().getModel(); // new JSONModel();
			// this.getView().setModel(this.oModel);
			this.oModel.attachRequestCompleted(this.onRequestCompleted, this);
			
			// @type sap.ui.model.json.JSONModel
			this.oOptionsModel = this.getOwnerComponent().getModel("options");
			this.oOptionsModel.setProperty("/id", 1);
			this.oOptionsModel.setProperty("/ocupado", false);
			
			// this.getView().setModel(this.oOptionsModel, "options");
			 //this.byId("form").setModel(this.oOptionsModel, "options");
		},	
		/**
		 *@memberOf ovly.star_wars.controller.View1
		 */
		onPressBuscar: function (oEvent) {
			//This code was generated by the layout editor.
			var sId = this.oOptionsModel.getProperty("/id"); //this.identificador.getValue();
			
			this.oOptionsModel.setProperty("/ocupado", true);
			this.oModel.loadData("https://swapi.co/api/people/" + sId +"/");
			
		},
		
		onRequestCompleted: function (oEvent) {
			//This code was generated by the layout editor.
			this.oOptionsModel.setProperty("/ocupado", false);
		},

		onPressDocs: function (oEvent) {
			//This code was generated by the layout editor.
		}
	});
});