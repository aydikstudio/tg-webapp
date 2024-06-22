import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";


const Header = () => {

    const {user, onClose} = useTelegram();
  
    return (
        <div className={'header'}>
            <Button>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;