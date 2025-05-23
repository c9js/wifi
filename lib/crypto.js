/*┌─────────────────────────────────────────────┐
  │ Перевод из одной систему счисления в другую │
  └─────────────────────────────────────────────┘
// Переводим строку в md5
    $.crypto.md5('text'); // '1cb251ec0d568de6a929b520c4aed8d1'
    
// Переводим строку в шифр
    $.crypto.en('key', 'text'); // 'U2FsdGVkX18tTeChlArIE5UqcD6vmckuFPuNN9QCoO0='
    
// Переводим шифр в строку
    $.crypto.de('key', 'U2FsdGVkX18tTeChlArIE5UqcD6vmckuFPuNN9QCoO0='); // 'text'
    
/*▄────────────────────────────▄
  █                            █
  █  Полключение зависимостей  █
  █                            █
  ▀────────────────────────────▀*/
const CryptoJS = require('crypto-js');

/*▄───────────────────────────────▄
  █                               █
  █  Работа с шифрованием данных  █
  █                               █
  ▀───────────────────────────────▀*/
$.crypto = class {
/*┌───────────────────────┐
  │ Возвращает хеш-строку │
  └───────────────────────┘*/
    static md5(text = '') {
        return CryptoJS.MD5(text).toString();
    }
    
/*┌────────────────────────────────┐
  │ Возвращает зашифрованный текст │
  └────────────────────────────────┘*/
    static en(key = '', text = '') {
    // Создаем конфигурацию шифрования
        let cfg = {mode:CryptoJS.mode.CTR};
        
    // Возвращаем зашифрованный текст
        return CryptoJS.AES.encrypt(text, key, cfg).toString();
    }
    
/*┌─────────────────────────────────┐
  │ Возвращает расшифрованный текст │
  └─────────────────────────────────┘*/
    static de(key = '', text = '') {
    // Создаем конфигурацию шифрования
        let cfg = {mode:CryptoJS.mode.CTR};
        
    // Возвращаем расшифрованный текст 
        return CryptoJS.AES.decrypt(text, key, cfg).toString(CryptoJS.enc.Utf8);
    }
};
