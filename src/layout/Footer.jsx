/* eslint-disable react/prop-types */
function Footer({ datas }) {
  let socials = datas.basic_info.social.map((soc, index) => {
    return (
      <li key={index} className={soc.class}>
        <a href={soc.url} target='blank'>
          {soc.name}
        </a>
      </li>
    );
  });
  return <ul className='footer'>{socials}</ul>;
}
export default Footer;
