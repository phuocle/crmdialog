﻿"use strict";//
var example02 = (function () {
    "use strict";
    const position = {
        Center: 1,
        Side: 2
    }
    function getResource(key) {
        return Xrm.Utility.getResourceString("pl_/resources/resource", key);
    }
    function safeGuid(guid) {
        return guid.replace("{", "").replace("}", "");
    }
    function translateLanguage(executionContext) {
        const formContext = executionContext.getFormContext();
        formContext.getControl("pl_header_title").setLabel(getResource("LABEL_EX02_HEADER_TITLE"));
        formContext.getControl("pl_header_note").setLabel(getResource("LABEL_EX02_HEADER_NOTE"));
        formContext.getControl("pl_tab1_tabheader_note").setLabel(getResource("LABEL_EX02_TAB1_TABHEADER"));
        formContext.getControl("pl_optionset_assignto").setLabel(getResource("LABEL_EX02_TAB1_ASSIGN_TO"));
        formContext.getControl("pl_button_tab1_next").setLabel(getResource("BUTTON_NEXT"));
        formContext.getControl("pl_button_tab1_cancel").setLabel(getResource("BUTTON_CANCEL"));
        formContext.getControl("pl_lookup_user").setLabel(getResource("LABEL_EX02_TAB2_USER"));
        formContext.getControl("pl_lookup_team").setLabel(getResource("LABEL_EX02_TAB2_TEAM"));
        formContext.getControl("pl_button_tab2_previous").setLabel(getResource("BUTTON_PREVIOUS"));
        formContext.getControl("pl_button_tab2_cancel").setLabel(getResource("BUTTON_CANCEL"));
        formContext.getControl("pl_button_tab2_assign").setLabel(getResource("BUTTON_ASSIGN"));
    }
    async function onOpen(executionContext) {
        const options = {
            position: position.Side,
            width: 500,
            height: 300
        };
        const formContext = executionContext;
        const params = {
            pl_in_name: formContext.getAttribute("pl_name").getValue(),
            pl_in_id: formContext.data.entity.getId()
        };
        await Xrm.Navigation.openDialog("pl_example02", options, params)
    }
    async function onLoad(executionContext) {
        translateLanguage(executionContext);
        const formContext = executionContext.getFormContext();
        const name = formContext.data.attributes.get("pl_in_name").getValue();
        const controlLabelHeaderNote = formContext.ui.controls.get("pl_header_note");
        controlLabelHeaderNote.setLabel(controlLabelHeaderNote.getLabel().replace("{0}", name));
        const controlOptionSetAssignTo = formContext.getControl("pl_optionset_assignto");
        controlOptionSetAssignTo.clearOptions();
        controlOptionSetAssignTo.addOption({ text: getResource("OPTIONSET_EX02_ME"), value: 50000 });
        controlOptionSetAssignTo.addOption({ text: getResource("OPTIONSET_EX02_USER_AND_TEAM"), value: 50010 });
        formContext.data.attributes.get("pl_optionset_assignto").fireOnChange();
        formContext.data.attributes.get("pl_lookup_user").addOnChange(lookupUserOnChange);
        formContext.data.attributes.get("pl_lookup_team").addOnChange(lookupTeamOnChange);
    }
    async function lookupUserOnChange(executionContext) {
        const formContext = executionContext.getFormContext();
        const user = formContext.data.attributes.get("pl_lookup_user").getValue();
        formContext.getControl("pl_button_tab2_assign").setDisabled(user === null);
    }
    async function lookupTeamOnChange(executionContext) {
        const formContext = executionContext.getFormContext();
        const team = formContext.data.attributes.get("pl_lookup_team").getValue();
        formContext.getControl("pl_button_tab2_assign").setDisabled(team === null);
    }
    async function assignToOnChange(executionContext) {
        const formContext = executionContext.getFormContext();
        const assignTo = formContext.data.attributes.get("pl_optionset_assignto").getValue();
        const labelNote = formContext.getControl("pl_tab2_tabheader_note");
        const lookupUser = formContext.getControl("pl_lookup_user");
        const lookupTeam = formContext.getControl("pl_lookup_team");
        labelNote.setLabel(assignTo === 50000 ? getResource("LABEL_EX02_TAB2_TABHEADER_USER") : getResource("LABEL_EX02_TAB2_TABHEADER_TEAM"));
        lookupUser.setVisible(assignTo === 50000)
        formContext.data.attributes.get("pl_lookup_user").setValue(null);
        formContext.data.attributes.get("pl_lookup_user").fireOnChange();
        lookupTeam.setVisible(assignTo === 50010);
        formContext.data.attributes.get("pl_lookup_team").setValue(null);
        formContext.data.attributes.get("pl_lookup_team").fireOnChange();
    }
    async function moveToClick(executionContext, tab) {
        const formContext = executionContext.getFormContext();
        formContext.ui.moveTo(tab);
    }
    async function onCancelClick(executionContext, tab) {
        const formContext = executionContext.getFormContext();
        formContext.ui.close();
    }
    async function onAssignToClick(executionContext) {
        const formContext = executionContext.getFormContext();
        Xrm.Utility.showProgressIndicator("Processing ...");
        const id = formContext.data.attributes.get("pl_in_id").getValue();
        var request = {
            async: true,
            entityName: "pl_dialog",
            entityId: safeGuid(id),
            entity: {}
        };
        const assignTo = formContext.data.attributes.get("pl_optionset_assignto").getValue();
        if (assignTo === 50000) {
            const userId = formContext.data.attributes.get("pl_lookup_user").getValue()[0].id;
            request.entity["ownerid@odata.bind"] = `/systemusers(${safeGuid(userId)})`
        }
        else {
            const teamId = formContext.data.attributes.get("pl_lookup_team").getValue()[0].id;
            request.entity["ownerid@odata.bind"] = `/teams(${safeGuid(teamId)})`
        }
        await WebApiClient.Update(request);
        Xrm.Utility.closeProgressIndicator();
        formContext.ui.close();
    }
    return {
        OnOpen: onOpen,
        OnLoad: onLoad,
        AssignToOnChange: assignToOnChange,
        MoveToClick: moveToClick,
        OnCancelClick: onCancelClick,
        OnAssignToClick: onAssignToClick
    };
})();