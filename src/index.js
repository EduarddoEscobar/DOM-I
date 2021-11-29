const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//Header changes
const navItems = document.querySelectorAll('nav a');
for(let i=0;i<navItems.length;i++){
  navItems[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  navItems[i].className = "italic";
}
const headerImg = document.querySelector('header img');
headerImg.src = siteContent["images"]["logo-img"];

//CTA changes
const ctaText = document.querySelector('.cta h1');
ctaText.textContent = siteContent["cta"]["h1"];
ctaText.style.fontSize = "1.25em";
const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent["cta"]["button"];
const ctaImg = document.querySelector(".cta img");
ctaImg.src = siteContent["images"]["cta-img"];

//Main content changes
const featureSection = document.querySelector(".text-content");
featureSection.querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
featureSection.querySelector('p').textContent = siteContent["main-content"]["features-content"];

const aboutSection = featureSection.nextElementSibling;
aboutSection.querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
aboutSection.querySelector('p').textContent = siteContent["main-content"]["about-content"];

const mainSectionImg = document.querySelector(".middle-img");
mainSectionImg.src = siteContent["images"]["accent-img"];

const servicesSection = document.querySelector(".bottom-content .text-content");
servicesSection.querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
servicesSection.querySelector("p").textContent = siteContent["main-content"]["services-content"];

const productSection = servicesSection.nextElementSibling;
productSection.querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
productSection.querySelector("p").textContent = siteContent["main-content"]["product-content"];

const visionSection = productSection.nextElementSibling;
visionSection.querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
visionSection.querySelector("p").textContent = siteContent["main-content"]["vision-content"];

//Contact changes
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];
const address = contactTitle.nextElementSibling;
address.textContent = siteContent["contact"]["address"];
const phone = address.nextElementSibling;
phone.textContent = siteContent["contact"]["phone"];
const email = phone.nextElementSibling;
email.textContent = siteContent["contact"]["email"];

//Footer changes
const footer = document.querySelector("footer a");
footer.className = "bold";
footer.textContent = siteContent["footer"]["copyright"];
console.log('project wired!')
