const { rte1 } = components;

const ID1 = 'slide-e38b6606235a';

const prevInput1 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'input1',
  compType: 'input',
  utils,
  components,
});

console.log('prevInput1');
console.log(prevInput1);

rte1.updateData({
  text: `pulled text: ${didUtils.getText(prevInput1.data)}\n\n
  prevInput1.isDefault: ${prevInput1.isDefault}\n\n
  prevInput1.data.slideNum: ${prevInput1.data.slideNum}\n\n
  prevInput1.data.hasData: ${prevInput1.data.hasData}\n\n
  prevInput1.data.goBackString: ${prevInput1.data.goBackString}\n\n
  prevInput1.data.goBackStringKatex: ${prevInput1.data.goBackStringKatex}\n\n
  prevInput1.data.flagText: ${prevInput1.data.flagText}\n\n
  prevInput1.data.flagTextKatex: ${prevInput1.data.flagTextKatex}`,
});
