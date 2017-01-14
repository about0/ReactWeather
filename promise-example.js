// const getTempCallback = (location, callback) => {
//     callback(undefined, 78);
//     callback('Error msg');
// };
//
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(32);
//             reject('Error!!!!1');
//         }, 1000);
//     });
// }
//
// getTempPromise('Irpin').then(function (temp) {
//     console.log('Promise succ', temp)
// }, function (err) {
//     console.log('Erroren!', err)
// });




function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
       if (typeof a   === 'number' && typeof b === 'number') {
           resolve (a + b);
       } else
        reject ('Can\'t do ');
    })
}

addPromise(8, 124153).then(function (add) {
    console.log('OK', add);
}, function (err) {
    console.log('error', err)
});