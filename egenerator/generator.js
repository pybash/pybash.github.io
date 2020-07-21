const usernameCombinations = ["fuxk", "wasted", "shit", "high", "night", "rose", "twisted", "sad", "dead", "flower", "blossom", "sorrow", "dream", "shine", "rain", "less"]
const allHearts = ["❤️", "💔", "💖", "🖤"]
const allStylings = ["fancy", "goth", "hollow"]


// me when i have to import all profile picture links

const pfps = [
    "https://i.pinimg.com/564x/a4/66/eb/a466ebe561d517a3b9e47c0b82dc4a68.jpg", 
    "https://i1.sndcdn.com/artworks-000627637864-ousgfi-t500x500.jpg",
    "https://i.pinimg.com/564x/1f/96/b5/1f96b57d57ad9e962053a6e7cdc6aa84.jpg",
    "https://i1.sndcdn.com/artworks-000560486943-pf2o2n-t500x500.jpg",
    "https://cdn140.picsart.com/295765342031211.png?r1024x1024",
    "https://cdn141.picsart.com/294876623007201.jpg?type=webp&to=min&r=640",
    "https://66.media.tumblr.com/7b1f81c1849d3d664b74f8bb33bd381e/tumblr_pctlhmFCA61xwjxcso1_400.gif",
    "https://data.whicdn.com/images/335998101/original.jpg",
    "https://i.pinimg.com/736x/86/7c/35/867c35b058a4beef2ba2cea29b28603e.jpg",
    "https://data.whicdn.com/images/333295976/original.jpg",
    "https://data.whicdn.com/images/324940717/original.jpg",
    "https://i.pinimg.com/474x/a4/55/2b/a4552b7cae01573c58f6c5a91479b9b8.jpg",
    "https://i.pinimg.com/474x/1d/d3/83/1dd3832f831441a76808c6e2226a5d6f.jpg",
    "https://i.pinimg.com/originals/a6/e8/1b/a6e81b2bb0685ebab1d7b2f15283b7e4.jpg",
    "https://i.pinimg.com/474x/59/58/4a/59584a492b83f78ea626e0265099ab73.jpg",
    "https://cdn130.picsart.com/305146130100201.jpg?type=webp&to=min&r=640",
    "https://i.pinimg.com/736x/4e/ea/9b/4eea9bc964dffc308ece42a0dbd9f181.jpg",
    "https://cdn130.picsart.com/305222264178201.jpg?type=webp&to=min&r=640",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS28IIXBh9Z2An9y1LyZxHYPsF5kKLp5-QYaw&usqp=CAU",
    "https://i.pinimg.com/236x/0f/25/f3/0f25f3d2c8c4431b051ecd1f6d3fafef.jpg",
    "https://i.pinimg.com/originals/77/86/23/778623e849a39f2856d195fe02f43ade.jpg"]
var recentPFP = ""

// const fancyStyle = {'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'}
// const gothStyle = {'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟'}
// const hollowStyle = {'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'}
const Styles = {
    fancy: {'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'},
    goth: {'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟'},
    hollow: {'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'}
}

window.onload = function () {
    
    var generateButton = document.getElementById("generateButton")
    var profilePicture = document.getElementById("profilepicture")
    var username = document.getElementById("username")
    var copyButton = document.getElementById("copyButton")

    copyButton.onclick = function () {
        username.select()
        username.setSelectionRange(0, 99999);
        document.execCommand("copy")
    }

    // Onload
    var newPFP = pfps[Math.floor(Math.random() * pfps.length)]
    profilePicture.src = newPFP
    recentPFP = newPFP

    var hasHearts = Math.random() >= 0.5
    var hasStyle = Math.random() >= 0.5
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
    if(hasStyle) {
        var newStyle = allStylings[Math.floor(Math.random() * allStylings.length)]
        var currentChar = 0
        var replaceNewName = ""
        while(currentChar != newUser.length) {
            replaceNewName = replaceNewName.concat(Styles[newStyle][newUser.charAt(currentChar)])
            currentChar += 1
        }
        newUser = replaceNewName
    }
    if(hasHearts) {
        var whichHeart = allHearts[Math.floor(Math.random() * allHearts.length)]
        newUser = whichHeart.concat(" " + newUser + " " + whichHeart)
    }
    username.value = newUser
    
    generateButton.onclick = function () {

        var amountofCombinations = Math.floor((Math.random()) * 2) + 1 // basically random.randint(1,2) in python
        var recentCombo = "" // To prevent repeition
        var newUser = ""
        var hasHearts = Math.random() >= 0.5
        var hasStyle = Math.random() >= 0.5
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
        if(hasStyle) {
            var newStyle = allStylings[Math.floor(Math.random() * allStylings.length)]
            var currentChar = 0
            var replaceNewName = ""
            while(currentChar != newUser.length) {
                replaceNewName = replaceNewName.concat(Styles[newStyle][newUser.charAt(currentChar)])
                currentChar += 1
            }
            newUser = replaceNewName
        }
        if(hasHearts) {
            var whichHeart = allHearts[Math.floor(Math.random() * allHearts.length)]
            newUser = whichHeart.concat(" " + newUser + " " + whichHeart)
        }
        username.value = newUser
    }
}