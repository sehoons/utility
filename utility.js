//특정 필드의 값을 가져 옴
function getInputValue(cssItem){
    console.log('으아아ㅏ아아아악!!')
    let nativeInputValueGetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").get;
    const inputText = nativeInputValueGetter.call(cssItem);

    return inputText;
}

//특정 필드의 값을 강제로 수정함
function setInputValue(cssItem, value){
    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(cssItem, value);
    let newEvent = new Event('input', { bubbles: true});
    cssItem.dispatchEvent(newEvent);
}

