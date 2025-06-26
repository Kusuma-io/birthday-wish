// BirthdayExperience.jsx
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

// Custom hook for typing effect
function useTypingEffect(text, active, speed = 50) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef(null);
  const soundRef = useRef(null);

  useEffect(() => {
    if (!active) {
      setDisplayed(text);
      setIsTyping(false);
      return;
    }
    soundRef.current = new Audio("./typing.mp3");
    soundRef.current.volume = 0.4;
    let idx = 0;
    setDisplayed("");
    setIsTyping(true);

    intervalRef.current = setInterval(() => {
      if (idx < text.length) {
        setDisplayed(text.slice(0, idx + 1));
        soundRef.current.currentTime = 0;
        soundRef.current.play();
        idx++;
      } else {
        clearInterval(intervalRef.current);
        soundRef.current.pause();
        setIsTyping(false);
      }
    }, speed);
    return () => clearInterval(intervalRef.current);
  }, [text, active, speed]);

  // Skip typing effect and show full text immediately
  const skip = useCallback(() => {
    soundRef.current.pause();
    soundRef.current.currentTime = 0;
    clearInterval(intervalRef.current);
    setDisplayed(text);
    setIsTyping(false);
  }, [text]);

  return { displayed, isTyping, skip };
}

// Image imports (update paths if needed)
import bikeImg from "./assets/vietnam-bike.webp";
// import helloImg from "./assets/hello.webp";
import teacherImg from "./assets/teacher.jpg";
import twentyEightImg from "./assets/28.gif";
import muayThaiImg from "./assets/muaythai.webp";
import kuskusImg from "./assets/kuskus.webp";
import paintingImg from "./assets/paintingclassImg.webp";
import throwingImg from "./assets/throwingclassImg.webp";
import handbuiltImg from "./assets/handbuiltclassImg.webp";
import combineImg from "./assets/combineclassImg.webp";
import birthdayImg from "./assets/birthdayImg.webp";
import moneyImg from "./assets/money.webp";
import worryImg from "./assets/worry.jpg";
import lastImg from "./assets/last.png";

// Details mapping for each class
const classDetails = {
  Painting: {
    desc: "Painting ceramics is a wonderful way to add color, texture, and personal expression to your pottery after it’s been shaped, fired, and sometimes glazed. The process typically involves using ceramic paints (also called under-glazes or glazes) to decorate pieces that will be fired in a kiln.",
    items: [
      "All material (pottery tools & painting equipment)",
      "2 pieces of bisque ceramic (up,plate,mini vase,bowl)",
      "class session with instructor (max 2 hours)",
      "Receive your masterpieces in 1-2 weeek after class",
    ],
    img: paintingImg,
  },
  Throwing: {
    desc: "Throwing involves using a wheel to rotate the clay while the potter shapes it using their hands, fingers, and tools. This method is often used to create symmetrical, functional pieces like bowls, cups, plates, and vases, but it can also be used for sculptural forms.",
    items: [
      "All material (pottery tools & equipment)",
      "1.5 kg of stoneware clays",
      "free glaze up to 2 pieces",
      "class session with instructor (max 2 hours)",
      "Receive your masterpieces in 3-4 weeek after class",
    ],
    img: throwingImg,
  },
  Handbuilt: {
    desc: "Hand-building is a traditional and highly versatile method in pottery, where the artist shapes the clay using various tools and techniques. It’s a fantastic way to create unique, organic forms.",
    items: [
      "All material (pottery tools & equipment)",
      "1.5 kg of stoneware clays",
      "free glaze up to 2 pieces",
      "class session with instructor (max 2 hours)",
      "Receive your masterpieces in 3-4 weeek after class",
    ],
    img: handbuiltImg,
  },
  Combine: {
    desc: "Combine is the combination between throwing and hand-building. The potter will get 2 lessons in 1 time class, therefore it would be more practical for those who love messing and playing with clay.",
    items: [
      "All material (pottery tools & equipment)",
      "2 kg of stoneware clays",
      "free glaze up to 3 pieces",
      "class session with instructor (max 2 hours)",
      "Receive your masterpieces in 3-4 weeek after class",
    ],
    img: combineImg,
  },
};

