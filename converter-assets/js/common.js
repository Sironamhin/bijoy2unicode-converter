function Insert(field, text) {
  if (document.selection) {
    field.focus();
    sel = document.selection.createRange();
    sel.text = text;
    sel.collapse(true);
    sel.select();
  } else if (field.selectionStart || field.selectionStart == "0") {
    var startPos = field.selectionStart;
    var endPos = field.selectionEnd;
    var scrollTop = field.scrollTop;
    startPos = startPos == -1 ? field.value.length : startPos;
    field.value =
      field.value.substring(0, startPos) +
      text +
      field.value.substring(endPos, field.value.length);
    field.focus();
    field.selectionStart = startPos + text.length;
    field.selectionEnd = startPos + text.length;
    field.scrollTop = scrollTop;
  } else {
    var scrollTop = field.scrollTop;
    field.value += value;
    field.focus();
    field.scrollTop = scrollTop;
  }
}
function RemoveNInsert(field, value, len) {
  if (document.selection) {
    field.focus();
    sel = document.selection.createRange();
    if (field.value.length >= len) {
      sel.moveStart("character", -1 * len);
    }
    sel.text = value;
    sel.collapse(true);
    sel.select();
  } else if (field.selectionStart || field.selectionStart == 0) {
    field.focus();
    var startPos = field.selectionStart - len;
    var endPos = field.selectionEnd;
    var scrollTop = field.scrollTop;
    startPos = startPos == -1 ? field.value.length : startPos;
    field.value =
      field.value.substring(0, startPos) +
      value +
      field.value.substring(endPos, field.value.length);
    field.focus();
    field.selectionStart = startPos + value.length;
    field.selectionEnd = startPos + value.length;
    field.scrollTop = scrollTop;
  } else {
    var scrollTop = field.scrollTop;
    field.value += value;
    field.focus();
    field.scrollTop = scrollTop;
  }
}
function capsDetect(e) {
  if (!e) e = window.event;
  if (!e) return false;
  var theKey = e.which
    ? e.which
    : e.keyCode
    ? e.keyCode
    : e.charCode
    ? e.charCode
    : 0;
  var theShift = e.shiftKey || (e.modifiers && e.modifiers & 4);
  return (
    (theKey > 64 && theKey < 91 && !theShift) ||
    (theKey > 96 && theKey < 123 && theShift)
  );
}
function HideDIV(id) {
  if (document.getElementById) {
    document.getElementById(id).style.display = "none";
  } else {
    if (document.layers) {
      document.id.display = "none";
    } else {
      document.all.id.style.display = "none";
    }
  }
}
function ShowDIV(id) {
  if (document.getElementById) {
    document.getElementById(id).style.display = "block";
  } else {
    if (document.layers) {
      document.id.display = "block";
    } else {
      document.all.id.style.display = "block";
    }
  }
}
function IsBanglaDigit(CUni) {
  if (
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???"
  )
    return true;
  return false;
}
function IsBanglaPreKar(CUni) {
  if (CUni == "???" || CUni == "???" || CUni == "???") return true;
  return false;
}
function IsBanglaPostKar(CUni) {
  if (
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???"
  )
    return true;
  return false;
}
function IsBanglaKar(CUni) {
  if (IsBanglaPreKar(CUni) || IsBanglaPostKar(CUni)) return true;
  return false;
}
function IsBanglaBanjonborno(CUni) {
  if (
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???"
  )
    return true;
  return false;
}
function IsBanglaSoroborno(CUni) {
  if (
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???" ||
    CUni == "???"
  )
    return true;
  return false;
}
function IsBanglaNukta(CUni) {
  if (CUni == "???" || CUni == "???" || CUni == "???") return true;
  return false;
}
function IsBanglaFola(CUni) {
  if (CUni == "??????" || CUni == "??????") return true;
  return false;
}
function IsBanglaHalant(CUni) {
  if (CUni == "???") return true;
  return false;
}
function IsSpace(C) {
  if (C == " " || C == "\t" || C == "\n" || C == "\r") return true;
  return false;
}
function MapKarToSorborno(CUni) {
  var CSorborno = CUni;
  if (CUni == "???") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "??????") CSorborno = "???";
  else if (CUni == "???") CSorborno = "???";
  else if (CUni == "??????") CSorborno = "???";
  return CSorborno;
}
function MapSorbornoToKar(CUni) {
  var CKar = CUni;
  if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  else if (CUni == "???") CKar = "???";
  return CKar;
}
