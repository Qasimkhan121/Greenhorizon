import bbq from "@/images/projects/sunsetBay/amenities/1.png";
import gym from "@/images/projects/sunsetBay/amenities/2.png";
import play from "@/images/projects/sunsetBay/amenities/3.png";
import cinema from "@/images/projects/sunsetBay/amenities/4.png";
import island from "@/images/projects/sunsetBay/amenities/8.png";
import waterLounge from "@/images/projects/sunsetBay/amenities/5.png";
import privateTerrace from "@/images/projects/sunsetBay/amenities/6.png";
import meeting from "@/images/projects/sunsetBay/amenities/7.png";
import pool from "@/images/projects/sunsetBay/amenities/9.png";
import lotus from "@/images/projects/sunsetBay/amenities/10.png";
import garden from "@/images/projects/sunsetBay/amenities/11.png";
import club from "@/images/projects/sunsetBay/amenities/12.png";
import furnished from "@/images/projects/sunsetBay/amenities/13.png";
import kidsPool from "@/images/projects/sunsetBay/amenities/14.png";
import coveredParking from "@/images/projects/sunsetBay/amenities/15.png";
import zenGarden from "@/images/projects/sunsetBay/amenities/16.png";
import yoga from "@/images/projects/sunsetBay/amenities/17.png";

import sunsetBay2Bg from "@/images/projects/sunsetBay/hero.png";
import courtierHouseBg from "@/images/projects/courtierHouse/hero.png";
import coveEdition4Bg from "@/images/projects/coveEdition4/hero.jpg";
import coveEdition4BgMob from "@/images/projects/coveEdition4/heroMob.jpg";
import coveEdition3Bg from "@/images/projects/coveEdition3/hero.png";
import coveEdition3BgMob from "@/images/projects/coveEdition3/heroMob.png";
import beachWalkGrandBg from "@/images/projects/beachWalkGrand/hero.jpg";
import beachWalkGrandBgMob from "@/images/projects/beachWalkGrand/heroMob.jpg";
import sunsetBayBg from "@/images/projects/sunsetBay1/hero.jpg";

import sunsetBayOverview from "@/images/projects/sunsetBay/overview3.png";
import beachWalkOverview from "@/images/projects/beachWalkGrand/overview.png";
import coveEdition3Overview from "@/images/projects/coveEdition3/overview.png";
import coveEdition4Overview from "@/images/projects/coveEdition4/overview.png";
import courtierHouseOverview from "@/images/projects/courtierHouse/overview.png";

import sunsetBay2AmenitiesImg from "@/images/projects/sunsetBay/amenities.png";
import courtierAmenitiesImg from "@/images/projects/courtierHouse/amenities.png";
import coveEdition4AmenitiesImg from "@/images/projects/coveEdition4/amenities.png";
import coveEdition3AmenitiesImg from "@/images/projects/coveEdition3/amenities.png";
import beachWalkGrandAmenitiesImg from "@/images/projects/beachWalkGrand/amenities.png";
import sunsetBayAmenitiesImg from "@/images/projects/sunsetBay1/amenities.png";

import sunsetBay2Slide1 from "@/images/projects/sunsetBay/slides/1.png";
import sunsetBay2Slide2 from "@/images/projects/sunsetBay/slides/2.png";
import sunsetBay2Slide3 from "@/images/projects/sunsetBay/slides/3.png";
import sunsetBay2Slide4 from "@/images/projects/sunsetBay/slides/4.png";
import sunsetBay2Slide5 from "@/images/projects/sunsetBay/slides/5.png";
import sunsetBay2Slide6 from "@/images/projects/sunsetBay/slides/6.png";
import sunsetBay2Slide7 from "@/images/projects/sunsetBay/slides/7.png";
import sunsetBay2Slide8 from "@/images/projects/sunsetBay/slides/8.png";

