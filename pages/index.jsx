import Container from "../components/container";
import { skills, h_Skills, s_Skills } from "../js/perfil";
const Index = () => {
  return (
    <Container>
      {/************CV************/}
      <div className="row cv">
        {/**QR*/}
        <div className="row align-items-star up-1 pl-0">
          <div className="col align-self-start md-6 pl-0">
            <img src="QR.png" alt="QR" className="img-fluid qr" />
          </div>
        </div>
        {/**QR*/}
        {/**mitad izq.*/}
        <div className="col md-6 middle">
          <div className="row mb-4 nombre">
            <h1 className="mb-0">
              <b>KEVIN HERNÁNDEZ</b>
            </h1>
            <h5 className="h5-font m-0">
              <i>Ingeniería Informática</i>
            </h5>
          </div>
          <div className="row form-acad">
            <h3>
              <b>Formación Académica</b>
            </h3>
            <h6>
              <b>UPIICSA - INSTITUTO POLITÉCNICO NACIONAL</b>
            </h6>
            <p className="p-font">Ingeniería en Informática 2018 - 2022</p>
            <h6>
              <b>CECYT 12 - INSTITUTO POLITÉCNICO NACIONAL</b>
            </h6>
            <p className="p-font">Técnico en Informática 2015 - 2018</p>
          </div>
          <div className="row sbr-mi">
            <h3>
              <b>Sobre mi</b>
            </h3>
            <h6>
              Gracias a mi formación especializada y gran motivación para
              perfeccionar mis habilidades espero crecer profesionalmente en una
              compañía que coincida con mis valores y expectativas. Soy una
              persona que aprecia la puntualidad, organización y planeación de
              tiempos para lograr mis encomiendas.
            </h6>
          </div>
          <div className="row idioma">
            <h3>
              <b>Idioma</b>
            </h3>
            <a href="https://1drv.ms/b/s!Aqv20QlyGVGec8yRDL8NgUlrXe0?e=ue6XRd">
              Inglés B2
            </a>
          </div>
          <div className="row contact">
            <h3>
              <b>Contacto</b>
            </h3>

            <div className="col p-0">
              <div className="col md-3">
                <img src="telefono32x32.png" alt="" />
                <p className="m-0">56 1566 8363</p>
              </div>
              <div className="col md-3">
                <img src="mail32x32.png" alt="" />
                <p className="m-0">khernandezd1400@alumno.ipn.mx</p>
              </div>
              <div className="col md-3">
                <img src="address32x32.png" alt="" />
                <p className="m-0">México, Estado de México</p>
              </div>
              <div className="col md-3">
                <img src="in32x32.png" alt="" />
                <p className="m-0">@KevinHernández</p>
              </div>
            </div>
          </div>
        </div>
        {/**mitad izq.*/}
        {/**mitad der.*/}
        <div className="col md-6">
          <div className="row up-burbuja">
            <img src="burbuja.png" alt="burbuja" className="burbuja" />
          </div>
          <div className="row code">
            <h3>
              <b>Code Skill</b>
            </h3>
            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="row p-0" key={i}>
                <div className="col md-2 p-0">
                  <h5>{skill}</h5>
                </div>
                <div className="col md-10 p-0">
                  <div className="progress progress-width">
                    <div
                      className="progress-bar bar-color"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col md-3 h-skill">
              <h3>
                <b>Hard Skills</b>
              </h3>
              {h_Skills.map(({ H_Name }, i) => (
                <div key={i}>
                  <h5>{H_Name}</h5>
                </div>
              ))}
            </div>
            <div className="col md-3 s-skill">
              <h3>
                <b>Soft Skills</b>
              </h3>
              {s_Skills.map(({ S_Name }, i) => (
                <div key={i}>
                  <h5>{S_Name}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/**mitad der.*/}
      </div>
      {/************CV************/}

      {/************TEMPLATE************/}
      <div className="row justify-content-between template">
        <div className="row align-items-start up-2 p-0">
          <div className="col align-self-start md-6">
            <img src="bg_1.png" alt="bg_1" className="img-fluid pleca-1" />
          </div>
          <div className="col md-6 pl-0 dc">
            <img src="bg_2.png" alt="bg_2" className="img-fluid pleca-2" />
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col align-self-center md-6">
            <img src="bg_3.png" alt="bg_3" className="img-fluid" />
          </div>
          <div className="col md-6">
            <img src="bg_4.png" alt="bg_4" className="img-fluid" />
          </div>
        </div>

        <div className="row align-items-end">
          <div className="col align-self-end">
            <img src="bg_5.png" alt="bg_5" className="img-fluid " />
          </div>
        </div>
      </div>
      {/************TEMPLATE************/}
    </Container>
  );
};

export default Index;
