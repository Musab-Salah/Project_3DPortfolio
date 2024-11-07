"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <Image
              src={icon}
              width={64}
              height={64}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div >
        <p className="sectionSubText">مقدمة</p>
        <h2 className="styles.sectionHeadText">لمحة عامة</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        نحن فخورون بتقديم خدماتنا المتخصصة في التصميم، البرمجة، والتطوير وفقًا
        لأعلى معايير الجودة.
        <br />
        يضم فريقنا نخبة من الخبراء المتحمسين الذين يعملون بجد لتلبية احتياجاتكم
        وتقديم حلول مبتكرة تتجاوز توقعاتكم. ❤️
        <br />
        <br />
        ✨ سواء كنت تبحث عن:
        <br />
        📐 تصميم مميز
        <br />
        💻 تطوير موقع أو تطبيق
        <br />
        👨‍💻 برمجة مخصصة لمشروعك
        <br />
        <br />
        نحن هنا لخدمتك وتحقيق رؤيتك! 🚀
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
