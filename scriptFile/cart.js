const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const qtyCart =  document.getElementById('qtyCart')
const nameOfProduct = document.getElementById('nameOfProduct')



  function getQtyValueHtml(tagName) {

      const geTagToTag = document.getElementById(tagName);
      const getInner =  geTagToTag.innerText;
      const makeNum = parseInt(getInner)
      // console.log( typeof makeNum, makeNum  )
      return makeNum;

  }
// +++++++++++++++++++++++++++++++++++++++ 


  function increaseValue() {
    const qtyValue = getQtyValueHtml('qtyCart');
    const increasedValue = qtyValue + 1;
    const qtyTag = document.getElementById('qtyCart');
    qtyTag.innerText = increasedValue;
    console.log('Increased Value:', increasedValue);
    setInLocalStorge(increasedValue)

  } increaseBtn.addEventListener('click', increaseValue); //Button ++
  


  function decreaseValue() {
    const qtyValue = getQtyValueHtml('qtyCart');
    const decreasedValue = qtyValue - 1;
    const qtyTag = document.getElementById('qtyCart');
    qtyTag.innerText = decreasedValue;
    console.log('Decreased Value:', decreasedValue);
    setInLocalStorge(decreasedValue )
    

  } decreaseBtn.addEventListener('click', decreaseValue); //Button --
  
  

  const GetDataInLocalStorage = () => { 
    let getToLocalStorage = localStorage.getItem('Cart')
    let Empty = {};
      if (getToLocalStorage) {
        Empty = JSON.parse(getToLocalStorage);
      } 
    return Empty;
  } 


  const setInLocalStorge = (inLS_Value) => {
    const existingData = GetDataInLocalStorage();
    existingData.Cart_Value = inLS_Value;
    const stringifyData = JSON.stringify(existingData);
    console.log(typeof stringifyData)
    localStorage.setItem('Cart', stringifyData)
  }

  const makeParse = () => {
    const getDataForParse = localStorage.getItem('Cart');
    const makeObj = JSON.parse(getDataForParse);
    const values = [];

    for (const key in makeObj) {
        const value = makeObj[key];
        values.push(value);
    }
    return values;
};

const setDisplayData = () => {
    const getQtyId = document.getElementById('qtyCart');
    const values = makeParse();
     getQtyId.innerText = values.join(', ');
};
setDisplayData();
