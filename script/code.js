console.log("Annyeonghaseyo")
// JSON data
// const testimonials = [
//     {
//         "name": "Taryn-Lee",
//         "surname": "Walbrugh",
//         "quotes": "Nathalie has helped me in more ways than one, she's always lending a helping hand whether it be with coding or in everyday life. Nathalie is truly an amazing person who has shown me that being who you are and sticking by your values really benefits you in the long run.",
//         "profile": "https://i.ibb.co/KzspVpN/Screenshot-2024-04-04-100009.png"
//     },
//     {
//         "name": "Matthew ",
//         "surname": "Swain",
//         "quotes": "Nathalie is an outstanding and amazing individual, has unmatched enthusiasm. Her determination and drive is out of this world. She has amazing communicative skills and has a cheerful and positive personality that always shines and it is a privilege to have her as a work colleague but mainly as a companion an friend.",
//         "profile": "https://i.ibb.co/MntDQCq/IMG-20191224-165149-374.jpg"
//     },

//     {
//         "name": "Veronique",
//         "surname": "Nappie",
//         "quotes": "Nathalie has an incredible energy and is very hardworking. She is diligent when it comes to her work and puts in a lot of effort to broaden her knowledge. She is a team player and always willing to help her peers in whatever capacity is required of her. I see her being a great contributor to any team she is a part of and know that she will achieve great things.",
//         "profile": "https://i.ibb.co/sJBMq7J/20240110-140911-4.jpg"
//     },
//     {
//         "name": "Jason",
//         "surname": "September",
//         "quotes": "Nathalie Willemse is a hard working individual, always full of energy and very inspiring when it comes to her work. She always has a positive outlook on situations that may prove to be challenging and that inspires others around her.",
//         "profile": "https://i.ibb.co/LSY45dv/IMG-20231101-161112.jpg"
//     },
//     {
//         "name": "Joel",
//         "surname": "Mukanya",
//         "quotes": "Nathalie is a creative, and well-behaved individual who always prioritizes her work. She excels in collaborating with others and has gained proficiency in HTML5, CSS, and Bootstrap. Including Git and GitHub.",
//         "profile": "https://i.ibb.co/HgdyLSD/joel2.jpg"
//     }
// ];

// // Get the container element
// const slideshowContainer = document.getElementById('slideshow-container');

// // Loop through each testimonial and create a testimonial element
// testimonials.forEach(testimonial => {
//     // Create testimonial HTML
//     const testimonialHtml = `
    
//      <div class="slideshow-container">
//   <div class="testimonial-card">
//     <div class="testimonial">
//       <img src="${testimonial.profile}" alt="${testimonial.name} ${testimonial.surname}">
//       <h3>${testimonial.name} ${testimonial.surname}</h3>
//       <p class="testimonial-content">"${testimonial.quotes}"</p>
//     </div>
//   </div>
// </div>



//     `;
//     // Append testimonial HTML to the container
//     slideshowContainer.innerHTML += testimonialHtml;
// });

// // JavaScript for slideshow functionality
// let slideIndex = 0;
// showSlides();

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides() {
//     const slides = document.getElementsByClassName("testimonial");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, none);
// }

