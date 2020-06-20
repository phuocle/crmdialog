# Open Form Dialog

- How to open form on Center or Side
- Pass parameters to form
- Read object return back from from

## async/await

```js
async function onOpen(executionContext) {
    const position = {
        Center: 1,
        Side: 2
    }
    const options = {
        position: position.Center,
        width: 500,
        height: 300
    };
    const params = {
        //...
    };
    const result = await Xrm.Navigation.openDialog("pl_dialog_name", options, params);
    //result.parameters is the object return by form dialog
}

```

## Promise

```js
function onOpen(executionContext) {
    var position = {
        Center: 1,
        Side: 2
    }
    var options = {
        position: position.Side,
        width: 500
    };
    var params = {
        //...
    };
    Xrm.Navigation.openDialog("pl_dialog_name", options, params).then(
        function(result){
            //result.parameters is the object return by form dialog
        },
        function(error){

        }
    );
}
```
