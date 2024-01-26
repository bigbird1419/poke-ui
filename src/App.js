import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import { publicRoutes } from './routes'
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import Home from './pages/Home';
import Product from './pages/Products';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let title = ''
            if (Page === Home) {
              title = 'Chọn nhanh sản phẩm'
            } else if (Page === Product) {
              title = 'Tất cả sản phẩm'
            }
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout heading={title}>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
