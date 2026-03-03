/*
 slightly edited version of https://theabsoluterealm.com's tooltip script. 
 if you are the original author and want me to write my own code 
 then please contact me.
*/

var tooltip;
var showTimeout;
var hideTimeout;
var activeTarget = null;

function createTooltipIfNotExist() {
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.style.position = "absolute";
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
    tooltip.style.pointerEvents = "none";
    document.body.appendChild(tooltip);
  }
}

function updateTooltipPosition(e) {
  var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  tooltip.style.left = e.clientX + scrollX + 15 + "px";
  tooltip.style.top = e.clientY + scrollY + 15 + "px";
}

function showTooltip(e) {
  var target = e.target;
  var title = target.getAttribute("data-tooltip");

  if (!title) return;

  clearTimeout(hideTimeout);
  activeTarget = target;

  showTimeout = setTimeout(function () {
    if (activeTarget === target) {
      tooltip.innerHTML = title;
      updateTooltipPosition(e);
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
    }
  }, 100);
}

function hideTooltip() {
  clearTimeout(showTimeout);
  activeTarget = null;
  tooltip.style.opacity = "0";

  hideTimeout = setTimeout(function () {
    tooltip.style.visibility = "hidden";
  }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  createTooltipIfNotExist();

  document.querySelectorAll("[title]").forEach(function (el) {

    el.setAttribute("data-tooltip", el.getAttribute("title"));
    el.removeAttribute("title");

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mousemove", updateTooltipPosition);
    el.addEventListener("mouseleave", hideTooltip);
  });
});