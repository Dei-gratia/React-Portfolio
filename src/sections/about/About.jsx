import AboutImage from '../../assets/profile.png'
import Resume from '../../assets/Nenyasha_Madyavanhu_Resume_2024.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data.js'
import Card from '../../components/Card.jsx'
import './about.css'

const About = () => {
  return (
	<section id="about">
		<div className='container about__container'>
			<div className='about__left'>
		<div className='about__portrait'>
			<img src={AboutImage} alt='About Image'/>
		</div>
			</div>
			<div className='about__right'>
				<h2>About Me</h2>
				<div className='about__cards'>
					{
						data.map(item => (
							<Card key={item.id} className="about__card">
								<span className='about__card-icon'>{item.icon}</span>
								<h5>{item.title}</h5>
								<small>{item.desc}</small>
							</Card>
						))
					}
				</div>
				<p>
				It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  
				</p>
				<p>
				Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
				</p>
				<a href={Resume} download className='btn primary'>Download Resume <HiDownload/></a>
			</div>
		</div>
	</section>
	
  )
}

export default About