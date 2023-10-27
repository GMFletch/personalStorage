const { text1, text2, text3, rte1, rte2, rte3 } = components;

const ID1 = 'slide-3cf0723dd2cf';

const prevTable = didUtils.getPrevComp({
  slideID: ID1,
  compName: 'table1',
  compType: 'complexTable',
  utils,
  components,

  // ignore/delete the following if not ggb
  ggbInnerDataDefault: { exampleVal1: 1, exampleVal2: 2 },
});

console.log(prevTable);

// uses of prevTable

// using the flagText/flagTextKatex
rte1.updateData({ text: prevTable.data.flagText });

text1.updateData({ text: prevTable.data.flagTextKatex });

// a means of "processing the cells"
const processedRows = prevTable.data.rows.map((el) => {
  return el.map((subEl) => {
    const tempText = didUtils.getText(subEl);
    return tempText === '' ? prevTable.data.goBackString : tempText;
  });
});

const processedRowsKatex = prevTable.data.rows.map((el) => {
  return el.map((subEl) => {
    const tempText = didUtils.getText(subEl);
    return tempText === '' ? prevTable.data.goBackStringKatex : tempText;
  });
});

// using the processed rows

rte3.updateData({
  text: `This is rte3. On the previous table, you entered ${processedRows[1][0]}, ${processedRows[2][0]}, and ${processedRows[3][0]} in Col 1.`,
});

text3.updateData({
  text: `This is text3. On the previous table, you entered ${processedRowsKatex[1][1]}, ${processedRowsKatex[2][1]}, and ${processedRowsKatex[3][1]} in Col 2.`,
});
