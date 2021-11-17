class Formatter {

  static capitalize(string) {
    let capString = string.charAt(0).toUpperCase() + string.slice(1)
    return capString
    }

  static sanitize(string) {
    const regex = /[^-' A-Za-z0-9]/g
    let newString = string.replace(regex, "")
    return newString
  }

  static titleize(string) {
    let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = string.split(" ")
    

    return newString.map((word, i) => {
      return array.includes(word) && i!=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ");
  }
}