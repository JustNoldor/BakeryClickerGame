class Game{
    demandRate=0;
    material=10000;
    money=0;
    price=10;
    currentBread=0;
    manufacturedBread=0;
    soldBread=0;
    unitMaterialCost=100;

    //manufacture rate
    lastManufacturedCount=0;
    lastManufacturedRate=0;
    lastManufacturedRateTs= Date.now();

    //price of material
    materialCost=500;
    materialCostLastUpdated = Date.now();

    //generators
    autoGenerators={
        apprentice: 0,
        apprenticeCost: 100,
        foreman: 0,
        foremanCost:200,
        master: 0,
        masterCost:500,
    }
    

    makeBread = () => {
        this.currentBread++;
        this.manufacturedBread++;
        this.material-=this.unitMaterialCost;
    };

    update = () => {
        //update material cost
        if (Date.now() - this.materialCostLastUpdated>10000) {
            this.materialCost =  Math.floor(Math.random() * 300 + 300);
            this.materialCostLastUpdated =  Date.now();
        }

        //update manufacture rate
        if (Date.now()- this.lastManufacturedRateTs>5000) {
            this.lastManufacturedRateTs = Date.now();
            this.lastManufacturedRate = Math.floor(
              (this.manufacturedBread - this.lastManufacturedCount)  
            );
            this.lastManufacturedCount = this.manufacturedBread;
        }

        //update demand
        this.updateDemand();

        //consumers purchase goods
        if (this.currentBread >0 && Math.random() * 100 <this.demandRate) {
            this.purchaseBread();
        }
    };

    updateDemand = () => {
        const rate = 100 - (this.price/40) * 100;
        this.demandRate =  Math.floor(Math.min(Math.max(0,rate),100));
    };

    purchaseBread = () => {
        this.currentBread-=1;
        this.money+=this.price;
    };

    canBuyAutoGenerator = type => {
        switch(type){
            case 'APPRENTICE':
                return this.money >= this.autoGenerators.apprenticeCost;
            case 'FOREMAN':
                return this.money >= this.autoGenerators.foremanCost;
            case 'MASTER':
                return this.money >= this.autoGenerators.masterCost;
            default:
                return false;
        }
    }

    canMakeBread = () => {
        return this.material>= this.materialCost;
    };

    canBuyMaterial = () => {
        return this.money >= this.materialCost;
    };

    canDecreasePrice = () => {
        return this.price>1;
    };

    buyMaterial = () => {
        this.materialCost +=Math.floor(Math.random() * 20 + 10);
        this.materialCostLastUpdated=Date.now();

        this.material += 10000;
        this.money -= this.materialCost;
    };

    buyAutoGenerator = type => {
        switch(type){
            case 'APPRENTICE':
                this.autoGenerators.apprentice++;
                this.money -= this.autoGenerators.apprenticeCost;
                this.autoGenerators.apprenticeCost+= Math.floor(
                    (this.autoGenerators.apprenticeCost/100) * 10);
                return;
            case 'FOREMAN':
                this.autoGenerators.foreman++;
                this.money -= this.autoGenerators.foremanCost;
                this.autoGenerators.foremanCost+= Math.floor(
                (this.autoGenerators.foremanCost/100) * 10);
                return;
            case 'MASTER':
                this.autoGenerators.master++;
                this.money -= this.autoGenerators.masterCost;
                this.autoGenerators.masterCost+= Math.floor(
                (this.autoGenerators.masterCost/100) * 10);
                return;
            default:
                return false;
        }
    }


    increasePrice = () =>  {
        this.price++;
    };

    decreasePrice = () =>  {
        this.price--;
    };

}
export default Game;