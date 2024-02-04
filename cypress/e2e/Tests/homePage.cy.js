import { homePage } from "../../../Pages/homePage";
const homepage_obj = new homePage()
import homeData from "../../fixtures/homeData.json";

describe("login",()=>{
    before(()=>
    {
        cy.login(homeData.email,homeData.password)
        
    })

    it('Add Product to cart',()=>
    {
        homepage_obj.search_a_product(homeData.product_name)
        homepage_obj.add_product_to_cart()
        homepage_obj.verify_success_message().should('contain',homeData.success_message)
        //test ends
    })
})

