const { rte1, ggb1 } = components;

const ID1 = 'slide-d2481d11ddc4';

const prevGGB1 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'ggb1',
  compType: 'ggb',
  utils,
  components,

  // ignore/delete the following if not ggb
  ggbInnerDataDefault: { xValA: 3, yValA: 2 }, // ignore if not ggb
});

console.log('prevGGB1');
console.log(prevGGB1);
console.log('example of "bracket notation" below');
console.log(
  'prevGGB1.innerData["xValA"], instead of prevGGB1.innerData.xValA, or prevGGB1.innerData["yValA"], instead of prevGGB1.innerData.yValA'
);

// since this is the same materialID as the one on the intial slide, we are making the point non-selectable here on this slide
ggb1.instance.setFixed('A', false, false);

// here, we're setting point A to have the same coordinates as point A on the initial slide.
// note that we can use the ggb api for the component on this slide, just not for the prevGGB1 "component", as it isn't a component on this slide, just data
ggb1.instance.setCoords(
  'A',
  prevGGB1.innerData.xValA,
  prevGGB1.innerData.yValA
);

rte1.updateData({
  text: `prevGGB1.isDefault: ${prevGGB1.isDefault}\n\n
  prevGGB1.data.slideNum: ${prevGGB1.data.slideNum}\n\n
  prevGGB1.data.hasData: ${prevGGB1.data.hasData}\n\n
  note that you cannot use ggb methods from the api to access data from the prevGGB1; instead, you must use the innerData that is returned; \n\n
  as such, both of these values, xValA and yValA, were built into the original ggb applet;\n\n
  when accessing innerData, you can typically (always?) access data both through "dot notation", shown here, or "bracket notation", shown in the console as it does not render currently render properly on screen\n\n
  prevGGB1.innerData.xValA: ${prevGGB1.innerData.xValA}\n\n
  prevGGB1.innerData.yValA: ${prevGGB1.innerData.yValA}\n\n
  prevGGB1.data.goBackString: ${prevGGB1.data.goBackString}\n\n
  prevGGB1.data.goBackStringKatex: ${prevGGB1.data.goBackStringKatex}\n\n
  prevGGB1.data.flagText: ${prevGGB1.data.flagText}\n\n
  prevGGB1.data.flagTextKatex: ${prevGGB1.data.flagTextKatex}`,
});
