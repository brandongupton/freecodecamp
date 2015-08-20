function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  function convertToSpinalCase(match) {
    return match[0] + '-' + match.substring(1);
  }
  str = str.replace(/_+/g, '-');
  str = str.replace(/\s+/g, '-');
  str = str.replace(/[^-][A-Z]/g, convertToSpinalCase);
  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase('Teletubbies say Eh-oh');
