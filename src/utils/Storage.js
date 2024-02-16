export class Storage {
  static get(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  static set(key, data) {
    console.log('set to local')
    localStorage.setItem(key, JSON.stringify(data))
  }

  static remove(key) {
    localStorage.removeItem(key)
  }
}
