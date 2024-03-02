console.log("practise")


    function getValueFromId(InputId) {

        const inputIdName = document.getElementById(InputId);
        const inputIdValue =  inputIdName.value;
              inputIdValue.value = '';
        return inputIdValue ;
    } 

    const buttonStoreDataInLS = document.getElementById('buttonStore');
          buttonStoreDataInLS.addEventListener('click', function() {
            const productNameOfValue = getValueFromId('product')
            const qtyProductOfValue = getValueFromId("qtyProduct")
            console.log(productNameOfValue, qtyProductOfValue)
            displayProduct(productNameOfValue, qtyProductOfValue)
            saveDataInLocalStorge(productNameOfValue,qtyProductOfValue)

          })


      const getDataFromLocalStorge = () => {
            let dataLS =  localStorage.getItem("User Data"); 
            let data = {}; 
                if (dataLS) {
                    data = JSON.parse(dataLS);
                }
            return data;
      }

      const saveDataInLocalStorge = (product, qty) => {
            const dataInLocalStorge = getDataFromLocalStorge();
            console.log(dataInLocalStorge)
            dataInLocalStorge[product] = qty;
            const dataStingify = JSON.stringify(dataInLocalStorge);
            localStorage.setItem("User Data", dataStingify)
      }




const displayProduct = (product, qty) => {
    const displayProduct = document.getElementById('displayProduct');
    const liForProduct = document.createElement('li');
          liForProduct.innerHTML = ` <li> ◽ ${product} : ${qty}</li>`;
    displayProduct.appendChild(liForProduct)
    
}
    
const diplayStoreInProduct = () => {
    const dataForLsIn = getDataFromLocalStorge();
        for( const itemName in dataForLsIn) {
            const qty =  dataForLsIn[itemName]
            console.log(itemName, qty)
            displayProduct(itemName, qty)
        }
}

diplayStoreInProduct()