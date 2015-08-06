function translate(str) {
  var firstVowel = str.search(/[aeiou]/i);
  if (firstVowel === 0) {
    return str + "way";
  }
  return str.substring(firstVowel) + str.substring(0, firstVowel) + "ay";
}

translate("consonant");
