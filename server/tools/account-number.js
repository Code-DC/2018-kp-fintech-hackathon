export default function () {
    let serial = '';
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].forEach(i => serial += Math.round(Math.random() * 10).toString());
    return serial.slice(0, 3) + '-' + serial.slice(3, 9) + '-' + serial.slice(9, 15);
}