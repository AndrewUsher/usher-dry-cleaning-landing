import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const defaultProps = {
  ...SectionSplitProps.defaults
};

const splitItems = [
  {
    heading: "Dry Cleaning",
    imageAlt: "Features split 01",
    imageSrc: require("./../../assets/images/features-split-image-01.jpg"),
    paragraph: `We use the most advanced dry-cleaning techniques and detergent, so your garments look better and last even longer.`,
    smallText: ""
  },
  {
    heading: "Household Items Cleaning",
    imageAlt: "Features split 02",
    imageSrc: require("./../../assets/images/features-split-image-02.jpg"),
    paragraph: `Our professional equipment has the power to remove the toughest stains and the soft touch to handle items like comforters, curtains, delicate tablecloths and decorative pillows.`,
    smallText: "Household"
  },
  {
    heading: "Shoe Cleaning and Repair",
    imageAlt: "Features split 03",
    imageSrc: require("./../../assets/images/features-split-image-03.jpg"),
    paragraph: `We can handle everything from pumps and boots to leather and suede. Bring your shoes to us for a regular shine, heel tip repair or sole replacement.`,
    smallText: "Shoes"
  }
];

const SplitItem = ({
  heading,
  imageAlt,
  imageFill = false,
  imageSrc,
  paragraph,
  smallText
}) => {
  return (
    <div className="split-item">
      <div
        className="split-item-content center-content-mobile reveal-from-left"
        data-reveal-container=".split-item"
      >
        {smallText && (
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            {smallText}
          </div>
        )}
        <h3 className="mt-0 mb-12">{heading}</h3>
        <p className="m-0">{paragraph}</p>
      </div>
      <div
        className={classNames(
          "split-item-image center-content-mobile reveal-from-bottom",
          imageFill
        )}
        data-reveal-container=".split-item"
      >
        <Image src={imageSrc} alt={imageAlt} width={528} height={396} />
      </div>
    </div>
  );
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Look Your Best",
    paragraph:
      "Reinventing cleaning through exceptional customer service, leading to an amazing experience"
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {splitItems.map((splitItem, i) => (
              <SplitItem key={i} {...splitItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
