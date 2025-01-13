function my_Function() {
    var part_1 = "This ";
    var part_2 = "is a ";
    var part_3 = "concate ";
    var part_4 = "example. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concate_str").innerHTML = whole_sentence;
};

function slice_Method() {
    var sentence = "This is an example of the slice method";
    var slice_section = sentence.slice(11, 39);
    document.getElementById("slice").innerHTML = slice_section;
};

function uppercase_Function() {
    let text = document.getElementById("uppercase").innerHTML;
    document.getElementById("uppercase").innerHTML = text.toUpperCase();
};

document.addEventListener("DOMContentLoaded", function () {
    // Search Example
    let text = "Locate where 'locate' occurs!";
    let index = text.search("locate");
    document.getElementById("searchResult").innerHTML = `The word 'search result' first occurs at index: ${index}`;
});
    // Demo Example
    let x = 3.15;
    let y = 3;
    document.getElementById("demo").innerHTML = x + "<br>" + y;

    // Number to String
    function string_Method(){
    let num = 628;
    document.getElementById("Number_to_string").innerHTML = num.toString();
    };

    // Precision Example
    function precision_Method(){
    let preciseNum = 33.628200025;
    document.getElementById("precision").innerHTML = preciseNum.toPrecision(5);
    };
    
    function fixed_Function(){
    let num = 5.56789;
    let n = num.toFixed(); 
    document.getElementById("demo2").innerHTML = n;
    };

    function value_Function(){
        let x = 13
        let y = x.valueOf();
        document.getElementById("demo").innerHTML = x;
    }
   
