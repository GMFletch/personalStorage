function ggbOnInit() {
  ggbApplet.registerClickListener(cycle);
  var space = ggbApplet.getValue('spacing');
  for (var i = 1; i < 6; i++) {
    ggbApplet.evalCommand(
      'P_' + i + '=(x(B)+' + (i - 1) * 4 * space + ',y(B))'
    );
  }

  for (var i = 6; i < 11; i++) {
    ggbApplet.evalCommand(
      'P_' + i + '=(x(C)+' + (i - 6) * 4 * space + ',y(C))'
    );
  }

  for (var i = 1; i < 11; i++) {
    ggbApplet.evalCommand(
      'Poly_' +
        i +
        '=Polygon((P_'.concat(i) +
        '+(-dim, -dim)),(P_'.concat(i) +
        '+(+dim, -dim)),(P_'.concat(i) +
        '+(dim, dim)),(P_'.concat(i) +
        '+(-dim, dim)))'
    );
    // "point1=(x(p_".concat(i)+") -dim,y(p_".concat(i)+") - dim)";
    // "point1=(-dim, -dim)";
    // "Polygon({P_1 + (x(p_1) + v, y(p_1) + z), P_1 + (x(p_1) + v, y(p_1) + z),P_1 + (x(p_1) + v, y(p_1) + z),P_1 + (x(p_1) + v, y(p_1) + z)   ))})"
  }

  for (var i = 1; i < 11; i++) {
    ggbApplet.evalCommand('Poly_' + i + 'Text="Black"');
  }
}

function cycle(a) {
  switch (ggbApplet.getColor(a)) {
    case '#000000':
      ggbApplet.setColor(a, 204, 102, 255);
      ggbApplet.setTextValue(a.concat('Text'), 'purple');
      break;
    case '#CC66FF':
      ggbApplet.setColor(a, 0, 155, 0);
      ggbApplet.setTextValue(a.concat('Text'), 'green');
      break;
    case '#009B00':
      ggbApplet.setColor(a, 255, 255, 255);
      ggbApplet.setTextValue(a.concat('Text'), 'White');
      break;
    case '#FFFFFF':
      ggbApplet.setColor(a, 0, 127, 175);
      ggbApplet.setTextValue(a.concat('Text'), 'Blue');
      break;
    case '#007FAF':
      ggbApplet.setColor(a, 218, 41, 28);
      ggbApplet.setTextValue(a.concat('Text'), 'Red');
      break;
    case '#DA291C':
      ggbApplet.setColor(a, 0, 0, 0);
      ggbApplet.setTextValue(a.concat('Text'), 'Black');
  }
}
