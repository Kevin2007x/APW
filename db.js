const mysql = required("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "hoot",
    password: "",
    datebase: "rocket"
})
    connection.connect()

    //inserir
    function inserir(){
    let sql = "insert into foguete set?"
    let dados = {nomefoguete:":foguete",tipo:"protótipo",ano:2023}
    connection.query(sql, dados, function(error, results, fields){
        if (error) throw error
        console.log("Cadastrado!")
    
    
})
    connection.end()
}

inserir()