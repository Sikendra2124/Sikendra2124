
var maplist = [
    { firstname: "sk", lastname: "kumar" },
    { firstname: "piyush", lastname: "kumar" },
    { firstname: "suraj", lastname: "kumar" }
];

for (var i = 0; i < maplist.length; i++) {
    // var person = maplist[i];
    console.log("First Name:" + maplist[i].firstname + ", Last Name: " + maplist[i].lastname);
}

var maplist1 = [
    { firstname: "sk", lastname: "kumar" },
    { firstname: "piyush", lastname: "kumar" },
    { firstname: "suraj", lastname: "kumar" }
];

console.log(maplist1);

var complexMap={
    "problems": [{
        "Diabetes":[{
            "medications":[{
                "medicationsClasses":[{
                    "className":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug#2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }],
                    "className2":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug#2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }]
                }]
            }],
            "labs":[{
                "missing_field": "missing_value"
            }]
        }],
        "Asthma":[{}]
    }]}

    console.log(complexMap);