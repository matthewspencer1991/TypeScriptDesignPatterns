/**
 * @summary Adapter provides a different interface to its subject.
 */
module AdapterModule 
{
    /**
     * @summary Our legacy player that will be our adaptee.
     */
    class LegacyPlayer 
    {
        public draw(x: number, y: number): void 
        {
            // Draw logic.
        }
    }

    /**
     * Interface that represents a 2-dimensional vector.
     */
    interface IVector2 
    {
        x: number;
        y: number;
    }

    /**
     * @summary Our new interface.
     */
    interface ISprite 
    {
        draw(position: IVector2);
    }

    /**
     * @summary Adapter class which implements the new sprite interface.
     */
    class Player implements ISprite
    {
        /**
         * @summary The adaptee, our old legacy class that we want to wrap up.
         */
        private _adaptee: LegacyPlayer = new LegacyPlayer();

        /**
         * @summary Our new interface method that calls our legacy method.
         * @param position - The position to draw the sprite at
         */
        draw(position: IVector2) 
        {
            this._adaptee.draw(position.x, position.y);
        }
    }
}