export default function () {
  const ggbCanvases = Array.from(document.querySelectorAll("canvas"));
  const curatedCanvases = ggbCanvases.filter(function (canvas) {
    const ggbDiv = canvas.closest("div.appletParameters,div.notranslate");
    const hasDataId = canvas.hasAttribute("data-id");
    const isReady = ggbDiv && !hasDataId;
    if (isReady) {
      const ariaLabelOrig = canvas.getAttribute("aria-label");
      if (ariaLabelOrig !== null) {
        const ariaLabelNew = ariaLabelOrig
          .replace(/Geogebra component:\s*/g, "")
          .replace(/\s/g, "");
        const canvasID = "canvas" + ggbDiv.getAttribute("id") + ariaLabelNew;
        canvas.setAttribute("id", canvasID);
        canvas.setAttribute("data-id", canvasID);
      }
    }
    return isReady;
  });
  return curatedCanvases;
}
