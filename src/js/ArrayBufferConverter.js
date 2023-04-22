export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load() {
    return this.buffer;
  }

  toString() {
    let text = '';
    const data = new Uint16Array(this.buffer);
    for (let i = 0; i < data.length; i += 1) {
      text += String.fromCharCode(data[i]);
    }
    return text;
  }
}
