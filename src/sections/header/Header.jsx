import HeaderImage from '../../assets/profile.png'
import data from './data.js'
import './header.css'

const Header = () => {
  return (
	<header id="header">
		<div className='container header__container'>
			<div className='header__profile'>
				<img src={HeaderImage} alt='Header Image' />
			</div>
			<h3>Kuk Idya</h3>
			<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
			</p>
			<div className='header__cta'>
				<a href='#contact' className='btn primary'>Let's Talk</a>
				<a href='#portfolio' className='btn light'>My Work</a>
			</div>
			<div className='header__socials'>
				{
					data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
				}
			</div>
		</div>
	</header>
  )
}

export default Header