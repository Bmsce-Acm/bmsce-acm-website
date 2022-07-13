import React from 'react';

const Footer = () => {

	return (
		<div>
			<footer>
				<div class="row primary">

					<div class="column about">
						<h3>BMSCE ACM S-Chap</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
							voluptatem corporis error non,
						</p>
					</div>

					<div class="column links">
						<h3>Reach Us</h3>
						<ul>
							<li>
								<a href="#faq">F.A.Q</a>
							</li>
							<li>
								<a href="#cookies-policy">Cookies Policy</a>
							</li>
							<li>
								<a href="#terms-of-services">Terms Of Service</a>
							</li>
							<li>
								<a href="#support">Support</a>
							</li>
						</ul>
					</div>

					<div className="column links">
						<div>
							<h3>Follow Us</h3>
						</div>
						<div class="social">
							<i class="fa-brands fa-facebook"></i>
							<i class="fa-brands fa-instagram"></i>
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-youtube"></i>
							<i class="fa-brands fa-whatsapp"></i>
						</div>
					</div>

				</div>

				<div class="row copyright">
					<p>Copyright &copy; 2021 Foolish Developer</p>
				</div>
			</footer>
		</div>
	)
};

export default Footer;