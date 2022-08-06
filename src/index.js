module.exports = function reverse (n) {
    if (n < 0) {n = n * -1;}
    let rev = n.toString();
    let result = "";
      for (let i = rev.length - 1; i >= 0; i--) {
          result = result + rev[i]
    }
    return result
}
