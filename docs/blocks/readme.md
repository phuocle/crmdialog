# BLOCKS

The following table list the blocks you can drag'n'drop to Form designer.

- Block Level 1 can drag'n'drop to Main form designer.
- Block Level 2 can drag'n'drop to Block Level 1
- ...

|Block Level 1|Block Level 2|Block Level 3|Block Level 4|Notes|
|-|-|-|-|-|
|[MetaData](MetaData)||||Default block, you cannot add/delete
||[Parameter](MetaData/Parameter)
||[Event](MetaData/Event)
||[JavaScript](MetaData/JavaScript)
||[PCF](MetaData/PCF)
|[Header](Header)||||You can add only 1 header
||[Label](Controls/Label)
|[Tabs](Tabs)||||Default tabs, you cannot add/delete
||[Tab](Tabs/Tab)|||You can add more than 1 tab. First tab will display onload, otherwise you need use the js code to show antoher tab.
|||[TabHeader](Tabs/Tab/TabHeader)||You can add only 1 tabheader to tab
||||[Label](Controls/Label)
|||[Section](Tabs/Tab/Section)||You can add more than 1 section to tab. But limited to 3
||||[Label](Controls/Label)
||||[TextBox](Controls/TextBox)
||||[DateTime](Controls/DateTime)
||||[Number](Controls/Number)
||||[Lookup](Controls/Lookup)
||||[Iframe](Controls/Iframe)
||||[Spacer](Controls/Spacer)
||||[TextArea](Controls/TextArea)
||||[DropDown](Controls/DropDown)
||||[OptionSet](Controls/OptionSet)
||||[TwoOptions](Controls/TwoOptions)
||||[Subgrid](Controls/Subgrid)
||||[Chart](Controls/Chart)
|||[TabFooter](Tabs/Tab/TabFooter)||You can add only 1 tabfooter to tab
||||[Button](Controls/Button)
|[Footer](Footer)||||You can add only 1 footer
||[Button](Controls/Button)||
