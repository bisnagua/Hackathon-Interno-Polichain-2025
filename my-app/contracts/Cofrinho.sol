// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

 contract Cofrinho {
    address public owner;
    uint256 public meta;
    uint256 public totalArrecadado;
    uint256 public dataFim;
    bool public votacaoIniciada;
    bool public metaAtingida;
    string public nome;

    enum ModoDeHierarquia{umDono, multiplosCuradores, todos} ModoDeHierarquia public modoDeHierarquia;
    
    uint256 public numeroDeCuradores;
    uint256 public numCuradoresAdd = 1;
    mapping ( address => bool) public curadores;


    struct sugestao{
        string descricao;
        address curador;
        uint256 votos;
        mapping(address => bool) votantes;
    }

    sugestao[] public sugestoes;

    mapping(address => uint256) public doacoes;
    mapping(address => bool) public jaVotou;

    modifier apenasOwner(){
        require(msg.sender == owner, "Apenas o dono pode executar esta funcao");
        _;
    }

    modifier apenasCurador(){
        require(curadores[msg.sender] == true || msg.sender == owner, "Apenas o curador pode executar esta funcao");
        _;
    }

    constructor(string memory _nome, uint256 _meta, uint256 numeroDeDias, ModoDeHierarquia _modo, uint256 _numeroDeCuradores){
        require(_meta > 0, "Meta deve ser maior que zero");
        require(numeroDeDias > 0, "Prazo deve ser maior que zero");
        nome = _nome;
        owner = msg.sender;
        meta = _meta;
        dataFim = block.timestamp + (numeroDeDias * 1 days);
        modoDeHierarquia = _modo;

        if(modoDeHierarquia == ModoDeHierarquia.umDono){
            numeroDeCuradores = 1;
            curadores[owner]==true;

        }
        else if(modoDeHierarquia == ModoDeHierarquia.multiplosCuradores){
            require(_numeroDeCuradores>0, "Numero de curadores deve ser maior que zero");
            numeroDeCuradores = _numeroDeCuradores+1;
            curadores[owner] = true;
        }
    }   

    function adicionarCurador(address _curador) public apenasOwner{
        require(modoDeHierarquia == ModoDeHierarquia.multiplosCuradores, "Este modo nao permite multiplos curadores");
        require(!curadores[_curador], "Este endereco ja e um curador");
        require(_curador != owner, "O dono ja e um curador");
        
        require(numCuradoresAdd < numeroDeCuradores, "Numero maximo de curadores atingido");

        curadores[_curador] = true;
        numCuradoresAdd++;

    }


    //funções pra alterar informações do constructor e só o dono pode executá-las
    function alterarNome(string memory _novoNome) public apenasOwner {
        nome = _novoNome;
    }

    function alterarMeta(uint256 _novaMeta) public apenasOwner {
        require(_novaMeta > 0, "Meta deve ser maior que zero");
        meta = _novaMeta;
    }

    function alterarDataFim(uint256 _novosDias) public apenasOwner {
        require(_novosDias > 0, "Dias deve ser maior que zero");
        dataFim = block.timestamp + (_novosDias * 1 days);
    }

    function alterarModoHierarquia(ModoDeHierarquia _novoModo) public apenasOwner {
        modoDeHierarquia = _novoModo;
    }

    //emitir events?



 }