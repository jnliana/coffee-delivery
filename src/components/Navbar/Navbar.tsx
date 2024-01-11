import { Button, ButtonSize, NamingClass } from '@/components';
import coffeeLogo from '@/assets/images/coffee-logo.png';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '@/hooks';

export const Navbar = () => {
  const { cartTotalItems } = useCart();
  const navigate = useNavigate();
  const goToCart = () => navigate('/cart');

  return (
    <nav className="bg-transparent px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/'} className="flex items-center">
          <img src={coffeeLogo} alt="coffee logo" />
        </Link>
        <div className="flex items-center gap-3">
          <Button
            classOption={NamingClass.lightDarkSecondary}
            nameIcon="location"
            hasIcon
            label="Colombia"
            size={ButtonSize.small}
            sizeIcon={16}
          />
          <Button
            classOption={NamingClass.lightPrimary}
            nameIcon="cart"
            hasIcon
            size={ButtonSize.xsmall}
            hasBadge
            quantity={cartTotalItems}
            onClick={goToCart}
          />
        </div>
      </div>
    </nav>
  );
};
