// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, Fragment } from 'react'
import './App.css'
import { data } from './data'; 



function App() {
  const [products, setProducts] = useState(data);
  const [showDetail, setShowDetail] = useState(null);

  const getOne = products.find(item => item.id === showDetail);

  const detail = showDetail ? (<Fragment key={getOne.id}>
    <div className="card mb-3">
      <img src={getOne.imageUrl} className="card-img-top primary-image" alt="主圖"/>
      <div className="card-body">
        <h5 className="card-title">{getOne.title}</h5>
        <span className="badge bg-primary ms-2">{getOne.category}</span>
        <p className="card-text">商品描述：{getOne.description}</p>
        <p className="card-text">商品內容：{getOne.content}</p>
        <div className="d-flex">
          <p className="card-text text-secondary">
            <del>{getOne.origin_price}</del>
          </p>
          元 / {getOne.price} 元
        </div>
        <h5 className="mt-3">更多圖片：</h5>
        <div className="d-flex flex-wrap">
          {getOne.imagesUrl.map((img, idx) => (<Fragment key={idx}>
            <img src={img} className="secondary-image" alt={idx} />
          </Fragment>))}
        </div>
      </div>
    </div>
  </Fragment>) : (<p className="text-secondary">請選擇一個商品查看</p>);
  
  const dataList = products.map((item) => {
    return (<Fragment key={item.id}>
      <tr>
        <td>{item.category}</td>
        <td>{item.origin_price}</td>
        <td>{item.price}</td>
        <td>{item.is_enabled}</td>
        <td>
          <button type="button" className="btn btn-primary" onClick={() => {setShowDetail(item.id)}}>查看細節</button>
        </td>
      </tr>
    </Fragment>)
  });

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>產品列表</h2>
          <table className="table"> 
            <thead>
              <tr>
                <th scope="col">產品名稱</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">是否啟用</th>
                <th scope="col">查看細節</th>
              </tr>
            </thead>
            <tbody>
              {dataList}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h2>單一產品細節</h2>
          {detail}
        </div>
      </div>
    </div>
  )
};

export default App


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
