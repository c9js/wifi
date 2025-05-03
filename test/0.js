/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*▄────────▄
  █        █
  █  WiFi  █
  █        █
  ▀────────▀*/
$.wifi = {};

/*▄──────────▄
  █          █
  █  Сервер  █
  █          █
  ▀──────────▀*/
Object.defineProperty($.wifi, 'server', {set: (item) => {
    _=item
}});

$.wifi.server = class {
/*┌────────────────────────────────────┐
  │ Обрабатывает запрос на перевод TRX │
  └────────────────────────────────────┘*/
    'sendTRX' = (request) => {
        _=['Запрос от Клиента!', request]
        this.send(['Message #2']);
    }
};
