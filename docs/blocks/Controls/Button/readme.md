# Button

Render a button

## Draggable To

- [Footer](../Footer)
- [TabFooter](../TabFooter)

## Properties

![http://crmgialog.phuocle.net](../../images/03.png)

|Name|Required|Description|Where
|-|-|-|-|
|Control Id|x|The [Control Id](../../others/ControlId)
|Label|x|Then label show on the button
|Disabled||Disabled button OnLoad, If yes|![http://crmgialog.phuocle.net](../../images/04.png)
|Visible||Hide button OnLoad, If no|![http://crmgialog.phuocle.net](../../images/05.png)
|On Click|x|Fire [Event](../Event) when user click on the button

## FormXml

```xml
<cell id="{a523b067-3c98-4d70-b826-9c542f7d4b5c}" visible="true">
    <labels>
        <label description="Close" languagecode="1033" />
    </labels>
    <control uniqueid="{88e43bc3-386e-410d-98bb-07c9828325d3}" id="pl_button_close" classid="{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}" disabled="false" isunbound="true" />
</cell>
```
