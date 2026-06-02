// D:\Projects\Anika\apology\src\App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Pause, BookOpen, Image, FileText, Sparkles, CheckCircle2, RefreshCw, Gift, Trash2, HeartHandshake, Smile, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import Heart3D from './components/Heart3D';

const photoFiles = [
  "WhatsApp Image 2026-05-31 at 12.53.12 (1).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.12 (2).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.12 (3).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.12.jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.13 (1).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.13.jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.14 (1).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.14 (2).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.14 (3).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.14.jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.15 (1).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.15 (2).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.15 (3).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.16 (1).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.16 (2).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.17 (2).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.18 (2).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.18.jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.19 (1).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.19 (2).jpeg",
  "WhatsApp Image 2026-05-31 at 12.53.19.jpeg"
];

const photoCaptions = [
  "That cute look you give me... gets me every single time 🥺",
  "The girl who holds the absolute key to my heart 💖",
  "Your eyes have a beautiful, magical universe of their own 🌌",
  "My absolute favorite person in the entire world 🌎💕",
  "Just look at you, how can someone be so incredibly pretty? ✨",
  "Every single moment spent with you is like a sweet dream 🌸",
  "Your smile is my daily source of infinite happiness ☀️",
  "The queen of my heart, ruling it with so much love 👑",
  "Even the moon gets a little jealous of your gorgeous glow 🌙",
  "My favorite picture of my favorite girl in the world 🥰",
  "A little piece of heaven right here on earth 🕊️",
  "You look so adorable, I just want to squeeze your cheeks! 🧸",
  "Perfect in every single way, my cute sweetheart 💖",
  "The prettiest smile I have ever laid my eyes on 🌸",
  "I promise to keep this beautiful smile safe forever 🤝❤️",
  "You make my heart skip a beat every time you look at me 💓",
  "Forever looking at you with literal stars in my eyes 😍",
  "My Kohinoor, the most precious diamond in existence 💎",
  "You are the sweetest song my heart will ever play 🎵",
  "Can't imagine a single second of my life without you ⌛",
  "I love you to the moon and back, forever and ever 💕"
];

const shayaris = [
  { title: "For Your Bindi 🌸", text: '"Tere maathey ki bindi Mere ghar ke aaine pe reh jaaye, Toh acha. Yeh jo mohabbat hai tumse Hadh se aage badh jaaye, Toh acha..."' },
  { title: "Comparing to the Moon 🌙", text: '"She is the most beautiful part of my universe. Sorry moon, but she is more beautiful than you. The shine you carry fades when compared to the glow in her eyes..."' },
  { title: "Anmol Kohinoor 💎", text: '"Mehangi hai tu Kohinoor se bhi, Khubsurat hai tu noor se bhi. Tujhe dekh kar chand bhi sharma jaye, Tu pyaari hai jannat ki hoor se bhi."' },
  { title: "Last Seven Minutes ⌛", text: '"And you\'ll be my last seven minutes of life when my pulse slows and the world exhales... In those final minutes, the world can take back everything it gave me, except you."' },
  { title: "Tere Naam Ki Kitaab 📖", text: '"Agar kabhi tere naam ki kitaab likhunga, har lafz ko apni saanson se mehka dunga, tujhe ajnabi nahi, apni rooh ka hissa likhunga..."' },
  { title: "Kafi Tum Ho ❤️", text: '"kaise dekhoon kisi or ko ke meri ankhon mein sirf tum ho, nazare lakh haseen sahi magar meri nazar mein khoobsurat sirf tum ho."' }
];

const couponsList = [
  { id: "hug", name: "Infinite Warm Hugs 🧸", desc: "Valid for 1 extra-long, warm cuddle whenever you feel sad or cold." },
  { id: "icecream", name: "Midnight Ice Cream Run 🍨", desc: "Rishi will drive you to get ice cream at any hour of the night. You choose flavors!" },
  { id: "argument", name: "No-Arguments Victory Pass 🔇", desc: "Instantly win any small disagreement with zero debate. Use wisely!" },
  { id: "dinner", name: "Rishi's Homemade Dinner 🍲", desc: "Rishi cooks your absolute favorite meal and serves it with soft music." },
  { id: "movie", name: "Movie Night Remote Control 🍿", desc: "You get full selection of the movie, snacks, and volume controls." },
  { id: "surprise", name: "Apology Special Gift Box 🎁", desc: "Redeem this for a special surprise delivery sent to your doorstep." }
];

const companionQuotes = [
  "Rishi is super sorry... please don't be mad 🥺",
  "Did you know Anika has the prettiest eyes ever? 🌸",
  "I'm Mochi! Tapping me sends a tiny virtual hug to you! 🐾",
  "Rishi's heart beats only for you, Anika! 💕",
  "I waddle when you slide the meter! Try it! 🥰",
  "You deserve all the chocolates in the world 🍫"
];

