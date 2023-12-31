export default function () {
  const ggbCanvases = document.querySelectorAll("canvas");
  const curatedCanvases = ggbCanvases.filter(function (canvas) {
    const ggbDiv = canvas.closest("div.appletParameters,div.notranslate");
    const hasDataId = canvas.hasAttribute("data-id");
    const isReady = ggbDiv && !hasDataId;
    if (isReady) {
      const parameterID = ggbDiv.getAttribute("id");
      const ariaLabel = canvas
        .getAttribute("aria-label")
        .replace(/Geogebra component:\s*/g, "")
        .replace(/\s/g, "");
      const canvasID = "canvas" + parameterID + ariaLabel;
      canvas.setAttribute("id", canvasID);
      canvas.setAttribute("data-id", canvasID);
    }
    return isReady;
  });
  return curatedCanvases;
}
