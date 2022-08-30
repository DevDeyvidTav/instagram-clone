export function Conteudo(){
    return(
        <div className="ml-16 flex gap-8 mt-7 ">
            <img className= "w-96 h-2/4"src="../src/assets/celular.png" alt="" />
            <div>
                <div className="border-zinc-200 border flex flex-col items-center h-3/5 p-12 gap-2 mt-3 w-full">
                    <img className= "w-44 mb-8 h-12"src="../src/assets/instagram.png" alt="" />
                <input placeholder="Telefone, email ou nome de usuario" className="border p-2 text-xs w-64 h-9 border-zinc-200" type="text" />
                <input placeholder="Senha" className="text-xs p-2 border w-64 h-9 border-zinc-200" type="text" />
                <button className='mt-2 w-64 rounded-md p-1 bg-cyan-300 opacity-60 text-white font-sans'>Entrar</button>
                <div className="flex items-center justify-center gap-3">
                    <div className="bg-zinc-200 w-28 h-px" ></div> <p className="text-base font-sans text-zinc-500">ou</p> <div className="bg-zinc-200 w-28 h-px"></div>
                </div>
                <div className="mt-3 text-sm flex flex-col items-center gap-5 text-blue-900 font-sans font-semibold">
                    <p className="flex items-center gap-3"><img className="w-4 h-4 " src="../src/assets/facebook.png" alt="" /> Entrar com o Facebook</p>
                    <p className="text-xs font-normal pb-10">Esqueceu a senha?</p>
                </div>
                </div>
                <div className="mt-3 border h-16 flex flex-col items-center justify-center text-sm gap-border-zinc-200 ">
                    <p className="font-normal">Não tem uma conta?<span className="text-cyan-500 font-semibold"> Cadastre-se</span></p>
                </div>
                <div className="items-center justify-center flex flex-col">
                    <p className="mt-5 mb-5" >Obtenha o aplicativo</p> 
                    <div className="flex gap-3">
                        <img className="rounded-md h-9 cursor-pointer" src="../src/assets/btn-ios.png" alt="" />
                        <img className="rounded-md h-9 cursor-pointer" src="../src/assets/btn-android.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}