const { rte1 } = components;

const ID1 = 'slide-7a8b9d606afa';

const prevFIB1 = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'fib1',
  compType: 'fib',
  utils,
  components,
});

console.log('prevFIB1');
console.log(prevFIB1);

rte1.updateData({
  text: `prevFIB1.isDefault: ${prevFIB1.isDefault}\n\n
  prevFIB1.data.slideNum: ${prevFIB1.data.slideNum}\n\n
  prevFIB1.data.hasData: ${prevFIB1.data.hasData}\n\n
  prevFIB1.data.isComplete: ${prevFIB1.data.isComplete}\n\n
  prevFIB1.data.processedInputs: ${prevFIB1.data.processedInputs}\n\n
  prevFIB1.data.processedInputs-0: ${prevFIB1.data.processedInputs[0]}\n\n
  prevFIB1.data.processedInputs-1: ${prevFIB1.data.processedInputs[1]}\n\n
  prevFIB1.data.goBackString: ${prevFIB1.data.goBackString}\n\n
  prevFIB1.data.goBackStringKatex: ${prevFIB1.data.goBackStringKatex}\n\n
  prevFIB1.data.flagText: ${prevFIB1.data.flagText}\n\n
  prevFIB1.data.flagTextKatex: ${prevFIB1.data.flagTextKatex}`,
});
