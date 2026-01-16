const Experience = () => {
    return (
        <>
            <section id="experience">
                <h3>Experience</h3>
                <div>
                    <div className="experience__item-title">
                        <span>Frontend Developer Trainee</span>
                        <span>Feb 2025 - May 2025</span>
                    </div>
                    <div className="experience__item-descr">
                        <p>
                            Development of UI components for promo sites and portals using technologies: Pug, Gulp,
                            Sass, JS, Git, npm
                        </p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="experience__item-title">
                        <span>Student, JS / Front-end RU Course, RS School</span>
                        <span>Sep 2024 - Jun 2025</span>
                    </div>
                    <div className="experience__item-descr">
                        <p>
                            Git, HTML, CSS, Javascript Basics, Advanced Javascript, Security, Testing, Agile,
                            Networking, Web development tools, collective development of the final project
                        </p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="experience__item-title">
                        <span>Student, course "Web programming", TSUAB</span>
                        <span>Sep 2023 - Jun 2024</span>
                    </div>
                    <div className="experience__item-descr">
                        <p>
                            The training included the following sections: structure and principles of the WWW. Web
                            editors, HTML, CSS, basics of algorithms and programming, programming in JavaScript, PHP
                            and databases, dynamic web technologies, internship and final certification
                        </p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="experience__item-title">
                        <span>Frontend developer</span>
                        <span>May 2023- Feb 2024</span>
                    </div>
                    <div className="experience__item-descr">
                        <p>
                            Development of websites for teachers in an educational organization. Development
                            according to your own layout, project launch, consultation on technical aspects, website
                            support
                        </p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="experience__item-title">
                        <span> TSUAB Student</span>
                        <span>2019 - 2025</span>
                    </div>
                    <div id="codeexample">
                        <h3>Code example: Restored toString() method</h3>
                        <pre className="codeexample__item">
                            {`Number.prototype.toString = function() {
    return this + '';
}

Boolean.prototype.toString = function() {
    return this.valueOf() ? 'true' : 'false';
}

Array.prototype.toString = function() {
    let arr = [];
    for (let i = 0; i &lt; this.length; i++) {
        arr.push(this[i].toString());
    }
    return "[" + arr.join(',') + "]";
} `}
                        </pre>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience;