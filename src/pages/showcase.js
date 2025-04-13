import React, { useState } from 'react';
import './showcase.css';

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.src} alt={`Slide ${index}`} />
            
          </div>
        ))}
        <button className="btn prev" onClick={goToPrev}>←</button>
        <button className="btn next" onClick={goToNext}>→</button>
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const slides = [
    { src: 'assets/karaokeSlide1.jpg', caption: 'Caption for Image 1' },
    { src: 'assets/karaokeSlide2.jpg', caption: 'Caption for Image 2' },
    { src: 'assets/karaokeSlide3.jpg', caption: 'Caption for Image 3' },
    { src: 'assets/karaokeSlide4.jpg', caption: 'Caption for Image 4' },
    { src: 'assets/karaokeSlide5.jpg', caption: 'Caption for Image 5' },
    { src: 'assets/karaokeSlide6.jpg', caption: 'Caption for Image 6' },
    { src: 'assets/karaokeSlide7.jpg', caption: 'Caption for Image 7' },
  ];
  const slides2 = [
    { src: 'assets/wordsSlide1.jpg', caption: 'Caption for Image 1' },
    { src: 'assets/wordsSlide2.jpg', caption: 'Caption for Image 2' },
    { src: 'assets/wordSlide3.jpg', caption: 'Caption for Image 3' },
    { src: 'assets/wordSlide4.jpg', caption: 'Caption for Image 4' },
    { src: 'assets/wordSlide5.jpg', caption: 'Caption for Image 5' },
    { src: 'assets/wordSlide6.jpg', caption: 'Caption for Image 6' },
    { src: 'assets/wordSlide7.jpg', caption: 'Caption for Image 7' },
  ];

  return (
    
    <main className="carousel-section">
    <div className="carousel-row">
      <div className="carousel-with-title">
        <h2>PowerPoint Night 2023-2024</h2>
        <Carousel slides={slides} />
      </div>
      <div className="carousel-with-title">
        <h2>PowerPoint Night 2023-2024</h2>
        <Carousel slides={slides2} />
      </div>
    </div>

    <div className="member-spotlight">
      <h1>Member Spotlights</h1>
      <img src= "assets/memberSpotlight.jpg" alt = "Member Spotlight"/>
      
    </div>
    <div className="meeting-memories">
      <h1>Meeting Memories</h1>
    </div>

{/* First row with 2 images */}
<div className="meeting-memories-container">
  <div className="meeting-memories-pic">
    <img src="assets/involvementFair.jpg" alt="Involvement Fair" className="meeting-pic-image1" />
    <div className="overlay">Involvement Fair</div>
  </div>

  <div className="meeting-memories-pic wide">
    <img src="assets/willowtreeapps.jpg" alt="WillowTree Event" className="meeting-pic-image" />
    <div className="overlay">WillowTreeApps share tips and tricks for technical interviews</div>
  </div>
</div>

{/* Second row with 3 images */}
<div className="meeting-memories-container">
  <div className="meeting-memories-pic">
    <img src="assets/halloweenEvent.jpg" alt="Halloween Event" className="meeting-pic-image" />
    <div className="overlay">Winners of the Halloween Social Event</div>
  </div>

  <div className="meeting-memories-pic">
    <img src="assets/introToCSWorkshop.jpg" alt="CS Workshop" className="meeting-pic-image" />
    <div className="overlay">Intro to CS Workshop</div>
  </div>

  <div className="meeting-memories-pic">
    <img src="assets/tournament.jpg" alt="Rock Paper Scissors Tournament" className="meeting-pic-image" />
    <div className="overlay">Rock Paper Scissors Tournament</div>
  </div>
</div>
  </main>
    
  );
}

export default Home;