export default function App() {
  const [unwrapped, setUnwrapped] = useState(false);
  const [activeTab, setActiveTab] = useState("letter"); // 'letter', 'gallery', 'meter', 'coupons', 'poetry'
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // Intro states
  const [introTextIndex, setIntroTextIndex] = useState(0);
  const introTexts = [
    "A special parcel has arrived for you...",
    "It's packed with lots of love, promises, and memories.",
    "For the most adorable girl in the world - Anika 💖"
  ];

  // Letter/Envelope states
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterTypedText, setLetterTypedText] = useState("");
  const [placedStickers, setPlacedStickers] = useState([]);
  const typingTimerRef = useRef(null);

  // Polaroid states
  const [polaroids, setPolaroids] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Love/Anger Gauge states
  const [loveLevel, setLoveLevel] = useState(30);
  const [companionMsg, setCompanionMsg] = useState("Hover or tap me for a message!");
  const [forgiven, setForgiven] = useState(false);
  const [submittingForgive, setSubmittingForgive] = useState(false);

  // Coupons states
  const [redeemedCoupons, setRedeemedCoupons] = useState({});
  const [redeemingId, setRedeemingId] = useState(null);

  // Poetry state
  const [poetryIdx, setPoetryIdx] = useState(0);

  // Interactive spawns
  const [spawnedElements, setSpawnedElements] = useState([]);
  const audioRef = useRef(null);

  // Initialize audio & polaroids
  useEffect(() => {
    audioRef.current = new Audio("/apology_music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // Build Polaroid initial properties
    const initialPolaroids = photoFiles.map((filename, index) => {
      const angle = (Math.random() - 0.5) * 20; // rotation angle -10 to 10 deg
      const offsetX = (Math.random() - 0.5) * 40; // -20px to 20px
      const offsetY = (Math.random() - 0.5) * 40;
      return {
        id: index,
        src: `/images/${filename}`,
        caption: photoCaptions[index],
        angle,
        x: offsetX,
        y: offsetY,
        likes: 0
      };
    });
    setPolaroids(initialPolaroids);

    // Drifting background Sakura petal generation
    const sakuraInterval = setInterval(() => {
      spawnSakuraPetal();
    }, 1500);

    // Intro text cycle
    const textInterval = setInterval(() => {
      setIntroTextIndex(prev => (prev < introTexts.length - 1 ? prev + 1 : prev));
    }, 2800);

    return () => {
      if (audioRef.current) audioRef.current.pause();
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      clearInterval(sakuraInterval);
      clearInterval(textInterval);
    };
  }, []);

  const spawnSakuraPetal = () => {
    const id = Math.random();
    const left = Math.random() * 100; // x percentage
    const duration = 8 + Math.random() * 8; // 8s to 16s fall
    const scale = 0.5 + Math.random() * 0.8; // size multiplier
    const rot = Math.random() * 360;

    const newPetal = { id, left, duration, scale, rot };
    setSpawnedElements(prev => [...prev, newPetal]);

    // Remove petal after animation completes to avoid memory leak
    setTimeout(() => {
      setSpawnedElements(prev => prev.filter(p => p.id !== id));
    }, duration * 1000);
  };

  const handleMusicToggle = () => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setMusicPlaying(true))
        .catch(err => console.log("Audio blocked by browser autoplay rules"));
    }
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  // Open the Gift Box Intro
  const handleUnwrap = () => {
    setUnwrapped(true);
    // Play sound & Confetti
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setMusicPlaying(true))
        .catch(() => {});
    }

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffb3c6', '#ffccd5', '#fb7185', '#ffe5ec', '#ffe4e6']
    });
  };

  // Typewriter Letter Animation
  const handleEnvelopeClick = () => {
    if (envelopeOpen) return;
    setEnvelopeOpen(true);

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.55 },
      colors: ['#fb7185', '#ffccd5', '#ff85a1']
    });

    const fullMessage = "I am so incredibly sorry, my love. I made a huge mistake and lied to you, and seeing you upset breaks my heart into a million pieces. You mean the absolute world to me, Anika. 🥺💖 I promise to choose transparency, to protect your trust with everything I have, and to love you more fiercely every single day. Please give your Rishi one more chance to make it right. You are my forever and my only one. 🥺👉👈💕";
    let currentIdx = 0;

    typingTimerRef.current = setInterval(() => {
      setLetterTypedText(fullMessage.substring(0, currentIdx + 1));
      currentIdx++;
      if (currentIdx >= fullMessage.length) {
        clearInterval(typingTimerRef.current);
      }
    }, 30);
  };

  // Drag and Drop Stickers Spawning
  const spawnSticker = (emoji) => {
    if (!envelopeOpen) return;
    const newSticker = {
      id: Date.now(),
      emoji,
      x: 10 + Math.random() * 120, // initial relative offsets
      y: 40 + Math.random() * 80,
      angle: (Math.random() - 0.5) * 30
    };
    setPlacedStickers(prev => [...prev, newSticker]);
  };

  // Double click polaroid heart stamp
  const handlePolaroidDoubleClick = (id) => {
    setPolaroids(prev => prev.map(p => {
      if (p.id === id) {
        // Confetti pop on photo
        confetti({
          particleCount: 15,
          spread: 30,
          origin: { y: 0.5, x: 0.5 },
          colors: ['#fb7185', '#ff85a1']
        });
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    }));
  };

  // Reset the Polaroid messy desk pile
  const resetPolaroidStack = () => {
    setPolaroids(prev => prev.map(p => ({
      ...p,
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 40,
      angle: (Math.random() - 0.5) * 20
    })));
  };

  // Companion Mochi responses based on Love meter slider
  const handleLoveSliderChange = (e) => {
    const val = parseInt(e.target.value);
    setLoveLevel(val);

    if (val < 20) {
      setCompanionMsg("Rishi is extremely sad... Please pull my heart to the right! 😭💔");
    } else if (val < 50) {
      setCompanionMsg("I promise to bring you chocolates, bubble tea, and endless kisses! 🥺👉👈");
    } else if (val < 80) {
      setCompanionMsg("He will clean your room, massage your feet, and listen to all your stories! 🙇‍♂️✨");
    } else if (val < 100) {
      setCompanionMsg("My heart is fluttering! We're almost back together! 💕🌸");
    } else {
      setCompanionMsg("Yay! Apology fully accepted! Ready for endless warm cuddles! 🥰🎉");
    }
  };

  const interactCompanion = () => {
    const randomQuote = companionQuotes[Math.floor(Math.random() * companionQuotes.length)];
    setCompanionMsg(randomQuote);
    // Wiggle effect triggered
  };

  // AJAX Email Dispatch for main Forgiveness
  const handleForgiveSubmit = () => {
    if (forgiven || submittingForgive) return;
    setSubmittingForgive(true);

    fetch("https://formsubmit.co/ajax/rishikesh.palande07@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        subject: "💖 Anika Forgave You! 💖",
        message: `Anika has accepted your apology on the website!\nLove Meter Level: ${loveLevel}%\nTime: ${new Date().toLocaleString()}`,
      })
    })
      .then(() => {
        setForgiven(true);
        setSubmittingForgive(false);
        triggerBigConfettiShower();
      })
      .catch(err => {
        console.error("Mail dispatch failed", err);
        // Fallback set forgiven even if network fails so user experience isn't blocked
        setForgiven(true);
        setSubmittingForgive(false);
        triggerBigConfettiShower();
      });
  };

  const triggerBigConfettiShower = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 70 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 200);
  };

  // AJAX Coupon Redemption Dispatcher
  const handleRedeemCoupon = (coupon) => {
    if (redeemedCoupons[coupon.id] || redeemingId) return;
    setRedeemingId(coupon.id);

    fetch("https://formsubmit.co/ajax/rishikesh.palande07@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        subject: `🎫 Coupon Redeemed by Anika: ${coupon.name}`,
        message: `Anika has just redeemed her love coupon!\nCoupon: "${coupon.name}"\nDescription: "${coupon.desc}"\nTime: ${new Date().toLocaleString()}`
      })
    })
      .then(() => {
        setRedeemedCoupons(prev => ({ ...prev, [coupon.id]: true }));
        setRedeemingId(null);
        confetti({
          particleCount: 30,
          spread: 40,
          colors: ['#ffd1dc', '#ff85a1', '#fbcfe8']
        });
      })
      .catch(err => {
        console.error(err);
        setRedeemedCoupons(prev => ({ ...prev, [coupon.id]: true }));
        setRedeemingId(null);
      });
  };

  // Click background spawner
  const handleBackdropClick = (e) => {
    // Avoid spawning bubbles when clicking interactive UI items
    if (e.target.closest('button') || e.target.closest('nav') || e.target.closest('input') || e.target.closest('.interactive-card')) {
      return;
    }

    const clickEmojis = ['💖', '🌸', '🧸', '✨', '🎀', '🥺', '🐾'];
    const selectedEmoji = clickEmojis[Math.floor(Math.random() * clickEmojis.length)];
    const id = Date.now() + Math.random();

    const newSpawn = {
      id,
      emoji: selectedEmoji,
      x: e.clientX,
      y: e.clientY
    };

    setSpawnedElements(prev => [...prev, newSpawn]);

    setTimeout(() => {
      setSpawnedElements(prev => prev.filter(item => item.id !== id));
    }, 1600);
  };

  return (
    <div 
      className="relative min-h-screen text-slate-700 cute-bg overflow-x-hidden flex flex-col justify-between select-none"
      onClick={handleBackdropClick}
    >
      {/* Drifting Sakura Petals in Background */}
      {spawnedElements.filter(el => el.left !== undefined).map(petal => (
        <svg 
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            transform: `scale(${petal.scale}) rotate(${petal.rot}deg)`
          }}
          viewBox="0 0 512 512" 
          width="20" 
          height="20"
        >
          <path 
            fill="#fbcfe8" 
            d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256,256-114.62,256-256S397.38,0,256,0Zm0,416c-88.37,0-160-71.63-160-160S167.63,96,256,96s160,71.63,160,160S344.37,416,256,416Z"
          />
          <path 
            fill="#fb7185" 
            d="M256,96c-88.37,0-160,71.63-160,160s71.63,160,160,160,160-71.63,160-160S344.37,96,256,96Zm0,272c-61.86,0-112-50.14-112-112s50.14-112,112-112,112,50.14,112,112-50.14,112-112,112Z"
          />
        </svg>
      ))}

      {/* Floating Click Emotes */}
      {spawnedElements.filter(el => el.x !== undefined).map(item => (
        <motion.div
          key={item.id}
          initial={{ opacity: 1, scale: 0.3, y: 0, x: item.x - 16, y: item.y - 16 }}
          animate={{ opacity: 0, scale: 2.0, y: -100, rotate: (Math.random() - 0.5) * 50 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute pointer-events-none text-2xl z-50 select-none"
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* 3D Soft Beating Heart Behind Everything */}
      <Heart3D isBeating={!forgiven} />

      <AnimatePresence>
        {/* ====================================================
             SCENE 1: GIFT BOX UNWRAPPING INTRO
             ==================================================== */}
        {!unwrapped && (
          <motion.div 
            key="unwrapping-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-[#fff5f6] flex flex-col items-center justify-center text-center p-6"
          >
            <div className="max-w-md space-y-8 flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={introTextIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6 }}
                  className="font-serif italic text-lg text-rose-500 font-medium"
                >
                  {introTexts[introTextIndex]}
                </motion.p>
              </AnimatePresence>

              {introTextIndex === 2 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="flex flex-col items-center space-y-6 pt-4"
                >
                  {/* Wiggling wrapped gift box */}
                  <motion.div
                    animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, repeatDelay: 1.0 }}
                    onClick={handleUnwrap}
                    className="cursor-pointer hover:scale-110 active:scale-95 duration-300 relative"
                  >
                    <div className="absolute inset-0 bg-rose-300 rounded-3xl blur-md scale-95 opacity-55 animate-pulse"></div>
                    <Gift size={96} className="text-rose-400 stroke-[1.2] relative z-10" />
                  </motion.div>

                  <button
                    onClick={handleUnwrap}
                    className="px-8 py-3.5 bg-rose-400 hover:bg-rose-500 text-white font-serif rounded-full transition-all text-xs font-semibold tracking-widest uppercase hover:scale-105 active:scale-95 duration-300 shadow-md shadow-rose-300/50"
                  >
                    Unwrap Rishi's Heart 🎁
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================================
           MAIN SYSTEM DASHBOARD
           ==================================================== */}
      {unwrapped && (
        <div className="relative z-10 w-full flex-grow flex flex-col justify-between p-4 md:p-6 min-h-screen">
          
          {/* Header section */}
          <header className="text-center pt-2 md:pt-4">
            <h1 className="font-serif text-3xl font-light text-rose-600 tracking-wider">
              Anika's <span className="font-script text-4xl text-rose-500 font-semibold tracking-wide">Apology Wonderland</span>
            </h1>
            <p className="text-rose-400/80 text-[11px] tracking-widest uppercase font-medium mt-1">Please forgive me, my cupcake 🧁</p>
            <div className="w-16 h-[2px] bg-rose-300/40 mx-auto mt-2 rounded-full"></div>
          </header>

          {/* Main card interface */}
          <main className="flex-grow flex items-center justify-center py-4 w-full max-w-4xl mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: REDESIGNED FLAPPING LETTER */}
              {activeTab === 'letter' && (
                <motion.div 
                  key="letter-view"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="w-full max-w-md flex flex-col items-center space-y-8 relative z-30"
                >
                  <p className="text-xs text-rose-500/80 uppercase tracking-widest font-medium">Tap the wax seal to slide out letter 💌</p>

                  <div className={`relative ${envelopeOpen ? 'envelope-open' : ''} h-52 w-80 flex items-center justify-center`}>
                    
                    {/* Floating stickers container */}
                    {envelopeOpen && (
                      <div className="absolute inset-x-0 -top-28 h-28 pointer-events-none z-45">
                        <AnimatePresence>
                          {placedStickers.map(st => (
                            <motion.div
                              key={st.id}
                              drag
                              dragConstraints={{ left: -140, right: 140, top: -200, bottom: 200 }}
                              initial={{ opacity: 0, scale: 0.5, x: st.x, y: st.y }}
                              animate={{ opacity: 1, scale: 1.2 }}
                              className="absolute cursor-grab active:cursor-grabbing text-3xl select-none pointer-events-auto"
                              style={{ rotate: `${st.angle}deg` }}
                            >
                              {st.emoji}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Letter paper sliding upwards */}
                    <motion.div 
                      id="envelope-letter"
                      className="absolute w-[290px] min-h-[220px] rounded-2xl p-5 shadow-xl border border-pink-100 notebook-lines z-20 flex flex-col justify-between"
                      initial={{ y: 0, scale: 0.95 }}
                      animate={{ 
                        y: envelopeOpen ? -160 : 5, 
                        scale: envelopeOpen ? 1.05 : 0.95,
                        zIndex: envelopeOpen ? 35 : 20
                      }}
                      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                    >
                      <div className="flex justify-between items-center border-b border-rose-100 pb-2">
                        <span className="font-serif italic text-rose-600 text-xs font-semibold">My Deepest Confession</span>
                        <span className="text-[10px] text-rose-400">June 2026</span>
                      </div>
                      
                      <div className="flex-grow py-3 text-justify">
                        <p className="font-sans text-[12px] text-rose-800 leading-[24px] font-medium min-h-[120px]">
                          {letterTypedText}
                          {!envelopeOpen && <span className="text-rose-300 italic block text-center mt-6">Open the seal to read...</span>}
                          {envelopeOpen && letterTypedText.length < 358 && <span className="typing-cursor"></span>}
                        </p>
                      </div>

                      <div className="border-t border-rose-100 pt-1 flex justify-between items-center text-[10px] text-rose-500 font-serif">
                        <span>Forever Yours,</span>
                        <span className="font-script text-lg text-rose-600 font-semibold hover-wiggle cursor-pointer">Rishi ❤️</span>
                      </div>
                    </motion.div>

                    {/* Envelope Base elements */}
                    <div className="envelope-wrapper">
                      <div className="envelope-flap"></div>
                      <div className="envelope-pocket"></div>
                      
                      <div className="wax-seal" onClick={handleEnvelopeClick}>
                        <Heart className="fill-white text-white" size={18} />
                      </div>
                    </div>

                  </div>

                  {/* Sticker Drag Tray */}
                  {envelopeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="cute-glass rounded-2xl px-5 py-3 border border-rose-200 flex items-center space-x-4 max-w-sm w-full relative z-40"
                    >
                      <span className="text-[10px] uppercase font-bold text-rose-500 tracking-wider">Tap to place stickers:</span>
                      <div className="flex justify-around flex-grow text-2xl">
                        {["🧸", "🌸", "🐱", "⭐", "🎀"].map(emoji => (
                          <button
                            key={emoji}
                            onClick={() => spawnSticker(emoji)}
                            className="hover:scale-125 transition-transform duration-200 cursor-pointer"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* TAB 2: POLAROID PHOTO ALBUM DESK */}
              {activeTab === 'gallery' && (
                <motion.div 
                  key="gallery-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-[450px] flex flex-col justify-between items-center"
                >
                  <div className="text-center space-y-1 w-full z-20">
                    <p className="text-xs text-rose-500 uppercase tracking-widest font-semibold">Toss Polaroids! Double click to add a heart ❤️</p>
                    <button 
                      onClick={resetPolaroidStack}
                      className="px-4 py-1.5 cute-glass border border-rose-300 text-[10px] uppercase tracking-wider text-rose-500 rounded-full font-bold hover:scale-105 active:scale-95 duration-200"
                    >
                      Reset Stack 🔄
                    </button>
                  </div>
                  
                  {/* Polaroid table workspace */}
                  <div className="relative w-full flex-grow flex items-center justify-center overflow-visible my-4">
                    {polaroids.map((photo, idx) => (
                      <motion.div 
                        key={photo.id}
                        drag
                        dragConstraints={{ left: -220, right: 220, top: -140, bottom: 140 }}
                        whileDrag={{ scale: 1.1, zIndex: 100 }}
                        initial={{ rotate: photo.angle, x: photo.x, y: photo.y }}
                        animate={{ x: photo.x, y: photo.y, rotate: photo.angle }}
                        onDoubleClick={() => handlePolaroidDoubleClick(photo.id)}
                        onClick={() => setSelectedPhoto(photo)}
                        className="absolute bg-white p-3 pb-8 rounded-sm shadow-xl flex flex-col items-center select-none cursor-grab active:cursor-grabbing w-[160px] md:w-[180px] border border-rose-100 hover:border-pink-300 transition-colors"
                        style={{ zIndex: idx }}
                      >
                        <div className="relative w-full h-36 md:h-40 bg-pink-50 overflow-hidden rounded-xs pointer-events-none">
                          <img 
                            src={photo.src} 
                            alt="Anika Memory" 
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Hearts stamped count overlay */}
                          {photo.likes > 0 && (
                            <div className="absolute top-2 right-2 bg-pink-100/90 px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-sm text-xs font-bold text-rose-500">
                              <span>❤️</span>
                              <span>{photo.likes}</span>
                            </div>
                          )}
                        </div>

                        <span className="font-script text-2xl text-slate-700 tracking-wide mt-3 pointer-events-none select-none text-center truncate w-full px-1">
                          My Cutie #{photo.id + 1}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Polaroid Lightbox Viewer modal */}
                  <AnimatePresence>
                    {selectedPhoto && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-pink-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedPhoto(null)}
                      >
                        <motion.div 
                          initial={{ scale: 0.9, y: 20 }}
                          animate={{ scale: 1, y: 0 }}
                          exit={{ scale: 0.9, y: 20 }}
                          className="bg-white p-5 rounded-3xl max-w-sm w-full shadow-2xl flex flex-col items-center text-center space-y-4 border-4 border-rose-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
                            <img 
                              src={selectedPhoto.src} 
                              alt="Anika Fullscreen" 
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="space-y-2">
                            <p className="font-script text-3xl text-rose-600 font-semibold">Memory #{selectedPhoto.id + 1}</p>
                            <p className="font-sans italic text-sm text-slate-600 font-medium px-2 leading-relaxed">
                              "{selectedPhoto.caption}"
                            </p>
                          </div>

                          <div className="flex space-x-3 w-full">
                            <button
                              onClick={() => {
                                handlePolaroidDoubleClick(selectedPhoto.id);
                                // Increment in the local model view
                                setSelectedPhoto(prev => ({ ...prev, likes: prev.likes + 1 }));
                              }}
                              className="flex-grow py-3 bg-pink-100 hover:bg-pink-200 text-rose-500 rounded-2xl text-xs font-bold transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                            >
                              <span>Stamp Heart ❤️</span>
                              <span className="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[10px]">
                                {selectedPhoto.likes}
                              </span>
                            </button>
                            <button
                              onClick={() => setSelectedPhoto(null)}
                              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-2xl text-xs font-bold transition-colors text-slate-500 cursor-pointer"
                            >
                              Close
                            </button>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              )}

              {/* TAB 3: LOVE METER & MOCHI CHIBI COMPANION */}
              {activeTab === 'meter' && (
                <motion.div 
                  key="meter-view"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="w-full max-w-md space-y-6 relative z-30"
                >
                  <div className="text-center space-y-1">
                    <p className="text-xs text-rose-500 uppercase tracking-widest font-semibold">Rishi's Love Level Adjuster 💓</p>
                    <p className="text-[11px] text-rose-400">Slide to accepting level to unlock forgiveness!</p>
                  </div>

                  {/* Interactive Companion card */}
                  <div className="cute-glass rounded-3xl p-6 border border-rose-200 flex flex-col items-center space-y-5 text-center interactive-card relative overflow-hidden">
                    
                    {/* Animated custom chibi wiggler companion */}
                    <div 
                      onClick={interactCompanion}
                      className="w-28 h-28 flex items-center justify-center relative cursor-pointer group"
                    >
                      {/* Ambient companion halo glow */}
                      <div className="absolute inset-0 bg-rose-200/50 rounded-full blur-lg scale-90 group-hover:scale-110 transition-transform duration-300"></div>
                      
                      {/* Chibi Facial Expressions based on love meter */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.05, 1], 
                          y: [0, -4, 0],
                          rotate: loveLevel === 100 ? [0, -5, 5, -5, 5, 0] : 0
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-7xl relative z-10 select-none hover-wiggle"
                      >
                        {loveLevel < 20 ? "😭" : loveLevel < 50 ? "🥺" : loveLevel < 80 ? "🙇‍♂️" : loveLevel < 100 ? "🌸" : "🥰"}
                      </motion.div>

                      {/* Mascot blush cheeks */}
                      {loveLevel >= 80 && (
                        <div className="absolute w-24 h-6 flex justify-between z-12 pointer-events-none">
                          <span className="w-4 h-4 bg-pink-400/60 rounded-full blur-[2px] animate-pulse"></span>
                          <span className="w-4 h-4 bg-pink-400/60 rounded-full blur-[2px] animate-pulse"></span>
                        </div>
                      )}
                    </div>

                    {/* Mochi Speech Balloon */}
                    <div className="relative bg-rose-50 border border-rose-100 rounded-2xl px-4 py-2.5 text-xs text-rose-700 italic max-w-[280px] w-full min-h-[46px] flex items-center justify-center font-medium shadow-inner">
                      <div className="absolute w-3 h-3 bg-rose-50 border-t border-l border-rose-100 -top-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
                      <span>"{companionMsg}"</span>
                    </div>

                    {/* Cute range slider track */}
                    <div className="w-full px-4 space-y-2">
                      <div className="flex justify-between text-xs font-bold text-rose-500">
                        <span>Anger: 💔</span>
                        <span>Love Meter: {loveLevel}%</span>
                        <span>Forgive: 💖</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={loveLevel}
                        onChange={handleLoveSliderChange}
                        className="w-full cursor-pointer cute-slider" 
                      />
                    </div>
                  </div>

                  {/* Unlocking Forgiveness Call to Action */}
                  <div className="flex justify-center pt-2">
                    <AnimatePresence mode="wait">
                      {loveLevel < 100 ? (
                        <motion.div 
                          key="slider-locked"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="px-6 py-3 bg-pink-50 border border-pink-100 rounded-full text-xs text-rose-400 italic flex items-center space-x-2"
                        >
                          <span>🔒 Slide to 100% to accept Rishi's apology</span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="slider-unlocked"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          className="space-y-4 text-center w-full"
                        >
                          {!forgiven ? (
                            <button 
                              onClick={handleForgiveSubmit}
                              disabled={submittingForgive}
                              className="px-10 py-4 bg-rose-500 hover:bg-rose-600 text-white font-serif font-semibold rounded-full tracking-wider text-base shadow-lg shadow-rose-300/60 hover:scale-105 active:scale-95 duration-200 w-full max-w-sm cursor-pointer flex items-center justify-center space-x-2 mx-auto"
                            >
                              <HeartHandshake size={18} />
                              <span>{submittingForgive ? "Forgiving Rishi..." : "Lock in Forgiveness ❤️"}</span>
                            </button>
                          ) : (
                            <motion.div 
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="text-rose-600 font-serif italic text-lg animate-pulse tracking-wide font-semibold bg-white/80 px-6 py-4 rounded-2xl border border-rose-200 max-w-sm mx-auto shadow-md"
                            >
                              Thank you, Anika! You are the absolute best in the world! Forever yours. 💖
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: REDEEMABLE LOVE COUPONS (REAL-TIME ACTION) */}
              {activeTab === 'coupons' && (
                <motion.div 
                  key="coupons-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-2xl space-y-6 relative z-30"
                >
                  <div className="text-center space-y-1">
                    <p className="text-xs text-rose-500 uppercase tracking-widest font-semibold">Redeemable Love Coupons 🎫</p>
                    <p className="text-[11px] text-rose-400">Clicking redeem instantly sends an email request directly to Rishi's inbox!</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[360px] overflow-y-auto pr-1 scrollbar-none">
                    {couponsList.map((coupon) => {
                      const isRedeemed = redeemedCoupons[coupon.id];
                      const isRedeeming = redeemingId === coupon.id;

                      return (
                        <motion.div
                          key={coupon.id}
                          className={`cute-glass p-4 rounded-2xl border relative overflow-hidden flex flex-col justify-between min-h-[140px] transition-all duration-300 ${isRedeemed ? 'opacity-60 border-slate-200' : 'border-pink-200'}`}
                          style={{
                            transform: isRedeemed ? 'rotate(1deg)' : 'none'
                          }}
                        >
                          {/* Visual coupon perforated ticket edge lines */}
                          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-around pointer-events-none">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-3 h-3 bg-pink-100 rounded-full -ml-1.5 border border-pink-200"></div>)}
                          </div>
                          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around pointer-events-none">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-3 h-3 bg-pink-100 rounded-full -mr-1.5 border border-pink-200"></div>)}
                          </div>

                          <div className="px-3 space-y-1">
                            <h4 className="font-serif font-bold text-rose-600 text-sm md:text-base flex items-center space-x-2">
                              <span>{coupon.name}</span>
                              {isRedeemed && <span className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full font-sans uppercase">Used</span>}
                            </h4>
                            <p className="text-slate-600 text-xs font-medium leading-relaxed">
                              {coupon.desc}
                            </p>
                          </div>

                          <div className="px-3 pt-3 flex justify-end">
                            <button
                              onClick={() => {
                                if (window.confirm(`Are you sure you want to redeem your "${coupon.name}"? This will alert Rishi!`)) {
                                  handleRedeemCoupon(coupon);
                                }
                              }}
                              disabled={isRedeemed || isRedeeming}
                              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer ${isRedeemed ? 'bg-slate-100 text-slate-400 border border-slate-200' : 'bg-rose-400 hover:bg-rose-500 text-white shadow-sm shadow-rose-200'}`}
                            >
                              {isRedeeming ? "Sending... 💌" : isRedeemed ? "Alert Sent ✅" : "Redeem Ticket 🎫"}
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* TAB 5: POETRY JOURNAL & RETRO CASSETTE TAPE */}
              {activeTab === 'poetry' && (
                <motion.div 
                  key="poetry-view"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="w-full max-w-lg space-y-6 relative z-30"
                >
                  {/* Cassette Tape Controller */}
                  <div className="flex justify-center">
                    <div className="bg-pink-100 border-4 border-pink-200/80 rounded-2xl w-64 h-32 flex flex-col justify-between p-3.5 relative shadow-md">
                      
                      {/* Label Tape Sticker */}
                      <div className="bg-white border border-pink-200/60 rounded-lg py-1 px-3 flex justify-between items-center text-[10px] text-rose-500 font-script font-semibold shadow-inner">
                        <span>Anika's Apology Tape 📼</span>
                        <span>Side A</span>
                      </div>

                      {/* Cassette Reels spinning animation */}
                      <div className="flex justify-around items-center w-full px-6">
                        <div className={`w-8 h-8 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center ${musicPlaying ? 'cassette-spin' : ''}`}>
                          <div className="w-2.5 h-2.5 bg-pink-100 rounded-full border border-slate-500"></div>
                        </div>
                        <div className={`w-8 h-8 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center ${musicPlaying ? 'cassette-spin' : ''}`}>
                          <div className="w-2.5 h-2.5 bg-pink-100 rounded-full border border-slate-500"></div>
                        </div>
                      </div>

                      {/* Small visual tape window */}
                      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-3 bg-slate-800/80 rounded-xs border border-pink-200/40"></div>

                      {/* Cassette Controls */}
                      <div className="flex justify-between items-center pt-1 border-t border-pink-200/50">
                        <button 
                          onClick={handleMusicToggle}
                          className="p-1 text-rose-500 hover:text-rose-600 transition-colors cursor-pointer"
                        >
                          {musicPlaying ? <Pause size={14} className="fill-current" /> : <Music size={14} />}
                        </button>
                        
                        {/* Audio Volume Slider */}
                        <div className="flex items-center space-x-1.5 flex-grow justify-end max-w-[120px]">
                          <Volume2 size={11} className="text-rose-400" />
                          <input 
                            type="range" 
                            min="0" 
                            max="1" 
                            step="0.05"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-16 accent-rose-400 h-1 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Open Leather Journal for Shayaris */}
                  <div className="cute-glass rounded-3xl p-6 md:p-8 border border-pink-200 flex flex-col justify-between min-h-[260px] notebook-lines shadow-inner relative overflow-hidden">
                    <div className="absolute top-3 right-4 flex items-center space-x-2 text-[10px] font-serif tracking-widest uppercase text-rose-400/80">
                      <span>{shayaris[poetryIdx].title}</span>
                    </div>

                    <div className="flex-grow flex items-center justify-center py-4 text-center">
                      <p className="font-serif text-rose-800 text-lg md:text-xl leading-loose italic font-medium px-4">
                        {shayaris[poetryIdx].text}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-rose-100 pt-3 mt-2">
                      <span className="text-[10px] text-rose-500 font-bold">Page {poetryIdx + 1} / {shayaris.length}</span>
                      <button 
                        onClick={() => {
                          setPoetryIdx((poetryIdx + 1) % shayaris.length);
                          confetti({
                            particleCount: 15,
                            spread: 25,
                            colors: ['#fbcfe8', '#ffd1dc']
                          });
                        }}
                        className="px-4 py-1.5 rounded-full border border-rose-300 hover:bg-pink-50 text-rose-500 font-bold transition-all text-xs flex items-center space-x-1 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>Next Page</span>
                        <RefreshCw size={11} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </main>

          {/* Nav Dock Bar (Playful & Soft Bottom Dock) */}
          <nav className="w-full max-w-lg mx-auto py-2.5 bg-white/80 backdrop-blur-md border-2 border-pink-200 rounded-3xl flex justify-around px-2 shadow-xl relative z-40">
            {/* Dock button 1: Letter */}
            <button 
              onClick={() => setActiveTab('letter')}
              className={`p-2.5 rounded-2xl transition-all duration-300 flex flex-col items-center space-y-1 cursor-pointer ${activeTab === 'letter' ? 'text-rose-500 bg-pink-100/50 scale-110' : 'text-slate-400 hover:text-rose-400'}`}
            >
              <FileText size={16} />
              <span className="text-[9px] tracking-wider font-bold">Letter</span>
            </button>

            {/* Dock button 2: Memories */}
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`p-2.5 rounded-2xl transition-all duration-300 flex flex-col items-center space-y-1 cursor-pointer ${activeTab === 'gallery' ? 'text-rose-500 bg-pink-100/50 scale-110' : 'text-slate-400 hover:text-rose-400'}`}
            >
              <Image size={16} />
              <span className="text-[9px] tracking-wider font-bold">Album</span>
            </button>

            {/* Dock button 3: Love Meter */}
            <button 
              onClick={() => setActiveTab('meter')}
              className={`p-2.5 rounded-2xl transition-all duration-300 flex flex-col items-center space-y-1 cursor-pointer ${activeTab === 'meter' ? 'text-rose-500 bg-pink-100/50 scale-110' : 'text-slate-400 hover:text-rose-400'}`}
            >
              <Smile size={16} />
              <span className="text-[9px] tracking-wider font-bold">Mascot</span>
            </button>

            {/* Dock button 4: Coupons */}
            <button 
              onClick={() => setActiveTab('coupons')}
              className={`p-2.5 rounded-2xl transition-all duration-300 flex flex-col items-center space-y-1 cursor-pointer ${activeTab === 'coupons' ? 'text-rose-500 bg-pink-100/50 scale-110' : 'text-slate-400 hover:text-rose-400'}`}
            >
              <CheckCircle2 size={16} />
              <span className="text-[9px] tracking-wider font-bold">Tickets</span>
            </button>

            {/* Dock button 5: Poetry */}
            <button 
              onClick={() => setActiveTab('poetry')}
              className={`p-2.5 rounded-2xl transition-all duration-300 flex flex-col items-center space-y-1 cursor-pointer ${activeTab === 'poetry' ? 'text-rose-500 bg-pink-100/50 scale-110' : 'text-slate-400 hover:text-rose-400'}`}
            >
              <BookOpen size={16} />
              <span className="text-[9px] tracking-wider font-bold">Poetry</span>
            </button>
          </nav>
        </div>
      )}

    </div>
  );
}
