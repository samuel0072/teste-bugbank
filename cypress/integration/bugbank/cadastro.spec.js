/// <reference types="cypress" />

const { should } = require("chai")

//$("li.nav-item.active")
//$("a[data-target='#exampleModal']")
//$("a[data-target='#videoModal']")
//$("a:contains(Phones)")

//Crie um teste que clique em "About us" e verifique se é possível fechar a modal através de um evento de clique.

describe('Pagina de cadastro', () => {
   
    xit('O campo E-mail deve ser de preenchimento obrigatorio', () => {
        cy.visit("")
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child").click()
        cy.wait(1000)
        //cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='email']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
        cy.get(".style__ContainerButton-sc-1wsixal-0.CMabB.button__child").click({force: true})
        cy.get('.style__ContainerFieldInput-sc-s3e9ea-0.gQAEIG.input__child').should('have.length', 5)
        cy.wait(4000)
        cy.contains("Email não pode ser vazio")
    })

    xit('O campo nome deve ser de preenchimento obrigatorio', () => {
        cy.visit("")
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child").click()
        cy.wait(1000)
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        //cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
        cy.get(".style__ContainerButton-sc-1wsixal-0.CMabB.button__child").click({force: true})
        cy.get('.style__ContainerFieldInput-sc-s3e9ea-0.gQAEIG.input__child').should('have.length', 6)
        cy.contains("Nome não pode ser vazio")
    })

    xit('O campo senha deve ser de preenchimento obrigatorio', () => {
        cy.visit("")
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child").click()
        cy.wait(1000)
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='name']").click({force: true}).type("dsfhl")
        //cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
        cy.get(".style__ContainerButton-sc-1wsixal-0.CMabB.button__child").click({force: true})
        cy.get('.style__ContainerFieldInput-sc-s3e9ea-0.gQAEIG.input__child').should('have.length', 5)
        cy.contains("Senha não pode ser vazio")
    })

    xit('O campo confirmação de senha deve ser de preenchimento obrigatorio', () => {
        cy.visit("")
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child").click()
        cy.wait(1000)
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='password']").click({force: true}).type("dsfhl")
        //cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
        cy.get(".style__ContainerButton-sc-1wsixal-0.CMabB.button__child").click({force: true})
        cy.get('.style__ContainerFieldInput-sc-s3e9ea-0.gQAEIG.input__child').should('have.length', 5)
        cy.contains("Confirmar senha não pode ser vazio")
    })
    
    xit("Criar conta com saldo", () => {
        cy.visit("")
        
        //botão de cadastrar
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child").click()
        cy.wait(1000)
        
        //preencher formulário de cadastro
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='email']").click({force: true}).type("oi@h.com")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='name']").click({force: true}).type("davidson")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='password']").click({force: true}).type("123")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='passwordConfirmation']").click({force: true}).type("123")
        //botão de criar conta com saldo
        cy.get(".styles__ContainerToggle-sc-7fhc7g-2.cJsFYf #toggleAddBalance").click({force: true})
        //botão de cadastro
        cy.get(".style__ContainerButton-sc-1wsixal-0.CMabB.button__child").click({force: true})
        cy.wait(1000)
        //fecha o modal de sucesso de cadastro
        cy.get("#btnCloseModal").click()

        //informações de login com o cadastro criado
        cy.get(".card__login .input__default[type='email']").click({force: true}).type("oi@h.com")
        cy.get(".card__login .input__default[name='password']").click({force: true}).type("123")
        //botão de login
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.otUnI.button__child").click()
        //texto do saldo em conta
        cy.get("#textBalance").contains("Saldo em conta R$ 1.000,00");
    })

    xit("Criar conta sem saldo", () => {
        cy.visit("")
        
        //botão de cadastrar
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child").click()
        cy.wait(1000)
        
        //preencher formulário de cadastro
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='email']").click({force: true}).type("oi@h.com")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='name']").click({force: true}).type("davidson")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='password']").click({force: true}).type("123")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='passwordConfirmation']").click({force: true}).type("123")
        //botão de cadastro
        cy.get(".style__ContainerButton-sc-1wsixal-0.CMabB.button__child").click({force: true})
        cy.wait(1000)
        //fecha o modal de sucesso de cadastro
        cy.get("#btnCloseModal").click()

        //informações de login com o cadastro criado
        cy.get(".card__login .input__default[type='email']").click({force: true}).type("oi@h.com")
        cy.get(".card__login .input__default[name='password']").click({force: true}).type("123")
        //botão de login
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.otUnI.button__child").click()
        //texto do saldo em conta
        cy.get("#textBalance").contains("Saldo em conta R$ 0,00");
    })

    xit('O campo senha e confirmação de senha não são iguais', () => {
        cy.visit("")
        //botão de cadastro
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child").click()
        cy.wait(1000)

        //campos do formulário de cadastro
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='passwordConfirmation']").click({force: true}).type("dsfhls")
       
        //botão de cadastrar
        cy.get(".style__ContainerButton-sc-1wsixal-0.CMabB.button__child").click({force: true})

        //espera o modal aparecer
        cy.wait(1000)

        //texto do modal
        cy.get("#modalText").contains("As senhas não são iguais.");
    });

    it('Cadastro criado exibe mensagem de sucesso', () => {
        cy.visit("")
        //botão de cadastro
        cy.get(".login__buttons .style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child").click()
        cy.wait(1000)

        //campos do formulário de cadastro
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='email']").click({force: true}).type("dsfhl@hsgsg.com")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[type='name']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='password']").click({force: true}).type("dsfhl")
        cy.get(".styles__ContainerFormRegister-sc-7fhc7g-0.keVbpY input[name='passwordConfirmation']").click({force: true}).type("dsfhl")
       
        //botão de cadastrar
        cy.get(".style__ContainerButton-sc-1wsixal-0.CMabB.button__child").click({force: true})

        //espera o modal aparecer
        cy.wait(1000)
        
        //esse regex foi utilizado para facilitar a identificação do número da conta
        //pois esse número tem o seguinte formato: de 1 a 3 digitos de 0 a 9 seguido de um traço('-') 
        //seguido de mais um digito de 0 a 9
        var regex = /[A conta ][0-9]{1,3}-[0-9]{1}[ foi criada com sucesso]/;
        //texto do modal
        cy.get("#modalText").contains(regex);
    });
})

