// Typewriter effect: only cycles the text after ":"
class TypeWriter {
    constructor(elementId, phrases, speed = 100, delay = 1500) {
        this.el = document.getElementById(elementId);
        this.phrases = phrases;
        this.speed = speed;
        this.delay = delay;
        this.phraseIndex = 0;
        this.text = "";
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentPhrase = this.phrases[this.phraseIndex];
        const colonIndex = currentPhrase.indexOf(":");
        const staticPart = currentPhrase.slice(0, colonIndex + 1) + " ";
        const dynamicPart = currentPhrase.slice(colonIndex + 1).trim();

        if (this.isDeleting) {
            this.text = dynamicPart.substring(0, this.text.length - 1);
        } else {
            this.text = dynamicPart.substring(0, this.text.length + 1);
        }

        this.el.textContent = staticPart + this.text;

        let typeSpeed = this.speed;
        if (!this.isDeleting && this.text === dynamicPart) {
            typeSpeed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === "") {
            this.isDeleting = false;
            this.phraseIndex++;
            if (this.phraseIndex >= this.phrases.length) this.phraseIndex = 0;
            typeSpeed = 500; // small pause before next phrase
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Arrays of phrases
const namePhrases = [
    "Abid Abdullah: Student",
    "Abid Abdullah: Entrepreneur",
    "Abid Abdullah: Engineer",
    "Abid Abdullah: Tech Influencer"
];

const hardSkills = [
    "Hard Skills: IoT",
    "Hard Skills: Automation",
    "Hard Skills: C++",
    "Hard Skills: Python",
    "Hard Skills: Web Development",
    "Hard Skills: Leadership",
    "Hard Skills: Business Model Planning",
    "Hard Skills: Vibe Coding",
    "Hard Skills: Using Generative AI",
    "Hard Skills: Arduino",
    "Hard Skills: JavaScript",
    "Hard Skills: Creativity"
];

const softSkills = [
    "Soft Skills: Data Science",
    "Soft Skills: Public Speaking",
    "Soft Skills: AI Model",
    "Soft Skills: MongoDB",
    "Soft Skills: Teamwork",
    "Soft Skills: Problem Solving",
    "Soft Skills: Business Scaling"
];

// Initialize typewriters
new TypeWriter("nameType", namePhrases, 100, 1500);
new TypeWriter("hardSkillsType", hardSkills, 70, 1200);
new TypeWriter("softSkillsType", softSkills, 70, 1200);
