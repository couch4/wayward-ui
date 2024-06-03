import {
  createElement,
  createContext,
  forwardRef,
  Ref,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
} from 'react';
import { StackProps } from './Stack.types';
import { stackVars } from './Stack.styles';
import { motion, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { containsMotionProps } from '../../../utils';

const ScrollTriggerContext = createContext({} as any);
const scrollTriggerDefaults = {
  start: 'top bottom',
  end: 'bottom top',
  toggleActions: 'restart none none none',
};

export const Stack = forwardRef(
  (
    {
      className,
      direction = 'row',
      align = 'start',
      gap,
      scrollTrigger,
      debug = false,
      onEnter,
      onEnterBack,
      onLeave,
      onLeaveBack,
      onRefresh,
      animateOnScrollDown,
      ...props
    }: StackProps,
    ref: Ref<any>,
  ) => {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => innerRef.current!, []);
    const [motionState, setMotionState] = useState<string | undefined>();
    const [gsapRegistered, setGsapRegistered] = useState(false);
    const [inView, setInView] = useState(false);
    const [scrollState, setScrollState] = useState<string | undefined>();

    const isAnimated = containsMotionProps(props); //contains framer motion props?
    const allProps = {
      ...stackVars(direction, align, gap, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props, // pass down remaining props
    };

    // scrolltrigger
    const refTimeline = useRef<gsap.core.Timeline>();
    const progress = useMotionValue(0);
    const velocity = useMotionValue(0);

    useEffect(() => {
      if (scrollTrigger || animateOnScrollDown) {
        gsap.registerPlugin(ScrollTrigger);
        setGsapRegistered(true);
      }
    }, []);

    useLayoutEffect(() => {
      if (innerRef.current && gsapRegistered) {
        refTimeline.current = gsap.timeline({
          scrollTrigger: {
            ...scrollTriggerDefaults,
            ...(scrollTrigger || {}),
            markers: debug,
            trigger: innerRef.current,
            onUpdate: (instance) => {
              progress.set(clamp(instance.progress, 0, 1));
              velocity.set(instance.getVelocity());
            },
            onEnter: () => {
              if (onEnter || animateOnScrollDown) {
                setMotionState(animateOnScrollDown ? 'active' : onEnter);
              }
              setScrollState('enter');
            },
            onEnterBack: () => {
              if (onEnterBack || animateOnScrollDown) {
                setMotionState(animateOnScrollDown ? 'active' : onEnterBack);
              }
              setScrollState('enterBack');
            },
            onLeave: () => {
              if (onLeave || animateOnScrollDown) {
                setMotionState(animateOnScrollDown ? 'active' : onLeave);
              }
              setScrollState('leave');
            },
            onLeaveBack: () => {
              if (onLeaveBack || animateOnScrollDown) {
                setMotionState(animateOnScrollDown ? 'inactive' : onLeaveBack);
              }
              setScrollState('leaveBack');
            },
            onRefresh: () => {
              if (onRefresh || animateOnScrollDown) {
                setMotionState(animateOnScrollDown ? 'inactive' : onRefresh);
              }
              setScrollState('refresh');
            },
            onToggle: (self) => {
              setInView(self.isActive);
            },
          },
        });
      }

      return () => {
        // Kill and clear the timeline and scrolltrigger instance when updated/unmounted.
        refTimeline.current?.scrollTrigger?.kill();
        refTimeline.current?.kill();
        refTimeline.current?.clear();
      };
    }, [
      debug,
      scrollTrigger,
      progress,
      velocity,
      innerRef.current,
      gsapRegistered,
    ]);

    return createElement(
      isAnimated ? motion.div : 'div', // if motion props exist on component, make this component animatable, otherwise render static stack
      { ...allProps, ref: innerRef },
      <ScrollTriggerContext.Provider
        value={{ inView, motionState, progress, scrollState }}
      >
        {props.children}
      </ScrollTriggerContext.Provider>,
    );
  },
);

Stack.displayName = 'Stack';

export const useScrollTriggerStack = () => useContext(ScrollTriggerContext);

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);
