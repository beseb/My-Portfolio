/* eslint-disable react/prop-types */

function About({datas}){
    return(
        <section className="about-section">
            <div className="about-section_picture">
                <div className="polaroid-pic"><img src="../assets/images/my-photo.png" alt="Profil de Sébastien Escudero"/></div>
            </div><div className="about-section_content">
                
                <h3>{datas.basic_info.description_header}</h3>
                <h4>{datas.basic_info.description}</h4>
            </div>
        </section>
    )
}

export default About