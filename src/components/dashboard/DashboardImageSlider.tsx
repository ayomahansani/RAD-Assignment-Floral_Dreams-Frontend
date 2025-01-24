import { useEffect, useState } from "react";

const DashboardImageSlider = () => {
    const flowerImages = [
        "/flower1.jpg", // Replace with the actual image path
        "/flower2.jpg", // Replace with the actual image path
        "/flower3.jpg", // Replace with the actual image path
        "/flower4.jpg",
        "/flower5.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % flowerImages.length); // Cycle through images
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [flowerImages.length]);

    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg">
            {/* Current Image */}
            <img
                src={flowerImages[currentIndex]}
                alt={`Flower ${currentIndex + 1}`}
                className="w-full h-[370px] object-cover transition-opacity duration-1000 ease-in-out"
            />

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {flowerImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            currentIndex === index ? "bg-[#432e32]" : "bg-[#bda6a6]"
                        }`}
                        style={{ border: "2px solid #f0e5e5" }}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default DashboardImageSlider;