// Birthday messages with optional images
const birthdayLines = [
  { text: "Helloo sayangkuu cintakuuuu 😏", img: null },
  { text: "Happy 28th Birthday for you! 🎉", img: birthdayImg },
  {
    text: "Can you believe you’re officially 2️⃣8️⃣ today?",
    img: twentyEightImg,
  },
  {
    text: "Do you you remember our last travel ? It was 4 months ago 🧐",
    img: null,
  },
  {
    text: "We were flying off to Vietnam so you can learn how to ride a bike 🛵",
    img: bikeImg,
  },
  { text: "Then training like pros at Superbon", img: muayThaiImg },

  { text: "Time sure flies huh, don't you think so?", img: null },
  {
    text: "Anyway, here’s to diving into our new hobbies and owning every adventure 🍻",
    img: null,
  },
  {
    text: "(well, for you it's the adventure of owning Kuskus)",
    img: kuskusImg,
  },
  {
    text: "I pray for you to always feel safe, protected, and worry-free",
    img: worryImg,
  },
  {
    text: "and I want you to live the life you love, baby.",
    img: null,
  },
  {
    text: "Here’s to you, my love: may this year overflow with joy, peace, and....",
    img: null,
  },
  {
    text: "LOTS of MONEY ",
    img: moneyImg,
  },
  {
    text: "And wherever life takes you — know that I (and the dogs) am here for you always. 💖",
    img: lastImg,
  },
  {
    text: "Phew, that was a lot wkwkwkwkwk",
    img: null,
  },
  {
    text: "Okay, enough formalities. Here's your gift!",
    img: null,
  },
];

// Intro message before quiz
const giftIntroLine =
  "Wait wait, I want the gift to be the one you prefer 😀 😉";

// Quiz configuration
const quizQuestions = [
  {
    text: "Which activity appeals to you most?",
    options: [
      "Adding vibrant color, patterns, and personal flair to ready-made pieces.",
      "Using a spinning platform to shape a medium into smooth, symmetrical forms.",
      "Molding and sculpting material by hand to create organic, sculptural pieces.",
      "Combining both spinning and hand techniques for a truly unique creation.",
    ],
    mapping: ["Painting", "Throwing", "Handbuilt", "Combine"],
  },
  {
    text: "How would you describe your creative style?",
    options: [
      "Painterly and detail-oriented.",
      "Precise, functional, and form-focused.",
      "Organic, sculptural, and textural.",
      "Experimental and curious—love mixing approaches.",
    ],
    mapping: ["Painting", "Throwing", "Handbuilt", "Combine"],
  },
  {
    text: "What type of finished object excites you most?",
    options: [
      "A beautifully decorated mug, plate, or bowl bursting with color.",
      "A perfectly shaped vessel spun into balance and symmetry.",
      "A one-of-a-kind sculpture or freeform object built entirely by hand.",
      "An art piece that blends both wheel-spun curves and hand-formed details.",
    ],
    mapping: ["Painting", "Throwing", "Handbuilt", "Combine"],
  },
  {
    text: "How much material would you like to work with?",
    options: [
      "I prefer focusing on decorating pre-made pieces (no raw shaping).",
      "I’d enjoy shaping on a spinning platform.",
      "I’d enjoy handcrafting the material.",
      "I’d like enough material to spin and hand-build.",
    ],
    mapping: ["Painting", "Throwing", "Handbuilt", "Combine"],
  },
];

