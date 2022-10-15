var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  const resultSet = [];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  const children = [...startEl.children]
  if(matchFunc(startEl)) resultSet.push(startEl)

  children.forEach(e => resultSet.push(...traverseDomAndCollectElements(matchFunc, e)))

  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#") return "id"
  if(selector[0] === ".") return "class"
  if(selector.split('').includes(".")) return "tag.class"

  return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);

  selector = selector[0] === "#" || selector[0] === "." ? selector.slice(1) : selector

  const getMatchFunction = {
    "id": element => element["id"] == selector,
    "class": element => [...element.classList].includes(selector),
    "tag.class": element => element["tagName"] == selector.split('.')[0].toUpperCase() && [...element.classList].includes(selector.split('.')[1]),
    "tag": element => element.tagName == selector.toUpperCase()
  }

  return getMatchFunction[selectorType]
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
