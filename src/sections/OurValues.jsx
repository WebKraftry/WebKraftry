// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP plugins
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const OurValues = () => {
//   const containerRef = useRef(null);
//   const headingRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     // Animation timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 50%",
//         end: "bottom 40%",
//         scrub: 1,
//         markers: false,
//       }
//     });

//     // Heading animation
//     tl.from(headingRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 0.8,
//       ease: "back.out(1.2)"
//     });

//     // Card animations - staggered
//     cardRefs.current.forEach((card, index) => {
//       tl.from(card, {
//         y: 100,
//         opacity: 0,
//         scale: 0.9,
//         rotationY: 15 * (index % 2 === 0 ? 1 : -1), // Alternate direction
//         duration: 0.8,
//         ease: "power3.out",
//       }, index * 0.1); // Stagger effect
//     });

//     return () => {
//       tl.kill(); // Cleanup
//     };
//   }, []);

//   // Add card to refs array
//   const addToRefs = (el) => {
//     if (el && !cardRefs.current.includes(el)) {
//       cardRefs.current.push(el);
//     }
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="paraFont-900 bg-gradient-to-r from-purple-100 to-purple-300 relative py-20 px-4 shadow-lg rounded-lg z-14 overflow-hidden"
//     >
//       <div className="max-w-[90vw] mx-auto">
//         <h2 
//           ref={headingRef}
//           className="text-4xl font-bold text-center mb-12 text-purple-800"
//         >
//           Our Core Values
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Value Card 1 */}
//           <div 
//             ref={addToRefs}
//             className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-purple-700">Innovation</h3>
//             <p className="text-gray-700">
//               We constantly explore new technologies and creative approaches to deliver cutting-edge solutions.
//             </p>
//           </div>

//           {/* Value Card 2 */}
//           <div 
//             ref={addToRefs}
//             className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-purple-700">Client-Centricity</h3>
//             <p className="text-gray-700">
//               Your success is our priority. We listen, understand, and tailor our services to meet your specific goals.
//             </p>
//           </div>

//           {/* Value Card 3 */}
//           <div 
//             ref={addToRefs}
//             className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-purple-700">Quality Excellence</h3>
//             <p className="text-gray-700">
//               We are committed to delivering high-quality, robust, and scalable web solutions.
//             </p>
//           </div>

//           {/* Value Card 4 */}
//           <div 
//             ref={addToRefs}
//             className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-purple-700">Transparency</h3>
//             <p className="text-gray-700">
//               Open communication and clear processes are at the heart of our operations.
//             </p>
//           </div>

//           {/* Value Card 5 */}
//           <div 
//             ref={addToRefs}
//             className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-purple-700">Continuous Growth</h3>
//             <p className="text-gray-700">
//               We foster a culture of learning and improvement to better serve our clients.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurValues;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const OurValues = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Buttery smooth heading animation
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          scrub: 0.8
        }
      });

      // Ultra-smooth card cascade
      gsap.from(cardRefs.current, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07, // Faster than standard 0.1s
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          scrub: 0.8,
          markers: false
        }
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Card data
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and creative approaches to deliver cutting-edge solutions."
    },
    {
      title: "Client-Centricity", 
      description: "Your success is our priority. We listen, understand, and tailor our services to meet your goals."
    },
    {
      title: "Quality Excellence",
      description: "Committed to delivering high-quality, robust web solutions that stand the test of time."
    },
    {
      title: "Transparency",
      description: "Open communication and clear processes at the heart of our operations."
    },
    {
      title: "Continuous Growth",
      description: "We foster a culture of learning to better serve our clients and team."
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="paraFont-900 bg-gradient-to-r from-purple-100 to-purple-300 relative py-20 px-4 shadow-lg rounded-lg z-14"
    >
      <div className="max-w-[90vw] mx-auto">
        <h2 
          ref={headingRef}
          className="text-4xl font-bold text-center mb-12 text-purple-800"
        >
          Our Core Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">
                {value.title}
              </h3>
              <p className="text-gray-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurValues;

