/// <reference types="cypress" />

describe('Pagina de cadastro', () => {
    
    beforeEach(() => {
        cy.visit("")
        //botão de cadastro
        cy.contains("button", "Registrar").click();
    });

    it('O campo E-mail deve ser de preenchimento obrigatorio', () => {
        
        cy.get(".card__register input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
        
        cy.contains("button","Cadastrar").click({force: true})
        
        cy.contains("Email não pode ser vazio").should("be.visible");
    })

    it('O campo nome deve ser de preenchimento obrigatorio', () => {
       
        cy.get(".card__register input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".card__register input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
        
        cy.contains("button","Cadastrar").click({force: true})
        
        cy.contains("Nome não pode ser vazio").should("be.visible");
    })

    it('O campo senha deve ser de preenchimento obrigatorio', () => {
        
        cy.get(".card__register input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".card__register input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
        
        cy.contains("button","Cadastrar").click({force: true})

        cy.contains("Senha não pode ser vazio").should("be.visible");
    })

    it('O campo confirmação de senha deve ser de preenchimento obrigatorio', () => {
       
        cy.get(".card__register input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".card__register input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='password']").click({force: true}).type("dsfhl")

        cy.contains("button","Cadastrar").click({force: true})

        cy.contains("Confirmar senha não pode ser vazio").should("be.visible");
    })
    
    it("Criar conta com saldo", () => {
      
        //preencher formulário de cadastro
        cy.get(".card__register input[type='email']").click({force: true}).type("oi@h.com")
        cy.get(".card__register input[type='name']").click({force: true}).type("davidson")
        cy.get(".card__register input[name='password']").click({force: true}).type("123")
        cy.get(".card__register input[name='passwordConfirmation']").click({force: true}).type("123")
        
        //botão de criar conta com saldo
        cy.get("#toggleAddBalance").click({force: true})
        //botão de cadastro
        cy.contains("button","Cadastrar").click({force: true})
       
        //fecha o modal de sucesso de cadastro
        cy.get("#btnCloseModal").click()

        //informações de login com o cadastro criado
        cy.get(".card__login input[type='email']").click({force: true}).type("oi@h.com")
        cy.get(".card__login input[name='password']").click({force: true}).type("123")
        //botão de login
        cy.contains("button", "Acessar").click();
        //texto do saldo em conta
        cy.contains("#textBalance", "Saldo em conta R$ 1.000,00").should("be.visible");
    })

    it("Criar conta sem saldo", () => {
        
        //preencher formulário de cadastro
        cy.get(".card__register input[type='email']").click({force: true}).type("oi@h.com");
        cy.get(".card__register input[type='name']").click({force: true}).type("davidson");
        cy.get(".card__register input[name='password']").click({force: true}).type("123");
        cy.get(".card__register input[name='passwordConfirmation']").click({force: true}).type("123");
        
        //botão de cadastro
        cy.contains("button","Cadastrar").click({force: true});
       
        //fecha o modal de sucesso de cadastro
        cy.get("#btnCloseModal").click();

        //informações de login com o cadastro criado
        cy.get(".card__login input[type='email']").click({force: true}).type("oi@h.com")
        cy.get(".card__login input[name='password']").click({force: true}).type("123")
        //botão de login
        cy.contains("button", "Acessar").click();
        //texto do saldo em conta
        cy.contains("#textBalance", "Saldo em conta R$ 0,00").should("be.visible");
    })

    it('O campo senha e confirmação de senha não são iguais', () => {

        //campos do formulário de cadastro
        cy.get(".card__register input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".card__register input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='passwordConfirmation']").click({force: true}).type("dsfhls")
       
        //botão de cadastrar
        cy.contains("button","Cadastrar").click({force: true});

        //texto do modal
        cy.contains("#modalText", "As senhas não são iguais.");
    });

    it('Cadastro criado exibe mensagem de sucesso', () => {

        //campos do formulário de cadastro
        cy.get(".card__register input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".card__register input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".card__register input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
       
        //botão de cadastrar
        cy.contains("button", "Cadastrar").click({force: true})

        //esse regex foi utilizado para facilitar a identificação do número da conta
        //pois esse número tem o seguinte formato: de 1 a 3 digitos de 0 a 9 seguido de um traço('-') 
        //seguido de mais um digito de 0 a 9
        var regex = /A conta [0-9]{1,3}-[0-9]{1} foi criada com sucesso/;
        //texto do modal
        cy.contains("#modalText", regex).should("be.visible");
    });
})

