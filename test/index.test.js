const asciify = require("../index")

const options = {
    width: 30,
    height: 20,
    fit: "width"
};
asciify("test/test_img.png", options).then((array => {
    console.log(
        array.reduce((a, b) =>
           a + (b.reduce((c, d) => c + d[0], "") + "\n")
        ,"")
    )
    // console.log(array.map(row => row.reduce((a,b)=> a[0].toString()+b[0].toString())+"\n"))
})).catch(console.error);

/**
 * output below...
 *
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@88CCLLCC00@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88ttLL@@@@@@
 @@@@@@CCLLLLLLCC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@11;;tt@@@@@@
 @@@@@@CCLLLLLLLL@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@tt;;;;tt@@@@@@
 @@@@@@GGLLLLLLGG@@@@@@@@@@@@@@@@@@@@@@@@@@@@LL;;GGiitt@@@@@@
 @@00CCLLLLLLLLLLCCGG@@@@00CCCCCCCCCC@@@@@@GG;;LL@@iitt@@@@@@
 88LLLLLLLLLLLLLLLLLL00@@CCffffffffff@@@@00;;tt@@@@iitt@@@@@@
 00LLLLLLLLLLLLLLLLLLGG@@00GGGGGGGGGG@@@@ii;;tttttt;;iittGG@@
 88LLLLLLLLCCCCLLLLLL00@@CCtttttttttt@@@@fftttttttt;;iittGG@@
 @@00CCCC00GG88CCCC00@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@iitt@@@@@@
 @@@@@@@@@@CC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@iitt@@@@@@
 @@@@@@@@88GG88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 */
