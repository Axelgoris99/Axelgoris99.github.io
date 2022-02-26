AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Engineer Internship - Mixed reality Varjo XR3",
    cardImage: "assets/images/experience-page/clarte.png",
    place: "Clarte",
    time: "(April - July 2021)",
    desp: "<li>Worked to create a quick interface prototyping tool with viso-haptic co-location and eye tracking using a mixed reality see-through headset.</li> <li> Created a co-location algorithm to align both real and virtual object.</li> <li> Created post-processing shader in order to create a high quality Heatmap by using eye-tracking on the user. </li> <li><a href=' https://youtu.be/xiWiXpgZKD4' target='_blank'> Overview of my work: https://youtu.be/xiWiXpgZKD4 </a></li>",
  },
  {
    title: "Material Handling Operator",
    cardImage: "assets/images/experience-page/deya.jpg",
    place: "Deya",
    time: "(June - July, 2020)",
    desp: "<li>Cutting and dressing of metal frames.</li><li>Management of a complex cutting machine with 2 temporary workers under my direction.</li>",
  },
  {
    title: "Karate Coach - Teacher and Former Competitor",
    cardImage: "assets/images/experience-page/karate.png",
    place: "ISK / SKCBN",
    time: "(September 2014 - Present)",
    desp: "<li>Train people from 4 years old to 75 years old in a group of 20 persons.</li><li>Participate and organise national and international competitions or demonstrations.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "<a href='https://www.forumatlantique.fr/' target='_blank'>Treasurer - Forum Atlantique</a>",
    cardImage: "assets/images/experience-page/fa.png",
    description:
      "Do the accounts, set the prices. Establishing and respecting the provisional budget. Analyse variances, payments and reimbursements.",
  },
  {
    title: "<a href='https://www.vibracoustic.com/en/' target='_blank'>Vibracoustic consulting</a>",
    cardImage: "assets/images/experience-page/vibra.jpg",
    description:
      "Set up a strategy and an adapted planning. Monitor the progress of the project. Communicate clearly and accurately with the company.",
  },
  {
    title: "<a href='https://enactus.fr/' target='_blank'>Team Leader - Enactus Nantes</a>",
    cardImage: "assets/images/experience-page/enactus.png",
    description:
      "Organising recruitment for existing projects. Assist in the creation and emergence of new projects. Monitoring different projects and guiding them in the long term.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Area Of Effect Game Jam 2021",
    subtitle: "Participant",
    image: "assets/images/experience-page/lifeAttack.png",
    desp: "We created a game where you need to collect letters by killing them and then use the letters in a puzzle way where you must fill the space. The Theme was : Signs of Life. We finished 12/41 which is good!",
    link: "https://axelgoris99.itch.io/life-attack",
  },
  {
    title: "The Clarte Hackathon",
    subtitle: "Team Leader",
    image: "assets/images/experience-page/lapine.png",
    desp: "We created an Augmented Reality app with a book for children as a 36h hackathon using Unity.",
    link:"#",
  },
  {
    title: "Brackeys Game Jam 2021-2",
    subtitle: "Participant",
    image: "assets/images/experience-page/brackeys.png",
    desp: "We created a small game where you need to destroy as many things as possible. The Theme was : Let There Be Chaos. Unfortunately we only had 24h over the full week to participate, leading to a very small implementation.",
    link: "https://axelgoris99.itch.io/back-in-a-minute",
  },

  {
    title: "Area Of Effect Game Jam 2021",
    subtitle: "Participant",
    image: "assets/images/experience-page/lifeAttack.png",
    desp: "We created a game where you need to collect letters by killing them and then use the letters in a puzzle way where you must fill the space. The Theme was : Signs of Life. We finished 12/41 which is good!",
    link: "https://axelgoris99.itch.io/life-attack",
  },
  {
    title: "Area Of Effect Game Jam 2021",
    subtitle: "Participant",
    image: "assets/images/experience-page/lifeAttack.png",
    desp: "We created a game where you need to collect letters by killing them and then use the letters in a puzzle way where you must fill the space. The Theme was : Signs of Life. We finished 12/41 which is good!",
    link: "https://axelgoris99.itch.io/life-attack",
  },

  
  
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, link }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href=${link} target="_blank" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
