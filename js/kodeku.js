alert("Hello dari External Javascript");


// var foo = 100;
// console.log("Nilai foo = "+ foo);

// if (typeof foo === "number") {
//   console.log("foo bertipe number");
//   if (foo >= 10) {
//     console.log("Nilai foo lebih besar dari 10");
//   } else {
//     console.log("Nilai foo lebih kecil dari 10");
//   }
// } else if (typeof foo === "string") {
//   console.log("Foo bernilai string");
// } else {
//   console.log("Nilai foo bukan bertipe number ataupun string");
// }



var situs = "facebook";

if (situs === "google") {
  console.log(`<a href="https://www.google.com">Situs Google</a>`);
}
else if (situs === "facebook") {
  console.log(`<a href="https://www.facebook.com">Situs Facebook</a>`);
}
else if (situs === "twitter") {
  console.log(`<a href="https://www.twitter.com">Situs Twitter</a>`);
}
else if (situs === "duniailkom") {
  console.log(`<a href="https://www.duniailkom.com">Situs Duniailkom</a>`);
}
else {
  console.log(`Situs tidak terdaftar!`);
}
