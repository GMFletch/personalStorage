function ggbOnInit() {
  ggbApplet.registerObjectClickListener('button1', buttonFunction);
  ggbApplet.registerClickListener(changeColor);

  let triangleName = 'firstTriangle';

  function changeColor(obj) {
    console.log('start of changeColor');
    if (obj === triangleName) {
      console.log('in if statement of changeColor');
      ggbApplet.setColor(obj, 0, 158, 96);
    }
    console.log('end of changeColor');
  }

  function buttonFunction() {
    console.log('start of buttonFunction');
    changeColor(triangleName);
    console.log('end of buttonFunction');
  }
}
