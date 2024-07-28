import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.section
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.section>
  );
};

const HeroText = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 text-[6vh] mb-[25vh] p-8">
      <AnimatedSection delay={0.5} className="">
        We are
      </AnimatedSection>
      <AnimatedSection delay={1} className="leading-tight">
        IEEE Computer Society
      </AnimatedSection>
      <AnimatedSection delay={1.5} className="leading-none">
        VIT Chennai
      </AnimatedSection>
      <section className="text-white font-light grid text-[3vh] lg:grid-cols-5 sm:grid-rows-3 md:grid-rows-3 text-center lg:text-center sm:place-items-center place-items-center px-6 content-center pt-[10vh]">
        <section className="flex h-full w-full justify-center items-center">
          <section className="lg:hidden">|</section>
          <AnimatedSection delay={0.5} className="">
            DISCOVER
          </AnimatedSection>
        </section>
        <motion.section
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex justify-center items-center"
        >
          |
        </motion.section>
        <section className="flex h-full w-full justify-center items-center">
          <section className="lg:hidden">|</section>
          <AnimatedSection delay={1} className="">
            DEVELOP
          </AnimatedSection>
        </section>
        <motion.section
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex justify-center items-center"
        >
          |
        </motion.section>
        <section className="flex h-full w-full justify-center items-center">
          <section className="lg:hidden">|</section>
          <AnimatedSection delay={1.5} className="">
            DEPLOY
          </AnimatedSection>
        </section>
      </section>
    </section>
  );
};

export default HeroText;
