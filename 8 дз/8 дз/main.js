fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{
    data.forEach(item =>{
        document.getElementById('wrapper').innerHTML += `<br><h1>NAME: ${item.name}<br></h1> <h8>USERNAME:${item.username}</h8><br><h8>EMAIL:${item.email}</h8><br><h8>ID:${item.id}</h8><hr>`
    })
})


function col(){
    for (let i = 1; i<=7; i++){
        let r = rand(256)
        let g = rand(256)
        let b = rand(256)
        let id = 'l'+i;
    
        document.getElementById(id).style.textShadow=
        `1px 1px 10px rgb(${r}, ${g} ${b})?"{}`
        `1px 1px 20px rgb(${r}, ${g} ${b})?"{}`
        `1px 1px 30px rgb(${r}, ${g} ${b})?"{}`
        `1px 1px 40px rgb(${r}, ${g} ${b})?"{}`
        `1px 1px 60px rgb(${r}, ${g} ${b})?"{}`
    
    
    
    }
        }
    
        setInterval(col, 5000);
        function rand(x){
            let z = Math.floor(Math.random() * x);
            return z; 
        }