let padrinhos = [
    {
        "name": "Padrnho 1",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 2",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 3",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 4",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 5",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 6",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 7",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 8",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 9",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 10",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 11",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 12",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 13",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 14",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 15",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 16",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 17",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 18",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 19",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 20",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 21",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 22",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 23",
        "foto": "profile-pic.png"
    },
    {
        "name": "Padrnho 24",
        "foto": "profile-pic.png"
    }
]

function getPadrinhoPolaroid(padrinho) {
    return `
    <div class="polaroid">
        <img src="images/padrinhos/${padrinho['foto']}" alt="${padrinho['name']}" style="width:100%">
        <div class="container-polaroid">
            <p>${padrinho['name']}</p>
        </div>
    </div>
`
}

function showPadrinhos() {
    var padrinhoHTML = ""
    for (var i in padrinhos) {
        padrinhoHTML += getPadrinhoPolaroid(padrinhos[i])
    }
    document.getElementById("padrinhos-fotos").innerHTML = padrinhoHTML
}
