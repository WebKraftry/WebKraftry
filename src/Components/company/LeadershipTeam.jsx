import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import kunalimg from '../../assets/Kunal.jpg'
import CTA from '../Common/CTA';
import CTACard from '../Common/CTACard';


gsap.registerPlugin(ScrollTrigger);

const LeadershipTeam = () => {
  const navigate = useNavigate();
  // Refs for GSAP animations
  const headingRef = useRef(null);
  const introTextRef = useRef(null);
  const teamGridRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animation for the main heading and intro text
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    )
    .fromTo(
      introTextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      '-=0.5' // Stagger slightly after the heading
    );

    // Scroll-triggered animation for the team member cards
    gsap.fromTo(
      teamGridRef.current.children, // Animate each child of the grid
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2, // Stagger the animation of each team member card
        scrollTrigger: {
          trigger: teamGridRef.current,
          start: 'top 80%', // When the top of the grid enters the viewport
          toggleActions: 'play none none none',
        },
      }
    );

    // Scroll-triggered animation for the CTA section
    gsap.fromTo(
      ctaRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

  }, []);

  // Sample team member data
  const teamMembers = [
    {
      name: 'Kunal Koushik',
      title: 'CEO & Founder',
      bio: 'With over 2 years in digital innovation and web strategy, Mr. Koushik leads WebKraftry with a vision for empowering businesses through cutting-edge web development and digital transformation.',
      image: kunalimg
    },
    {
      name: 'Mr. Prince Tyagi',
      title: 'Co-Founder & Chief Technology Officer (CTO)',
      bio: 'A seasoned architect of scalable web applications and robust backend systems. Prince ensures WebKraftry delivers secure, high-performance custom web solutions leveraging the latest technologies.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=300&h=300',
    },
    {
      name: 'Mr Shivam Kumar',
      title: 'Head of Marketing & Growth',
      bio: 'Sarah specializes in SEO optimization, content strategy, and digital marketing campaigns that drive measurable ROI. Her expertise helps clients achieve significant online visibility and business growth.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=300&h=300',
    },
    // {
    //   name: 'Mr. Robert Green',
    //   title: 'Lead UI/UX Designer',
    //   bio: 'Robert crafts intuitive and engaging user experiences. His focus on user-centric design ensures every responsive website design is not only beautiful but also highly functional and easy to navigate.',
    //   image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?fit=crop&w=300&h=300',
    // },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <section className="paraFont-900 text-center mb-16">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-6 leading-tight">
            Meet Our Leadership Team
          </h1>
          <p ref={introTextRef} className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            At WebKraftry, our success is driven by a passionate team of experts dedicated to digital excellence and client innovation. Get to know the leaders guiding our mission.
          </p>
        </section>

        {/* Team Members Grid */}
        {/* <section ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"> */}
        <section ref={teamGridRef} className=" max-w-5xl noto-serif grid grid-cols-3 mb-16">
          {teamMembers.map((member, index) => (
             <div className="flex flex-wrap justify-center">
          <CTACard
            name={member.name}
            role={member.title}
            email="jane@webkraftery.com"
            phone="+1 (555) 123-4568"
            logoText="WEB KRAFTERY"
          />
          </div>
          ))}
        </section>

        {/* Call to Action Section */}
        <CTA/>
      </div>
    </div>
  );
};

export default LeadershipTeam;
