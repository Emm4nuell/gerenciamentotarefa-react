function Home(){

    function sair(){
        localStorage.removeItem("token")
    }

    return(
        <div>
            <h1>Página Home</h1>
            <button onClick={sair}>Sair</button>
        </div>
    )
}

export default Home;