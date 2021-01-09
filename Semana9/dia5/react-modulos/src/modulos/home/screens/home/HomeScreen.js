import React from 'react'

const HomeScreen = (props) => {
  console.log(props);
  const goLogin = () => {
    //codigo para redireccionar a otra ruta programáticamente
    props.history.push("/auth/login");
  }
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3">Fluid jumbo heading</h1>
              <p className="lead">Jumbo helper text</p>
              <hr className="my-2" />
              <p>More info</p>
              <p className="lead">
                <button className="btn btn-primary btn-lg mr-2" onClick={() => {
                  goLogin();
                }}>Login</button>
                <button className="btn btn-primary btn-lg mr-2">Catálogo</button>
                <button className="btn btn-primary btn-lg mr-2">Admin</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeScreen
