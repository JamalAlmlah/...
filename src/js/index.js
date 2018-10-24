/* eslint-disable no-unused-vars */
import style from '../css/style.css';
/* eslint-enable no-unused-vars */
const connection = new WebSocket('ws://104.248.143.87:1337');

connection.onopen = () => {
console.log('uppkoppling started ... ');

}
connection.onerror = error => {
  console.log(`Error: ${error}`);
}
connection.onmessage = message => {}
connection.onclose = () => {
console.log('upploppling nedstängd ...')
}
