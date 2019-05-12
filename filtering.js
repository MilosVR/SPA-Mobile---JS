const filterForm = document.querySelector('.search_form');
const searchInput = document.querySelector('.search_input');
const product = document.querySelector('.product_circle')


searchInput.addEventListener('input', e => {

    let products = document.querySelector('.product');
    products = Array.from(products.children);

    products.map((item)=>{
        if (e.target.value.length === 0) {
            item.style.display = 'block';
        }
    })

    let autocompleteProducts = document.querySelector('.autocomplete_products ul');
    const productsArr = products.map(item => item.children[1].children[0].textContent)
    
    // const regex = new RegExp(`${searchInput.value}`, 'gi');
    let matches =  productsArr.filter(item => {
        // return item.match(regex)
        return item.toLowerCase().indexOf(searchInput.value.toLowerCase())>-1
    })
    if (e.target.value.length === 0) {
        autocompleteProducts.innerHTML = [];
        matches = []
    }
    if (matches.length > 0) {
        const html = matches.map( match => 
        `<div class="autocomplete_product">${match}</div>`
          ).join('');
          autocompleteProducts.innerHTML = html;
        }
})

filterForm.addEventListener('submit', e => {
    let products = document.querySelector('.product');
    products = Array.from(products.children);
    e.preventDefault();
    
    products.map((item)=>{
        if (item.children[1].children[0].textContent.toLowerCase().indexOf(searchInput.value.toLowerCase())>-1 ) {
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
    })
})
const selectModel = document.querySelector('.select_wraper select');

let products = document.querySelector('.product');
    products = Array.from(products.children);

selectModel.addEventListener('change', e => {
    products.map((item)=>{
       
        if (item.children[1].children[0].textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            item.style.display = 'block'
        }else if(e.target.value === 'All'){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
     })  
})

const results = document.querySelector('.results')
const sliderRange = document.querySelector('.slider_range')
let price = document.querySelectorAll('.price')

results.textContent = '0$'
sliderRange.addEventListener('input', e => {
    results.textContent = `${e.target.value}$`
    if (e.target.value !== 0) {     
        results.style.color = 'dodgerBlue'
        results.style.background = 'white'
    }
    const prices = Array.from(price).map(item => item.innerHTML);
    const maxPrice = Math.max(parseInt(prices))    
    e.target.max = maxPrice

    products.map((item)=>{
        const productPrice = item.children[1].children[1].children[1].children[0].textContent;
        
        if (parseInt(productPrice) >= parseInt(e.target.value)) {
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
})

const min_maxForm = document.querySelector('.form_min_max')        

min_maxForm.addEventListener('submit', e => {
e.preventDefault()
products.map((item)=>{
const minInput = document.querySelector('.min_input').value;
const maxInput = document.querySelector('.max_input').value;
const productPrice = item.children[1].children[1].children[1].children[0].textContent;
        
if (parseInt(minInput) <= parseInt(productPrice) && parseInt(productPrice) <= parseInt(maxInput)) {
    item.style.display = 'block'
}else{
    item.style.display = 'none'
}
})

})









