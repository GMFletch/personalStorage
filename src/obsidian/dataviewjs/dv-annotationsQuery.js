import { dv } from '../../../globals';
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const pathStart = 'Atlas/3. Boise/A. Research/PDF articles';
async function getAnnotations(path) {
    const returnStuff = await dv.io.load(path);
    const regex = /annotation-json\n>({[^%%].*})[\S\s]*?%%LINK%%\[\[(#\^.*)\|[\S\s]*?%%TAGS%%\n>(.*)/g;
    const matchesArray = [...returnStuff.matchAll(regex)];
    const mappedArray = matchesArray.map((match) => {
        const [, jsonString, link, tags] = match;
        const objectified = JSON.parse(jsonString);
        const { created, document: { title }, target, text, } = objectified;
        console.log('objectified');
        console.log(objectified);
        const updated = Object.hasOwn(objectified, 'updated')
            ? objectified.updated.substring(0, 10)
            : '';
        const tagsArray = tags.split(', ');
        const article = title.replace('.pdf', '');
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
    console.clear();
    const filenames = dv.pagePaths(`"${pathStart}"`);
    const tableArray = await Promise.all(filenames.map((pagePath) => {
        return getAnnotations(pagePath);
    }));
    const flattenedArray = tableArray.flat();
    showResults(flattenedArray);
}
function showResults(arr) {
    const headers = [
        '',
        'Article',
        'Annotation',
        'Quote',
        'Tags',
        'Created Updated',
    ];
    const elements = arr.reduce((annotationAcc, { annotation, article, created, link, quote, tagsArray, updated }) => {
        if (tagsArray.includes('#CITATION') ||
            tagsArray.includes('#REF') ||
            tagsArray.includes('#REFERENCE')) {
            return annotationAcc;
        }
        const linkedArticle = `[[${article}${link}|${article}]]`;
        console.log('article');
        console.log(article);
        console.log(linkedArticle);
        const fileDates = updated === '' || created === updated ? [created] : [created, updated];
        const datesForDisplay = fileDates.reduce((dateAcc, dateString, dateIndex) => {
            const year = dateString.slice(0, 4);
            const month = months[parseInt(dateString.slice(5, 7)) - 1];
            const day = dateString.slice(8, 10);
            dateAcc = dateAcc.concat(dateIndex === 0 ? 'created' : '\nupdated', ':\n', month, ' ', day, '-', year);
            return dateAcc;
        }, '');
        const { emojis, tags } = tagsArray.reduce((tagAcc, tagString) => {
            switch (tagString) {
                case '#IMP':
                case '#IMPORTANT': {
                    tagAcc.emojis = tagAcc.emojis.concat('💥');
                    break;
                }
                case '#USED':
                case '#CITED': {
                    tagAcc.emojis = tagAcc.emojis.concat('✅');
                    break;
                }
                default: {
                    const ifNeeded = tagAcc.tags === '' ? '' : '\n';
                    tagAcc.tags = tagAcc.tags.concat(ifNeeded, tagString);
                    break;
                }
            }
            return tagAcc;
        }, { emojis: '', tags: '' });
        const arrayToPush = [
            emojis,
            linkedArticle,
            annotation,
            quote,
            tags,
            datesForDisplay,
        ];
        annotationAcc.push(arrayToPush);
        return annotationAcc;
    }, []);
    dv.table(headers, elements);
}
makeTable();