import courtierSlide1 from "@/images/projects/courtierHouse/slides/1.png";
import courtierSlide2 from "@/images/projects/courtierHouse/slides/2.png";
import courtierSlide3 from "@/images/projects/courtierHouse/slides/3.png";
import courtierSlide4 from "@/images/projects/courtierHouse/slides/4.png";
import courtierSlide5 from "@/images/projects/courtierHouse/slides/5.png";
import courtierSlide6 from "@/images/projects/courtierHouse/slides/6.png";
import courtierSlide7 from "@/images/projects/courtierHouse/slides/7.png";
import courtierSlide8 from "@/images/projects/courtierHouse/slides/8.png";

import coveEdition1 from "@/images/projects/coveEdition4/slides/1.png";
import coveEdition2 from "@/images/projects/coveEdition4/slides/2.png";
import coveEdition3 from "@/images/projects/coveEdition4/slides/3.png";
import coveEdition4 from "@/images/projects/coveEdition4/slides/4.png";
import coveEdition5 from "@/images/projects/coveEdition4/slides/5.png";
import coveEdition6 from "@/images/projects/coveEdition4/slides/6.png";
import coveEdition7 from "@/images/projects/coveEdition4/slides/7.png";
import coveEdition8 from "@/images/projects/coveEdition4/slides/8.png";

import beachWalkGrand1 from "@/images/projects/beachWalkGrand/slides/1.png";
import beachWalkGrand2 from "@/images/projects/beachWalkGrand/slides/2.png";
import beachWalkGrand3 from "@/images/projects/beachWalkGrand/slides/3.png";
import beachWalkGrand4 from "@/images/projects/beachWalkGrand/slides/4.png";
import beachWalkGrand5 from "@/images/projects/beachWalkGrand/slides/5.png";
import beachWalkGrand6 from "@/images/projects/beachWalkGrand/slides/6.png";
import beachWalkGrand7 from "@/images/projects/beachWalkGrand/slides/7.png";
import beachWalkGrand8 from "@/images/projects/beachWalkGrand/slides/8.png";

import { getTranslations } from "next-intl/server";
import SunsetBayHero from "@/app/projectComponents/Hero";
import ProjectDetails from "@/app/projectComponents/ProjectsDetails";
import ProjectOverview from "@/app/projectComponents/ProjectOverview";
import VisualTour from "@/app/projectComponents/VisualTour";
import Amineties from "@/app/projectComponents/Amineties";
import Location from "@/app/projectComponents/Location";
import Contact from "@/app/contactComponents/Contact";
import Footer from "@/app/components/Footer";
import { bot } from "@/app/_icons/icons";
import Bot from "@/app/components/Bot";

