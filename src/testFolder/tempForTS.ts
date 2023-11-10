export default function () {
  const ggbCanvases = document.querySelectorAll("canvas");
  ggbCanvases.forEach((canvas) => {
    const ggbDiv = canvas.closest("div.appletParameters,div.notranslate");
    if (ggbDiv && !canvas.hasAttribute("data-id")) {
      const parameterID = ggbDiv.getAttribute("id");
      const ariaLabel = canvas
        .getAttribute("aria-label")
        .replace(/Geogebra component:\s*/g, "")
        .replace(/\s/g, "");
      const canvasID = "canvas" + parameterID + ariaLabel;
      canvas.setAttribute("id", canvasID);
      canvas.setAttribute("data-id", canvasID);
    }
  });
}
