"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

// Define the props type for each project card
type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  netlify_link: string;
};

// ProjectCard component to display each project
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}: ProjectCardProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}> */}
      <motion.div>
        <Tilt
          options={{
            max: 45, // Disable tilt on mobile
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <Image
              src={image}
              width={1000}
              height={1000}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

// Main Works component to display all projects
const Works = () => {
  return (
    <>
      <motion.div>
        <h2 className="sectionHeadText">اعمالنا</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          نحن نقدم مجموعة متنوعة من الخدمات لتلبية احتياجاتكم، بما في ذلك تطوير
          المواقع الإلكترونية، تصميم واجهات وتجربة المستخدم، تطوير سيرفرات فايف
          ام، التصميم الجرافيكي، تطوير البوتات، تطبيقات الجوال، تصميم العلامات
          التجارية، وتطوير السيرفرات.
          <br />
          <br />
          سواء كنت بحاجة إلى موقع مبتكر أو تطبيق احترافي أو تصميم علامة تجارية
          يعكس رؤيتك، فريقنا هنا لتحقيق طموحاتك. 🚀
          <br />
          <br />
          <br />
          البعض من اعمالنا...
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
