import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  Award,
  Shield,
  Zap,
  HeadphonesIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveCard from '../components/InteractiveCard';

import { useTheme } from '../contexts/ThemeContext';
import ServiceCarousel from '../components/ServiceCarousel';
import SEO from '../components/SEO';

// Import product images
import chatzImg from '../assets/products/chatz.io.webp';
import imgGenImg from '../assets/products/img_gen.webp';

// Import project images from assets/services
import acImg from '../assets/services/ac.webp';
import sasImg from '../assets/services/sas.webp';
import karpagamImg from '../assets/services/karpagam.webp';

// Import company logo
import halfLogo from '../assets/company_logo/half_logo.webp';

// Sample project data
const sampleProjects = [
  {
    id: 1,
    title: 'Cooling Services Website',
    description:
      'A service website for home appliance repairs including washing machines, fridges, and ACs.',
    image: acImg,
    link: 'https://multibrandwashingmachineservice.in/',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Business Consultancy Website',
    description:
      'A modern business website for an import-export consultancy firm offering expert guidance to global trade clients',
    image: sasImg,
    link: 'https://sas-impex.netlify.app/',
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'Sri Karpagam Brand Website',
    description:
      'A product showcase website featuring traditional flours and food mixes with a clean product gallery',
    image: karpagamImg,
    link: 'https://srikarpagambrand.in/',
    category: 'Web Development',
  },
];

