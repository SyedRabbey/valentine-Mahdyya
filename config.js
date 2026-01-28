// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    valentineName: "Mahdyya",

    pageTitle: "I have a huge question for you. Are you ready? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🐈', '🐱']
    },

    questions: {
        first: {
            text: "Do you love me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I love you soooo much! ❤️"
        },

        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },

        video: {
            text: "Watch this before answering 💖",
            videoUrl: "assets/video.mp4",
            nextBtn: "Next ❤️"
        },

        third: {
            text: "Will you pleaaaase be my valentine? 🌹",
            yesBtn: "Hmmmm yeah!",
            noBtn: "I need to sleep on it!"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    celebration: {
        title: "Get ready for a fun-filled Feb 14th! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/ddwwxocxj/video/upload/v1769628225/Lesley_Gore_-_Sunshine_Lollipops_And_Rainbows__mp3.pm_lstacy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.8
    }
};

// Make the video fit its container
document.addEventListener("DOMContentLoaded", () => {
    // Adjust selector based on your HTML structure
    const video = document.querySelector(".container video");
    if (video) {
        video.style.width = "100%";
        video.style.height = "auto";
        video.style.display = "block";
        video.style.margin = "0 auto";
        video.style.borderRadius = "15px"; // optional
    }
});

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
