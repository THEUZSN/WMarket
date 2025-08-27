import "./AddProdutos.css"

function AddProdutos(){
    return(
        <>
            <form action="" className="formulario">
                <label htmlFor="">Nome Do Produto</label>
                <input className="inputs" type="text" placeholder="Digite o nome do produto"/>

                <label htmlFor="">Preço</label>
                <input className="inputs" type="number" placeholder="Digite o preço"/>

                <label htmlFor="">Descrição</label>
                <input className="inputs" type="text" placeholder="Digite a descrição"/>
            </form>
        </>
    );
}

export default AddProdutos;