const Home = () => {
  const { isDark } = useTheme();



  const features = [
    {
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support',
      icon: <Globe className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'emerald' as const,
    },
    {
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience',
      icon: <Users className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'purple' as const,
    },
    {
      title: 'Quality Assured',
      description: 'Premium solutions with guaranteed satisfaction',
      icon: <Award className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'blue' as const,
    },
  ];

  const whyPoints = [
    {
      title: 'Cost-Efficient Solutions',
      description: 'Premium quality at startup-friendly prices — no hidden fees, no compromises.',
      icon: <Zap className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'emerald' as const,
    },
    {
      title: 'End-to-End Delivery',
      description: 'From concept to deployment — we handle design, development, and support.',
      icon: <Award className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'purple' as const,
    },
    {
      title: '24/7 Expert Support',
      description: 'Round-the-clock WhatsApp & email support for all your technical needs.',
      icon: <HeadphonesIcon className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'blue' as const,
    },
    {
      title: 'Proven Track Record',
      description: '110+ projects delivered with 100% client satisfaction across Tamil Nadu.',
      icon: <Users className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'pink' as const,
    },
    {
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with cloud-ready architectures that grow with you.',
      icon: <Shield className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'emerald' as const,
    },
    {
      title: 'Student-Friendly Pricing',
      description: 'Affordable final year project packages with full documentation & presentation support.',
      icon: <Sparkles className="h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
      color: 'cyan' as const,
    },
  ];

  const slideL = {
    hidden: { opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 640 ? -12 : -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideR = {
    hidden: { opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 640 ? 12 : 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen pt-16">
      <SEO 
        title="Integer.IO Solutions | AI Automation & Web Development Company in Madurai, Coimbatore & Chennai"
        description="Integer.IO Solutions is a leading AI automation company and web development company in Madurai. We provide SaaS products, React development, business automation, digital transformation and final year projects across Tamil Nadu."
        page=""
      />
      {/* Hero Section with Enhanced Effects */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-20 px-3 sm:px-4 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            {/* Animated Badge */}
            <motion.div
              variants={slideL}
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 mb-4 sm:mb-8"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400 mr-1.5 sm:mr-2" />
              <span
                className={`text-xs sm:text-sm font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-600'
                  }`}
              >
                Trusted by 100+ clients
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6">
              <motion.span variants={slideR} className="flex items-center justify-center gap-2 sm:gap-4">
                <img src={halfLogo} alt="Integer.IO Solutions - Top Madurai IT Companies" className="h-16 sm:h-14 md:h-24 w-auto object-contain" />
                <span className={`bg-gradient-to-r bg-clip-text text-transparent pb-1 sm:pb-2 text-xl sm:text-3xl md:text-5xl drop-shadow-sm ${isDark
                  ? 'from-emerald-300 via-purple-300 to-pink-300'
                  : 'from-purple-900 via-indigo-800 to-emerald-800'
                  }`} style={{ lineHeight: '1.3' }}>
                  Integer.IO Solutions
                </span>
              </motion.span>
              <br />
              <motion.span
                variants={slideL}
                className={`text-base sm:text-2xl md:text-4xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-900'
                  }`}
              >
                AI Automation & Web Development Company
              </motion.span>
            </h1>

            <motion.p
              variants={slideR}
              className={`text-sm sm:text-xl md:text-2xl mb-4 sm:mb-8 max-w-4xl mx-auto font-bold ${isDark ? 'text-gray-200' : 'text-gray-900'
                }`}
            >
              Helping startups & businesses build scalable AI-powered digital products
            </motion.p>

            <motion.p
              variants={slideL}
              className={`text-xs sm:text-lg mb-6 sm:mb-12 max-w-3xl mx-auto font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'
                }`}
            >
              We specialize in React development, AI automation solutions,
              custom software, SaaS products, and digital transformation for businesses,
              institutions across the globe.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-16"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center group hover:scale-105 transform shadow-lg btn-hover-effect"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 transform shadow-lg btn-hover-effect"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-20 px-3 sm:px-4 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideL}
            className={`text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Our Core Services
          </motion.h2>

          <motion.section
            id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideR}
          >
            <ServiceCarousel />
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideL}
            className="text-center mt-6 sm:mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 transform shadow-lg btn-hover-effect group"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Integer.IO Solutions Section */}
      <section className="py-10 sm:py-20 px-3 sm:px-4 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideR}
            className={`text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Why Integer.IO Solutions?
          </motion.h2>

          <div className="force-cols-2-mobile force-cols-3-desktop gap-2 sm:gap-6 lg:gap-8">
            {whyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className={index >= 4 ? 'hidden sm:block' : ''}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? slideL : slideR}
              >
                <InteractiveCard
                  glowColor={point.color}
                  className="text-center !p-4 sm:!p-6 md:!p-8 h-full"
                >
                  <div
                    className={`${isDark
                      ? `text-${point.color}-400`
                      : ({ emerald: 'text-emerald-700', purple: 'text-purple-700', blue: 'text-blue-700', pink: 'text-violet-700', cyan: 'text-teal-700' }[point.color] ?? 'text-gray-700')
                    } mb-3 sm:mb-5 flex justify-center`}
                  >
                    {point.icon}
                  </div>
                  <h3
                    className={`text-sm sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-3 ${isDark ? 'text-white' : 'text-gray-800'
                      }`}
                  >
                    {point.title}
                  </h3>
                  <p className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                    {point.description}
                  </p>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-10 sm:py-20 px-3 sm:px-4 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideL}
            className={`text-xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Our Premium Products
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideR}
            className={`text-center text-xs sm:text-lg mb-6 sm:mb-16 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
          >
            Discover our flagship digital solutions designed to transform your business operations and drive growth
          </motion.p>

          <div className="grid grid-cols-2 gap-2 sm:gap-6 md:gap-10">
            {/* Chatz.IO Product */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideL}
            >
              <InteractiveCard glowColor="emerald" className="h-full overflow-hidden">
                <div className={`relative rounded-t-xl ${isDark ? 'bg-gray-800/40' : 'bg-gray-50/50'}`}>
                  <img
                    src={chatzImg}
                    alt="Chatz.IO - SaaS Products by Integer.IO Solutions for Students"
                    loading="lazy"
                    className="w-full h-36 sm:h-48 md:h-64 object-contain p-2"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                    NEW
                  </span>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className={`text-base sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Chatz.IO
                  </h3>
                  <p className={`text-[11px] sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    An intelligent AI-powered chat assistant designed specifically for students. Get help with studies and research.
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </InteractiveCard>
            </motion.div>

            {/* Dips.IO Product */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideR}
            >
              <InteractiveCard glowColor="purple" className="h-full overflow-hidden">
                <div className={`relative rounded-t-xl ${isDark ? 'bg-gray-800/40' : 'bg-gray-50/50'}`}>
                  <img
                    src={imgGenImg}
                    alt="Dips.IO - Next-Gen SaaS Products by Integer.IO Solutions"
                    loading="lazy"
                    className="w-full h-36 sm:h-48 md:h-64 object-contain p-2"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                    COMING SOON
                  </span>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className={`text-base sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Dips.IO
                  </h3>
                  <p className={`text-[11px] sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    An innovative next-gen digital platform coming soon! Stay tuned for revolutionary features.
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-purple-500 hover:bg-purple-600 text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </InteractiveCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-10 sm:py-20 px-3 sm:px-4 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideL}
            className={`text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Featured Projects
          </motion.h2>

          <div className="force-cols-2-mobile force-cols-3-desktop gap-2 sm:gap-8">
            {sampleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? slideL : slideR}
                className={`group ${index >= 2 ? 'hidden sm:block' : ''}`}
              >
                <InteractiveCard
                  glowColor="emerald"
                  className="overflow-hidden h-full"
                >
                  <div className="relative overflow-hidden rounded-lg mb-1 sm:mb-4">
                    <img
                      src={project.image}
                      alt={`${project.title} - Cost efficient web development by Integer.IO Solutions`}
                      loading="lazy"
                      className="w-full h-24 sm:h-44 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-1 sm:p-2 flex flex-col h-full">
                     <span className={`text-[9px] sm:text-sm font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                       {project.category}
                     </span>
                    <h3
                      className={`text-xs sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-2 line-clamp-1 ${isDark ? 'text-white' : 'text-gray-800'
                        }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-[10px] sm:text-sm mb-2 sm:mb-4 flex-grow line-clamp-2 ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-[9px] sm:text-sm font-medium transition-colors ${isDark
                        ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
                        : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                        }`}
                    >
                      Visit <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideR}
            className="text-center mt-6 sm:mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg btn-hover-effect"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Home;
