/*the first thing we wanna do is keeping things far
* from the global namespace by creating our custom namespace:
* if it exists then use it, else initialize it as a new object
* */
var myNamespace = myNamespace || {};