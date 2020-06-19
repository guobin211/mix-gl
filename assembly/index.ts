// The entry file of your WebAssembly module.

export function base64ToBlob(base64: string): ArrayBuffer {
  return new ArrayBuffer(base64.length);
}
