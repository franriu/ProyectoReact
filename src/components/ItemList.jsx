import { Item } from "./item";


export const ItemList = ({items}) =>   
    items.map((item)=> <Item item={item}/>);