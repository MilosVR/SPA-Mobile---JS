const filterForm = document.querySelector('.filter_section form');
const searchInput = document.querySelector('.search_input');
const product = document.querySelector('.product_circle')


searchInput.addEventListener('keyup', e => {

    let products = document.querySelector('.product');
    products = Array.from(products.children);

    products.map((item)=>{
        let autocompleteProducts = document.querySelector('.autocomplete_products ul');
        if (e.target.value.length === 0) {
            item.style.display = 'block';
            autocompleteProducts.innerHTML = ''
        }

        // const newItem = document.createElement('li');
        
        // newItem.classList = 'autocomplete_product';
        
        // if (item.children[1].children[0].textContent.toLowerCase().indexOf(searchInput.value.toLowerCase())>-1 ) {
        //     newItem.style.display = 'flex';
        //     newItem.textContent = item.children[1].children[0].textContent;  
            
        //     autocompleteProducts.appendChild(newItem);
            
        //     if (e.target.value.length === 0) {
        //         autocompleteProducts.removeChild(newItem);
        //     }
        // }else{ 
        //     newItem.style.display = 'none'
        //     newItem.textContent = '';
        // }
    })
})

filterForm.addEventListener('submit', e => {
    e.preventDefault();
    let products = document.querySelector('.product');
    products = Array.from(products.children);
    
    products.map((item)=>{
        if (item.children[1].children[0].textContent.toLowerCase().indexOf(searchInput.value.toLowerCase())>-1 ) {
            item.style.display = 'block'
        }else{
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