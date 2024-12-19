// This "myDictionary" function defines an object named 'phone' with Key Value Pairs 
function myDictionary() {
    var phone = {
        Manufacturer: "Apple",
        Brand: "Iphone",
        Edition: "16",
        OS: "IOS",
        Color: "White",
        Year: "2024"
    };
    delete phone.Brand; // This removes the Brand KVP from the dictionary 
    // This sets the inner HTML of the element with the ID "Dictionary" to the value of the 'Brand' property from the 'phone' object.
    document.getElementById("Dictionary").innerHTML = phone.Brand;
}
