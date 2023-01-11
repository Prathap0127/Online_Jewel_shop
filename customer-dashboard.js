let url = "https://6350def9dfe45bbd55b0529b.mockapi.io/"

let dashboardItem = document.getElementById("dashboardCard")

let dashBoard = async () => {
  try {
    let res = await fetch(url + "users")
    let data = await res.json()
    
    let resOrder = await fetch(url + "cart")
    let orderData = await resOrder.json()
    console.log(data)
    let dashboardCard = document.createElement('div')
    dashboardCard.classList.add("row", "justify-content-sm-start")
    dashboardCard.innerHTML = `
       
     
    <div class="col-sm-4">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Orders</h5>
        <h3 class="card-text">${orderData.length}</h3>
        <a href="c-dashboard-cart.html" class="btn btn-primary">View</a>
      </div>
    </div>
    </div>
        `

    dashboardItem.append(dashboardCard)



  }
  catch (err) {
    console.log(err)
  }

}

dashBoard()