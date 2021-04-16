import React from 'react'
import mobileData from "../../data/mobileData";
import {getAllTitles} from "../../utilityFunctions/utils";

export const mobileComparisonContext = React.createContext();

export default function MobileComparisonProvider({children}) {
    const [comparisonProducts, setComparisonProducts] = React.useState(mobileData);
    const [productTitles, setProductTitles] = React.useState(getAllTitles(comparisonProducts));
    const [product1ToCompare, setProduct1] = React.useState();
    const [product2ToCompare, setProduct2] = React.useState();
    
    const handleSelection = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if(name === "cp1"){
            const p1 = [...comparisonProducts].filter(product1 => {
                return product1.model === value;
            })
            setProduct1(p1[0]);
        }
        else if(name === "cp2"){
            const p2 = [...comparisonProducts].filter(product2 => {
                return product2.model === value;
            })
            setProduct2(p2[0]);
        }
        return;
    }
    return (
        <mobileComparisonContext.Provider value={{comparisonProducts, productTitles, handleSelection, product1ToCompare, product2ToCompare}}>
            {children}
        </mobileComparisonContext.Provider>
    )
}