export default function BirthdayExperience() {
  const [showOverlay, setShowOverlay] = useState(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem("seenOverlay") !== "true"
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [giftStage, setGiftStage] = useState("hidden");
  const [showDetail, setShowDetail] = useState(false);

  // Typing effects
  const {
    displayed: displayedText,
    isTyping,
    skip: skipBirthdayLine,
  } = useTypingEffect(
    birthdayLines[currentLine].text,
    giftStage === "hidden",
    50 // adjust speed per character here
  );
  const {
    displayed: giftDisplayedText,
    isTyping: introTyping,
    skip: skipIntro,
  } = useTypingEffect(
    giftIntroLine,
    giftStage === "intro",
    50 // adjust intro speed here
  );

  const [quizIndex, setQuizIndex] = useState(0);
  const [scores, setScores] = useState({
    Painting: 0,
    Throwing: 0,
    Handbuilt: 0,
    Combine: 0,
  });
  const [resultCategory, setResultCategory] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);
  const bgAudioRef = useRef(null);
  const clickRef = useRef(null);

  //preload click sound
  useEffect(() => {
    clickRef.current = new Audio("./click.mp3");
    clickRef.current.preload = "auto";
  }, []);

  // Preload pop sound
  useEffect(() => {
    audioRef.current = new Audio("./pop.mp3");
    audioRef.current.preload = "auto";
  }, []);

  // ② Initialize it—but don’t play yet (autoplay gets blocked)
  useEffect(() => {
    bgAudioRef.current = new Audio("./background-music.mp3");
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.5;
  }, []);

  // Helper to fire it
  const playClick = () => {
    if (!clickRef.current) return;
    clickRef.current.currentTime = 0;
    clickRef.current.play();
  };

  // Confetti on result
  useEffect(() => {
    if (giftStage !== "result") return;
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, [giftStage]);

  // Navigation handler
  const handleNext = () => {
    // If typing is in progress, skip to full text
    if (giftStage === "hidden" && isTyping) {
      skipBirthdayLine();
      return;
    }
    if (giftStage === "intro" && introTyping) {
      skipIntro();
      return;
    }

    // Start background audio on first interaction
    if (bgAudioRef.current && bgAudioRef.current.paused) {
      bgAudioRef.current.play().catch(() => {
        console.log(
          "Background play prevented by browser, will retry on next click"
        );
      });
    }
    if (giftStage !== "hidden") return;

    if (currentLine < birthdayLines.length - 1) {
      setCurrentLine((prev) => prev + 1);
    } else {
      setGiftStage("box");
    }
  };

  const closeOverlay = (e) => {
    e.stopPropagation();
    setShowOverlay(false);
    localStorage.setItem("seenOverlay", "true");
  };

  const handleGiftClick = (e) => {
    e.stopPropagation();
    if (giftStage !== "box") return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setTimeout(() => setGiftStage("intro"), 1000);
  };

  const startQuiz = () => setGiftStage("quiz");

  const selectOption = (idx) => {
    const category = quizQuestions[quizIndex].mapping[idx];
    setScores((prev) => ({ ...prev, [category]: prev[category] + 1 }));
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((prev) => prev + 1);
    } else {
      const final = { ...scores, [category]: scores[category] + 1 };
      const winner = Object.entries(final).sort((a, b) => b[1] - a[1])[0][0];
      setResultCategory(winner);
      setGiftStage("result");
    }
  };
  const classImages = {
    Painting: paintingImg,
    Throwing: throwingImg,
    Handbuilt: handbuiltImg,
    Combine: combineImg,
  };

  return (
    <div
      className="w-full h-screen bg-[#FFF2D7] text-gray-800 flex items-center justify-center relative overflow-auto px-4"
      onClick={handleNext}
    >
      {/* Onboarding overlay */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-center p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-lg mb-4 text-orange-300 ">
            Hey! If you're on desktop, click the right arrow 👉 to move forward.
            <br />
            On phone? Just tap the right side of the screen.
            <br />
            Some images will load quite slow, please bear with me. it's my first
            big app 😊
          </p>
          <button
            onClick={closeOverlay}
            className="bg-orange-200 text-gray-800 hover:bg-orange-300 active:bg-white active:text-[#F98866] transition-colors duration-100 px-4 py-2 rounded"
          >
            Okay!
          </button>
        </div>
      )}

      {/* Birthday typing message */}
      {giftStage === "hidden" && !showOverlay && (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          {birthdayLines[currentLine].img && (
            <img
              src={birthdayLines[currentLine].img}
              alt=""
              className="w-full max-w-xs sm:max-w-md md:max-w-2xl object-contain rounded-[24px] custom-stroke"
            />
          )}
          <p className="text-xl md:text-2xl font-semibold text-center">
            {displayedText}
          </p>
          {/* only fire confetti on the “Happy 28th Birthday for you!” line */}
          {currentLine === 1 && (
            <Confetti recycle={false} numberOfPieces={200} />
          )}
          <div className="text-sm opacity-50">👉 Tap / Click to continue</div>
        </div>
      )}

      {/* Gift box animation */}
      {giftStage === "box" && (
        <motion.div
          className="cursor-pointer"
          onClick={handleGiftClick}
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5 }}
        >
          <span className="text-8xl">🎁</span>
        </motion.div>
      )}

      {/* Intro before quiz */}
      {giftStage === "intro" && (
        <div className="flex flex-col items-center justify-center w-full h-full px-4">
          <p className="text-xl md:text-2xl font-semibold text-center mb-6">
            {giftDisplayedText}
          </p>
          <div className="w-full max-w-md">
            <div
              onClick={() => {
                playClick();
                startQuiz();
              }}
              className="bg-[#F98866] text-white hover:bg-white hover:text-[#F98866] active:bg-white active:text-[#F98866] transition-colors duration-75 p-4 rounded text-center cursor-pointer"
            >
              let’s gooooo
            </div>
          </div>
        </div>
      )}

      {/* Quiz flow */}
      {giftStage === "quiz" && (
        <div className="flex flex-col items-center justify-center w-full h-full px-4">
          {/* Progress dots */}
          <div className="flex mb-4">
            {quizQuestions.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full mx-1 ${
                  i === quizIndex ? "bg-[#F98866]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Question */}
          <p className="text-lg md:text-xl text-center mb-6 font-semibold">
            {quizQuestions[quizIndex].text}
          </p>

          {/* Options */}
          <div className="grid gap-4 w-full max-w-md">
            {quizQuestions[quizIndex].options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  playClick();
                  selectOption(idx);
                }}
                className="
            bg-[#F98866] text-white
            hover:bg-white hover:text-[#F98866]
            active:bg-white active:text-[#F98866]
            focus:outline-none
            transition-colors duration-75
            p-4 rounded text-center
          "
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Final result reveal */}
      {giftStage === "result" && (
        <div className="w-full h-full px-4 py-4 flex flex-col md:flex-row items-center justify-center relative overflow-auto min-h-screen">
          {showConfetti && <Confetti recycle={false} />}
          {!showDetail ? (
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-4xl font-bold text-center mb-4">
                🎉 Your perfect gift is…
              </p>
              <p className="text-xl md:text-3xl uppercase text-center mb-6">
                {resultCategory} Class
              </p>
              <div
                onClick={() => {
                  playClick();
                  setShowDetail(true);
                }}
                className="bg-[#F98866] text-white hover:bg-white hover:text-[#F98866] active:bg-white active:text-[#F98866] transition-colors duration-75 p-4 rounded text-lg md:text-xl font-semibold"
              >
                Enlighten Me
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row w-full max-w-4xl items-center justify-between md:space-x-6 space-y-4 md:space-y-0 overflow-auto py-4">
              {/* Image section */}
              <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                <img
                  src={classDetails[resultCategory].img}
                  alt={`${resultCategory} class`}
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain rounded-lg shadow"
                />
              </div>

              {/* Text section */}
              <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4">
                <h2 className="text-3xl font-bold mb-4">
                  {resultCategory} Class
                </h2>
                <p className="mb-4">{classDetails[resultCategory].desc}</p>
                <ul className="list-disc list-inside space-y-2">
                  {classDetails[resultCategory].items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {/* Retake quiz prompt */}
                <div className="mt-8 text-center">
                  <p className="mb-2 text-lg">
                    Don't like this class? Let's retake the quiz again
                  </p>
                  <button
                    onClick={() => {
                      playClick();
                      setShowDetail(false);
                      setGiftStage("quiz");
                      setQuizIndex(0);
                      // reset scores to zero
                      setScores(
                        Object.keys(classDetails).reduce(
                          (acc, k) => ({ ...acc, [k]: 0 }),
                          {}
                        )
                      );
                    }}
                    className="bg-[#F98866] text-white hover:bg-white hover:text-[#F98866] active:bg-white active:text-[#F98866] transition-colors duration-75 p-4 rounded text-lg font-semibold"
                  >
                    yes please 🥰
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
