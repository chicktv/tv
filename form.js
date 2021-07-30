var xmlpath = "test.xml"
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", xmlpath, false);
xmlhttp.setRequestHeader('Content-Type', 'text/xml');
xmlhttp.send("");
xmlDoc = xmlhttp.responseXML;

function loadFunction() {
$("#siteURL").val(xmlDoc.getElementsByTagName("siteURL")[0].childNodes[0].nodeValue);
}
