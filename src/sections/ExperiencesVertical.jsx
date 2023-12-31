/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/main.scss";
import { useContext } from "react";
import { LangContext } from "../utils/LangContext";

function ExperiencesVertical() {
  const { datas } = useContext(LangContext);

  return (
    <section
      className="experiences-section"
      id="experiences"
      aria-labelledby="experiences-title"
    >
      <h2 className="section-title" id="experiences-title">
        {datas.basic_info.section_name.experience}
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            borderRadius: "15px",
            zIndex:"0"
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date={datas.experience[0].years}
          iconStyle={{ background: "rgba(33,110,179,1)", color: "#fff" }}
          icon={<WorkIcon />}
          aria-label={`${datas.experience[0].company} ${datas.experience[0].title}`}
        >
          <h3 className="vertical-timeline-element-title">
            {datas.experience[0].company}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {datas.experience[0].title}
          </h4>
          <p>
            {datas.experience[0].description}
            <br /> Main Tech :{" "}
            <strong aria-label="Main technologies used">
              {datas.experience[0].mainTech}
            </strong>
          </p>
          <p>{datas.experience[0].technologies}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={datas.experience[1].years}
          contentStyle={{ borderRadius: "15px" }}
          iconStyle={{ background: "rgba(33,130,155,1)", color: "#fff" }}
          icon={<WorkIcon />}
          aria-label={`${datas.experience[1].company} ${datas.experience[1].title}`}
        >
          <h3 className="vertical-timeline-element-title">
            {datas.experience[1].company}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {datas.experience[1].title}
          </h4>
          <p>
            {datas.experience[1].description}
            <br /> Main Tech :{" "}
            <strong aria-label="Main technologies used">
              {datas.experience[1].mainTech}
            </strong>
          </p>
          <p>{datas.experience[1].technologies}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={datas.experience[2].years}
          contentStyle={{ borderRadius: "15px" }}
          iconStyle={{
            backgroundColor: "rgba(33,155,136,1)",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
          aria-label={`${datas.experience[2].company} ${datas.experience[2].title}`}
        >
          <h3 className="vertical-timeline-element-title">
            {datas.experience[2].company}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {datas.experience[2].title}
          </h4>
          <p>{datas.experience[2].description}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      {/* </ScrollAnimation> */}
    </section>
  );
}

export default ExperiencesVertical;
