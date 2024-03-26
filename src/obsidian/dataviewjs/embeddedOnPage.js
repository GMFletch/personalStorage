```dataviewjs
console.clear();

const filenames = dv.pagePaths('"Atlas/3. Boise/A. Research/PDF articles"');

// const filenames = dv.pages();a

  

filenames.forEach((pagePath) => {

dv.paragraph('![[' + pagePath + ']]');

});
```;
