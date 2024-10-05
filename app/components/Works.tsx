"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

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

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  netlify_link,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
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

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <Link
              href={source_code_link}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/tech/github.webp"
                width={24}
                height={24}
                alt="source-code"
                className="object-contain"
              />
            </Link>
            <Link
              href={netlify_link}
              target="_blank"
              className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/tech/netlify.webp"
                width={24}
                height={24}
                alt="source code"
                className="object-contain"
              />
            </Link>
          </div> */}
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
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className="sectionSubText">My work</p> */}
        <h2 className="sectionHeadText">اعمالنا</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
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
