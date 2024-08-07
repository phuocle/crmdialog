# **```Archived```**, check newer version at: [Dataverse Dialog Builder](https://github.com/phuocle/Dataverse-Dialog-Builder)

Friends, did you check [my announce **```crmdialog```**](https://www.phuocle.net/post/2020-06-20-crmdialog/)? If no, please check it before you continue

## 😠Unsupported😠

**```YES```**, until now

>I believed in the future, this will be **```supported```**. Let see.

## Why unsupported

Because we use **```2```** **```JavaScript```** functions that **```not```** document

```js
Xrm.Navigation.openDialog(...)
```

and

```js
formContext.ui.moveTo(...)
```

- **```Xrm.Navigation```** have document at [Xrm.Navigation](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation), but the function **```openDialog```** not there 😠
- **```formContext.ui```** have document at [formContext.ui](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui), but the function **```moveTo```** not there  😠

Because **```not```** document, mean **```unsupported```**. Easy !!!

## Howtos

- [Use **```crmdialog```**](docs)
- [Open form dialog](docs/others/OpenFormDialog)
- [Move to other tab](docs/others/MoveToOtherTab)
- [Close form dialog](docs/others/CloseForm)
- [PCF references](docs/others/PCF)

## Examples

An easy to learn **```crmdialog```** by doing the examples

- [Find User Id](examples/example01)
- [New Assign](examples/example02)
