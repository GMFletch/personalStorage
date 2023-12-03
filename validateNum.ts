import round from "./round";

import type { validateNumType } from "../types";

export default function ({
  input,
  types = [],
  range = [],
  rangeType = "inclusive",
  isCloze = false,
  statementType = "statement",
  utils,
}: validateNumType = {}) {
  // do initial validation
  const evalResult = utils.math.evaluateLatex(input);
  let value = round(evalResult.value, 14);
  if (!value && value !== 0) {
    value = NaN;
  }
  let { error } = evalResult;
  const useRange = range.length === 2;
  if (useRange) {
    const isInRange =
      rangeType === "inclusive"
        ? range[0] <= value && value <= range[1]
        : range[0] < value && value < range[1];
    if (!isInRange) {
      error = true;
    }
  }
  // do type validation
  let errorMessage = "";
  const modTypes = [];
  let mainType = "input";
  const typeChecks = [
    // main (noun) types, order from general to specific
    {
      type: "number",
      check: (value) => !isNaN(value) && isFinite(value),
      modOrMain: "main",
    },
    {
      type: "integer",
      check: Number.isInteger,
      modOrMain: "main",
    },
    // modifier (adjective) types, order from general to specific
    { type: "positive", check: (value) => value > 0, modOrMain: "mod" },
  ];
  typeChecks.forEach(({ type, check, modOrMain }) => {
    // run only requested tests
    if (types.includes(type)) {
      if (modOrMain === "main") {
        mainType = type;
      } else {
        modTypes.push(type);
      }
      if (!check(value)) {
        error = true;
      }
    }
  });
  // generate error string if there's an error
  if (error) {
    if (!modTypes.length && mainType === "input") {
      modTypes.push("valid");
    }
    // record translations
    const language = "english"; // TODO: probably some validation here
    const translations = {
      // FIXME: use whatever language-naming norms are being used elsewhere
      english: {
        // words
        input: {
          article: "an",
        },
        valid: {
          article: "a",
        },
        integer: {
          article: "an",
        },
        positive: {
          article: "a",
        },
        // phrases
        inRange: useRange ? ` from ${range[0]} to ${range[1]}` : "",
        createErrorMessage() {
          // set article
          const firstModifier = modTypes[0];
          const useForArticle = firstModifier || mainType;
          const { article } = this[useForArticle];
          // set modifier(s)
          const modifiers = modTypes.length ? " " + modTypes.join(" ") : "";
          // set verb phrase
          const verb = isCloze
            ? `Complete the ${statementType} by using`
            : "Enter";
          // create error message
          return `Input error. ${verb} ${article}${modifiers} ${mainType}${this.inRange}.`;
        },
      },
      spanish: {
        // nouns
        input: {
          word: "entrada",
          gender: "feminine",
        },
        integer: {
          word: "entero",
          gender: "masculine",
        },
        statement: {
          word: "declaración",
          gender: "feminine",
        },
        equation: {
          word: "ecuación",
          gender: "feminine",
        },
        expression: {
          word: "expresión",
          gender: "feminine",
        },
        number: {
          word: "número",
          gender: "masculine",
        },
        // adjectives
        valid: {
          feminine: "válida",
          masculine: "válido",
        },
        positive: {
          feminine: "positiva",
          masculine: "positivo",
        },
        // phrases
        inRange: useRange ? ` del ${range[0]} al ${range[1]}` : "", // TODO: check this translation, it's dubious
        createErrorMessage() {
          const { word, gender } = this[mainType];
          // set article
          const article = gender === "feminine" ? "una" : "un";
          // set modifiers
          const translatedModifiers = modTypes.map(
            (modifier) => this[modifier][gender]
          );
          if (translatedModifiers.length > 1) {
            // if multiple modifiers, add "and" before the last one
            translatedModifiers[translatedModifiers.length - 1] =
              "y " + translatedModifiers[translatedModifiers.length - 1];
          }
          const joiner = translatedModifiers.length > 2 ? ", " : " ";
          const modifiers = translatedModifiers.length
            ? " " + translatedModifiers.join(joiner)
            : "";
          // set verb phrase
          const { word: statement, gender: statementGender } =
            this[statementType];
          const verbArticle = statementGender === "feminine" ? "la" : "el";
          const verb = isCloze
            ? `Completa ${verbArticle} ${statement} usando`
            : "Entra";
          // create error message
          return `Error de entrada. ${verb} ${article} ${word}${modifiers}${this.inRange}.`;
        },
      },
    };

    errorMessage =
      translations[language]?.createErrorMessage() ||
      "Input error. Enter a valid input.";
  }

  return {
    error,
    errorMessage,
    value,
  };
}
