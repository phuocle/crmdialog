## Goal

Find User Id of User Name.

![http://crmdialog.phuocle.net](images/01.gif)

## Howto (5 steps)

### 1. Design form with **```crmdialog```**

|Action|Properties|Description
|-|-|-|
|Select [MetaData](../../docs/blocks/MetaData) block|![http://crmdialog.phuocle.net](images/01.png)|<ul><li><p>**```pl_example01```** dialog name</p><p>*Noted:* Dialog name is [logical name](../../docs/others/ControlId) and should **```unquie name```** of your organization</p></li><li>**```1033```** English(United States) language code</li><li>**```1.0.0.0```** solution version</li><li>**```Example 01```** the short description of the form</li><li>**```Find User Id```** the full description of the form</li><li><p>**```example01.OnLoad```** OnLoad event of form</p><p>*Noted:* you cannot select it because the [event OnLoad](../../docs/blocks/MetaData/Event) not exist on form, you will back and update it later</p></li></ul>
|From [blocks](../../docs/blocks) drag [event](../../docs/blocks/MetaData/Event) and drop to [MetaData](../../docs/blocks/MetaData) block|![http://crmdialog.phuocle.net](images/02.png)|<p><ul><li>**```OnLoad```**</li><li>**```Enabled```** yes</li><li>**```pl_/examples/example01.js```** WebResource name</li><li>**```example01.OnLoad```** trigger function name</li><li>**```Execution Context```** yes, pass the execution context as the first parameter to trigger function</li><li>**```Parameters```** pass as the first and/or second parameter to trigger function</li></ul></p><p>*Noted:* Remember select [MetaData](../../docs/blocks/MetaData) block to update the **```OnLoad```** property after you define this [event](../../docs/blocks/MetaData/Event)</p>
|Continue add 2 [events](../../docs/blocks/MetaData/Event) to [MetaData](../../docs/blocks/MetaData) block|![http://crmdialog.phuocle.net](images/03.png)![http://crmdialog.phuocle.net](images/04.png)
|From [blocks](../../docs/blocks) drag [Header](../../docs/blocks/Header) and drop to [Main Form](../../)
|From [blocks](../../docs/blocks) drag [label](../../docs/blocks/controls/Label) and drop to [Header](../../docs/blocks/Header) block|![http://crmdialog.phuocle.net](images/05.png)|<ul><li>**```pl_label_header```** the [logical name](../../docs/others/ControlId) of [label](../../docs/blocks/controls/Label) control</li><li>**```FIND USER ID```** the text you want to display</li><li>**```1```**</li><li>**```Is Title```** yes (Font bigger)</li><li>**```Visible```** yes</li></ul>
|Continue add [label](../../docs/blocks/controls/Label) to [Header](../../docs/blocks/Header) block|![http://crmdialog.phuocle.net](images/06.png)
|From [blocks](../../docs/blocks) drag [tab](../../docs/blocks/Tabs/Tab) and drop to [Tabs](../../docs/blocks/Tabs) block|![http://crmdialog.phuocle.net](images/07.png)|<ul><li>**```tab_35f76bc6_94fa_4e2a_9877_59eef45f6134```** is the auto generator [logical name](../../docs/others/ControlId) of [tab](../../docs/blocks/Tabs/Tab) control. You can change it.</li><li>**```Visible```** yes to display [tab](../../docs/blocks/Tabs/Tab).</li></ul>
|[Section](../../docs/blocks/Tabs/Tab/Section) (auto create when you drop [tab](../../docs/blocks/Tabs/Tab) to [Tabs](../../docs/blocks/Tabs) block)|![http://crmdialog.phuocle.net](images/08.png)|<ul><li>**```section_1be6841e_eaad_4ace_bc51_974ab062d680```** is the auto generator [logical name](../../docs/others/ControlId) of [section](../../docs/blocks/Tabs/Section) control. You can change it.</li><li>**```BlankLabel```** keep it blank if you don't want to show the [section](../../docs/blocks/Tabs/Section) label</li><li>**```115```** the label width of [section](../../docs/blocks/Tabs/Section)</li><li>**```Left```** label alignment of [section](../../docs/blocks/Tabs/Section)</li><li>**```Left```** label position of [section](../../docs/blocks/Tabs/Section)</li><li>**```Visible```** yes to display [section](../../docs/blocks/Tabs/Section)</li></ul>
|From [blocks](../../docs/blocks) drag [textbox](../../docs/controls/TextBox) and drop to [Section](../../docs/blocks/Tabs/Section)|![http://crmdialog.phuocle.net](images/09.png)|<ul><li>**```pl_txt_username```** the [logical name](../../docs/others/ControlId) of [textbox](../../docs/controls/TextBox) control and should **```unquie name```** on your form</p></li><li>**```User Name```** the label of [textbox](../../docs/controls/TextBox)</li><li>**```Text```** default. You can select another type: **```Email```** or **```URL```**</li><li>**```100```** max length value</li><li>**```Required```** yes</li><li>**```Disabled```** no</li><li>**```Visible```** yes</li><li>**```On Change```** event?</li><li>**```PCF```** bind to PCF control. Please check [PCF example](../example02)</li></ul>
|Continue add another [textbox](../../docs/controls/TextBox) to [Section](../../docs/blocks/Tabs/Section)|![http://crmdialog.phuocle.net](images/10.png)
|From [blocks](../../docs/blocks) drag [Footer](../../docs/blocks/Footer) and drop to [Main Form](../../)
|From [blocks](../../docs/blocks) drag [button](../../docs/controls/Button) and drop to [Footer](../../docs/blocks/Footer)|![http://crmdialog.phuocle.net](images/11.png)|<ul><li>**```pl_button_find```**</li><li>**```Find```**</li><li>**```Disabled```** no</li><li>**```Visibled```** yes</li><li>**```example01.OnFindClick```** [event](../../docs/blocks/MetaData/Event) you already define above</li></ul>
|Continue add another [button](../../docs/controls/Button) to [Footer](../../docs/blocks/Footer)|![http://crmdialog.phuocle.net](images/12.png)

#### Final result with **```crmdialog```**

![http://crmdialog.phuocle.net](images/13.png)

### 2. **```example01.js```**

When design form, we used 3 events

- **```example01.OnLoad```**
  - Your Dynamics 365 CRM/CDS skill here ... nothing to say
- **```example01.OnFindClick```**
  - Your Dynamics 365 CRM/CDS skill here ... nothing to say
- **```example01.OnCloseClick```** help you
  - Close form

And we need another event to open form

- **```example01.OnOpen```** help you
  - Pass paramter to form
  - Open form dialog
  - Wait the data return back

>The following code you see I used **```formContext.getAttribute(...)```** and **```formContext.data.attributes.get(...)```**\
**You know why ?** Because, from the link: [Collections in the formContext object model](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/clientapi-form-context#collections-in-the-formcontext-object-model) **```formContext.data.attributes```** provides access to **non-entity bound** attributes.

#### Full **```example01.js```** code (JS ES6 code)

```js
"use strict";
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

### 3. Export solution from **```crmdialog```** then import solution to Dynamics 365 CRM/CDS

>Make sure you upload **```example01.js```** as your WebResource with **```unquie name```** = **```pl_/examples/example01.js```** to your Dynamics 365 CRM/CDS, otherwise you get fail when import solution.

![http://crmdialog.phuocle.net](images/02.gif)

### 4. Fire **```example01.OnOpen```** to open the dialog form (testing only)

- On ribbon button
- Or OnLoad
- Or some where ....

### 5. Result and debugger

![http://crmdialog.phuocle.net](images/03.gif)

# Conclusion

This example show you howto:

- Pass parameter value from parent form to dialog form
- Open dialog form
- OOB Dynamics 365 CRM/CDS javascript code (OnLoad, WebApi)
- Close dialog form
- Wait data return from dialog form and read it
- Don't touch any **```FormXml```** code. (But you can open the [export solution](../../docs/others/ExportSolution) file to check **```FormXml```** code)
