
let Name = 'Janan        '

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True Lenght is ${this.trim().length}`);
}

Name.trueLenght()
'khan'.trueLenght()
'28                          '.trueLenght()

//-----------------------------------------------

let myHeroes = ['Superman','Thor'];

let heropower = {
    Suprman: 'Fly',
    Thor: 'Hammer',

    getSpiderPower : function(){
        console.log(`Superman Power is ${this.Suprman}`);
    }
}