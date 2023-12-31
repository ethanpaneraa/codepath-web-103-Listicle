const renderBikeShops = async () => {
    
    const response = await fetch('/bikeshops')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${gift.logo})`

            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Website: ' + gift.website
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.bikes
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/bikeshops/${gift.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
};

const renderGift = async () => {
    const requestedID = parseInt(window.location.pathname.split("/").pop()); 
    const response = await fetch("/bikeshops"); 
    const data = await response.json(); 
    const giftContent = document.getElementById("gift-content"); 
    let gift; 
    console.log("data:", data); 
    gift = data.find(gift => gift.id === requestedID);  
    console.log("gift:", gift)
    if (gift) {
        console.log("LOOK HERE:",);
        document.getElementById("image").src = `${gift.logo}`; 
        document.getElementById("name").textContent = gift.name;
        document.getElementById("description").textContent = gift.missionStatement;
        document.getElementById("pricePoint").textContent = "Price: " + gift.website;
        document.getElementById("audience").textContent = "Great for: " + gift.bikes;
        document.title = `UnEarthed - ${gift.name}`; 
    } else {
        const message = document.createElement("h2"); 
        message.textContent = "No Gift Found 😞"; 
        giftContent.appendChild(message);
    }
};

renderGift(); 

const requestedUrl = window.location.href.split("/").pop(); 
if (requestedUrl) {
    renderGift(); 
} else {
    renderBikeShops();
};