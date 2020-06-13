# Example01

## Goal

Find User Id of User Name

## Demo

![http://crmdialog.phuocle.net](images/01.gif)

## Howto

### Design form dialog by **crmdialog**

|Action|Properties|Description
|-|-|-|-|
|Select [MetaData](../../docs/blocks/MetaData) block|![http://crmdialog.phuocle.net](images/01.png)|<ul><li><p>**```pl_example01```** dialog name</p><p>*Noted:* Dialog name should unquie name of your organization</p></li><li>**```1033```** English(United States) language code</li><li>**```1.0.0.0```** solution version</li><li>**```Example 01```** the short description of the form</li><li>**```Find User Id```** the full description of the form</li><li><p>**```example01.OnLoad```** event fire when form OnLoad.</p><p>*Noted:* you cannot select it because the [event OnLoad](../../docs/blocks/MetaData/Event) not exist on form, you will back and update it later</p></li></ul>
|From [blocks](../../docs/blocks) drag [Event](../../docs/blocks/MetaData/Event) and drop to [MetaData](../../docs/blocks/MetaData) block|![http://crmdialog.phuocle.net](images/02.png)|<ul><li>**```OnLoad```** OnLoad event</li><li>**```Enabled```** yes</li><li>**```pl_/examples/example01.js```** WebResource name</li><li>**```example01.OnLoad```** trigger function</li><li>**```Execution Context```** yes, pass the execution context as the first parameter to trigger function</li><li>**```Parameters```** keep it blank, if not blank pass as the second parameter to trigger function</li></ul>


## Full JavaScript Code

```js
"use strict";//
var example01 = (function () {
    "use strict";
    const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
    const position = {
        Center: 1,
        Side: 2
    }
    async function onOpen(executionContext) {
        const options = {
            position: position.Center,
            width: 530,
            height: 270
        };
        const { userName } = Xrm.Utility.getGlobalContext().userSettings;
        const params = {
            pl_in_username: userName
        };
        const result = await Xrm.Navigation.openDialog("pl_example01", options, params)
        const userId = result.parameters.pl_out_userid;
        const formContext = executionContext;
        formContext.getAttribute("pl_username").setValue(userName);
        formContext.getAttribute("pl_userid").setValue(userId);
    }
    async function onLoad(executionContext) {
        const formContext = executionContext.getFormContext();
        const userName = formContext.data.attributes.get("pl_in_username").getValue();
        formContext.data.attributes.get("pl_txt_username").setValue(userName);
    }
    async function onFindClick(executionContext) {
        const formContext = executionContext.getFormContext();
        const userName = formContext.data.attributes.get("pl_in_username").getValue();
        const fetchData = {
            fullname: userName
        };
        let fetchXml = `
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='systemuser'>
    <attribute name='systemuserid'/>
    <filter type='and'>
      <condition attribute='fullname' operator='eq' value='${fetchData.fullname}'/>
    </filter>
  </entity>
</fetch>
`;
        fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);
        Xrm.Utility.showProgressIndicator("Processing ...");
        const response = await Xrm.WebApi.retrieveMultipleRecords("systemuser", fetchXml);
        Xrm.Utility.closeProgressIndicator();
        let userId = EMPTY_GUID;
        if (response.entities.length === 1) {
            const entity = response.entities[0];
            userId = entity.systemuserid;
        }
        formContext.data.attributes.get("pl_txt_userid").setValue(userId.toUpperCase());
    }
    async function onCloseClick(executionContext) {
        const formContext = executionContext.getFormContext();
        const userId = formContext.data.attributes.get("pl_txt_userid").getValue();
        formContext.data.attributes.get("pl_out_userid").setValue(userId);
        formContext.ui.close();
    }
    return {
        OnOpen: onOpen,
        OnLoad: onLoad,
        OnFindClick: onFindClick,
        OnCloseClick: onCloseClick
    };
})();
```
