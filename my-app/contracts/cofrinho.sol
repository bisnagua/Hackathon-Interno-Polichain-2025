// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

 contract cofrinho {
    address public owner;
    uint256 public meta;
    uint256 public totalArrecadado;
    uint256 public dataFim;
    bool public votacaoIniciada;
    bool public metaAtingida;

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

    constructor(uint256 _meta, uint256 numeroDeDias, ModoDeHierarquia _modo, uint256 _numeroDeCuradores){
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

    function adcionarCurador(address _curador) public apenasOwner{
        require(modoDeHierarquia == ModoDeHierarquia.multiplosCuradores, "Este modo nao permite multiplos curadores");
        require(!curadores[_curador], "Este endereco ja e um curador");
        require(_curador != owner, "O dono ja e um curador");
        
        require(numCuradoresAdd < numeroDeCuradores, "Numero maximo de curadores atingido");

        curadores[_curador] = true;
        numCuradoresAdd++;

    }



 }