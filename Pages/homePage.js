export class homePage{

weblocators = {
    'search_box':"[name='search']",
    'click_search':".input-group-btn > [type='button']",
    'product':"[alt='MacBook Air']",
    'add_to_cart':"#content > div:nth-child(8) > div:nth-child(2) > div > div:nth-child(2) > div.button-group > button:nth-child(1)",
    'success_message':".alert-success"


}

search_a_product(product_name) {
    cy.get(this.weblocators.search_box).type(product_name)
    cy.get(this.weblocators.click_search).click()
}

add_product_to_cart() {
    cy.get(this.weblocators.add_to_cart).click()
}

verify_success_message(){
    return cy.get(this.weblocators.success_message)
}
}