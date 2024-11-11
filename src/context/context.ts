import { createContext } from "react";
import {Product} from '../components/ProductCard';

type ContextData = {
    basket: Product[];
    addItemToBasket: ( product:Product) => void;
}

const Context = createContext<ContextData>((
    basket:[],
    addItemToBasket: () => {},
));

export default Context;