import AboutImage from '../../assets/profile.png'
import Resume from '../../assets/Nenyasha_Madyavanhu_Resume_2024.pdf'
import { HiDownload } from 'react-icons/hi'
import './about.css'

const About = () => {
  return (
	<section id="about">
	<div className='about__left'>
		<div className='about__portrait'>
			<img src={AboutImage} alt='About Image'/>
		</div>
	</div>
	<div className='about__right'>
		<h2>About Me</h2>
		<div className='about__cards'></div>
		<p>
		It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
		</p>
		<p>
		Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
		</p>
		<a href={Resume} download className='btn primary'>Download Resume</a>
	</div>
	</section>
	
  )
}

export default About