import img_logo from '../images/logo.png'
import About from './About'
import ImageShow from './ImageShow'
import {Link} from "react-router-dom"
import BasicSlider from './BasicSlide'
import SimpleSlider from './SimpleSlider'

function Main() {
    return(
		<div>
			<body className="is-preload landing">
				<div id="page-wrapper">
					{/* 첫번째 배너 */}
					<section id="banner">
							<div className="content">
								<header>
									<h2>Art life with Artasy</h2>
									<p>We Provide Art life only You.<br />
									Let's Start with Artasy.</p>
								</header>
								<span class="image"><img src={img_logo} alt="img_logo" /></span>
							</div>
							<a href="#two" class="goto-next scrolly">Next</a>
					</section>

					{/* 두번 쨰 섹션 */}
					<section id="one" className="wrapper style2 special fade">
						<div class="container">
							<header>
								<h2>미술 큐레이팅 ARTASY와 시작해보세요</h2>
								<p>딥러닝 기반 미술 큐레이팅 시스템을 통해 사용자의 취향을 분석합니다.</p>
							</header>
							<form method="post" action="#" class="cta">
								<div claclassNamess="row gtr-uniform gtr-50">
									<div className="col-4 col-12-xsmall"><Link to='/register'><input type="button" value="Get Started" class="fit primary" /></Link></div>
								</div>
							</form>
						</div>
						<a href="#two" className="goto-next scrolly">Next</a>
					</section>

					{/* 이미지 갤러리 */}
						<section id="two">
							<span className="image fit main"><img src="images/pic03.jpg" alt="" /></span>
								<div className="content">
									<SimpleSlider></SimpleSlider>
								</div>
							<a href="#three" className="goto-next scrolly">Next</a>
						</section>
						<hr />

					{/* 세번 째 세션
					<section id="two" className="spotlight style1 bottom">
							<span className="image fit main"><img src="images/pic02.jpg" alt="" /></span>
							<div className="content">
								<div className="container">
									<div className="row">
										<div className="col-4 col-12-medium">
											<header>
												<h2>언제 어디서나 쉽게</h2>
												<p>Easily anytime, anywhere</p>
											</header>
										</div>
										<div className="col-4 col-12-medium">
											<p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
											Blandit orci porttitor semper. Arcu phasellus tortor enim mi
											nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
											augue varius tempus lobortis porttitor accumsan consequat
											adipiscing lorem dolor.</p>
										</div>
										<div className="col-4 col-12-medium">
											<p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
											adipiscing adipiscing metus massa. Blandit orci porttitor semper.
											Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
											mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
											ipsum dolor nullam.</p>
										</div>
									</div>
								</div>
							</div>
							<a href="#three" className="goto-next scrolly">Next</a>
					</section>

					
					<section id="three" className="spotlight style2 right">
							<span className="image fit main"><img src="images/pic03.jpg" alt="" /></span>
							<div className="content">
								<header>
									<h2>내 손안의 작은 미술관</h2>
									<p>A little art gallery in my hand</p>
								</header>
								<p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
								<ul className="actions">
									<li><a href="#" className="button">Learn More</a></li>
								</ul>
							</div>
							<a href="#four" className="goto-next scrolly">Next</a>
					</section> */}

					{/* 마지막 섹션 */}
					<section id="four" className="wrapper style1 special fade-up">
							<div className="container">
								<header className="major">
									<h2>ARTASY VISION</h2>
									<p>Lower the threshold of the art market by recommending works tailored to you</p>
								</header>
								<div className="box alt">
									<div className="row gtr-uniform">
										<section className="col-4 col-6-medium col-12-xsmall">
											<span className="icon solid alt major fa-chart-area"></span>
											<h3>누구나</h3>
											<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<span className="icon solid alt major fa-comment"></span>
											<h3>쉽게</h3>
											<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<span className="icon solid alt major fa-flask"></span>
											<h3>어디서든</h3>
											<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<span className="icon solid alt major fa-paper-plane"></span>
											<h3>맞춤 서비스</h3>
											<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<span className="icon solid alt major fa-file"></span>
											<h3>삶의 질 향상</h3>
											<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<span className="icon solid alt major fa-lock"></span>
											<h3>문화 생활</h3>
											<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
										</section>
									</div>
								</div>
								<footer className="major">
									<ul className="actions special">
										<li><Link to="/about"><a className="button">Learn More</a></Link></li>
									</ul>
								</footer>
							</div>
						</section>
					</div>
				</body>
			</div>
    );
}

export default Main;