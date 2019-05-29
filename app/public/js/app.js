let Friend = function (name, photo, values) {
    this.name = name,
    this.photo = photo,
    this.values = values
}

function createFriend(friend) {
    friends.append(friend);
}

$("#submit-data").click(function () {
    event.preventDefault();

    let name = $("#name").val().trim();
    let photo = $("#photo").val().trim();
    let values = [];

    for (let i = 1; i <= 10; i++) {
        let q = "#q" + i;

        values.push($(q).val());
    }

    if (values.some(isNaN) || name.length < 1 || photo.length < 1) {
        $("#modalTitle").text("Error");
        $("#new-friend").text("Please fill out form completely")
        $("new-friend-img").attr("src", "https://unowp.com/wp-content/uploads/2017/08/white-screen-of-death.png");
    } else {
        let newFriend = new Friend(name, photo, values);

        $.post("/api/friends", newFriend,
            function (data) {
                $("#modalTitle").text("Your new best friend!");
                $("#new-friend").text(data.name);
                $("#new-friend-img").attr("src", data.photo);
            })

        $("#user-info").trigger("reset");
        $("#survey-body").trigger("reset");
    }
})



