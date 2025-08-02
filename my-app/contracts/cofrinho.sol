// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

 contract cofrinho {
    address public owner;
    uint256 public meta;
    enum Unidade { Wei, Gwei, Ether} Unidade public unidade;
    uint256 public totalArrecadado;
    uint256 public dataFim;
    bool public votacaoIniciada;
    bool public votacaoRADMiniciada; // Retirar antes da meta
    bool public metaAtingida;
    bool public retiradoAntesDaMeta;
    
   
    enum ModoDeHierarquia{umDono, multiplosCuradores, todos} ModoDeHierarquia public modoDeHierarquia;
    
    uint256 public numeroDeCuradores;
    uint256 public numCuradoresAdd = 0;
    mapping ( address => bool) public curadores;


    struct sugestao{
        bool ehContrato;
        address endereco;
        string descricao;
        address curador;
        uint256 votos;
        mapping(address => bool) votantes;
    }

    sugestao[] public sugestoes;

    mapping(address => uint256) public doacoes;
    mapping(address => bool) public jaVotou;
    mapping(address => bool) public votosRADM; // Votos retirar antes da meta
    mapping(address => bool ) public jaVotouRADM; // Retirar antes da meta
    uint256 public votosFavoraveisRADM;
    uint256 public numVotosRADM;
    mapping(address => bool ) public jaSugeriu;

    modifier apenasOwner(){
        require(msg.sender == owner, "Apenas o dono pode executar esta funcao");
        _;
    }

    modifier apenasCurador(){
        require(curadores[msg.sender] == true || msg.sender == owner, "Apenas o curador pode executar esta funcao");
        _;
    }

    constructor(uint256 _meta, Unidade _unidade, uint256 numeroDeDias, ModoDeHierarquia _modo, uint256 _numeroDeCuradores){
        owner = msg.sender;
        meta = _meta;
        unidade = _unidade;
        if (unidade == Unidade.Wei) {
            meta = _meta;
        } else if (unidade == Unidade.Gwei) {
            meta = _meta * 1e9; // 1 Gwei = 1e9 Wei
        } else if (unidade == Unidade.Ether) {
            meta = _meta * 1e18; // 1 Ether = 1e18 Wei
        }
        dataFim = block.timestamp + (numeroDeDias * 1 days);
        modoDeHierarquia = _modo;

        numeroDeCuradores = 1;
        curadores[owner] = true;

        if(modoDeHierarquia == ModoDeHierarquia.umDono){
            numeroDeCuradores = 1;
            curadores[owner]=true;
        }
        else if(modoDeHierarquia == ModoDeHierarquia.multiplosCuradores){
            require(_numeroDeCuradores> 1, "Numero de curadores deve ser maior que zero");
            numeroDeCuradores = _numeroDeCuradores;
            curadores[owner] = true;
        }
    }   
    
    
    function adcionarCurador(address _curador) public apenasOwner{
        require(modoDeHierarquia == ModoDeHierarquia.multiplosCuradores, "Este modo nao permite multiplos curadores");
        require(!curadores[_curador], "Este endereco ja e um curador");
        require(_curador != owner, "O dono ja e um curador");
        
        require(numCuradoresAdd < numeroDeCuradores - 1, "Numero maximo de curadores atingido");

        curadores[_curador] = true;
        numCuradoresAdd++;

    }

    event doacaoRecebida(address doador, uint256 valor);

    function doar() public payable{
        require(msg.value > 0, "O valor eh invalido");
        require(block.timestamp < dataFim && !votacaoIniciada, "Periodo de doacoes encerrado");

        doacoes[msg.sender] += msg.value;
        totalArrecadado += msg.value;

        if (modoDeHierarquia == ModoDeHierarquia.todos && !curadores[msg.sender])
            {
                curadores[msg.sender] = true;
                numeroDeCuradores++;
            }

        emit doacaoRecebida(msg.sender, msg.value);

        if( totalArrecadado >= meta && !metaAtingida)
            metaAtingida = true;

    }

    event sugestaoAdicionada(uint256 id, string descricao, address autor);
    
    function NovaSugestao(string memory _descricao, bool ehContrato, address _endereco) private{
        require (!votacaoIniciada, "Votacao iniciada, periodo de sugestoes encerrado");
        require (!jaSugeriu[msg.sender], "Ja sugeriu");
        if(ehContrato){
            require(_endereco != address(0), "O endereco do contrato nao eh valido");
        }
    
        sugestao storage novaSugestao = sugestoes.push();
        novaSugestao.ehContrato = ehContrato;
        novaSugestao.endereco = _endereco;
        novaSugestao.descricao = _descricao;
        novaSugestao.curador = msg.sender;
        novaSugestao.votos = 0;

        emit sugestaoAdicionada(sugestoes.length - 1, _descricao, msg.sender);

    }

    function adicionarSugestaoSemContrato(string memory _descricao) public apenasCurador{
        NovaSugestao(_descricao, false, address(0));
    }

    function adicionarSugestaoComContrato(string memory _descricao, address _endereco) public apenasCurador{
        NovaSugestao(_descricao, true, _endereco);
    }

    
    function iniciarVotacao() public apenasCurador{
        require(!votacaoIniciada, "Votacao ja iniciada");
        require(sugestoes.length > 0, "Nao ha sugestoes ");
        
        if( metaAtingida || block.timestamp > dataFim || retiradoAntesDaMeta)
            votacaoIniciada = true;
    }

    event votoRecebido (address votante, uint256 idSugestao);

    function votar(uint256 _idSugestao) public apenasCurador{
        require (votacaoIniciada, "Votacao nao iniciada");
        require (sugestoes.length > 0, "Nao ha sugestoes para votar");
        require(!jaVotou[msg.sender], "Ja votou");
  
        sugestao storage _sugestao = sugestoes[_idSugestao];
        require(!_sugestao.votantes[msg.sender], "Voce ja votou nesta sugestao");
        _sugestao.votos += 1;
        _sugestao.votantes[msg.sender] = true;
        jaVotou[msg.sender] = true;
        
        
        emit votoRecebido(msg.sender, _idSugestao);
        
    }

    function votarRADM(bool _voto) public apenasCurador {
        require (votacaoRADMiniciada, "A votacao para retirar antes da meta nao foi iniciada");
        require (!jaVotouRADM[msg.sender], "Ja votou para retirar antes da meta");

        votosRADM[msg.sender] = _voto;
        jaVotouRADM[msg.sender] = true;
        numVotosRADM++;
        if ( _voto)
            votosFavoraveisRADM++;
            
    }

    function retirarAntesDaMeta() public apenasCurador {
        require (!metaAtingida && block.timestamp < dataFim, "Nao eh possivel retirar antes da meta");
        require (totalArrecadado > 0, "Nao ha o que retirar");

        require(numVotosRADM == (numeroDeCuradores), "Nem todos os curadores votaram ainda");

        votacaoRADMiniciada = false;
       
       if (votosFavoraveisRADM >= (numeroDeCuradores/2 + 1)){
            retiradoAntesDaMeta = true;
            iniciarVotacao();
        }
        
    }

    function iniciarVotacaoRADM() public apenasOwner{
        require (!votacaoRADMiniciada, "A votacao para retirar antes da meta ja foi iniciada");
        require (!metaAtingida && block.timestamp < dataFim, "Nao eh possivel retirar antes da meta");

        votacaoRADMiniciada = true;
    }

    event audicaoConcluida ( uint256 id, string descricao);

    function auditarVotos() public apenasCurador {
        require (votacaoIniciada, "Votacao ainda nao iniciada");
        
        uint256 votosTotais = 0;
        for (uint256 i = 0; i < sugestoes.length; i++){
            votosTotais += sugestoes[i].votos;
        }

        require(votosTotais >= (numeroDeCuradores / 2 + 1), "Nao ha votos suficientes para auditar");

        uint256 idVencedor = 0;
        uint256 maisVotos = 0;

        for (uint256 i = 0; i < sugestoes.length; i++) 
        {
            if ( sugestoes[i].votos > maisVotos)
            {
                maisVotos = sugestoes[i].votos;
                idVencedor = i;
            }
        }

        emit audicaoConcluida ( idVencedor, sugestoes[idVencedor].descricao);
        

        if (sugestoes[idVencedor].ehContrato)
        {
            (bool success, ) = (sugestoes[idVencedor].endereco).call{value: totalArrecadado}("");
        require(success, "Transfer failed");
        }
        else {
            (bool success, ) = owner.call{value: totalArrecadado}("");
        require(success, "Transfer failed");
        }
        
        //resetar o estado ???
    
        
    }
 }