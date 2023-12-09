let input = document.querySelector("#root > main > div > div > div > div.Trade_trade__aside__Vh1Sl > div > div.SearchContainer_trade-search-container__2N60q > div.search.Search_search--trade__JS55Z > div > div > div").firstChild;
let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
nativeInputValueSetter.call(input, '');

let newEvent = new Event('input', { bubbles: true});
input.dispatchEvent(newEvent);