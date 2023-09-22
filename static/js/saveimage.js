let currentImageIndex = 0;
        let cardImages = Array.from(document.querySelectorAll('.card .card-image    '));

        document.addEventListener('keydown', (event) => {
            // A key is pressed
            if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft' || event.key === 'ф' || event.key === 'ф') {
                // go to the previous image
                if (currentImageIndex > 0) {
                    currentImageIndex--;
                    let imageUrl = getBackgroundImageUrl(cardImages[currentImageIndex]);
                    showPopUpWithImage(imageUrl);
                }
            }
            // D key is pressed
            else if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight' || event.key === 'в' || event.key === 'В') {
                // go to the next image
                if (currentImageIndex < cardImages.length - 1) {
                    currentImageIndex++;
                    let imageUrl = getBackgroundImageUrl(cardImages[currentImageIndex]);
                    showPopUpWithImage(imageUrl);
                }
            }
            // Esc key is pressed
            else if (event.key === 'Escape') {
                closePopUp();
            }
        });
        function closePopUp() {
            let popUp = document.querySelector('.pop-up');
            popUp.style.display = 'none';

            // remove 'animation-off' class to enable hover effect again for all images
            cardImages.forEach(cardImage => cardImage.classList.remove('animation-off'));
        }

        function getBackgroundImageUrl(cardImage) {
            let backgroundImageStyle = cardImage.style.backgroundImage;
            return backgroundImageStyle.replace('url("','').replace('")', '');
        }

        function showPopUpWithImage(imageUrl) {
            // show pop-up and set image
            let popUp = document.querySelector('.pop-up');
            let popUpImage = popUp.querySelector('img');

            // transition to the next or previous image
            popUpImage.style.opacity = 0;
            setTimeout(() => {
                popUpImage.src = imageUrl;
                popUpImage.style.opacity = 1;
            }, 500); // delay should be the same as transition duration in CSS

            popUp.style.display = 'block';

            // disable hover effect
            cardImages.forEach(cardImage => cardImage.classList.add('animation-off'));
            // enable hover effect for the current image
            cardImages[currentImageIndex].classList.remove('animation-off');
        }
        document.querySelectorAll('.card .card-image').forEach((cardImage, index) => {
            cardImage.onclick = () => {
                // update the current image index
                currentImageIndex = index;

                // extract image url from css background-image
                let backgroundImageStyle = cardImage.style.backgroundImage;
                let imageUrl = backgroundImageStyle.replace('url("','').replace('")', '');

                // show pop-up and set image
                let popUp = document.querySelector('.pop-up');
                popUp.style.display = 'block';
                popUp.querySelector('img').src = imageUrl;

                // add 'animation-off' class to disable hover effect
                cardImage.classList.add('animation-off');
            }
        });


        document.querySelector('.pop-up').addEventListener('click', (event) => {
            // Check if the clicked element is not the image before closing the pop-up
            if(event.target.tagName !== 'IMG') {
                closePopUp();
            }
        });
