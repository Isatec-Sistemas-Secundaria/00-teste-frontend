import Logo from "../logo/Logo";

function Header() {
   return( 
   <div className="flex flex-col items-center gap-2 my-5">
    <Logo/>  
   <h1 className="font-normal text-3xl text-(--text-primary)">Bem-vindo</h1>
   <p className="font-light text-(--text-secondary)">Faça login na sua conta</p>
   </div>
   )
}

export default Header;