const Projects = async ({ params }) => {
  const { slug } = await params;
  const t = await getTranslations("Projects");

  const projects = [
    {
      slug: "Sunset-Bay-2",
      title: t("sunsetBay2.title"),
      mainHeroBg: sunsetBay2Bg,
      mainHeroBGMob: sunsetBay2Bg,
      ProjectDetails: {
        label: t("sunsetBay2.projectDetails.label"),
        detail1: {
          title: t("sunsetBay2.projectDetails.pricesStartingFrom"),
          desc: t("sunsetBay2.projectDetails.price"),
        },
        detail2: {
          title: t("sunsetBay2.projectDetails.downPayment"),
          desc: t("sunsetBay2.projectDetails.downPaymentLabel"),
        },
        detail3: {
          title: t("sunsetBay2.projectDetails.projectCompletion"),
          desc: t("sunsetBay2.projectDetails.completionDate"),
        },
        detail4: {
          title1: t("sunsetBay2.projectDetails.paymentPlan.plan1"),
          title2: t("sunsetBay2.projectDetails.paymentPlan.plan2"),
          title3: t("sunsetBay2.projectDetails.paymentPlan.plan3"),
          title4: t("sunsetBay2.projectDetails.paymentPlan.plan4"),
        },
      },
      ProjectOverview: {
        label: t("sunsetBay2.projectOverview.label"),
        label2: t("sunsetBay2.projectOverview.visualTour"),
        title: t("sunsetBay2.projectOverview.title"),
        para: t("sunsetBay2.projectOverview.description"),
        image: sunsetBayOverview,
      },
      VirtualTour: {
        label: t("sunsetBay2.virtualTour.label"),
        title1: t("sunsetBay2.virtualTour.title1"),
        title2: t("sunsetBay2.virtualTour.title2"),
        images: [
          sunsetBay2Slide1,
          sunsetBay2Slide2,
          sunsetBay2Slide3,
          sunsetBay2Slide4,
          sunsetBay2Slide5,
          sunsetBay2Slide6,
          sunsetBay2Slide7,
          sunsetBay2Slide8,
        ],
      },
      Amenities: {
        label: t("sunsetBay2.amenities.label"),
        title1: t("sunsetBay2.amenities.title1"),
        title2: t("sunsetBay2.amenities.title2"),
        Amenity1: t("sunsetBay2.amenities.amenity1"),
        Amenity2: t("sunsetBay2.amenities.amenity2"),
        Amenity3: t("sunsetBay2.amenities.amenity3"),
        Amenity4: t("sunsetBay2.amenities.amenity4"),
        Amenity5: t("sunsetBay2.amenities.amenity5"),
        Amenity6: t("sunsetBay2.amenities.amenity6"),
        Amenity7: t("sunsetBay2.amenities.amenity7"),
        Amenity8: t("sunsetBay2.amenities.amenity8"),
        mainImage: sunsetBay2AmenitiesImg,
        image1: bbq,
        image2: gym,
        image3: play,
        image4: cinema,
        image5: waterLounge,
        image6: privateTerrace,
        image7: meeting,
        image8: island,
      },
      Location: {
        label: t("sunsetBay2.location.label"),
        title: t("sunsetBay2.location.title"),
        href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.378584246107!2d55.79471057522845!3d25.691886477395858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60b18fbc8f3ef%3A0x601a2bfad1047b38!2sOne%20RAK%20Central%20by%20Pantheon!5e0!3m2!1sen!2sin!4v1739515086964!5m2!1sen!2sin",

        Distances: t.raw("sunsetBay2.location.distances"),
      },
    },
    {
      slug: "Cotier-House",
      title: t("cotierHouse.title"),
      mainHeroBg: courtierHouseBg,
      mainHeroBGMob: courtierHouseBg,
      ProjectDetails: {
        label: t("cotierHouse.projectDetails.label"),
        detail1: {
          title: t("cotierHouse.projectDetails.detail1.title"),
          desc: t("cotierHouse.projectDetails.detail1.desc"),
        },
        detail2: {
          title: t("cotierHouse.projectDetails.detail2.title"),
          desc: t("cotierHouse.projectDetails.detail2.desc"),
        },
        detail3: {
          title: t("cotierHouse.projectDetails.detail3.title"),
          desc: t("cotierHouse.projectDetails.detail3.desc"),
        },
        detail4: {
          title1: t("cotierHouse.projectDetails.detail4.title1"),
          title2: t("cotierHouse.projectDetails.detail4.title2"),
          title3: t("cotierHouse.projectDetails.detail4.title3"),
          title4: t("cotierHouse.projectDetails.detail4.title4"),
        },
      },
      ProjectOverview: {
        label: t("cotierHouse.projectOverview.label"),
        label2: t("cotierHouse.projectOverview.label2"),
        title: t("cotierHouse.projectOverview.title"),
        para: t("cotierHouse.projectOverview.para"),
        image: courtierHouseOverview,
      },
      VirtualTour: {
        label: t("cotierHouse.virtualTour.label"),
        title1: t("cotierHouse.virtualTour.title1"),
        title2: t("cotierHouse.virtualTour.title2"),
        images: [
          courtierSlide1,
          courtierSlide2,
          courtierSlide3,
          courtierSlide4,
          courtierSlide5,
          courtierSlide6,
          courtierSlide7,
          courtierSlide8,
        ],
      },
      Amenities: {
        label: t("cotierHouse.amenities.label"),
        title1: t("cotierHouse.amenities.title1"),
        title2: t("cotierHouse.amenities.title2"),
        Amenity1: t("cotierHouse.amenities.amenity1"),
        Amenity2: t("cotierHouse.amenities.amenity2"),
        Amenity3: t("cotierHouse.amenities.amenity3"),
        Amenity4: t("cotierHouse.amenities.amenity4"),
        Amenity5: t("cotierHouse.amenities.amenity5"),
        Amenity6: t("cotierHouse.amenities.amenity6"),
        Amenity7: t("cotierHouse.amenities.amenity7"),
        Amenity8: t("cotierHouse.amenities.amenity8"),
        mainImage: courtierAmenitiesImg,
        image1: bbq,
        image2: gym,
        image3: play,
        image4: club,
        image5: pool,
        image6: lotus,
        image7: meeting,
        image8: garden,
      },
      Location: {
        label: t("cotierHouse.location.label"),
        title: t("cotierHouse.location.title"),
        href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.378584246107!2d55.79471057522845!3d25.691886477395858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60b18fbc8f3ef%3A0x601a2bfad1047b38!2sOne%20RAK%20Central%20by%20Pantheon!5e0!3m2!1sen!2sin!4v1739515086964!5m2!1sen!2sin",

        Distances: t.raw("cotierHouse.location.distances"),
      },
    },
    {
      slug: "Cove-Edition-4",
      title: t("coveEdition4.title"),
      mainHeroBg: coveEdition4Bg,
      mainHeroBGMob: coveEdition4BgMob,
      ProjectDetails: {
        label: t("coveEdition4.projectDetails.label"),
        detail1: {
          title: t("coveEdition4.projectDetails.detail1.title"),
          desc: t("coveEdition4.projectDetails.detail1.desc"),
        },
        detail2: {
          title: t("coveEdition4.projectDetails.detail2.title"),
          desc: t("coveEdition4.projectDetails.detail2.desc"),
        },
        detail3: {
          title: t("coveEdition4.projectDetails.detail3.title"),
          desc: t("coveEdition4.projectDetails.detail3.desc"),
        },
        detail4: {
          title1: t("coveEdition4.projectDetails.detail4.title1"),
          title2: t("coveEdition4.projectDetails.detail4.title2"),
          title3: t("coveEdition4.projectDetails.detail4.title3"),
          title4: t("coveEdition4.projectDetails.detail4.title4"),
        },
      },
      ProjectOverview: {
        label: t("coveEdition4.projectOverview.label"),
        label2: t("coveEdition4.projectOverview.label2"),
        title: t("coveEdition4.projectOverview.title"),
        para: t("coveEdition4.projectOverview.para"),
        image: coveEdition4Overview,
      },
      VirtualTour: {
        label: t("coveEdition4.virtualTour.label"),
        title1: t("coveEdition4.virtualTour.title1"),
        title2: t("coveEdition4.virtualTour.title2"),
        images: [
          coveEdition1,
          coveEdition2,
          coveEdition3,
          coveEdition4,
          coveEdition5,
          coveEdition6,
          coveEdition7,
          coveEdition8,
        ],
      },
      Amenities: {
        label: t("coveEdition4.amenities.label"),
        title1: t("coveEdition4.amenities.title1"),
        title2: t("coveEdition4.amenities.title2"),
        Amenity1: t("coveEdition4.amenities.amenity1"),
        Amenity2: t("coveEdition4.amenities.amenity2"),
        Amenity3: t("coveEdition4.amenities.amenity3"),
        Amenity4: t("coveEdition4.amenities.amenity4"),
        Amenity5: t("coveEdition4.amenities.amenity5"),
        Amenity6: t("coveEdition4.amenities.amenity6"),
        Amenity7: t("coveEdition4.amenities.amenity7"),
        Amenity8: t("coveEdition4.amenities.amenity8"),
        mainImage: coveEdition4AmenitiesImg,
        image1: bbq,
        image2: club,
        image3: play,
        image4: furnished,
        image5: pool,
        image6: lotus,
        image7: meeting,
        image8: kidsPool,
      },
      Location: {
        label: t("coveEdition4.location.label"),
        title: t("coveEdition4.location.title"),
        href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.378584246107!2d55.79471057522845!3d25.691886477395858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60b18fbc8f3ef%3A0x601a2bfad1047b38!2sOne%20RAK%20Central%20by%20Pantheon!5e0!3m2!1sen!2sin!4v1739515086964!5m2!1sen!2sin",

        Distances: t.raw("coveEdition4.location.distances"),
      },
    },
    {
      slug: "Cove-Edition-3",
      title: t("coveEdition3.title"),
      mainHeroBg: coveEdition3Bg,
      mainHeroBGMob: coveEdition3BgMob,
      ProjectDetails: {
        label: t("coveEdition3.projectDetails.label"),
        detail1: {
          title: t("coveEdition3.projectDetails.detail1.title"),
          desc: t("coveEdition3.projectDetails.detail1.desc"),
        },
        detail2: {
          title: t("coveEdition3.projectDetails.detail2.title"),
          desc: t("coveEdition3.projectDetails.detail2.desc"),
        },
        detail3: {
          title: t("coveEdition3.projectDetails.detail3.title"),
          desc: t("coveEdition3.projectDetails.detail3.desc"),
        },
        detail4: {
          title1: t("coveEdition3.projectDetails.detail4.title1"),
          title2: t("coveEdition3.projectDetails.detail4.title2"),
          title3: t("coveEdition3.projectDetails.detail4.title3"),
          title4: t("coveEdition3.projectDetails.detail4.title4"),
        },
      },
      ProjectOverview: {
        label: t("coveEdition3.projectOverview.label"),
        label2: t("coveEdition3.projectOverview.label2"),
        title: t("coveEdition3.projectOverview.title"),
        para: t("coveEdition3.projectOverview.para"),
        image: coveEdition3Overview,
      },
      VirtualTour: {
        label: t("coveEdition3.virtualTour.label"),
        title1: t("coveEdition3.virtualTour.title1"),
        title2: t("coveEdition3.virtualTour.title2"),
        images: [
          coveEdition1,
          coveEdition2,
          coveEdition3,
          coveEdition4,
          coveEdition5,
          coveEdition6,
          coveEdition7,
          coveEdition8,
        ],
      },

      Amenities: {
        label: t("coveEdition3.amenities.label"),
        title1: t("coveEdition3.amenities.title1"),
        title2: t("coveEdition3.amenities.title2"),
        Amenity1: t("coveEdition3.amenities.amenity1"),
        Amenity2: t("coveEdition3.amenities.amenity2"),
        Amenity3: t("coveEdition3.amenities.amenity3"),
        Amenity4: t("coveEdition3.amenities.amenity4"),
        Amenity5: t("coveEdition3.amenities.amenity5"),
        Amenity6: t("coveEdition3.amenities.amenity6"),
        Amenity7: t("coveEdition3.amenities.amenity7"),
        Amenity8: t("coveEdition3.amenities.amenity8"),

        mainImage: coveEdition3AmenitiesImg,
        image1: bbq,
        image2: club,
        image3: play,
        image4: furnished,
        image5: pool,
        image6: lotus,
        image7: coveredParking,
        image8: gym,
      },
      Location: {
        label: t("coveEdition3.location.label"),
        title: t("coveEdition3.location.title"),
        href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.378584246107!2d55.79471057522845!3d25.691886477395858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60b18fbc8f3ef%3A0x601a2bfad1047b38!2sOne%20RAK%20Central%20by%20Pantheon!5e0!3m2!1sen!2sin!4v1739515086964!5m2!1sen!2sin",
        Distances: t.raw("coveEdition3.location.distances"),
      },
    },
    {
      slug: "Beach-Walk-Grand",
      title: t("beachWalkGrand.title"),
      mainHeroBg: beachWalkGrandBg,
      mainHeroBGMob: beachWalkGrandBgMob,
      ProjectDetails: {
        label: t("beachWalkGrand.projectDetails.label"),
        detail1: {
          title: t("beachWalkGrand.projectDetails.detail1.title"),
          desc: t("beachWalkGrand.projectDetails.detail1.desc"),
        },
        detail2: {
          title: t("beachWalkGrand.projectDetails.detail2.title"),
          desc: t("beachWalkGrand.projectDetails.detail2.desc"),
        },
        detail3: {
          title: t("beachWalkGrand.projectDetails.detail3.title"),
          desc: t("beachWalkGrand.projectDetails.detail3.desc"),
        },
        detail4: {
          title1: t("beachWalkGrand.projectDetails.detail4.title1"),
          title2: t("beachWalkGrand.projectDetails.detail4.title2"),
          title3: t("beachWalkGrand.projectDetails.detail4.title3"),
          title4: t("beachWalkGrand.projectDetails.detail4.title4"),
        },
      },
      ProjectOverview: {
        label: t("beachWalkGrand.projectOverview.label"),
        label2: t("beachWalkGrand.projectOverview.label2"),
        title: t("beachWalkGrand.projectOverview.title"),
        para: t("beachWalkGrand.projectOverview.para"),
        image: beachWalkOverview,
      },
      VirtualTour: {
        label: t("beachWalkGrand.virtualTour.label"),
        title1: t("beachWalkGrand.virtualTour.title1"),
        title2: t("beachWalkGrand.virtualTour.title2"),
        images: [
          beachWalkGrand1,
          beachWalkGrand2,
          beachWalkGrand3,
          beachWalkGrand4,
          beachWalkGrand5,
          beachWalkGrand6,
          beachWalkGrand7,
          beachWalkGrand8,
        ],
      },

      Amenities: {
        label: t("beachWalkGrand.amenities.label"),
        title1: t("beachWalkGrand.amenities.title1"),
        title2: t("beachWalkGrand.amenities.title2"),
        Amenity1: t("beachWalkGrand.amenities.amenity1"),
        Amenity2: t("beachWalkGrand.amenities.amenity2"),
        Amenity3: t("beachWalkGrand.amenities.amenity3"),
        Amenity4: t("beachWalkGrand.amenities.amenity4"),
        Amenity5: t("beachWalkGrand.amenities.amenity5"),
        Amenity6: t("beachWalkGrand.amenities.amenity6"),
        Amenity7: t("beachWalkGrand.amenities.amenity7"),
        Amenity8: t("beachWalkGrand.amenities.amenity8"),
        mainImage: beachWalkGrandAmenitiesImg,
        image1: zenGarden,
        image2: yoga,
        image3: play,
        image4: furnished,
        image5: pool,
        image6: bbq,
        image7: coveredParking,
        image8: garden,
      },
      Location: {
        label: t("beachWalkGrand.location.label"),
        title: t("beachWalkGrand.location.title"),
        href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.378584246107!2d55.79471057522845!3d25.691886477395858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60b18fbc8f3ef%3A0x601a2bfad1047b38!2sOne%20RAK%20Central%20by%20Pantheon!5e0!3m2!1sen!2sin!4v1739515086964!5m2!1sen!2sin",

        Distances: t.raw("beachWalkGrand.location.distances"),
      },
    },
    {
      slug: "Sunset-Bay",
      title: t("sunsetBay.title"),
      mainHeroBg: sunsetBayBg,
      mainHeroBGMob: sunsetBayBg,
      ProjectDetails: {
        label: t("sunsetBay.projectDetails.label"),
        detail1: {
          title: t("sunsetBay.projectDetails.detail1.title"),
          desc: t("sunsetBay.projectDetails.detail1.desc"),
        },
        detail2: {
          title: t("sunsetBay.projectDetails.detail2.title"),
          desc: t("sunsetBay.projectDetails.detail2.desc"),
        },
        detail3: {
          title: t("sunsetBay.projectDetails.detail3.title"),
          desc: t("sunsetBay.projectDetails.detail3.desc"),
        },
        detail4: {
          title1: t("sunsetBay.projectDetails.detail4.title1"),
          title2: t("sunsetBay.projectDetails.detail4.title2"),
          title3: t("sunsetBay.projectDetails.detail4.title3"),
          title4: t("sunsetBay.projectDetails.detail4.title4"),
        },
      },
      ProjectOverview: {
        label: t("sunsetBay.projectOverview.label"),
        label2: t("sunsetBay.projectOverview.label2"),
        title: t("sunsetBay.projectOverview.title"),
        para: t("sunsetBay.projectOverview.para"),
        image: sunsetBayOverview,
      },
      VirtualTour: {
        label: t("sunsetBay.virtualTour.label"),
        title1: t("sunsetBay.virtualTour.title1"),
        title2: t("sunsetBay.virtualTour.title2"),
        images: [
          sunsetBay2Slide1,
          sunsetBay2Slide2,
          sunsetBay2Slide3,
          sunsetBay2Slide4,
          sunsetBay2Slide5,
          sunsetBay2Slide6,
          sunsetBay2Slide7,
          sunsetBay2Slide8,
        ],
      },

      Amenities: {
        label: t("sunsetBay.amenities.label"),
        title1: t("sunsetBay.amenities.title1"),
        title2: t("sunsetBay.amenities.title2"),
        Amenity1: t("sunsetBay.amenities.amenity1"),
        Amenity2: t("sunsetBay.amenities.amenity2"),
        Amenity3: t("sunsetBay.amenities.amenity3"),
        Amenity4: t("sunsetBay.amenities.amenity4"),
        Amenity5: t("sunsetBay.amenities.amenity5"),
        Amenity6: t("sunsetBay.amenities.amenity6"),
        Amenity7: t("sunsetBay.amenities.amenity7"),
        Amenity8: t("sunsetBay.amenities.amenity8"),
        mainImage: sunsetBayAmenitiesImg,
        image1: bbq,
        image2: gym,
        image3: play,
        image4: kidsPool,
        image5: pool,
        image6: lotus,
        image7: coveredParking,
        image8: garden,
      },
      Location: {
        label: t("sunsetBay.location.label"),
        title: t("sunsetBay.location.title"),
        href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.378584246107!2d55.79471057522845!3d25.691886477395858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60b18fbc8f3ef%3A0x601a2bfad1047b38!2sOne%20RAK%20Central%20by%20Pantheon!5e0!3m2!1sen!2sin!4v1739515086964!5m2!1sen!2sin",

        Distances: t.raw("sunsetBay.location.distances"),
      },
    },
  ];

  const project = projects.find((b) => b.slug === slug);

  if (!project) {
    return <p className="flex justify-center ">Project not found</p>;
  }

  return (
    <div>
      <SunsetBayHero
        data={project.title}
        bgBanner={project.mainHeroBg}
        bgBannerMob={project.mainHeroBGMob}
      />
      <ProjectDetails data={project.ProjectDetails} />
      <ProjectOverview data={project.ProjectOverview} />
      <VisualTour data={project.VirtualTour} />
      <Amineties data={project.Amenities} />
      <Location data={project.Location} />
      <Contact />
      <Footer />
      <Bot />
    </div>
  );
};

export default Projects;

export async function generateStaticParams() {
  const projects = [
    { slug: "Sunset-Bay-2" },
    { slug: "Cotier-House" },
    { slug: "Cove-Edition-4" },
    { slug: "Beach-Walk-Grand" },
    { slug: "Cove-Edition-3" },
    { slug: "Sunset-Bay" },
  ];

  return projects.map((project) => ({ slug: project.slug }));
}
