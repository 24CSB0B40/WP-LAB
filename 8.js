function createProduct(id, name, price, image)
  {
    return { id, name, price, image };
  }
  
  const cart =
   {
    items: [],
    
    addItem(product)
    {
      this.items.push(product);
    },
    
    getTotal()
    {
      return this.items.reduce((total, product) => total + product.price, 0).toFixed(2);
    },
    
    getItems() 
    {
      return this.items;
    }
  };
  
  const products = [
    createProduct(1, 'GARELU', 25.00, 'https://media.istockphoto.com/id/1169097707/photo/spicy-and-hot-parippu-vada-and-indian-tea.jpg?s=612x612&w=0&k=20&c=T8C5IGcGhG_VvONLfDmOzponQz5k5i3PWdajR-xK-U0='),
    createProduct(2, 'SWEETS', 30.00, 'https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.jpg?s=612x612&w=0&k=20&c=hYWCXLaldKvhxdBa83M0RnUij7BCmhf-ywWdvyIXR40='),
    createProduct(3, 'CHICKEN LOLLIPOP', 40.00, 'https://media.istockphoto.com/id/1297553194/photo/chicken-lollipop-spicy-mala-sichuan-pepper-flavor-suace-chinese-style.jpg?s=612x612&w=0&k=20&c=g_e0eUC5tlkyD54VkZFuG47IM1mJQL1NQkMEmFgwldk='),
    createProduct(4, 'PAV BHAJI', 50.00, 'https://media.istockphoto.com/id/1413557145/photo/indian-mumbai-street-style-pav-bhaji-garnished-with-peas-raw-onions-coriander-and-butter.jpg?s=612x612&w=0&k=20&c=d4ArMMfeJg0knNGYxmyieBo8n4e4J77X76TR3keaMXM='),
    createProduct(5, 'CHIPS', 15.00, 'https://c7.alamy.com/comp/2J5PJ87/realistic-potato-chips-poster-3d-snacks-advertising-banner-flying-baked-food-elements-designer-packaging-tomato-taste-fast-food-unhealthy-2J5PJ87.jpg'),
    createProduct(6, 'PIZZA', 70.00, 'https://img.pikbest.com/origin/10/14/03/204pIkbEsT3Yj.jpg!w700wp')
  ];
  
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => 
    {
      const productId = event.target.getAttribute('data-id');
      const product = products.find(p => p.id == productId);
      
      if (product) 
     {
        cart.addItem(product);
        updateCart();
      }
    });
  });
  
  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartItemsContainer.innerHTML = '';

    cart.getItems().forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="50">
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  
    totalPrice.textContent = `Total: $${cart.getTotal()}`;
  }
  