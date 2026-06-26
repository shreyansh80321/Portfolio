import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/img/shreyansh.jpg";
import chatAppImage from "../assets/img/Screens.png";
import financeImage from "../assets/img/Screens1.png";
import groceryImage from "../assets/img/Screen2.png";
import lmsImage from "../assets/img/lms.png";
import weatherImage from "../assets/img/weather.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

const roles = ["Full Stack Developer", "Competitive Coder", "UI-Focused Builder"];

const stats = [
  { value: "6+", label: "Production-ready projects" },
  { value: "10+", label: "Core technologies used" },
  { value: "End-to-end", label: "Frontend to backend delivery" },
];

const skills = [
  { name: "React", tone: "cyan" },
  { name: "Next.js", tone: "gold" },
  { name: "Angular", tone: "coral" },
  { name: "Node.js", tone: "mint" },
  { name: "MongoDB", tone: "emerald" },
  { name: "PostgreSQL", tone: "blue" },
  { name: "MySQL", tone: "sky" },
  { name: "REST APIs", tone: "violet" },
  { name: "JavaScript", tone: "amber" },
  { name: "Python", tone: "indigo" },
  { name: "Java", tone: "rose" },
  { name: "C++", tone: "teal" },
  { name: "GitHub", tone: "slate" },
];

const projects = [
  {
    title: "Real Time Chat App",
    date: "September 8, 2025",
    image: chatAppImage,
    description:
      "A MERN-based chat platform with instant messaging, video calling, Clerk authentication, and Sentry monitoring for a fast and reliable communication experience.",
    tags: ["React", "Node.js", "WebSockets", "Clerk", "Sentry"],
    live: "https://shrey-frontend.vercel.app/",
    code: "https://github.com/shreyansh80321/slack-app",
    featured: true,
  },
  {
    title: "Finance Tracker App",
    date: "August 10, 2025",
    image: financeImage,
    description:
      "A finance dashboard for tracking income, expenses, and budgeting with clean visuals, real-time data updates, and a streamlined user workflow.",
    tags: ["MERN", "Charts", "Authentication"],
    live: "https://finance-app-gamma-ashen.vercel.app/",
    code: "https://github.com/shreyansh80321/finance-app",
    featured: true,
  },
  {
    title: "E-Commerce Grocery App",
    date: "August 28, 2025",
    image: groceryImage,
    description:
      "An online grocery product experience with cart, checkout, and order flow built for smooth browsing and conversion-focused usability.",
    tags: ["React", "Express", "MongoDB", "Checkout"],
    live: "https://rushbasket-frontend.onrender.com/",
    code: "https://github.com/shreyansh80321/Groccery-App",
    featured: true,
  },
  {
    title: "Lead Management System",
    date: "September 13, 2025",
    image: lmsImage,
    description:
      "A role-based lead management platform with JWT auth, lead CRUD workflows, sales visibility, and a clean API-driven architecture.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    live: "https://lms-frontend-mu-five.vercel.app/",
    code: "https://github.com/shreyansh80321/LMS",
  },
  {
    title: "Weather App",
    date: "August 31, 2025",
    image: weatherImage,
    description:
      "A focused weather dashboard that surfaces forecasts quickly with a lightweight UI and practical data display for everyday use.",
    tags: ["JavaScript", "API", "Responsive UI"],
    live: "https://weather-orpin-iota-45.vercel.app/",
    code: "https://github.com/shreyansh80321/Weather-App",
  },
];

const codingProfiles = [
  {
    name: "LeetCode",
    handle: "sibersuper1122",
    href: "https://leetcode.com/sibersuper1122/",
    accent: "amber",
  },
  {
    name: "Codeforces",
    handle: "shreyansh__80321",
    href: "https://codeforces.com/profile/shreyansh__80321",
    accent: "blue",
  },
  {
    name: "CodeChef",
    handle: "shreyansh80321",
    href: "https://www.codechef.com/users/shreyansh80321",
    accent: "coral",
  },
];

