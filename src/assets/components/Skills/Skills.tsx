const Skills = () => {
    return (
        <section id="skills">
                    <div className="skills">
                        <h3>Skills</h3>
                        <ul className="skills__list">
                            <li>HTML5</li>
                            <li>CSS3, Sass</li>
                            <li>JS</li>
                            <li>TypeScript</li>
                            <li>Webpack, Gulp, Vite</li>
                            <li>React</li>
                            <li>Git/GitHub</li>
                            <li>Code Review</li>
                        </ul>
                    </div>
                    <div className="languages">
                        <h3>Languages</h3>
                        <div className="languages__item">
                            <span>English</span>
                            <span>A2</span>
                        </div>
                    </div>
                    <div className="projects">
                        <h3>My projects</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Demo</th>
                                    <th>Date</th>
                                    <th className="table__descr">What I Learned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Task on Vue</td>
                                    <td><a href="https://linawashere.github.io/test-task-on-vue/">Link</a></td>
                                    <td>Jul 2025</td>
                                    <td>
                                        First experience with Vue.js 3 and Composition API. Implemented a responsive
                                        cross-browser landing page with the BEM semantic methodology. Tools: sliders,
                                        modals
                                        (Fancybox) and form validation (Yup). Created reusable components, managed
                                        global/local
                                        CSS variables, implemented smooth animations. Improved skills in following
                                        technical
                                        specifications
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fashion sneaker store</td>
                                    <td><a href="https://deploy-preview-81--di-or-die-market.netlify.app/">Link</a></td>
                                    <td>Apr 2025 - Jun 2025</td>
                                    <td>Practicing skills in creating a modern web application using TypeScript,
                                        learning how to
                                        work with API (CommerceTools) and technologies for building SPA. Gaining
                                        experience in
                                        teamwork, including distribution of tasks, using Agile methodologies</td>
                                </tr>
                                <tr>
                                    <td><a href="https://github.com/linawashere/vanilla-project/tree/dev">Vanilla
                                            project</a></td>
                                    <td>—</td>
                                    <td>Feb 2025 — May 2025 </td>
                                    <td>Creating UI components using pug, gulp, sass, js technologies</td>
                                </tr>
                                <tr>
                                    <td>My first project</td>
                                    <td><a href="https://linawashere.github.io/my-very-first-project/">Link</a></td>
                                    <td>May 2016</td>
                                    <td>Introduction to markup language</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
    )
}

export default Skills;