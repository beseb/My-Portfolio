/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function ExperiencesVertical({ datas }) {
  return (
    <section className='experiences-section'>
      <h2 className='section-title'>
        {datas.basic_info.section_name.experiences}
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={datas.experience[0].years} /// NE S'AFFICHE PAS ///
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            {datas.experience[0].company}
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            {datas.experience[0].title}
          </h4>
          <p>
            {datas.experience[0].description}
            <br /> Main Tech : <strong>{datas.experience[0].mainTech}</strong>
          </p>
          <p>{datas.experience[0].technologies}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date={datas.experience[1].years}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            {datas.experience[1].company}
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            {datas.experience[1].title}
          </h4>
          <p>
            {datas.experience[1].description}
            <br /> Main Tech : <strong>{datas.experience[1].mainTech}</strong>
          </p>
          <p>{datas.experience[1].technologies}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date={datas.experience[2].years}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            {datas.experience[2].company}
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            {datas.experience[2].title}
          </h4>
          <p>{datas.experience[2].description}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
export default ExperiencesVertical;
