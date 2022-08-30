export function Footer() {
    return(
        <div className="flex flex-col items-center text-zinc-500 gap-3 pb-20">
            <div className="flex text-xs gap-3 items-center ">
                <p className="cursor-pointer" >Meta</p>
                <p className="cursor-pointer">Sobre</p>
                <p className="cursor-pointer"> Blog</p>
                <p className="cursor-pointer">Carreiras</p>
                <p className="cursor-pointer">Ajuda</p>
                <p className="cursor-pointer">API</p>
                <p className="cursor-pointer">Privacidade</p> 
                <p className="cursor-pointer">Termos</p> 
                <p className="cursor-pointer">Principais contas</p> 
                <p className="cursor-pointer">Hashtags</p>   
                <p className="cursor-pointer">Localizações</p>  
                <p className="cursor-pointer">Instagram Lite</p> 
                <p className="cursor-pointer">Carregamento de contatos e não usuários</p>   
            </div>
            <div className="flex text-xs gap-3 items-center">
               <p className="cursor-pointer">Dança</p> 
               <p className="cursor-pointer">Comida e bebida</p>
               <p className="cursor-pointer">Casa e jardim</p> 
               <p className="cursor-pointer">Música</p> 
               <p className="cursor-pointer">Artes visuais</p>   
            </div>
            <div className="flex text-xs gap-3 items-center">
               <p className="cursor-pointer">Português (Brasil)</p> 
               <p className="cursor-pointer">© 2022 Instagram from Meta</p>
            </div>
        </div>
    )
}