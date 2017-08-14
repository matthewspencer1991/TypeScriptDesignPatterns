/**
 * @summary This class represents a pizza.
 */
abstract class Pizza 
{
    /**
     * @summary Get the pizza's name.
     * @returns {string} The name of the pizza
     */
    abstract getName(): string;
};

/**
 * @summary This class represents a Domino's pizza.
 */
abstract class DominosPizza extends Pizza {};

/**
 * @summary This class represents a Papa John's pizza.
 */
abstract class PapaJohnsPizza extends Pizza {};

/**
 * @summary This class represents a Domino's Pepperoni Passion.
 */
class PepperoniPassion extends DominosPizza 
{
    /**
     * @summary Get the pizza's name.
     * @returns {string} The name of the pizza
     */
    public getName(): string
    {
        return "PepperoniPassion";
    }
};

/**
 * @summary This class represents a Papa John's Double Pepperoni.
 */
class DoublePepperoni extends PapaJohnsPizza 
{
    /**
     * @summary Get the pizza's name.
     * @returns {string} The name of the pizza
     */
    public getName(): string
    {
        return "DoublePepperoni";
    }
};

/**
 * @summary This class represents a Domino's Meateor.
 */
class Meateor extends DominosPizza 
{
    /**
     * @summary Get the pizza's name.
     * @returns {string} The name of the pizza
     */
    public getName(): string
    {
        return "Meateor";
    }
};

/**
 * @summary This class represents a Papa John's All The Meats.
 */
class AllTheMeats extends PapaJohnsPizza 
{
    /**
     * @summary Get the pizza's name.
     * @returns {string} The name of the pizza
     */
    public getName(): string
    {
        return "AllTheMeats";
    }
};

/**
 * @summary This class represents a pizza factory.
 */
abstract class PizzaFactory
{
    /**
     * @summary Creates a pepperoni pizza.
     */
    abstract createPepperoniPizza(): Pizza;

    /**
     * @summary Creates a meat pizza.
     */
    abstract createMeatPizza(): Pizza;
}

/**
 * @summary This class represents a Domino's pizza factory.
 */
class DominosPizzaFactory extends PizzaFactory
{
    /**
     * @summary Creates a pepperoni pizza.
     * @returns {Pizza} Returns a new 'Pepperoni Passion' pizza
     */
    public createPepperoniPizza(): Pizza
    {
        return new PepperoniPassion();
    }

    /**
     * @summary Creates a meat pizza.
     * @returns {Pizza} Returns a new 'Meateor' pizza
     */
    public createMeatPizza(): Pizza
    {
        return new Meateor();
    }
}

/**
 * @summary This class represents a Papa John's pizza factory.
 */
class PapaJohnsPizzaFactory extends PizzaFactory
{
    /**
     * @summary Create a pepperoni pizza.
     * @returns {Pizza} Returns a new 'Double Pepperoni' pizza
     */
    createPepperoniPizza(): Pizza 
    {
        return new DoublePepperoni();
    }

    /**
     * @summary Create a new meat pizza.
     * @returns {Pizza} Returns a new 'All The Meats' pizza
     */
    public createMeatPizza(): Pizza 
    {
        return new AllTheMeats();
    }

}

/**
 * @summary This class represents a customer.
 */
class Customer
{
    private _pizza: Pizza;

    /**
     * @summary Get the customer's pizza.
     */
    public get pizza(): Pizza
    {
        return this._pizza;
    }

    /**
     * @summary Construct a new customer.
     * @param {PizzaFactory} pizzaFactory - The pizza factory to use 
     */
    constructor(pizzaFactory: PizzaFactory)
    {
        this._pizza = pizzaFactory.createPepperoniPizza();
    }
}

const hungryPapaJohnsCustomer = new Customer(new PapaJohnsPizzaFactory());
const hungryDominosCustomer = new Customer(new DominosPizzaFactory());

console.log(hungryPapaJohnsCustomer.pizza.getName());
console.log(hungryDominosCustomer.pizza.getName());