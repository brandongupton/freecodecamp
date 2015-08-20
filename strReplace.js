function convert(str) {
  // &colon;&rpar;
  str = str.replace(/\&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/\"/g, '&quot;');
  str = str.replace(/\'/g, '&apos;');
  console.log(str);
  return str;
}

convert('Dolce & Gabbana');
convert('Hamburgers < Pizza < Tacos');
convert('Sixty > twelve');
convert('Stuff in "quotation marks"');
convert("Shindler's List");
convert('<>');
convert('abc');
