const images = [
    "https://source.unsplash.com/featured/?mountains",
    "https://source.unsplash.com/featured/?hiking",
    "https://source.unsplash.com/featured/?kayak",
    "https://source.unsplash.com/featured/?forest",
    "https://source.unsplash.com/featured/?mountain",
    "https://source.unsplash.com/featured/?trail",
    "https://source.unsplash.com/featured/?outdoors",
  "https://source.unsplash.com/featured/?norway"
  ]
  const randomIndex = Math.floor(images.length * Math.random())
  const cardImages = document.getElementsByClassName("card-image")

//   for(let i =0;i<cardImages.length; i++){
//       const div = document.createElement('img')
//       div.src= images[randomIndex];
//       div.alt="image"
//       cardImages[i].append(div)
//       break
//   }


//   $('div.card-image').each ->
//     random_image_index = Math.floor(images.length * Math.random())
//     $(this).css('background-image', 'url(' + images[random_image_index] + ')')


