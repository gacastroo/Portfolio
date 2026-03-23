import React, { useEffect, useRef } from "react";
import "/src/styles/global.css";

const techIcons = [
    { className: "fab fa-html5", alt: "HTML5" },
    { className: "fab fa-css3", alt: "CSS3" },
    { className: "fab fa-js", alt: "JavaScript" },
    { className: "devicon-spring-original", alt: "Spring" },
    { className: "fab fa-github", alt: "GitHub" },
];

const TechMarquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marqueeContent = marqueeRef.current;
        if (!marqueeContent) return;

        // Get the number of items to display from CSS or default to 5
        const root = document.documentElement;
        const displayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed")) || 5;

        // Update the CSS variable for the total count
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        // Prevent double-cloning in React Strict Mode
        if (marqueeContent.children.length <= techIcons.length) {
            for (let i = 0; i < displayed; i++) {
                marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
            }
        }
    }, []);

    return (
        <section id="tech" className="tech-section">
            <div className="marquee">
                <ul className="marquee-content" ref={marqueeRef}>
                    {techIcons.map((icon, index) => (
                        <li key={index}>
                            <i className={icon.className} title={icon.alt}></i>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TechMarquee;