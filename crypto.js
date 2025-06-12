import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secure-password';

export function encryptNote(note) {
  return CryptoJS.AES.encrypt(note, SECRET_KEY).toString();
  }

  export function decryptNote(encrypted) {
    try {
        const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
            return bytes.toString(CryptoJS.enc.Utf8);
              } catch {
                  return '[Error decrypting]';
                    }
                    }