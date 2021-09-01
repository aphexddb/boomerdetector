const unicode = {
  punctuation: [
    '\u0021', // !
    '\u002E', // .
    '\u003B', // ;
    '\u003F', // ?
    '\u00BF', // ¿
    '\u00A1', // ¡
  ]
}

const notfound = "no boomer detected"
const found = "boomer detected"
const notext = "no text provided"

const _debug = false;

/**
 * Checks if a Boomer authored the text
 * @param {string} text 
 * @returns 
 */
const boomerdetector = (text = "") => {
  if (typeof text !== "string") {
    if (_debug === true) {
      console.log(notext, text)
    }
    return false
  }

  if (text.length === 0) {
    if (_debug === true) {
      console.log(notext, text)
    }
    return false;
  }

  const list = text.split(/\b/);
  if (list.length === 0) {
    if (_debug === true) {
      console.log(notfound)
    }
    return false
  }

  const hasTwoSpaces = list.map((substr) => {
    if (substr.length > 2) {
      if (unicode.punctuation.includes(substr[0])) {
        // check for two spaces
        if (substr[1] === '\u0020' && substr[2] === '\u0020') {
          return true;
        }
      }
    }
    return false;
  }).filter((item) => item)[0]

  if (hasTwoSpaces === true) {
    if (_debug === true) {
      console.log(found, "(two spaces after punctuation)")
    }
    return true;
  }


  if (_debug === true) {
    console.log(notfound)
  }
  return false;
}


export default boomerdetector;