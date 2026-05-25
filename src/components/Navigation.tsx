import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/company_logo/half_logo.webp';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    // Avoid unnecessary re-renders
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScrollOptimized = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollOptimized, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScrollOptimized);
    };
  }, [handleScroll]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      children: [
        { name: 'Web Development', path: '/services#web-development' },
        { name: 'AI Automation', path: '/services#ai-automation' },
        { name: 'Software & SaaS', path: '/services#software-saas' },
        { name: 'Digital Marketing', path: '/services#digital-marketing' },
        { name: 'Education Services', path: '/services#education-services' },
        { name: 'Cloud Support', path: '/services#cloud-deployment' },
      ],
    },
    {
      name: 'Projects',
      path: '/projects',
      children: [
        { name: 'Client Projects', path: '/projects#client-projects' },
        { name: 'Final Year Projects', path: '/projects#final-year-projects' },
      ],
    },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const isItemActive = (path: string) => {
    const [pathname, hash] = path.split('#');
    if (location.pathname !== pathname) return false;
    if (!hash) return location.pathname === pathname;
    return location.hash === `#${hash}`;
  };

  const isParentActive = (path: string, children?: { name: string; path: string }[]) => {
    if (location.pathname === path) return true;
    return children?.some((child) => isItemActive(child.path)) ?? false;
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 ease-out mx-auto
        /* Positioning & Shape Logic (Mobile & Desktop) */
        ${isScrolled
          ? isOpen
            ? 'top-4 left-4 right-4 lg:left-12 lg:right-12 rounded-[2rem] shadow-2xl max-w-7xl' // Open state on scroll (Rectangle)
            : 'top-4 left-4 right-4 lg:top-6 lg:left-12 lg:right-12 rounded-[2rem] shadow-lg max-w-6xl' // Floating Pill state (Fixed oval bug using exact rem)
          : 'top-0 left-0 right-0 w-full lg:rounded-b-none' // Default Top state
        } ${isOpen && !isScrolled ? 'rounded-b-[2rem]' : ''}
        
        /* Background & Borders */
        ${(isScrolled || isOpen)
          ? isDark
            ? 'bg-gray-900/60 backdrop-blur-3xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] border border-white/10'
            : 'bg-white/60 backdrop-blur-3xl shadow-lg border border-black/10'
          : 'bg-transparent border-transparent'
        }`}
    >
      <div className={`mx-auto transition-all duration-300 ${isScrolled && !isOpen ? 'px-4 lg:px-8' : 'px-4 sm:px-6 lg:px-8 max-w-7xl'}`}>
        <div
          className={`flex flex-nowrap justify-between items-center gap-2 transition-all duration-300 ease-out ${isScrolled ? 'h-14 sm:h-16 lg:h-[4.5rem]' : 'h-16 sm:h-20 lg:h-24'
            }`}
        >
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 group relative z-10 min-w-0 shrink transition-all duration-300 bg-transparent shadow-none border-0 px-1 py-1 sm:px-2 sm:py-1.5"
          >
            {/* Logo image — stays prominent */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className={`object-contain transition-all duration-300 ease-out will-change-transform ${isScrolled
                  ? 'h-10 w-10 sm:h-12 sm:w-12' // Even bigger for floating pill
                  : 'h-12 w-12 sm:h-16 sm:w-16' // Even bigger for normal top state
                  }`}
              />
            </div>

            {/* Company Name — shrinks but never wraps */}
            <div className="relative flex items-center min-w-0 overflow-hidden">
              <span
                className={`font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-200 ease-out whitespace-nowrap truncate ${isScrolled ? 'text-sm xs:text-base sm:text-xl' : 'text-sm xs:text-lg sm:text-2xl'
                  } ${isDark
                    ? 'from-emerald-300 via-emerald-400 to-purple-400'
                    : 'from-purple-800 via-indigo-700 to-emerald-700'
                  }`}
                style={{
                  letterSpacing: '0.01em',
                  lineHeight: '1.3',
                  paddingTop: '2px',
                  paddingBottom: '4px',
                  display: 'block',
                }}
              >
                Integer.IO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-6">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ease-out font-medium text-sm xl:text-base relative whitespace-nowrap inline-flex items-center gap-1.5 ${isParentActive(item.path, item.children)
                      ? isDark
                        ? 'text-emerald-400 bg-emerald-400/10'
                        : 'text-purple-600 bg-purple-600/10'
                      : isDark
                        ? 'text-gray-200 hover:text-emerald-400 hover:bg-emerald-400/5'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-600/5'
                      }`}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="h-4 w-4 opacity-70" />}
                    {isParentActive(item.path, item.children) && (
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-purple-600'
                          }`}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div className="pointer-events-none absolute left-1/2 top-full z-50 hidden w-72 -translate-x-1/2 pt-3 group-hover:block group-hover:pointer-events-auto">
                      <div className={`overflow-hidden rounded-2xl border p-2 shadow-2xl ${isDark ? 'border-white/10 bg-gray-900' : 'border-gray-200 bg-white'}`}>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isItemActive(child.path)
                              ? isDark
                                ? 'bg-emerald-400/10 text-emerald-400'
                                : 'bg-purple-600/10 text-purple-600'
                              : isDark
                                ? 'text-gray-200 hover:bg-emerald-400/5 hover:text-emerald-400'
                                : 'text-gray-700 hover:bg-purple-600/5 hover:text-purple-600'
                              }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Controls - always pinned right, never displaced */}
          <div className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0 flex-none">
            {/* Theme Toggle - Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-200 ease-out ${isDark
                  ? 'text-yellow-400 hover:bg-yellow-400/10'
                  : 'text-indigo-600 hover:bg-indigo-600/10'
                  }`}
              >
                <div className="text-lg">{isDark ? '☀️' : '🌙'}</div>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Theme Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-200 ease-out ${isDark
                  ? 'text-yellow-400 hover:bg-yellow-400/10'
                  : 'text-indigo-600 hover:bg-indigo-600/10'
                  }`}
              >
                <div className="text-lg">{isDark ? '☀️' : '🌙'}</div>
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-all duration-200 ease-out ${isDark
                  ? 'text-gray-200 hover:text-emerald-400 hover:bg-emerald-400/10'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-600/10'
                  }`}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`lg:hidden overflow-hidden ${isDark
                ? 'border-t border-white/10'
                : 'border-t border-white/50'
                }`}
            >
              <div
                className={`h-px ${isDark ? 'bg-gray-700/20' : 'bg-gray-200/20'
                  }`}
              />

              <div className="py-4 space-y-1 px-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: 'easeOut',
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex-1 block px-4 py-3 rounded-lg transition-all duration-200 ease-out font-medium text-base ${isParentActive(item.path, item.children)
                            ? isDark
                              ? 'text-emerald-400 bg-emerald-400/10'
                              : 'text-purple-600 bg-purple-600/10'
                            : isDark
                              ? 'text-gray-200 hover:text-emerald-400 hover:bg-emerald-400/5'
                              : 'text-gray-700 hover:text-purple-600 hover:bg-purple-600/5'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            {isParentActive(item.path, item.children) && (
                              <div
                                className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-purple-600'
                                  }`}
                              />
                            )}
                          </div>
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            onClick={() => setMobileExpanded((prev) => (prev === item.name ? null : item.name))}
                            className={`p-3 rounded-lg transition-colors ${isDark ? 'text-gray-200 hover:bg-emerald-400/10' : 'text-gray-700 hover:bg-purple-600/10'}`}
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>

                      {item.children && mobileExpanded === item.name && (
                        <div className={`mt-1 ml-4 space-y-1 pl-3 border-l ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileExpanded(null);
                              }}
                              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm ${isItemActive(child.path)
                                ? isDark
                                  ? 'text-emerald-400 bg-emerald-400/10'
                                  : 'text-purple-600 bg-purple-600/10'
                                : isDark
                                  ? 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5'
                                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-600/5'
                                }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isItemActive(child.path)
                                ? (isDark ? 'bg-emerald-400' : 'bg-purple-600')
                                : (isDark ? 'bg-gray-500' : 'bg-gray-400')
                                }`} />
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav >
  );
};

export default Navigation;
