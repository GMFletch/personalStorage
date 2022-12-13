const { rte1 } = components;

const ID1 = 'slide-e38b6606235a';

const prevInput2 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'input2',
  compType: 'input',
  utils,
  components,
});

console.log('prevInput2');
console.log(prevInput2);

rte1.updateData({
  text: `pulled text: ${didUtils.getText(prevInput2.data)}\n\n
  prevInput2.isDefault: ${prevInput2.isDefault}\n\n
  prevInput2.data.slideNum: ${prevInput2.data.slideNum}\n\n
  prevInput2.data.hasData: ${prevInput2.data.hasData}\n\n
  prevInput2.data.goBackString: ${prevInput2.data.goBackString}\n\n
  prevInput2.data.goBackStringKatex: ${prevInput2.data.goBackStringKatex}\n\n
  prevInput2.data.flagText: ${prevInput2.data.flagText}\n\n
  prevInput2.data.flagTextKatex: ${prevInput2.data.flagTextKatex}`,
});