const contactLinks = [
  {
    label: "Resume",
    value: "Open PDF",
    href: "https://shreyansh80321.github.io/resume/resume.pdf",
  },
  {
    label: "GitHub",
    value: "shreyansh80321",
    href: "https://github.com/shreyansh80321",
  },
  {
    label: "Email",
    value: "Reach out directly",
    href: "mailto:shreyansh80321@gmail.com",
  },
];

const skillBurstLayout = [
  { x: -170, y: -120 },
  { x: -20, y: -145 },
  { x: 135, y: -112 },
  { x: -205, y: -20 },
  { x: -48, y: -18 },
  { x: 118, y: -5 },
  { x: -170, y: 95 },
  { x: -5, y: 112 },
  { x: 166, y: 88 },
  { x: -100, y: 188 },
  { x: 55, y: 202 },
  { x: 212, y: 182 },
  { x: 205, y: -155 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

function ConstellationField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    const pointer = { x: 0, y: 0, active: false };
    const stars = [];
    let animationFrameId = 0;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight,
      );
      const ratio = window.devicePixelRatio || 1;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      stars.length = 0;

      const totalStars = Math.max(42, Math.floor((width * height) / 19000));

      for (let index = 0; index < totalStars; index += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          radius: 1.1 + Math.random() * 2.1,
          glow: Math.random() * 0.65 + 0.35,
        });
      }
    };

    const drawFrame = () => {
      const width = window.innerWidth;
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight,
      );

      context.clearRect(0, 0, width, height);

      for (let index = 0; index < stars.length; index += 1) {
        const star = stars[index];

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < -20) star.x = width + 20;
        if (star.x > width + 20) star.x = -20;
        if (star.y < -20) star.y = height + 20;
        if (star.y > height + 20) star.y = -20;

        for (let inner = index + 1; inner < stars.length; inner += 1) {
          const neighbor = stars[inner];
          const dx = star.x - neighbor.x;
          const dy = star.y - neighbor.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 140) {
            const opacity = 1 - distance / 140;
            context.strokeStyle = `rgba(88, 96, 108, ${opacity * 0.2})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(star.x, star.y);
            context.lineTo(neighbor.x, neighbor.y);
            context.stroke();
          }
        }

        let hoverFactor = 0;

        if (pointer.active) {
          const dx = star.x - pointer.x;
          const dy = star.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 170) {
            hoverFactor = 1 - distance / 170;
            context.strokeStyle = `rgba(66, 72, 82, ${hoverFactor * 0.34})`;
            context.lineWidth = 1.2;
            context.beginPath();
            context.moveTo(star.x, star.y);
            context.lineTo(pointer.x, pointer.y);
            context.stroke();
          }
        }

        const starAlpha = Math.min(1, star.glow + hoverFactor * 0.35);
        const starRadius = star.radius + hoverFactor * 1.35;

        context.beginPath();
        context.fillStyle = `rgba(78, 84, 92, ${starAlpha})`;
        context.shadowBlur = 12 + hoverFactor * 16;
        context.shadowColor = `rgba(108, 116, 128, ${0.22 + hoverFactor * 0.22})`;
        context.arc(star.x, star.y, starRadius, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.fillStyle = `rgba(154, 160, 168, ${0.14 + hoverFactor * 0.12})`;
        context.arc(star.x, star.y, starRadius * 2.35, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }

      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY + window.scrollY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resizeCanvas();
    drawFrame();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="constellation-field" aria-hidden="true" />;
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });
  const [skillsPhase, setSkillsPhase] = useState("idle");
  const [skillsStarted, setSkillsStarted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursorGlow({ x: event.clientX, y: event.clientY });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 },
    );

    document.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    if (!skillsStarted || skillsPhase !== "idle") {
      return undefined;
    }

    setSkillsPhase("slow");

    const fastTimer = window.setTimeout(() => {
      setSkillsPhase("fast");
    }, 1800);

    const revealTimer = window.setTimeout(() => {
      setSkillsPhase("reveal");
    }, 3500);

    return () => {
      window.clearTimeout(fastTimer);
      window.clearTimeout(revealTimer);
    };
  }, [skillsStarted, skillsPhase]);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [],
  );
  const otherProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    [],
  );
  const stagedSkills = useMemo(
    () =>
      skills.map((skill, index) => ({
        ...skill,
        ...skillBurstLayout[index],
        delay: index * 0.16,
      })),
    [],
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState({ status: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4f1260ff-6938-407d-9d65-1d9b8a769e28",
          ...formState,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSubmitState({
        status: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error.message || "Unable to send message right now.",
      });
    }
  };

  return (
    <div className="app-shell">
      <ConstellationField />
      <motion.div
        className="cursor-glow"
        style={{ transform: `translate(${cursorGlow.x}px, ${cursorGlow.y}px)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <header className="site-header">
        <a className="brand-mark" href="#home">
          Shreyansh
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isMenuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <motion.section
          id="home"
          data-section
          className="hero-section section"
          variants={staggerGroup}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-copy" variants={staggerGroup}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Available for full stack roles and freelance work
            </motion.span>
            <motion.h1 variants={fadeUp}>
              Building web experiences that feel modern, fast, and unmistakably polished.
            </motion.h1>
            <motion.p className="hero-intro" variants={fadeUp}>
              I’m Shreyansh Srivastava, a developer who enjoys turning ideas into
              responsive products with strong UX, scalable backend logic, and clean,
              maintainable code.
            </motion.p>

            <motion.div className="role-switcher" variants={fadeUp}>
              <span>I am a</span>
              <motion.strong
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {roles[roleIndex]}
              </motion.strong>
            </motion.div>

            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a
                className="button ghost"
                href="https://shreyansh80321.github.io/resume/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div className="stats-grid" variants={staggerGroup}>
              {stats.map((stat) => (
                <motion.article
                  key={stat.label}
                  className="stat-card"
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" variants={fadeIn}>
            <motion.div
              className="portrait-card"
              initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="portrait-ring" />
              <img src={heroImage} alt="Shreyansh Srivastava" />
            </motion.div>

            <motion.div
              className="floating-panel top-panel"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <span>Focus</span>
              <strong>Full stack products with strong UI polish</strong>
            </motion.div>

            <motion.div
              className="floating-panel bottom-panel"
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <span>Stack</span>
              <strong>React, Node.js, MongoDB, SQL, APIs</strong>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="skills"
          data-section
          className="section"
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => setSkillsStarted(true)}
        >
          <motion.div className="section-heading" variants={staggerGroup}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Core toolkit
            </motion.span>
            <motion.h2 variants={fadeUp}>Skills that help me ship complete products</motion.h2>
            <motion.p variants={fadeUp}>
              I work across frontend, backend, databases, and deployment, with a
              practical focus on building smooth user-facing experiences.
            </motion.p>
          </motion.div>

          <motion.div className="skills-cosmos" variants={fadeUp}>
            <div className="skills-stage">
              <div className="skills-stage-copy">
                <span className="skills-stage-label">From planet to product stack</span>
                <h3>The globe spins up, then the tools launch out one by one.</h3>
              </div>

              <div className="skills-stage-center">
                {stagedSkills.map((skill) => (
                  <motion.article
                    key={skill.name}
                    className={`orbit-skill tone-${skill.tone} staged-skill`}
                    initial={{ opacity: 0, scale: 0.28, x: 500, y: 10, filter: "blur(8px)" }}
                    animate={
                      skillsPhase === "reveal"
                        ? {
                            opacity: 1,
                            scale: 1,
                            x: skill.x,
                            y: skill.y,
                            filter: "blur(0px)",
                          }
                        : {
                            opacity: 0,
                            scale: 0.28,
                            x: 500,
                            y: 10,
                            filter: "blur(8px)",
                          }
                    }
                    transition={{
                      duration: 0.65,
                      delay: skill.delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.08, y: skill.y - 4 }}
                  >
                    <span className="skill-dot" />
                    <strong>{skill.name}</strong>
                  </motion.article>
                ))}
              </div>

              <div className="skills-globe-zone">
                <div className="globe-trail" />
                <div className={`skills-globe globe-${skillsPhase}`}>
                  <div className="globe-shadow" />
                  <div className="globe-core">
                    <motion.div
                      className="globe-surface"
                      animate={
                        skillsPhase === "slow"
                          ? { rotate: 180, scale: 1 }
                          : skillsPhase === "fast" || skillsPhase === "reveal"
                            ? { rotate: 360, scale: [1, 1.05, 1] }
                            : { rotate: 0, scale: 1 }
                      }
                      transition={
                        skillsPhase === "slow"
                          ? { duration: 1.8, ease: "linear" }
                          : skillsPhase === "fast" || skillsPhase === "reveal"
                            ? { duration: 0.42, ease: "linear", repeat: Infinity }
                            : { duration: 0.2, ease: "easeOut" }
                      }
                    >
                      <div className="globe-band band-one" />
                      <div className="globe-band band-two" />
                      <div className="globe-band band-three" />
                      <div className="globe-highlight" />
                    </motion.div>
                    <span>My Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          data-section
          className="section"
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="section-heading" variants={staggerGroup}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Selected work
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Projects designed to feel sharper than a typical portfolio
            </motion.h2>
            <motion.p variants={fadeUp}>
              These are the builds that best show how I combine interface quality,
              backend logic, and product thinking.
            </motion.p>
          </motion.div>

          <motion.div className="project-grid featured-grid" variants={staggerGroup}>
            {featuredProjects.map((project) => (
              <motion.article
                key={project.title}
                className="project-card featured-card"
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>Featured Project</span>
                    <span>{project.date}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div className="project-grid compact-grid" variants={staggerGroup}>
            {otherProjects.map((project) => (
              <motion.article
                key={project.title}
                className="project-card compact-card"
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>Other Project</span>
                    <span>{project.date}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="profiles"
          data-section
          className="section profiles-section"
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-heading" variants={staggerGroup}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Competitive coding
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Coding profiles that show consistency beyond project work
            </motion.h2>
            <motion.p variants={fadeUp}>
              I actively practice problem solving and algorithmic thinking across
              multiple platforms.
            </motion.p>
          </motion.div>

          <motion.div className="profiles-grid" variants={staggerGroup}>
            {codingProfiles.map((profile) => (
              <motion.a
                key={profile.name}
                className={`profile-card accent-${profile.accent}`}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <span className="profile-label">{profile.name}</span>
                <strong>{profile.handle}</strong>
                <span className="profile-arrow">Visit profile</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          data-section
          className="section contact-section"
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="contact-layout" variants={staggerGroup}>
            <motion.div className="section-heading contact-copy" variants={staggerGroup}>
              <motion.span className="eyebrow" variants={fadeUp}>
                Let’s connect
              </motion.span>
              <motion.h2 variants={fadeUp}>
                Need a developer who can make things look good and work well?
              </motion.h2>
              <motion.p variants={fadeUp}>
                If you have an internship, freelance project, or collaboration in
                mind, send a message and let’s talk.
              </motion.p>

              <motion.div className="contact-links" variants={staggerGroup}>
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    variants={fadeUp}
                    whileHover={{ y: -5 }}
                  >
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.form className="contact-card" onSubmit={handleSubmit} variants={fadeUp}>
              <div className="field-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="What would you like to build?"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="6"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell me a bit about the opportunity or project"
                  required
                />
              </label>

              <button
                type="submit"
                className="button primary submit-button"
                disabled={submitState.status === "loading"}
              >
                {submitState.status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {submitState.message ? (
                <p className={`form-status ${submitState.status}`}>{submitState.message}</p>
              ) : null}
            </motion.form>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer
        className="site-footer"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>Shreyansh Srivastava</p>
        <span>Crafted as a Vite + React portfolio with custom motion and modern styling.</span>
      </motion.footer>
    </div>
  );
}

export default App;
