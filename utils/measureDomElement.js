// measures DOM element before it was appended to DOM

function measureDomElement(el, fn) {
  var pV = el.style.visibility,
    pP = el.style.position;

  el.style.visibility = "hidden";
  el.style.position = "absolute";

  document.body.appendChild(el);
  var result = Number(fn(el));
  el.parentNode.removeChild(el);

  el.style.visibility = pV;
  el.style.position = pP;
  return result;
}

export default measureDomElement;

// Usage:
// var div = document.createElement('div');
// div.innerHTML = "<p>Hello</p><br/>";

// alert(div.offsetHeight); // 0

// Width:
// alert(measureDomElement(div, function(el){return el.offsetWidth})); //

// Heigt:
// alert(measureDomElement(div, function(el){return el.offsetHeight})); // 68
