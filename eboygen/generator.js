var usernameCombinations = ["fuxk", "wasted", "shit", "high", "vibe", "night", "life", "rose", "twisted", "sad", "dead", "flower"]

// me when i have to import all profile picture links

var pfps = [
    "https://i.pinimg.com/564x/a4/66/eb/a466ebe561d517a3b9e47c0b82dc4a68.jpg", 
    "https://i1.sndcdn.com/artworks-000627637864-ousgfi-t500x500.jpg",
    "https://i.pinimg.com/564x/1f/96/b5/1f96b57d57ad9e962053a6e7cdc6aa84.jpg",
    "https://i1.sndcdn.com/artworks-000560486943-pf2o2n-t500x500.jpg",
    "https://cdn140.picsart.com/295765342031211.png?r1024x1024",
    "https://cdn141.picsart.com/294876623007201.jpg?type=webp&to=min&r=640",
    "https://66.media.tumblr.com/7b1f81c1849d3d664b74f8bb33bd381e/tumblr_pctlhmFCA61xwjxcso1_400.gif"]
var recentPFP = ""

window.onload = function () {
    
    var generateButton = document.getElementById("generateButton")
    var profilePicture = document.getElementById("profilepicture")
    var username = document.getElementById("username")
    
    // Onload
    var newPFP = pfps[Math.floor(Math.random() * pfps.length)]
    profilePicture.src = newPFP
    recentPFP = newPFP

    var amountofCombinations = Math.floor((Math.random()) * 2) + 1 // basically random.randint(1,2) in python
    var recentCombo = "" // To prevent repeition
    var newUser = ""
    for(const i of Array(amountofCombinations).keys()) {
        var newCombo = usernameCombinations[Math.floor(Math.random() * usernameCombinations.length)]
        while(recentCombo == newCombo) {
            newCombo = usernameCombinations[Math.floor(Math.random() * usernameCombinations.length)]
        }
        newUser = newUser.concat(newCombo)
        recentCombo = newCombo
    }

    username.value = newUser
    
    generateButton.onclick = function () {

        var amountofCombinations = Math.floor((Math.random()) * 2) + 1 // basically random.randint(1,2) in python
        var recentCombo = "" // To prevent repeition
        var newUser = ""
        // I want to keep combinations low so its more minimalistic
        for(const i of Array(amountofCombinations).keys()) {
            var newCombo = usernameCombinations[Math.floor(Math.random() * usernameCombinations.length)]
            while(recentCombo == newCombo) {
                newCombo = usernameCombinations[Math.floor(Math.random() * usernameCombinations.length)]
            }
            newUser = newUser.concat(newCombo)
            recentCombo = newCombo
        }
        var newPFP = pfps[Math.floor(Math.random() * pfps.length)]
        while(newPFP == recentPFP) {
            newPFP = pfps[Math.floor(Math.random() * pfps.length)]
        }
        var newImage = document.createElement("img");
        newImage.src = newPFP
        newImage.onload = function () {
            recentPFP = this.src
            profilePicture.src = this.src;
        }
        username.value = newUser
    }
}