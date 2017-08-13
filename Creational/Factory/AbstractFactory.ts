abstract class Pizza 
{
    abstract getName(): string;
};

abstract class DominosPizza extends Pizza {};

abstract class PapaJohnsPizza extends Pizza {};

class PepperoniPassion extends DominosPizza 
{
    public getName(): string
    {
        return "PepperoniPassion";
    }
};

class DoublePepperoni extends PapaJohnsPizza 
{
    public getName(): string
    {
        return "DoublePepperoni";
    }
};

class Meateor extends DominosPizza 
{
    public getName(): string
    {
        return "Meateor";
    }
};

class AllTheMeats extends PapaJohnsPizza 
{
    public getName(): string
    {
        return "AllTheMeats";
    }
};

abstract class PizzaFactory
{
    abstract createPepperoniPizza(): Pizza;
    abstract createMeatPizza(): Pizza;
}

class DominosPizzaFactory extends PizzaFactory
{
    public createPepperoniPizza(): Pizza
    {
        return new PepperoniPassion();
    }

    public createMeatPizza(): Pizza
    {
        return new Meateor();
    }
}

class PapaJohnsPizzaFactory extends PizzaFactory
{
    createPepperoniPizza(): Pizza 
    {
        return new DoublePepperoni();
    }

    public createMeatPizza(): Pizza 
    {
        return new AllTheMeats();
    }

}

class Customer
{
    private _pizza: Pizza;

    public get pizza(): Pizza
    {
        return this._pizza;
    }

    constructor(pizzaFactory: PizzaFactory)
    {
        this._pizza = pizzaFactory.createPepperoniPizza();
    }
}

const hungryCustomer = new Customer(new PapaJohnsPizzaFactory());

console.log(hungryCustomer.pizza.getName());