const { rte1 } = components;

const ID1 = 'slide-7a8b9d606afa';

const prevRTE1 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'rte1',
  compType: 'richtexteditor',
  utils,
  components,
});

console.log('prevRTE1');
console.log(prevRTE1);

rte1.updateData({
  text: `prevRTE1.isDefault: ${prevRTE1.isDefault}\n\n
  prevRTE1.data.slideNum: ${prevRTE1.data.slideNum}\n\n
  prevRTE1.data.hasData: ${prevRTE1.data.hasData}\n\n
  prevRTE1.data.isComplete: ${prevRTE1.data.isComplete}\n\n
  prevRTE1.data.inputs - is an array: ${prevRTE1.data.inputs}\n\n
  prevRTE1.data.inputsKatex - is an array: ${prevRTE1.data.inputsKatex}\n\n
  prevRTE1.data.inputs-0: ${prevRTE1.data.inputs[0]}\n\n
  prevRTE1.data.inputs-1: ${prevRTE1.data.inputs[1]}\n\n
  prevRTE1.data.goBackString: ${prevRTE1.data.goBackString}\n\n
  prevRTE1.data.goBackStringKatex: ${prevRTE1.data.goBackStringKatex}\n\n
  prevRTE1.data.flagText: ${prevRTE1.data.flagText}\n\n
  prevRTE1.data.flagTextKatex: ${prevRTE1.data.flagTextKatex}`,
});
