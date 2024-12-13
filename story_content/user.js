window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var options = {
    Weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};
var date = new Date().toLocaleDateString('es-ES', options);
var player = GetPlayer();
player.SetVar("SystemDate", date);

}

window.Script2 = function()
{
  var options = {
    Weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};
var date = new Date().toLocaleDateString('es-ES', options);
var player = GetPlayer();
player.SetVar("SystemDate", date);

}

};
