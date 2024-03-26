import { dv } from '../../../globals';
const pathStart = 'Atlas/3. Boise/A. Research/PDF articles';
async function getAnnotations(path) {
    const returnStuff = await dv.io.load(path);
    const regex = /annotation-json\n>({[^%%].*})[\S\s]*?%%LINK%%\[\[(#\^.*)\|[\S\s]*?%%TAGS%%\n>(.*)/g;
    const matchesArray = [...returnStuff.matchAll(regex)];
    const mappedArray = matchesArray.map((match) => {
        const [, jsonString, link, tags] = match;
        const objectified = JSON.parse(jsonString);
        const { created, document: { title }, target, text, } = objectified;
        const updated = Object.hasOwn(objectified, 'updated')
            ? objectified.updated
            : '';
        const tagsArray = tags.split(', ');
        const article = title.substring(0, title.length - 4);
        const quote = target[0].selector[1].exact;
        return {
            annotation: text,
            article,
            created: created.substring(0, 10),
            link,
            quote,
            tagsArray,
            updated,
        };
    });
    return mappedArray;
}
async function makeTable() {
    const filenames = dv.pagePaths(`"${pathStart}"`);
    const tableArray = await Promise.all(filenames.map((pagePath) => {
        return getAnnotations(pagePath);
    }));
    const flattenedArray = tableArray.flat();
    showResults(flattenedArray);
}
function showResults(arr) {
    console.log('start showResults');
    console.log(arr);
    const headers = ['Article', 'Annotation', 'Quote', 'Created'];
    const elements = arr.reduce((accumulator, { article, annotation, quote, created }) => {
        const linkedArticle = `[[${article}]]`;
        const arrayToPush = [linkedArticle, annotation, quote, created];
        accumulator.push(arrayToPush);
        return accumulator;
    }, []);
    dv.table(headers, elements);
}
makeTable();
