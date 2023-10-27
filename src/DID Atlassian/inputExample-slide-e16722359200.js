const { rte1 } = components;

const ID1 = 'slide-e38b6606235a';

const prevInput3 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'input3',
  compType: 'input',
  utils,
  components,
});

console.log('prevInput3');
console.log(prevInput3);

rte1.updateData({
  text: `pulled text: ${didUtils.getText(prevInput3.data)}\n\n
  prevInput3.isDefault: ${prevInput3.isDefault}\n\n
  prevInput3.data.slideNum: ${prevInput3.data.slideNum}\n\n
  prevInput3.data.hasData: ${prevInput3.data.hasData}\n\n
  prevInput3.data.goBackString: ${prevInput3.data.goBackString}\n\n
  prevInput3.data.goBackStringKatex: ${prevInput3.data.goBackStringKatex}\n\n
  prevInput3.data.flagText: ${prevInput3.data.flagText}\n\n
  prevInput3.data.flagTextKatex: ${prevInput3.data.flagTextKatex}`,
});
