const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const Height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const message = document.querySelector('#message')
    
    if(Height === '' || Height < 0 || isNaN(Height)){
        message.innerHTML = `Please Enter a Number in Height ${Height}`.fontcolor('red').fontsize(3);
    }
     else if (Weight)if(Weight === '' || Weight < 0 || isNaN(Weight)){
        message.innerHTML = `Please Enter a Number in Weight ${Weight}`.fontcolor('red').fontsize(3);
    }
    else{
       const bmi =  (Weight/ ((Height*Height)/10000)).toFixed(2)
       message.innerHTML = `<span>${bmi}<span>`.fontcolor('green').fontsize(4);
    }
})