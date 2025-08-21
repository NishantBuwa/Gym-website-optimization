import React, { Suspense, lazy, useEffect, useRef, useState } from "react";

// Normal imports
import Section1 from "./Section1";
import Section2 from "./Section2";

// Lazy imports
const Section3 = lazy(() => import("../Home/Section3"));
const Section4 = lazy(() => import("../Home/Section4"));
const Section5 = lazy(() => import("../Home/Section5"));
const Section7 = lazy(() => import("../Home/Section7"));
const Section8 = lazy(() => import("../Home/Section8"));
const Section9 = lazy(() => import("../Home/Section9"));
const Section10 = lazy(() => import("../Home/Section10"));


function LazyLoadSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // load only once
        }
      },
      {
        threshold: 0, // load when 10% of section is visible
        rootMargin: "1000px"
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: "200px" }}>
      {isVisible ? (
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      ) : (
        <div style={{ height: "200px" }}> {/* Placeholder before load */}
          Loading section...
        </div>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="h-full">
      <Section1 />
      <Section2 />

      {/* ✅ Lazy load with IntersectionObserver */}
      <div className="sm:block hidden">
        <LazyLoadSection>
          <Section3 />
        </LazyLoadSection>
      </div>

      <LazyLoadSection>
        <Section4 />
      </LazyLoadSection>

      <LazyLoadSection>
        <Section5 />
      </LazyLoadSection>

      <LazyLoadSection>
        <Section7 />
      </LazyLoadSection>

      <LazyLoadSection>
        <Section8 />
      </LazyLoadSection>

      <LazyLoadSection>
        <Section9 />
      </LazyLoadSection>

      <LazyLoadSection>
        <Section10 />
      </LazyLoadSection>
    </div>
  );
}

export default Home;