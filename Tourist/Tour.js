document.addEventListener("DOMContentLoaded", function () {
    const toursData = [
        {
            image: "Images/tour1.jpg",
            title: "Mystical Mountains",
            description: "Embark on a journey to the mystical mountains and experience breathtaking views, serene landscapes, and invigorating treks. Explore hidden trails and discover the wonders of nature.",
            tourId: "1"
        },
        {
            image: "Images/tour2.jpg",
            title: "Coastal Escapes",
            description: "Unwind on pristine sandy shores and enjoy the rhythm of the waves. Immerse yourself in coastal cultures, indulge in delectable seafood, and create unforgettable beach memories.",
            tourId: "2"
        },
        {
            image: "Images/tour3.jpg",
            title: "Cultural Odyssey",
            description: "Embark on a cultural journey to discover ancient traditions, historic landmarks, and vibrant local communities. Immerse yourself in diverse cultures and enriching experiences.",
            tourId: "3"
        }
    ];

    const tourCardsContainer = document.querySelector(".tour-cards");

    toursData.forEach(tour => {
        const tourCard = document.createElement("div");
        tourCard.className = "tour-card";
        
        const image = document.createElement("img");
        image.src = tour.image;
        image.alt = tour.title;
        image.className = "tour-image";
        tourCard.appendChild(image);

        const title = document.createElement("h3");
        title.className = "tour-title";
        title.textContent = tour.title;
        tourCard.appendChild(title);

        const description = document.createElement("p");
        description.textContent = tour.description;
        tourCard.appendChild(description);

        const detailsButton = document.createElement("button");
        detailsButton.className = "tour-details-button";
        detailsButton.textContent = "View Details";
        detailsButton.dataset.tour = tour.tourId;
        tourCard.appendChild(detailsButton);

        tourCardsContainer.appendChild(tourCard);
    });
});
