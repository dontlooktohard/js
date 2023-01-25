const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

    let list = "<ol>";
    users.forEach(function(user) {
      list += "<li>" + user.firstName + " " + user.lastName + "</li>";
    });
    list += "</ol>";
    console.log(list);

    let changeList = document.querySelector("ol");
    changeList.style.listStyleType = "none";

    let changeId = document.querySelector("ol");
    users.forEach(function(user) {
    let li = document.createElement("li");
    li.innerHTML = user.firstName + " " + user.lastName;
    li.dataset.id = user.id;
    list.appendChild(li);
});
    