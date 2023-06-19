function MesageForm(){
    return(
        <form>
            <div>
            <input type="text" placeholder="digite seu nome!" />
            </div>

            <div>
            <input type="text" placeholder="digite sua mensagem!" />
            </div>
            
            <div>
                <input type="submit" value="Enviar" />
            </div>
            
        </form>
    )
}

export default MesageForm;