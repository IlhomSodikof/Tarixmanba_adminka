import UILink from "../../ui-components/link";
import { CustomAppBar } from './custom.style';
import { links } from './link';

interface props {
    active: boolean
}

const Sidebar: React.FC<props> = ({active}) => {
    const linksResult = links.map(link => {
        return (
            <UILink
                key={link.text}
                active={active} 
                text={link.text}
                to={link.to}
                Icon={link.Icon}
            />
        )
    })

    return (
        <CustomAppBar 
            position="fixed"
            sx={{
                width: active ? "270px" : "60px"
            }}    
        >
            {linksResult}
        </CustomAppBar>
    )
}

export default Sidebar