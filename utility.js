function getInputValue(cssItem){
    let nativeInputValueGetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").get;
    const inputText = nativeInputValueGetter.call(cssItem);

    return inputText;
}

function setInputValue(cssItem, value){
    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(cssItem, value);
    let newEvent = new Event('input', { bubbles: true});
    cssItem.dispatchEvent(newEvent);
}

