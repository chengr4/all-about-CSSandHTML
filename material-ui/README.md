# Material UI (MUI)

- [Better Design](#better-design)
- [Grid](#grid)
- [TextField](#textfield)
- [Autocomplete](#autocomplete)
- [Tooltip](#tooltip)

## Better Design

1. Set `Paper` inside `Grid` (Maybe)

## Grid

### References

1. https://mui.com/components/grid/#main-content
2. 

## TextField

```javascript
<TextField 
varient="outlined" // 邊匡
onChange={}
error
helperText
/>
```

Props:

| Name | Description |
| ---- | ----------- |
| error | If true, the label will be displayed in an error state |

### References

1. [The Net Ninja; Material UI Tutorial #7 - Text Fields (2021.3)](https://youtu.be/sTdt2cJS2dg)

## Autocomplete

Props:

| Name | Description |
| ---- | ----------- |
| autoComplete | E.g. Input "The" in `TextField`, and in options select "The Apple",  "Apple" will be also appeared in `TextField` |
| autoSelect | If true, the selected option becomes the value of the input when the Autocomplete loses focus (work with keyboard) |
| clearOnEscape | Clicking on `esc` can clear `Textfield` (feel not useful) |
| disableCloseOnSelect | Selecting a value in options will not close the popup |
| disableClearable | If true, the input in `Textfield` can't be cleared |
| disableListWrap | Can not loop in options |
| includeInputInList | If true, the highlight can move to the input (其他的只能在 options 遊走) |
| openOnFocus | If true, the popup will open on input focus (I ignore this one) |

## Tooltip

![Tooltip Example](./images/tooltip-1)

