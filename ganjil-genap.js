var i = 0;
while (i < 50) {
    i+= 3;
    var sisa = i % 2;
    if (sisa == 1) {
        console.log(i + " adalah bilangan ganjil");
    } else {
        console.log(i + " adalah bilangan genap");
    }
}