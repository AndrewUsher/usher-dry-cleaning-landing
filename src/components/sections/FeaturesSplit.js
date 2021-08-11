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
    heading: "Lorem, ipsum dolor.",
    imageAlt: "Features split 01",
    imageSrc: require("./../../assets/images/features-split-image-01.jpg"),
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta quidem asperiores quos officia explicabo quaerat velit ex laudantium labore.`,
  },
  {
    heading: "Lorem, ipsum dolor.",
    imageAlt: "Features split 02",
    imageSrc: require("./../../assets/images/features-split-image-02.jpg"),
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta quidem asperiores quos officia explicabo quaerat velit ex laudantium labore.`,
  },
  {
    heading: "Lorem, ipsum dolor.",
    imageAlt: "Features split 03",
    imageSrc: require("./../../assets/images/features-split-image-03.jpg"),
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta quidem asperiores quos officia explicabo quaerat velit ex laudantium labore.`,
  }
];

const SplitItem = ({
  heading,
  imageAlt,
  imageFill = false,
  imageSrc,
  paragraph,
}) => {
  return (
    <div className="split-item">
      <div
        className="split-item-content center-content-mobile reveal-from-left"
        data-reveal-container=".split-item"
      >
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
