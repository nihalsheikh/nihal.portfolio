import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, github2 } from '../assets';
import { SectionWrapper } from '../hoc';

import 'react-dom';

import { fadeIn, textVariant } from '../utils/motion';
import { certificates } from '../constants';


const CertificateCard = ({ index, certificate, company_name, date, platform, image }) => {
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
          <img 
            src={image}
            alt={certificate}
            className="w-full h-full object-cover rounded-2xl"
          />
      
          <div className="absolute inset-0 
            flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open
                (source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full 
                flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github2}
                  alt="github2"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{certificate}</h3>
          <p className="mt-2 text-secondary text-[18px]">{company_name}</p>
        </div>

      </Tilt>
    </motion.div>
  )
}


const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >My learnings</p>
        <h2 className={styles.sectionHeadText}
        >Certifications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary 
          text-[17px] max-w-3xl leading-[30px]"
        >
          Following are the Online Courses and Certifications which I enrolled in to 
          enhance and explore my knowledge in various languages, tools and platforms.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard 
            key={`certificate-${index}`}
            index={index}
            {...certificate}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Certificates, "")