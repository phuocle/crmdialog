# DateTime

##### 1. DateAndTime

![http://crmdialog.phuocle.net](images/02.png)

##### 2. Date

![http://crmdialog.phuocle.net](images/03.png)

## Draggable

- [Section](../../Section)

## Properties

![http://crmdialog.phuocle.net](images/01.png)

|Name|Required|Description|A picture is worth a thousand words
|-|-|-|-|
|Control Id|**x**|The [control id](../../../others/ControlId)
|Label||The display label|
|Type|**x**|<ul><li>**```DateAndTime```**</li><li>**```Date```**</li></ul>|
|Disabled|||![http://crmdialog.phuocle.net](../../../images/04.png)
|Visible|||![http://crmdialog.phuocle.net](../../../images/05.png)
|On Change||Fire [event](../../MetaData/Event) when user change the value
|PCF||Bind this control to [PCF](../../MetaData/PCF) control

## FormXml

```xml
<row>
    <cell id="{d474008e-eb1a-484a-99c4-43b16a01fb42}" visible="true">
        <labels>
            <label description="Date Only" languagecode="1033" />
        </labels>
        <control uniqueid="{e92814dd-8a88-4c9f-b3a7-477d527b1d7c}" id="pl_datecontrol" classid="{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}" isrequired="true" disabled="false" isunbound="true">
            <parameters>
                <Format>DateAndTime</Format>
            </parameters>
        </control>
    </cell>
</row>
```
