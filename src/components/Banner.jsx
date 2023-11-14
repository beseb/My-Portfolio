/* eslint-disable react/prop-types */
function Banner({datas}){

    return(
        <section className="banner-section">
            <h1>SEA Web-Studio</h1>
            <h2>Vos projets web en un éclair ⚡⚡</h2>
            <h2>{datas.basic_info.titles}</h2>
        </section>
    )
}

export default Banner