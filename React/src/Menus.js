import React, { useState, useEffect } from 'react';
function Menu() {
  const [activeTab, setActiveTab] = useState('appetizers');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    document.title = 'Menu - El Golea Restaurant';
  }, []);

  return (
    <main>
      <section className="menu-hero">
        <div className="container">
          <h1><b>Menu</b></h1>
          <p>Explore our delicious menu options</p>
        </div>
      </section>
      <section className="menu-categories">
        <div className="container">
          <h2><b>Categories</b></h2>
          <ul className="nav nav-tabs">
          <li className="nav-item">
  <a
    className={`nav-link ${activeTab === 'appetizers' ? 'active' : ''}`}
    onClick={() => handleTabChange('appetizers')}
  >
    Appetizers
  </a>
</li>
<li className="nav-item">
  <a
    className={`nav-link ${activeTab === 'entrees' ? 'active' : ''}`}
    onClick={() => handleTabChange('entrees')}
  >
    Entrees
  </a>
</li>
<li className="nav-item">
  <a
    className={`nav-link ${activeTab === 'desserts' ? 'active' : ''}`}
    onClick={() => handleTabChange('desserts')}
  >
    Desserts
  </a>
</li>
          </ul>
          <div className="tab-content">
            {activeTab === 'appetizers' && (
              <div className={`tab-pane fade ${activeTab === 'appetizers' ? 'show active' : ''}`} id="appetizers">
                <ul className="menu-items">
                  <li>
                    <h3>Bruschetta</h3>
                    <p>Grilled bread topped with diced tomatoes, garlic, basil, and olive oil</p>
                    <span>$7.99</span>
                  </li>
                  <li>
                    <h3>Calamari</h3>
                    <p>Deep-fried calamari served with marinara sauce</p>
                    <span>$9.99</span>
                  </li>
                  <li>
                    <h3>Stuffed Mushrooms</h3>
                    <p>Mushrooms stuffed with breadcrumbs, garlic, and parmesan cheese</p>
                    <span>$8.99</span>
                  </li>
                </ul>
              </div>
            )}
            {activeTab === 'entrees' && (
              <div className={`tab-pane fade ${activeTab === 'entrees' ? 'show active' : ''}`} id="entrees">
                <ul className="menu-items">
                  <li>
                    <h3>Chicken Parmesan</h3>
                    <p>Breaded chicken breast topped with marinara sauce and mozzarella cheese</p>
                    <span>$15.99</span>
                  </li>
                  <li>
                    <h3>Spaghetti Bolognese</h3>
                    <p>Spaghetti with a rich meat sauce made from ground beef, pork, and tomatoes</p>
                    <span>$13.99</span>
                  </li>
                  <li>
                    <h3>Grilled Salmon</h3>
                    <p>Grilled salmon fillet served with a lemon butter sauce</p>
                    <span>$21.99</span>
                  </li>
                </ul>
              </div>
            )}
            {activeTab === 'desserts' && (
              <div className={`tab-pane fade ${activeTab === 'desserts' ? 'show active' : ''}`} id="desserts">
                <ul className="menu-items">
                  <li>
                    <h3>Tiramisu</h3>
                    <p>Layers of coffee-soaked ladyfingers and mascarpone cheese</p>
                    <span>$6.99</span>
                  </li>
                  <li>
                    <h3>Cheesecake</h3>
                    <p>Creamy cheesecake served with your choice of fruit topping</p>
                    <span>$7.99</span>
                  </li>
                  <li>
                    <h3>Gelato</h3>
                    <p>Italian-style ice cream served in a variety of flavors</p>
                    <span>$5.99</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu;