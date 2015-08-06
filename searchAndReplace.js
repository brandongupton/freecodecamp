function replace(str, before, after) {
  function replaceWithCase(match) {
    if (str.indexOf(match.toLowerCase()) == -1) {
      // Doesn't contain lower case, to make sure we upper the result
      return after.charAt(0).toUpperCase() + after.substring(1);
    }
    return after.toLowerCase();
  }

 return str.replace(new RegExp(before, 'i'), replaceWithCase);
}

console.log(replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(replace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(replace("This has a spellngi error", "spellngi", "spelling"));
console.log(replace("His name is Tom", "Tom", "john"));
console.log(replace("Let us get back to more Coding", "coding", "bonfires"));
