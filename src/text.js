// console.log('ok');

// A = [1,2,4,6,73,5,8];
// solution(A);
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     A.sort((a, b) => a-b);
    
//     for (let i = 1; i<10; i++){
//         let control = A.find(checkNumber);
//         function checkNumber(number) {
//             return number === i;
//           }
//         if (!control) {  
//             console.log('this is the result ', i);
//             return
//         }
//     }

// }

// function isInPage(node) {
//     return (node === document.body) ? false : document.body.contains(node);
//   }

//   isInPage(document.getElementsByTagName('ul'));
// const results =  [];
// for (let i =0; i < document.getElementsByTagName('ul').length; i++) {
//     // console.log( document.getElementsByTagName('ul')[i].childElementCount  );

//     for (let j=0; j < document.getElementsByTagName('ul' )[i].childElementCount ; j++) {
        
//         results.push(document.getElementsByTagName('ul')[i].children[j].childNodes.length);
//         results.sort((a, b) => a+b);
        
        
//         // return results[0];
        
//     }
//     // return results[0];
// }
// const results = [];

// for (let i =0; i < document.getElementsByTagName('ol' || 'ul').length; i++) {
//     for (let j=0; j < document.getElementsByTagName('ol' || 'ul')[i].childElementCount ; j++) {
//         console.log(document.getElementsByTagName('ol' || 'ul')[i].getElementsByTagName('li').length); 
        
//         let check = document.getElementsByTagName('ol' || 'ul')[i].getElementsByTagName('li').length;

        
//         // nestedLevel(document.getElementsByTagName('ol' || 'ul')[i]);
//         results.push(document.getElementsByTagName('ol' || 'ul')[i].getElementsByTagName('li').length);
//         results.sort((a, b) => a+b);
//         // return results[0];
//         // console.log(nestedLevel);     
//     }
// }


const methods = {
    test: function love(a, b) {
        let c = a + b;
        return c
    },
    test2: function love(a) {
        return a * c
    },
    nama: 'love',
    love: 'ok ok ok'
}

console.log(methods.test(3,methods.test2(3)));