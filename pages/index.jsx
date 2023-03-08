import Container from "../components/container";
import { skills, h_Skills, s_Skills } from "../js/perfil";
const Index = () => {
    return (
        <Container>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 shadow-panel">
                        <div className="row">
                            <div className="col-4 border left-side shadow-lg p-3 rounded">
                                <div className="overflow-hidden animate__animated animate__bounce">
                                    <img src="profile.jpg" width={300} height={300}></img>
                                </div>
                                <div className="code">
                                    {/* Skill Progress  */}
                                    {skills.map(({ skill, percentage }, i) => (
                                      <div className="row p-0" key={i}>
                                        <div className="col md-2 p-0">
                                          <h5>test</h5>
                                        </div>
                                        <div className="col md-10 p-0">
                                          <div className="progress">
                                            <div
                                              className="progress-bar bar-color"
                                              role="progressbar"
                                              style={{width:`${percentage}%`}}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-8 border right-side shadow-lg pb-3 pt-5 px-0 rounded">
                                <div className="header-presentation">
                                    <h1>Título</h1>
                                    <h5>Subtítulo</h5>
                                    <p>Texto</p>
                                </div>
                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-8 mt-5 border">
                                        <div className="text-start mb-5">
                                            <h1>Título</h1>
                                            <p>Texto</p>
                                        </div>
                                        <div className="text-start mb-5">
                                            <h1>Título</h1>
                                            <p>Texto</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 border">
                                                <div className="mb-5">
                                                    <h1>Izquierda1</h1>
                                                    <p>Texto</p>
                                                </div>
                                                <div className="mb-5">
                                                    <h1>Izquierda2</h1>
                                                    <p>Texto</p>
                                                </div>
                                            </div>
                                            <div className="col-6 border">
                                            <div className="mb-5">
                                                    <h1>Derecha1</h1>
                                                    <p>Texto</p>
                                                </div>
                                                <div className="mb-5">
                                                    <h1>Derecha2</h1>
                                                    <p>Texto</p>
                                                </div>
                                                <div className="mb-5">
                                                    <h1>Derecha3</h1>
                                                    <p>Texto</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
       );
};
export default Index;