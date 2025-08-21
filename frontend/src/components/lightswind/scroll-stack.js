"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const defaultBackgrounds = [
    "https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8553.jpg?semt=ais_hybrid&w=740&q=80",
    "https://media.istockphoto.com/id/1434278254/vector/blue-and-pink-light-panoramic-defocused-blurred-motion-gradient-abstract-background-vector.jpg?s=612x612&w=0&k=20&c=_KXodNw25trgE0xDe0zFnzNiofFgV50aajKpcI9x_8I=",
    "https://cdn.prod.website-files.com/6768f29a6d5da42209173f20/6768f29b6d5da4220917750d_Rectangle%20(28).svg",
    "https://images.unsplash.com/photo-1614851099511-773084f6911d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    "https://static.vecteezy.com/system/resources/thumbnails/025/466/147/small_2x/dark-black-gradient-abstract-background-modern-empty-background-vector.jpg",
    "https://st4.depositphotos.com/4984749/20144/i/450/depositphotos_201446926-stock-photo-gradient-background-black-night-dark.jpg"
];
const ScrollStack = ({ cards, backgroundColor = "bg-background", // Changed default to "bg-background"
cardHeight = "60vh", animationDuration = "0.9s", sectionHeightMultiplier = 3, intersectionThreshold = 0.1, className = "", }) => {
    const scrollableSectionRef = useRef(null);
    const sectionRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ticking = useRef(false);
    const cardCount = cards.length;
    const cardStyle = {
        height: cardHeight,
        maxHeight: "500px",
        borderRadius: "20px",
        transition: `transform ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1), opacity ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1)`,
        willChange: "transform, opacity",
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsIntersecting(entry.isIntersecting);
        }, { threshold: intersectionThreshold });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    if (!sectionRef.current || !cardsContainerRef.current)
                        return;
                    const sectionRect = sectionRef.current.getBoundingClientRect();
                    const parentRect = scrollableSectionRef.current?.getBoundingClientRect();
                    const viewportHeight = parentRect?.height ?? window.innerHeight;
                    const sectionTop = sectionRect.top - (parentRect?.top ?? 0);
                    const sectionHeight = sectionRef.current.offsetHeight;
                    const scrollableDistance = sectionHeight - viewportHeight;
                    let progress = 0;
                    if (sectionTop <= 0 && Math.abs(sectionTop) <= scrollableDistance) {
                        progress = Math.abs(sectionTop) / scrollableDistance;
                    }
                    else if (sectionTop <= 0) {
                        progress = 1;
                    }
                    let newActiveIndex = 0;
                    const progressPerCard = 1 / cardCount;
                    for (let i = 0; i < cardCount; i++) {
                        if (progress >= progressPerCard * (i + 1)) {
                            newActiveIndex = i + 1;
                        }
                    }
                    setActiveCardIndex(Math.min(newActiveIndex, cardCount - 1));
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };
        const scrollElement = scrollableSectionRef.current;
        scrollElement?.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => {
            scrollElement?.removeEventListener("scroll", handleScroll);
            if (sectionRef.current)
                observer.unobserve(sectionRef.current);
        };
    }, [cardCount, sectionHeightMultiplier, intersectionThreshold]);
    const getCardTransform = (index) => {
        const isVisible = isIntersecting && activeCardIndex >= index;
        const scale = 0.9 + index * 0.05;
        let translateY = "100px";
        if (isVisible) {
            translateY = `${90 - index * 30}px`;
        }
        return {
            transform: `translateY(${translateY}) scale(${scale})`,
            opacity: isVisible ? (index === 0 ? 0.9 : 1) : 0,
            zIndex: 10 + index * 10,
            pointerEvents: isVisible ? "auto" : "none",
        };
    };
    return (_jsx("section", { ref: scrollableSectionRef, className: "relative max-h-screen w-full lg:w-[100%] overflow-y-scroll \r\n      scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300", children: _jsx("div", { ref: sectionRef, className: `relative ${className}`, style: { height: `${sectionHeightMultiplier * 85}vh` }, children: _jsx("div", { className: `sticky top-0 w-full h-screen flex items-center 
            justify-center overflow-hidden ${backgroundColor}`, children: _jsx("div", { className: "container px-6 lg:px-8 mx-auto h-full flex flex-col justify-center", children: _jsx("div", { ref: cardsContainerRef, className: "relative w-full max-w-5xl mx-auto flex-shrink-0", style: { height: cardHeight }, children: cards.map((card, index) => {
                            const cardTransform = getCardTransform(index);
                            const backgroundImage = card.backgroundImage ||
                                defaultBackgrounds[index % defaultBackgrounds.length];
                            return (_jsxs("div", { className: `absolute z-50 overflow-hidden shadow-xl 
                      transition-all duration-300`, style: {
                                    ...cardStyle,
                                    top: 0,
                                    left: "50%",
                                    transform: `translateX(-50%) ${cardTransform.transform}`,
                                    width: "100%",
                                    maxWidth: "100%",
                                    opacity: cardTransform.opacity,
                                    zIndex: cardTransform.zIndex,
                                    pointerEvents: cardTransform.pointerEvents,
                                }, children: [_jsx("div", { className: "absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/80", style: {
                                            backgroundImage: `url('${backgroundImage}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundBlendMode: "overlay",
                                        } }), card.badge && (_jsx("div", { className: "absolute top-4 right-4 z-20", children: _jsx("div", { className: "inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white", children: _jsx("span", { className: "text-sm font-medium", children: card.badge }) }) })), _jsx("div", { className: "relative z-10 sm:mt-[-30px] p-5 sm:p-6 md:p-8 h-full flex items-center", children: card.content ? (card.content) : (_jsxs("div", { className: "max-w-lg", children: [_jsx("h3", { className: "text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4", children: card.title }), card.subtitle && (_jsx("p", { className: "sm:text-lg text-md text-white/80", children: card.subtitle }))] })) })] }, index));
                        }) }) }) }) }) }));
};
export default ScrollStack;