import icon from "../imgComponents/icons/icono.ico";
const NavBar = () => {
  const btnLink =
    "block inline-block py-1  hover:text-gray-600 cursor-pointer mr-4";
  return (
    <>
      <div className="body-font h-20">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <img src={icon} alt="" className="w-20 h-20" />
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns=""
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className=""
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="font-style: italic">NailsArt</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-style: italic">
            <a className={btnLink}>Inicio</a>
            <a className={btnLink}>Salon</a>
            <a className={btnLink}>Servicios</a>
            <a className={btnLink}>Cursos</a>
            <a className={btnLink}>Sobre Nosotros</a>
            <a href="#contacto" className={btnLink}>
              Contactanos
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
