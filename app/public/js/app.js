// Need to communicate back and forth with friends.js (require and module.exports)

// take all user values on submit click and create a friend object (use constructor)

// ajax post this friend object to friends

// ajax get a friend from the database using the algorithm in the hw instructions
    // run for loop through entire database comparing the new user values vs the DB with the comparison algorithm

let Friend = function(name, pic, values){
    this.name = name,
    this.pic = pic,
    this.values = values
}

$("#submit-data").click(function(event){
    let name = $("#name").val();
    let photo = $("#photo").val();
    let values = [];
    
    for (let i=1; i<=10; i++){
        let q = `"#q${i}"`;

        console.log(q)

        values.push($(q).val());
    }

    console.log(values)
})


