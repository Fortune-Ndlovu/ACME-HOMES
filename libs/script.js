//Hamburger menu
function Hamburger(nodeName) {
  let myNode = document.querySelector(nodeName + ' .hamburger');

  return {
    activate: () => myNode.addEventListener('click', e => myNode.parentNode.querySelector('.navbar').classList.toggle('hidden'), false), //activate
  } //return
} //Hamburger

let topMenu = new Hamburger('#topMenu');
topMenu.activate();


//testimonials
const testimonials = [
	{
		name: "Tommy Power",
		job: "Web Developer",
		image: "../img/testimonial_1.jpg",
		testimonial:
			"Love my new home. Harley Queen helped me visualize my dream home, Tom Jerry provided me with the technical details I craved, and last but not least Johnny Test finalized the process. The ACME Founders were so nice, and I would highly recommend them because they kept me in the loop throughout the process, excellent work."
	},
	{
		name: "Susan Cherry",
		job: "UX, UI Designer",
		image: "../img/testimonial_4.jpg",
		testimonial:
			"I would 100% recommend Acme Homes, got new windows and doors for the full house installed, great job from start to finish, from the 1st day out to measure up, throughout to the finish on the job, Tom Jerry and his team were professional, friendly and did everything they could to work around me with minimal disruption."
	},
	{
		name: "David Slaggin",
		job: "Product Manager",
		image: "../img/testimonial_5.jpg",
		testimonial:
			"Love my new home. Harley Queen helped me visualize my dream home, Tom Jerry provided me with the technical details I craved, and last but not least Johnny Test finalized the process. The ACME Founders were so nice, and I would highly recommend them because they kept me in the loop throughout the process, excellent work."
	},
	{
		name: "Agetha Zuth",
		job: "Front-End Developer",
		image: "../img/testimonial_6.jpg",
		testimonial:
			"I would 100% recommend Acme Homes, got new windows and doors for the full house installed, great job from start to finish, from the 1st day out to measure up, throughout to the finish on the job, Tom Jerry and his team were professional, friendly and did everything they could to work around me with minimal disruption."
	}
];
let i = 0; // current slide
let j = testimonials.length; // total slides
let testimonialContainer = document.getElementById("testimonial-container");
function next() {
	i = (j + i + 1) % j;
	displayTestimonial();
}

function prev() {
	i = (j + i - 1) % j;
	displayTestimonial();
}
let displayTestimonial = () => {
	testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
         <img src=${testimonials[i].image}></img>
        <h3>${testimonials[i].name}</h3>
        <h6>${testimonials[i].job}</h6>
        `;
};
window.onload = displayTestimonial;
