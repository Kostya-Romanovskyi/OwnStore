import { StyledFooter, MainContainer, ContentWrapp, List, Item, LinkStyled } from './Footer.styled';

const Footer = () => {
	const API_LINK = 'https://developer.themoviedb.org/docs/getting-started';
	const RESUME_LINK = 'https://drive.google.com/file/d/1M1SM2zL0Zl1AKNRgbvaVm6TiX6H9Es_D/view?usp=drive_link';
	const GITHUB_LINK = 'https://github.com/Kostya-Romanovskyi';

	return (
		<StyledFooter>
			<MainContainer>
				<ContentWrapp>
					<List>
						<Item>
							<LinkStyled to={API_LINK}>API</LinkStyled>
						</Item>
						<Item>
							<LinkStyled to={RESUME_LINK}>Resume</LinkStyled>{' '}
						</Item>
						<Item>
							<LinkStyled to={GITHUB_LINK}>GitHub</LinkStyled>
						</Item>
					</List>
					<div>
						<p>&#64; 2023 All rights reserved</p>
					</div>
				</ContentWrapp>
			</MainContainer>
		</StyledFooter>
	);
};
export default Footer;
