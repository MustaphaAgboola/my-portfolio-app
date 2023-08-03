import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Fade = ({ children, isActive }) => {
  return isActive && children 
}

export default Fade