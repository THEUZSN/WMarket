import "./HomeSection.css"
function HomeSection(){
    return(
    <div className="homesection">
        <h1 className="titulo">WMarket</h1>
        <h2 className="promocao">Promoção 100% de desconto!!!</h2>
        <div className="frete"><b>Frete gratis</b> apartir de R$0,99</div>

        <div className="juros">
            <h2>Até 100X</h2>
            <h2>Sem juros</h2>
        </div>
    </div>
    )
}
export default HomeSection;