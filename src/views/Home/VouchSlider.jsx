import React, { useRef, useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import Swiper modules
import { Autoplay, Pagination } from "swiper/modules";

import VideoBtn from "./../../assets/images/video/video-btn.svg";
import Video1 from "./../../assets/images/video/video-1.mp4";
import Video2 from "./../../assets/images/video/video-2.mp4";
import Video3 from "./../../assets/images/video/video-3.mp4";

// Sample video data
const videos = [
    {
        id: 1,
        title: "Video 1",
        url: Video1,
        adminName: "Carol Glover",
        adminDesignation: "CEO",
    },
    {
        id: 2,
        title: "Video 2",
        url: Video2,
        adminName: "John Doe",
        adminDesignation: "CTO",
    },
    {
        id: 3,
        title: "Video 3",
        url: Video3,
        adminName: "Jane Smith",
        adminDesignation: "CMO",
    },
    {
        id: 4,
        title: "Video 4",
        url: Video1,
        adminName: "Mike Johnson",
        adminDesignation: "CFO",
    },
    {
        id: 5,
        title: "Video 5",
        url: Video2,
        adminName: "Emily Davis",
        adminDesignation: "COO",
    },
    {
        id: 6,
        title: "Video 6",
        url: Video3,
        adminName: "Chris Lee",
        adminDesignation: "CMO",
    },
    {
        id: 7,
        title: "Video 7",
        url: Video1,
        adminName: "Pat Brown",
        adminDesignation: "CTO",
    },
    {
        id: 8,
        title: "Video 8",
        url: Video2,
        adminName: "Olivia Wilson",
        adminDesignation: "CEO",
    },
    {
        id: 9,
        title: "Video 9",
        url: Video3,
        adminName: "Liam Smith",
        adminDesignation: "CFO",
    },
];

const  VouchSlider = () => {
    const swiperRef = useRef(null);
    const [scale, setScale] = useState(1); // State to manage scaling
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const [currentVideo, setCurrentVideo] = useState(""); // State to store the current video URL
    const [currentIndex, setCurrentIndex] = useState(0); // State to store the current slide index

    // Handle video playback based on the active slide
    const handleSlideChange = (swiper) => {
        const slides = swiper.slides;

        // Pause all videos first
        slides.forEach((slide) => {
            const video = slide.querySelector("video");
            if (video) {
                video.pause();
            }
        });

        // Play the video of the active slide
        const activeSlide = slides[swiper.activeIndex];
        const activeVideo = activeSlide.querySelector("video");
        if (activeVideo) {
            activeVideo.play();
        }

        // Update the current index based on the active index
        setCurrentIndex(swiper.realIndex); // Use realIndex instead of activeIndex

        // Scale the corners on slide change
        setScale(1.051);
        setTimeout(() => {
            setScale(1); // Reset scale after 300ms (or any duration you prefer)
        }, 600);
    };

    // Open modal with the current video
    const openModal = (videoUrl) => {
        setCurrentVideo(videoUrl);
        setShowModal(true);
    };

    // Close modal
    const closeModal = () => {
        setShowModal(false);
        setCurrentVideo(""); // Reset the video source
    };

    // Helper function to display paginated items centered
    const getVisiblePagination = () => {
        const total = videos.length;
        const visiblePagination = [];
        const itemsToShow = 5; // Number of pagination items to display (centered view)
        const middleIndex = Math.floor(itemsToShow / 2);

        for (let i = -middleIndex; i <= middleIndex; i++) {
            let index = currentIndex + i;
            if (index < 0) {
                index = total + index; // Wrap around to the end of the list
            } else if (index >= total) {
                index = index - total; // Wrap around to the start of the list
            }
            visiblePagination.push(index);
        }
        return visiblePagination;
    };

    return (
        <div className="section vouch-for-us">
            <Container fluid className="p-lg-0">
                <h2 className="heading">
                    Here's the Peeps, Who Vouch for Us
                </h2>
                <div className="Vouch_wrapper">
                    <Swiper
                        slidesPerView={1.4}
                        spaceBetween={30}
                        centeredSlides={true}
                        speed={900}
                        loop={true}
                        autoplay={{
                            delay: 2000, // 3 seconds delay between slides
                            disableOnInteraction: false, // Autoplay won't stop after user interactions like clicking or swiping
                        }}
                        modules={[Autoplay, Pagination]}
                        className="Vouch_slider"
                        onSlideChange={handleSlideChange}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}

                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <div className="videoSlider_videoWrap">
                                    <div className="videoSlider_info_content text-center mb-2">
                                        <h5 className="admin_name mb-1">{video.adminName}</h5>
                                        <p className="admin_designation mb-0">
                                            - {video.adminDesignation}
                                        </p>
                                    </div>
                                    <button
                                        className="video_button"
                                        onClick={() => openModal(video.url)}
                                    >
                                        <video src={video.url} muted playsInline loop></video>
                                        <div className="button_wrap">
                                            <img
                                                src={VideoBtn}
                                                alt="Video Btn"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="custom-pagination">
                        {getVisiblePagination().map((index, paginationIndex) => {
                            const isActive = currentIndex === index;
                            const isFirst = paginationIndex === 0;
                            const isLast = paginationIndex === getVisiblePagination().length - 1;

                            return (
                                <span
                                    key={paginationIndex}
                                    className={`pagination-item ${isActive ? "active" : ""} ${isFirst ? "first" : ""} ${isLast ? "last" : ""}`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            );
                        })}
                    </div>


                    <div className="videoSlider_cornerWrap">
                        <div
                            className="videoSlider_corners global_corners"
                            style={{
                                transform: `scale(${scale})`,
                                transition: "transform 0.3s ease",
                            }} // Apply scaling style
                        ></div>
                    </div>
                </div>
            </Container>

            {/* Fullscreen Modal */}
            <Modal
                show={showModal}
                onHide={closeModal}
                size="lg"
                centered
                className="fullscreen-modal"
            >
                <Modal.Body>
                    <button
                        type="button"
                        className="close-btn btn"
                        onClick={closeModal}
                        aria-label="Close"
                    >
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                    <video src={currentVideo} controls autoPlay className="w-100"></video>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default VouchSlider