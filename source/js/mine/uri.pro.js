var uri = window.location.href.toString();
if (uri.indexOf("[") != -1 || uri.indexOf("]") != -1) {
    window.location.href = uri.replace("[", "%5B").replace("]", "%5D");
}