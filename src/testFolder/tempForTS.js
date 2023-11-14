"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    const ggbCanvases = document.querySelectorAll("canvas");
    const ggbCanvases = document.querySelectorAll(".class1 .class2");
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
exports.default = default_1;
