let Friend = function (name, photo, values) {
    this.name = name,
        this.photo = photo,
        this.values = values
}

function createFriend(friend) {
    friends.append(friend);
}

$("#submit-data").click(function () {
    // event.preventDefault();

    let name = $("#name").val().trim();
    let photo = $("#photo").val().trim();
    let values = [];

    for (let i = 1; i <= 10; i++) {
        let q = "#q" + i;

        values.push($(q).val());
    }

    let newFriend = new Friend(name, photo, values);

    console.log(newFriend)

    $.post("/api/friends", newFriend,
        function (data) {
            console.log(data)

            $("#new-friend").text(data.name);
            $("#new-friend-img").attr("src", data.photo)

        })
})


