# crmdialog

Friends, did you check [my announce crmdialog](https://www.phuocle.net/post/2020-06-14-crmdialog/)? If no, please check it before you continue.

## Unsupported

**YES**, It ```true``` until now

>But, I believed in the future, this will be **supported**. Let see.

## Why unsupported

Because we use ```2``` JavaScript function that **not** document

```js
Xrm.Navigation.openDialog(...)
```

and

```js
formContext.ui.moveTo(...)
```

```Xrm.Navigation``` have document at [Xrm.Navigation](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation), but the function ```openDialog``` not there 😠\
```formContext.ui``` have document at [formContext.ui](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui), but the function ```moveTo``` not there  😠

Because **not** document, it mean **unsupported**. Easy !!!

If your project need a dialog **supported**, please find another way.

## Howtos

- [Use crmdialog](docs)

## Examples

An easy to learn **crmdialog** by doing the examples

- [Find User Id](examples/example01)
