import { ScrollTop } from "./ScrollTopBtn.styled";

const ScrollTopBtn = () => {
    return <ScrollTop style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} color='#ffffff' scrollDistance={200} width={25} height={25} smooth />
}

export default ScrollTopBtn;


