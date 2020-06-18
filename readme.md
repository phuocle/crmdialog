Friends, did you check [my announce crmdialog](https://www.phuocle.net/post/2020-06-21-crmdialog/)? If no, please check it before you continue

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

- [Use crmdialog](docs)
- [Open form dialog](docs/others/OpenFormDialog)
- [Pass data to form](docs/others/PassDataToForm)
- [Read data from dialog after from closed](docs/others/ReadDataAfterFormClosed)
- [Move to other tab](docs/others/MoveToOtherTab)
- [Close form](docs/others/CloseForm)
- [Form dialog options](docs/others/FormDialogOptions)
- [PCF](docs/others/PCF)

## Examples

An easy to learn **```crmdialog```** by doing the examples

- [Find User Id](examples/example01)
- [New Assign](examples/example02)
