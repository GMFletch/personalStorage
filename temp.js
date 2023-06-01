function ggbOnInit() {
    //console.log(ggbApplet.getXML("B"));
    ggbApplet.registerObjectUpdateListener("B", function () {
        const param = ggbApplet.getValue("PathParameter(B)");
        if (param > 0.75 || param < 0.25) {
            const newIndex =
                (ggbApplet.getValue("circlePathIncrement") *
                    ggbApplet.getValue("numRotations")) /
                    2 +
                ggbApplet.getValue("indexB");
            console.log(newIndex);

            ggbApplet.evalCommand(
                "SetValue(B, BPath(".concat(newIndex.toString(), "))")
            );
        }
    });
}
