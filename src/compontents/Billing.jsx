import React from 'react';
import { apple, bill, google } from '../assets';
import { layout } from '../style';
import styles from '../style';

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} className="w-[100%] h-[100%] relative z-[5]" />
        <div className=" absolute z-[3] top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className=" absolute z-[0] bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.{' '}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            className="w-[128px] h-[42px] cursor-pointer object-contain"
          />
          <img
            src={google}
            className="w-[128px] h-[42px] cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
