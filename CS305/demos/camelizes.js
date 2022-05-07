function camelize(text, separator) {
    let words = text.split(separator);
    let result = '';
    words.sort();

    words.forEach((word, index) => {
      if (index === 0) {
        word = word.replace(/./, (letter) => letter.toLowerCase());
        result += word;
        return;
      }
      word = word.replace(/./, (letter) => letter.toUpperCase());
      result += word;
    });
    return result;
  }

  function compare(a, b) {
    a = "" + a;
    b = "" + b;

    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    }
  console.log(camelize("Tex*love*money", separator = '*'));