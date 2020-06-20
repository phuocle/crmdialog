# BLOCKS

The following table list the blocks you can drag'n'drop

- **```Block Level 1```** can drag'n'drop to **```Main form```**
- **```Block Level 2```** can drag'n'drop to **```Block Level 1```**
- ...

|**Block Level 1**|**Block Level 2**|**Block Level 3**|**Block Level 4**|**Notes**|
|-|-|-|-|-|
|[MetaData](MetaData)||||**```Default metadata```**, **```cannot delete```** or **```add new```**
||[Parameter](MetaData/Parameter)
||[Event](MetaData/Event)
||[JavaScript](MetaData/JavaScript)
||[PCF](MetaData/PCF)
|[Header](Header)||||Only **```1 header```** on **```form```**
||[Label](Controls/Label)
|[Tabs](Tabs)||||**```Default tabs```**, **```cannot delete```** or **```add new```**
||[Tab](Tabs/Tab)|||<ul><li>Can **```add multiple tab```** on **```form```**</li><li>**```First tab```** display **```OnLoad```**</li><li>**```Other tab```** need use [move to another tab](../others/MoveToOtherTab) to display</li></ul>
|||[TabHeader](Tabs/Tab/TabHeader)||Only **```1 tabheader```** to **```tab```**
||||[Label](Controls/Label)
|||[Section](Tabs/Tab/Section)||<ul><li>Can **```add multiple section```** to **```tab```**</li><li>Only **```3 section```** on **```tab```**</li><li>**```Section```** render as **```column```** on **```form```**</li></ul>
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
|||[TabFooter](Tabs/Tab/TabFooter)||Only **```1 tabfooter```** to **```tab```**
||||[Button](Controls/Button)
|[Footer](Footer)||||Only **```1 footer```** on **```form```**
||[Button](Controls/Button)||
