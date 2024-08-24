import React from "react";
import "./projects.css";
import friendle from "../../assets/friendle.png";
import maw from "../../assets/MAW2.png";
import split from "../../assets/SplitIt1.png";
import cpu from "../../assets/CPU2.png";
import canvas from "../../assets/canvas.png";
import nfa from "../../assets/nfa.png";

function Projects() {
	return (
		<section id="projects">
			<h1>Projects</h1>
			<h5>Check Out What I've Worked On</h5>
			<div className="container portfolio__container">
				<div className="items">
					<article className="portfolio__item">
						<div className="portfolio__item-image">
							<img src={nfa} alt="" />
						</div>
						<h3>NFA2REG</h3>
						<a
							href="https://dfa2reg-frontend.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							Visit
						</a>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__item-image">
							<img src={canvas} alt="" />
						</div>
						<h3>Canvas CLI</h3>
						<a
							href="https://github.com/shadagali03/Canvas_CLI"
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							Github
						</a>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__item-image">
							<img src={maw} alt="" />
						</div>
						<h3>Make-A-Wish Dashboard</h3>
						<a
							href="https://github.com/leemabhena/code-to-give"
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							Github
						</a>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__item-image">
							<img src={split} alt="" />
						</div>
						<h3>SplitIt</h3>
						<a
							href="http://split-it-ruby.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							Visit
						</a>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__item-image">
							<img src={friendle} alt="" />
						</div>
						<h3>Friendle</h3>
						<a
							href="https://github.com/shadagali03/Friendle2"
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							Github
						</a>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__item-image">
							<img src={cpu} alt="" />
						</div>
						<h3>CPU and Assembler Design</h3>
						<a
							href="https://github.com/shadagali03/CPU-and-Assembler-Design/tree/main"
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							Github
						</a>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Projects;
