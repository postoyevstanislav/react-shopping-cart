//feature 1
import React, {Component} from 'react';
import Products from './components/Products';
import data from './data.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    }
  }
  render () {
    const {products, size, sort} = this.state
    return (
    <div className='grid-container'>
      <header>
        <a href='/'>React Shopping Cart</a>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
            <Products products={products}/>
          </div>
          <div className='sidebar'>
            Cart Items
          </div>
        </div>
      </main>
      <footer>
        Footer
      </footer>
    </div>)
  }
}

export default App;
