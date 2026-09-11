const About = () => {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-2xl font-bold underline underline-offset-4">
                    About
                </h1>
                <p className="text-lg">
                    My parents bought me my first computer at the age of 7 and ever since then I've been in love with anything to do with them. 
                    <br/>
                    <br/>
                    I'm currently building my own server at home as well as a fully custom loop water-cooled PC.
                </p>
            </section>

            <section className="space-y-4">
                <h1 className="text-2xl font-bold underline underline-offset-4">
                    Current Project: Learning Playwright
                </h1>
                <p className="text-lg">
                    Improving my QA automation skills by learning Playwright. This involves:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Studying core concepts for end-to-end and cross-browser testing</li>
                    <li>Building automated test suites to reinforce concepts</li>
                    <li>Currently in the early stages of learning</li>
                </ul>
            </section>
        </div>
    );
 };
 
 export default About;