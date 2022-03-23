const addToDb = (id) => {
    const quantity = localStorage.getItem(id);
    if(quantity){
        // console.log('already exist');
        const newQuantity = parseInt(quantity)+1;  //local storage e item quantity barano
        localStorage.setItem(id, newQuantity); //barano quantity localstorage e set kora
    }
    else{
        // console.log('new item');
        localStorage.setItem(id, 1); //old data exist na korle new item set korbe
    }
}

export {addToDb}