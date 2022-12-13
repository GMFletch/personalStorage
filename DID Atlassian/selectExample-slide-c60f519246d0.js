const { rteSingle1, rteMulti1 } = components;

const ID1 = 'slide-7a8b9d606afa';

const prevSelect1 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'select1',
  compType: 'select',
  utils,
  components,
});

const prevSelect2 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'select2',
  compType: 'select',
  utils,
  components,
});

console.log('prevSelect1');
console.log(prevSelect1);

console.log('prevSelect2');
console.log(prevSelect2);

rteSingle1.updateData({
  text: `prevSelect1.isDefault: ${prevSelect1.isDefault}\n\n
  prevSelect1.data.slideNum: ${prevSelect1.data.slideNum}\n\n
  prevSelect1.data.hasData: ${prevSelect1.data.hasData}\n\n
  prevSelect1.data.selected - is an array: ${prevSelect1.data.selected}\n\n
  prevSelect1.data.chosenLabels - is an array: ${prevSelect1.data.chosenLabels}\n\n
  prevSelect1.data.goBackString: ${prevSelect1.data.goBackString}\n\n
  prevSelect1.data.goBackStringKatex: ${prevSelect1.data.goBackStringKatex}\n\n
  prevSelect1.data.flagText: ${prevSelect1.data.flagText}\n\n
  prevSelect1.data.flagTextKatex: ${prevSelect1.data.flagTextKatex}`,
});

rteMulti1.updateData({
  text: `prevSelect2.isDefault: ${prevSelect2.isDefault}\n\n
  prevSelect2.data.slideNum: ${prevSelect2.data.slideNum}\n\n
  prevSelect2.data.hasData: ${prevSelect2.data.hasData}\n\n
  prevSelect2.data.selected - is an array: ${prevSelect2.data.selected}\n\n
  prevSelect2.data.chosenLabels - is an array: ${prevSelect2.data.chosenLabels}\n\n
  prevSelect2.data.goBackString: ${prevSelect2.data.goBackString}\n\n
  prevSelect2.data.goBackStringKatex: ${prevSelect2.data.goBackStringKatex}\n\n
  prevSelect2.data.flagText: ${prevSelect2.data.flagText}\n\n
  prevSelect2.data.flagTextKatex: ${prevSelect2.data.flagTextKatex}`,
});
