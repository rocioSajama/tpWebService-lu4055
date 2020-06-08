export class Categoria {
    strDrink:string;
    strDrinkThumb:string;
    idDrink:string;
    strIngredient1:string;
    strIngredient2:string;
    strIngredient3:string;

    Categoria(strDrink?:string , strDrinkThumb?:string , idDrink?:string , strIngredient1?:string, strIngredient2?:string, strIngredient3?:string,){
        this.strDrink = strDrink;
        this.strDrinkThumb = strDrinkThumb;
        this.idDrink = idDrink;
        this.strIngredient1 = strIngredient1;
        this.strIngredient2 = strIngredient1;
        this.strIngredient3 = strIngredient1;
    }
}
