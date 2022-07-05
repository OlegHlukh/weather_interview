import styled from 'styled-components';
import {motion} from 'framer-motion';

const pathVariant = {
  hidden: {
    opacity: 0.4,
    translateX: '-5px',
  },
  visible: {
    opacity: 0.8,
    translateX: 0,
  },
};

const pathTransition = {
  duration: 3,
  ease: 'easeInOut',
  yoyo: Infinity,
};

const Icon = styled(motion.svg)``;

const IconPath = styled(motion.path).attrs(() => ({
  initial: 'hidden',
  variants: pathVariant,
  animate: 'visible',
  transition: pathTransition,
}))``;
const IconCircle = styled(motion.circle)``;

export {Icon, IconPath, IconCircle};
