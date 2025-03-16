import "./Product.css"
import Price from "./Price";
function Product({title,idx})
{
    let oldPrices=["12,495","11,900", "1,599","599"];
    let newPrices=["8,990","91,99","899"," 278"];
    let description=[
        ["8,000 DPI","Programmable buttons"],
        ["intuitive surface","designed for patterns"],
        ["designed for i pad pro","intutive sufrace"],
        ["wireless","optical orientation"],
    ];
return (

<div className="Product">
    <h>{title}</h>
    
    <p>
       {description[idx][0]} 
    </p>
    <p>
       {description[idx][1]} 
    </p>
    <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
</div>


);
}
export default Product;